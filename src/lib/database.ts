import { Pool } from 'pg';

let pool: Pool | null = null;

const getPool = (): Pool => {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL || "postgresql://postgres.noujpiqvmjrxoilctvvc:Y1ZCzZReNKPgjgyL@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres",
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
  return pool;
};

export const query = async (text: string, params?: any[]) => {
  const pool = getPool();
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};

export const getMessages = async (sessionId?: string) => {
  let sql = `
    SELECT id, name, company, content as message, created_at, is_read, session_id
    FROM portfolio.messages 
  `;
  let params: any[] = [];
  
  if (sessionId) {
    sql += ` WHERE session_id = $1`;
    params = [sessionId];
  }
  
  sql += ` ORDER BY created_at DESC`;
  
  const result = await query(sql, params);
  return result.rows;
};

export const insertMessage = async (name: string, company: string | null, message: string, sessionId?: string) => {
  const result = await query(`
    INSERT INTO portfolio.messages (name, company, content, is_read, session_id, created_at) 
    VALUES ($1, $2, $3, false, $4, NOW()) 
    RETURNING id, name, company, content as message, created_at, is_read, session_id
  `, [name, company, message, sessionId || null]);
  
  const messageId = result.rows[0].id;
  
  // Create notification for email
  await query(`
    INSERT INTO portfolio.simple_notifications (message_id, email_sent, scheduled_at, created_at)
    VALUES ($1, false, NOW() + INTERVAL '1 minute', NOW())
  `, [messageId]);
  
  return result.rows[0];
};

export const markMessageAsRead = async (messageId: string) => {
  const result = await query(`
    UPDATE portfolio.messages 
    SET is_read = true 
    WHERE id = $1 
    RETURNING id
  `, [messageId]);
  return result.rows[0];
};