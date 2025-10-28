/**
 * Error logging utility with deduplication and throttling
 * Prevents console spam by logging each unique error only once per hour
 */

interface ErrorLog {
  message: string;
  lastLogged: number;
  count: number;
}

class ErrorLogger {
  private errors: Map<string, ErrorLog> = new Map();
  private readonly THROTTLE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

  /**
   * Creates a hash from error message for deduplication
   */
  private hashError(message: string): string {
    return message.toLowerCase().replace(/\s+/g, '_').substring(0, 100);
  }

  /**
   * Logs error with throttling - only logs once per hour for each unique error
   * 
   * @param context - Context/source of the error (e.g., 'WakaTime API', 'GitHub API')
   * @param error - The error object or message
   * @param force - Force logging even if throttled (default: false)
   */
  logError(context: string, error: unknown, force: boolean = false): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const fullMessage = `[${context}] ${errorMessage}`;
    const hash = this.hashError(fullMessage);
    
    const now = Date.now();
    const existing = this.errors.get(hash);

    if (existing) {
      existing.count++;
      
      // Check if throttle period has expired
      const shouldLog = now - existing.lastLogged > this.THROTTLE_DURATION;
      
      if (shouldLog || force) {
        console.error(fullMessage);
        if (existing.count > 1) {
          console.error(`  └─ Suppressed ${existing.count - 1} similar errors in the last hour`);
        }
        existing.lastLogged = now;
        existing.count = 1;
      }
    } else {
      // First occurrence - always log
      console.error(fullMessage);
      this.errors.set(hash, {
        message: fullMessage,
        lastLogged: now,
        count: 1
      });
    }
  }

  /**
   * Logs error only once, then silences all future occurrences
   * Useful for errors that should never repeat
   */
  logOnce(context: string, error: unknown): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const fullMessage = `[${context}] ${errorMessage}`;
    const hash = this.hashError(fullMessage);
    
    if (!this.errors.has(hash)) {
      console.error(fullMessage);
      this.errors.set(hash, {
        message: fullMessage,
        lastLogged: Date.now(),
        count: 1
      });
    } else {
      const existing = this.errors.get(hash)!;
      existing.count++;
    }
  }

  /**
   * Clears error tracking for a specific context
   * Call this when an error is resolved
   */
  clearContext(context: string): void {
    const keysToDelete: string[] = [];
    
    this.errors.forEach((log, hash) => {
      if (log.message.startsWith(`[${context}]`)) {
        keysToDelete.push(hash);
      }
    });
    
    keysToDelete.forEach(key => this.errors.delete(key));
  }

  /**
   * Gets error statistics
   */
  getStats(): { totalErrors: number; uniqueErrors: number; suppressedCount: number } {
    let suppressedCount = 0;
    
    this.errors.forEach(log => {
      if (log.count > 1) {
        suppressedCount += log.count - 1;
      }
    });
    
    return {
      totalErrors: Array.from(this.errors.values()).reduce((sum, log) => sum + log.count, 0),
      uniqueErrors: this.errors.size,
      suppressedCount
    };
  }

  /**
   * Clears all error tracking
   */
  reset(): void {
    this.errors.clear();
  }
}

// Export singleton instance
export const errorLogger = new ErrorLogger();
