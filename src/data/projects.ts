import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "kda-ordering-system",
    title: "KDA Ordering System",
    description:
      "A comprehensive full-stack restaurant ordering system with customer-facing menus, kiosk mode, real-time order tracking, and admin dashboard. Features three interfaces: customer menu, kiosk ordering, and admin portal for managing products, orders, and revenue analytics with receipt printing capabilities.",
    image: "/images/projects/kda-ordering-system.png",
    video: {
      src: "/videos/kda-ordering-system.mp4",
      poster: "/images/projects/kda-ordering-system.png",
    },
    liveUrl: "",
    githubUrl: "",
    techStack: [
      { name: "Next.js App Router", icon: "nextjs", color: "#E5E7EB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Recharts", icon: "recharts", color: "#8884D8" },
      { name: "Lucide Icons", icon: "lucide", color: "#94A3B8" },
      { name: "React Hot Toast", icon: "toast", color: "#FF6B35" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
      { name: "pnpm", icon: "pnpm", color: "#F69220" },
    ],
    features: [
      "Customer ordering interface with cart management",
      "Kiosk mode with auto-redirect and large UI elements",
      "Real-time order status updates via Supabase Realtime",
      "Admin dashboard for product and order management",
      "Revenue analytics with interactive charts",
      "Receipt printing for 80mm thermal printers",
      "CLI menu synchronization script",
      "Category, product, and option management",
      "Order queue with status tracking (Pending → Ready → Completed)",
      "Decline orders with custom reasons",
      "Local storage cart persistence",
      "Dark/light theme support",
    ],
    category: "Full Stack",
    status: "Completed",
    completedAt: "2025-01",
    featured: true,
    featuredRank: 5,
  },
  {
    id: "minrights-chatbot",
    title: "MinRights Chatbot",
    description:
      "A sophisticated Python package providing AI-powered conversational interfaces for oil & gas data analysis. Built for the MinRights platform, it implements a two-tier bot architecture (Basic and Premium) with comprehensive database integration, web search capabilities, and advanced analytics features.",
    image: "/images/projects/minrights-chatbot.png",
    video: {
      src: "/videos/minrights-chatbot.mp4",
      poster: "/images/projects/minrights-chatbot.png",
    },
    liveUrl: "https://www.mineralrights.ai/",
    githubUrl: "",
    techStack: [
      // Programming Languages & Core Runtime
      { name: "Python >=3.8", icon: "python", color: "#3776AB" },
      { name: "SQL PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "JavaScript/Node.js", icon: "nodejs", color: "#339933" },
      { name: "Markdown", icon: "markdown", color: "#000000" },

      // AI & Machine Learning Stack
      { name: "OpenAI SDK >=1.0.0", icon: "openai", color: "#412991" },
      { name: "OpenAI Agents SDK >=0.0.16", icon: "openai", color: "#412991" },
      { name: "Function Tools", icon: "ai", color: "#FF6B6B" },
      { name: "Query Classification", icon: "ai", color: "#FF6B6B" },

      // Database & Data Processing
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "asyncpg >=0.28.0", icon: "postgresql", color: "#336791" },
      { name: "Connection Pooling", icon: "database", color: "#00BFFF" },
      { name: "Pandas >=2.0.0", icon: "pandas", color: "#150458" },
      { name: "AWS RDS", icon: "aws", color: "#FF9900" },

      // Data Visualization & Analytics
      { name: "Matplotlib >=3.5.0", icon: "matplotlib", color: "#11557c" },
      { name: "Chart Generator", icon: "chartjs", color: "#FF6384" },
      { name: "Table Formatter", icon: "datatable", color: "#339AF0" },

      // Web Integration & External Services
      { name: "aiohttp >=3.8.0", icon: "aiohttp", color: "#2C5BB4" },
      { name: "ScrapingBee >=1.0.0", icon: "spider", color: "#FF7043" },
      { name: "BeautifulSoup4 >=4.12.0", icon: "beautifulsoup", color: "#4CAF50" },
      { name: "MCP Servers", icon: "api", color: "#FF4154" },

      // Document Processing
      { name: "pdfplumber >=0.10.0", icon: "pdf", color: "#E53E3E" },
      { name: "pytesseract >=0.3.10", icon: "ocr", color: "#9C27B0" },
      { name: "Pillow >=10.0.0", icon: "image", color: "#FF9800" },

      // Development & Build Tools
      { name: "setuptools", icon: "python", color: "#3776AB" },
      { name: "pyproject.toml", icon: "config", color: "#4B32C3" },
      { name: "python-dotenv >=1.0.0", icon: "dotenv", color: "#ECD53F" },
      { name: "Poetry >=2.1.3", icon: "poetry", color: "#60A5FA" },

      // Security & Configuration
      { name: "SSL/TLS", icon: "security", color: "#4CAF50" },
      { name: "Environment Variables", icon: "env", color: "#FFC107" },
      { name: "Dataclass Config", icon: "config", color: "#2196F3" },

      // Testing & Quality Assurance
      { name: "Interactive Tests", icon: "test", color: "#9C27B0" },
      { name: "pytest", icon: "pytest", color: "#0A9EDC" },
      { name: "mypy", icon: "mypy", color: "#2E8B57" },
      { name: "flake8", icon: "flake8", color: "#3F51B5" },
      { name: "black", icon: "black", color: "#000000" },

      // Infrastructure & Deployment
      { name: "AWS RDS PostgreSQL", icon: "aws", color: "#FF9900" },
      { name: "MCP Server Configuration", icon: "server", color: "#607D8B" },
    ],
    features: [
      "Two-tier bot architecture (Basic and Premium)",
      "AI-powered conversational interfaces for oil & gas data analysis",
      "Comprehensive database integration with PostgreSQL",
      "Web search capabilities with ScrapingBee integration",
      "Advanced analytics and data visualization",
      "PDF document processing with OCR capabilities",
      "Async operations for database and API calls",
      "Tool architecture using @function_tool() decorator",
      "State management for SQL results and chart data",
      "Modular prompt system with dynamic loading",
      "MCP server integrations (aws-postgres-minrights, context7)",
      "Query classification with ML-based routing",
      "Connection pooling for efficient resource management",
      "Base64 chart encoding for web compatibility",
      "SSL-secured database connections",
      "Interactive testing framework for real database testing",
      "Bot inheritance hierarchy for code reusability",
      "Environment variable management for secure configuration",
    ],
    category: "AI/ML",
    status: "Completed",
    completedAt: "2025-07",
    featured: true,
    featuredRank: 6,
  },
  {
    id: "minrights-regulatory-platform",
    title: "MinRights Regulatory Platform",
    description:
      "A sophisticated multi-state regulatory data extraction and management system specifically designed for oil & gas spacing orders and operator information. The platform integrates directly with the MinRights PostgreSQL database to provide real-time regulatory data availability across multiple states with ultra-fast database operations achieving 7,799+ records/sec.",
    image: "/images/projects/minrights-regulatory-platform.png",
    video: {
      src: "/videos/minrights-regulatory-platform.mp4",
      poster: "/images/projects/minrights-regulatory-platform.png",
    },
    liveUrl: "https://www.mineralrights.ai/",
    githubUrl: "",
    techStack: [
      // Core Infrastructure
      { name: "Python 3.11+", icon: "python", color: "#3776AB" },
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "asyncpg", icon: "postgresql", color: "#336791" },
      { name: "pandas", icon: "pandas", color: "#150458" },
      { name: "SQLAlchemy", icon: "sqlalchemy", color: "#D71F00" },

      // Web Scraping & HTTP
      { name: "requests", icon: "requests", color: "#2563EB" },
      { name: "aiohttp", icon: "aiohttp", color: "#2C5BB4" },
      { name: "ScrapingBee API", icon: "spider", color: "#FF7043" },
      { name: "BeautifulSoup4", icon: "beautifulsoup", color: "#4CAF50" },
      { name: "Selenium", icon: "selenium", color: "#43B02A" },

      // Document Processing
      { name: "PyMuPDF", icon: "pdf", color: "#E53E3E" },
      { name: "pdfplumber", icon: "pdf", color: "#E53E3E" },
      { name: "pytesseract", icon: "ocr", color: "#9C27B0" },
      { name: "Pillow", icon: "image", color: "#FF9800" },

      // Data Processing
      { name: "RapidFuzz", icon: "fuzzy", color: "#FF6B6B" },
      { name: "dateutil", icon: "date", color: "#770C98" },
      { name: "regex", icon: "regex", color: "#4B32C3" },
      { name: "csv", icon: "csv", color: "#16A34A" },

      // Concurrency & Performance
      { name: "ThreadPoolExecutor", icon: "threading", color: "#FF4154" },
      { name: "multiprocessing", icon: "multiprocessing", color: "#FF6384" },
      { name: "asyncio", icon: "async", color: "#00D8FF" },
      { name: "Connection Pooling", icon: "database", color: "#00BFFF" },

      // State-Specific Integration
      { name: "Colorado ECMC", icon: "government", color: "#1E40AF" },
      { name: "Wyoming WOGCC", icon: "government", color: "#7C3AED" },
      { name: "North Dakota NDIC", icon: "government", color: "#DC2626" },
      { name: "New Mexico EMNRD", icon: "government", color: "#EA580C" },

      // Database Operations
      { name: "PostgreSQL COPY", icon: "database", color: "#336791" },
      { name: "Bulk Insert", icon: "database", color: "#00BFFF" },
      { name: "Section ID Mapping", icon: "mapping", color: "#10B981" },
      { name: "Transaction Management", icon: "transaction", color: "#8B5CF6" },

      // Development & Deployment
      { name: "python-dotenv", icon: "dotenv", color: "#ECD53F" },
      { name: "logging", icon: "logging", color: "#6B7280" },
      { name: "argparse", icon: "cli", color: "#4B5563" },
      { name: "pathlib", icon: "filesystem", color: "#9CA3AF" },

      // Cloud Infrastructure
      { name: "AWS RDS", icon: "aws", color: "#FF9900" },
      { name: "MinRights Database", icon: "database", color: "#3ECF8E" },
      { name: "Linux/Windows", icon: "server", color: "#607D8B" },

      // Quality Assurance
      { name: "unittest", icon: "test", color: "#9C27B0" },
      { name: "black", icon: "black", color: "#000000" },
      { name: "flake8", icon: "flake8", color: "#3F51B5" },
      { name: "mypy", icon: "mypy", color: "#2E8B57" },

      // Configuration Management
      { name: "JSON", icon: "json", color: "#FFC107" },
      { name: "Environment Variables", icon: "env", color: "#4CAF50" },
      { name: "State Configs", icon: "config", color: "#2196F3" },
    ],
    features: [
      "Multi-state support: Colorado, Wyoming, North Dakota, New Mexico, Texas (planned)",
      "Ultra-fast database operations: PostgreSQL COPY achieving 7,799+ records/sec",
      "Intelligent section mapping to MinRights section identifiers",
      "Concurrent processing with configurable worker pools (up to 35 threads)",
      "Dual-mode operation: CSV export + direct database integration",
      "Enhanced operator extraction with 440+ curated operator database",
      "Production-grade error handling with retry strategies",
      "Comprehensive PDF document processing with OCR capabilities",
      "ScrapingBee API integration for JavaScript-heavy government sites",
      "Access database (.accdb) processing for Colorado ECMC data",
      "Historical data coverage from 1990-2025 for Wyoming WOGCC",
      "Commission order processing (1-29,250 range) for North Dakota NDIC",
      "EMNRD hearing information integration for New Mexico",
      "Fuzzy matching with 75% confidence threshold for operator identification",
      "Automated section-township-range coordinate parsing",
      "Real-time regulatory compliance data collection",
      "Performance monitoring with records/sec tracking",
      "Atomic database operations with transaction management",
      "Memory-efficient streaming for large datasets",
      "CLI interface with comprehensive help and error handling",
      "In-memory section lookup for O(1) mapping performance",
      "Blacklist filtering for regulatory boilerplate text removal",
      "Multi-format date validation and standardization",
      "Batch processing with optimized memory usage",
      "Comprehensive logging and error tracking system",
    ],
    category: "Data Engineering",
    status: "Completed",
    completedAt: "2025-07",
    featured: true,
    featuredRank: 7,
  },
  {
    id: "minrights-pipeline",
    title: "MinRights Pipeline",
    description:
      "A sophisticated oil & gas data processing system designed for targeted investment analysis across multiple US states. This system processes large-scale energy data (~23,782 wells) to support investment decision-making in the oil & gas sector with nightly updates and zero-downtime deployments.",
    image: "/images/projects/minrights-pipeline.png",
    video: {
      src: "/videos/minrights-pipeline.mp4",
      poster: "/images/projects/minrights-pipeline.png",
    },
    liveUrl: "https://www.mineralrights.ai/",
    githubUrl: "",
    techStack: [
      // Core Programming & Runtime
      { name: "Python 3.9+", icon: "python", color: "#3776AB" },
      { name: "CLI Interface", icon: "cli", color: "#4B5563" },
      { name: "argparse", icon: "argparse", color: "#6B7280" },
      { name: "Virtual Environment", icon: "venv", color: "#9CA3AF" },

      // Data Processing & Analytics
      { name: "pandas >= 2.1.0", icon: "pandas", color: "#150458" },
      { name: "numpy >= 1.24.0", icon: "numpy", color: "#013243" },
      { name: "pyarrow >= 14.0.0", icon: "pyarrow", color: "#E53E3E" },
      { name: "scipy >= 1.11.0", icon: "scipy", color: "#654FF0" },
      { name: "matplotlib", icon: "matplotlib", color: "#11557c" },

      // Database & Spatial Technologies
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "PostGIS", icon: "postgis", color: "#336791" },
      { name: "psycopg2-binary >= 2.9.9", icon: "postgresql", color: "#336791" },
      { name: "SQLAlchemy >= 2.0.0", icon: "sqlalchemy", color: "#D71F00" },
      { name: "GeoAlchemy2 >= 0.14.0", icon: "geoalchemy", color: "#4CAF50" },
      { name: "shapely >= 2.0.0", icon: "shapely", color: "#2196F3" },

      // Cloud Infrastructure & Storage
      { name: "AWS S3", icon: "aws", color: "#FF9900" },
      { name: "boto3 >= 1.28.0", icon: "boto3", color: "#FF9900" },
      { name: "AWS Lambda", icon: "lambda", color: "#FF9900" },
      { name: "aws-lambda-powertools >= 2.25.0", icon: "lambda", color: "#FF9900" },
      { name: "AWS IAM", icon: "iam", color: "#FF9900" },
      { name: "AWS CloudWatch", icon: "cloudwatch", color: "#FF9900" },

      // Configuration & Environment
      { name: "python-dotenv >= 1.0.0", icon: "dotenv", color: "#ECD53F" },
      { name: "YAML", icon: "yaml", color: "#CB171E" },
      { name: "JSON/JSONB", icon: "json", color: "#FFC107" },

      // Development & Quality Tools
      { name: "pytest >= 7.4.0", icon: "pytest", color: "#0A9EDC" },
      { name: "pytest-cov >= 4.1.0", icon: "pytest", color: "#0A9EDC" },
      { name: "black >= 23.0.0", icon: "black", color: "#000000" },
      { name: "flake8 >= 6.0.0", icon: "flake8", color: "#3F51B5" },
      { name: "mypy >= 1.5.0", icon: "mypy", color: "#2E8B57" },

      // CLI & User Interface
      { name: "tabulate >= 0.9.0", icon: "tabulate", color: "#607D8B" },

      // Deployment & DevOps
      { name: "Bash Scripts", icon: "bash", color: "#4EAA25" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "ZIP Packaging", icon: "zip", color: "#FFD700" },

      // Geographic & Spatial Systems
      { name: "PLSS (Public Land Survey)", icon: "survey", color: "#8BC34A" },
      { name: "SRID 4326 (WGS84)", icon: "gps", color: "#2196F3" },
      { name: "BLM PLSS Data", icon: "blm", color: "#795548" },
      { name: "PostGIS GIST Indexes", icon: "index", color: "#9C27B0" },

      // Analytics & Business Logic
      { name: "Decline Curve Analysis", icon: "analytics", color: "#FF5722" },
      { name: "Hyperbolic Decline Models", icon: "math", color: "#E91E63" },
      { name: "PDP/PUD Forecasting", icon: "forecast", color: "#673AB7" },
      { name: "Investment Scenarios", icon: "investment", color: "#3F51B5" },
    ],
    features: [
      "Multi-state oil & gas data processing: NM, UT, CO, WY, ND",
      "Processes ~23,782 wells with nightly automated updates",
      "Geographic filtering using PostGIS and BLM PLSS township data",
      "PDP (Proved Developed Producing) and PUD (Proved Undeveloped) forecasting",
      "Decline curve analysis with 20-40% improved accuracy",
      "Investment scenario modeling: Conservative/Base/Aggressive projections",
      "Zero-downtime updates using shadow table deployment pattern",
      "Hybrid CLI/Lambda architecture for flexible deployment",
      "S3 Parquet file processing for large-scale data ingestion",
      "Spatial operations with PostGIS for well-section overlap analysis",
      "Lateral length calculations for horizontal well efficiency metrics",
      "Configurable chunked processing for memory optimization",
      "Production forecasting with hyperbolic/exponential/harmonic models",
      "Well geometry handling with LineString and MultiLineString support",
      "Investment analysis for oil & gas sector decision-making",
      "Real-time spatial indexing with GIST performance optimization",
      "Comprehensive CLI interface with dry-run and testing modes",
      "AWS cloud integration with S3, Lambda, and CloudWatch",
      "Database schema management with staging and production separation",
      "Performance monitoring with 10,000 records/chunk throughput",
      "Geographic coordinate system support (SRID 4326)",
      "Automated deployment with Bash scripting and ZIP packaging",
      "Connection pooling for optimized database performance",
      "Quality assurance with pytest, coverage, and static analysis",
      "Environment-specific configuration management",
    ],
    category: "Data Engineering",
    status: "Completed",
    completedAt: "2025-07",
    featured: true,
    featuredRank: 8,
  },
  {
    id: "supabase-postgres-pcrental-mcp",
    title: "Supabase PostgreSQL PC Rental MCP Server",
    description:
      "A sophisticated Model Context Protocol (MCP) server designed for safe PostgreSQL database interactions with Supabase. Provides both read and controlled write access while maintaining security and performance safeguards specifically for PC rental management systems.",
    image: "/images/projects/supabase-postgres-pcrental-mcp.png",
    video: {
      src: "/videos/supabase-postgres-pcrental-mcp.mp4",
      poster: "/images/projects/supabase-postgres-pcrental-mcp.png",
    },
    liveUrl: "",
    githubUrl: "",
    techStack: [
      // Runtime & Language
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "ES2020", icon: "javascript", color: "#F7DF1E" },

      // MCP Framework
      { name: "@modelcontextprotocol/sdk v1.12.0", icon: "mcp", color: "#FF4154" },
      { name: "StdioServerTransport", icon: "transport", color: "#607D8B" },
      { name: "MCP Server Pattern", icon: "server", color: "#9C27B0" },

      // Database Technologies
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
      { name: "pg v8.11.3", icon: "postgresql", color: "#336791" },

      // Configuration & Environment
      { name: "dotenv v16.3.1", icon: "dotenv", color: "#ECD53F" },
      { name: "Environment Variables", icon: "env", color: "#4CAF50" },
      { name: ".env Configuration", icon: "config", color: "#2196F3" },

      // TypeScript Toolchain
      { name: "TypeScript v5.3.3", icon: "typescript", color: "#3178C6" },
      { name: "ts-node v10.9.2", icon: "nodejs", color: "#339933" },
      { name: "@types/node v20.10.5", icon: "types", color: "#3178C6" },
      { name: "@types/pg v8.10.9", icon: "types", color: "#3178C6" },

      // Build Configuration
      { name: "tsconfig.json", icon: "config", color: "#3178C6" },
      { name: "CommonJS Modules", icon: "commonjs", color: "#F7DF1E" },
      { name: "Strict Type Checking", icon: "typescript", color: "#3178C6" },

      // Package Management
      { name: "npm", icon: "npm", color: "#CB3837" },
      { name: "package-lock.json", icon: "lock", color: "#F7B32B" },

      // Architecture Patterns
      { name: "Class-based Architecture", icon: "class", color: "#9C27B0" },
      { name: "Event-driven Programming", icon: "event", color: "#FF5722" },
      { name: "Connection Pooling", icon: "pool", color: "#00BFFF" },
      { name: "Query Validation", icon: "validation", color: "#4CAF50" },

      // Security & Safety
      { name: "SQL Injection Protection", icon: "security", color: "#F44336" },
      { name: "Row Limiting", icon: "limit", color: "#FF9800" },
      { name: "Timeout Management", icon: "timer", color: "#9C27B0" },
      { name: "Dry-run Mode", icon: "test", color: "#2196F3" },

      // Database Access Patterns
      { name: "Transaction Management", icon: "transaction", color: "#8B5CF6" },
      { name: "Schema Introspection", icon: "schema", color: "#10B981" },
      { name: "Query Result Processing", icon: "query", color: "#6366F1" },

      // Communication Protocol
      { name: "STDIO Transport", icon: "stdio", color: "#607D8B" },
      { name: "JSON-RPC", icon: "json", color: "#FFC107" },
      { name: "MCP Protocol", icon: "protocol", color: "#FF4154" },

      // Cloud Infrastructure
      { name: "AWS (ap-southeast-1)", icon: "aws", color: "#FF9900" },
      { name: "Supabase Hosting", icon: "supabase", color: "#3ECF8E" },
    ],
    features: [
      "Model Context Protocol (MCP) server implementation",
      "Safe PostgreSQL database interactions with Supabase integration",
      "Read-only SQL query support (SELECT, WITH, SHOW, DESCRIBE, EXPLAIN)",
      "Controlled write operations with safety controls (INSERT, UPDATE, DELETE)",
      "Advanced query validation and SQL injection protection",
      "Connection pooling for optimized database performance",
      "Row limiting to prevent memory overflow issues",
      "Query timeout management for performance control",
      "Dry-run capabilities for safe testing of write operations",
      "Database schema browsing via MCP resources",
      "Table data sampling for development and testing",
      "Transaction management with rollback capabilities",
      "Dynamic database schema discovery and introspection",
      "Event-driven architecture with comprehensive error handling",
      "TypeScript with strict type checking for reliability",
      "Environment-based configuration management",
      "STDIO transport for seamless MCP communication",
      "JSON-RPC protocol implementation for MCP compliance",
      "Class-based architecture for maintainable code organization",
      "AWS cloud infrastructure integration (ap-southeast-1 region)",
      "PC rental system specific database operations",
      "Production-ready security and performance safeguards",
      "Comprehensive error handling and signal management",
      "Parameter validation for secure database operations",
      "Configurable query execution timeouts",
    ],
    category: "Infrastructure",
    status: "Completed",
    completedAt: "2025-07",
    featured: true,
    featuredRank: 9,
  },
  {
    id: "ultracontextai",
    title: "UltraContextAI",
    description:
      "A comprehensive system for managing AI interactions through memory management, lessons learned tracking, and dual-mode operation (Plan/Agent). Ensures consistent, high-quality development while maintaining detailed project documentation and knowledge retention.",
    image: "/images/projects/ulracontextai.png",
    video: {
      src: "/videos/UltraContextAI.mp4",
      poster: "/images/projects/ulracontextai.png",
    },
    liveUrl: "https://github.com/T1nker-1220/UltraContextAI",
    githubUrl: "https://github.com/T1nker-1220/UltraContextAI",
    techStack: [
      { name: "Cursor AI", icon: "cursor", color: "#E5E7EB" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "AI Memory Systems", icon: "ai", color: "#FF6B6B" },
      { name: "Claude 3", icon: "claude", color: "#7B61FF" },
      { name: "GitHub", icon: "github", color: "#181717" },
    ],
    features: [
      "Memory system for tracking interactions chronologically",
      "Lessons learned tracking for solutions and best practices",
      "Dual-mode operation (Plan/Agent)",
      "Task dependency tracking",
      "Confidence metrics for implementation readiness",
      "Cross-referencing between memory components",
      "Version control format [v1.0.0] for entries",
      "Supports #tags for easy searching",
    ],
    category: "Cursor-AI",
    status: "Completed",
    completedAt: "2025-01",
    featured: true,
    featuredRank: 4,
  },
  {
    id: "memories-with-lessons-mcp-server",
    title: "Memory MCP Server",
    description:
      "Enhanced knowledge graph memory server that lets Claude remember information about users across chats and learn from past errors through a lesson system. Built on the MCP protocol for AI memory management.",
    image: "/images/projects/memories-with-lessons-mcp-server.png",
    video: {
      src: "/videos/memories-lessons-mcp.mp4",
      poster: "/images/projects/memories-with-lessons-mcp-server.png",
    },
    liveUrl: "https://github.com/T1nker-1220/memories-with-lessons-mcp-server",
    githubUrl: "https://github.com/T1nker-1220/memories-with-lessons-mcp-server",
    techStack: [
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Claude 3", icon: "claude", color: "#7B61FF" },
      { name: "MCP Protocol", icon: "api", color: "#FF4154" },
      { name: "Knowledge Graphs", icon: "database", color: "#00BFFF" },
    ],
    features: [
      "Persistent memory using a local knowledge graph",
      "Entity-relation model for storing information",
      "Lesson system for learning from past errors",
      "Automatic file splitting for performance optimization",
      "Integration with Cursor MCP client",
      "Query capability for finding specific entities",
      "Error pattern matching for solution recommendations",
      "Success rate tracking for solutions",
    ],
    category: "Cursor-AI",
    status: "Completed",
    completedAt: "2025-01",
    featured: true,
    featuredRank: 3,
  },
  {
    id: "minrights-ai",
    title: "Mineral Rights AI",
    description:
      "A full-stack web application built with Next.js and Mantine v7. As a collaborative project, I focus primarily on frontend development and API integration while also contributing to Python backend tasks when needed. The application features a modern responsive interface with comprehensive data management capabilities.",
    image: "/images/projects/minrights-ai.png",
    video: {
      src: "/videos/minrights-ai.mp4",
      poster: "/images/projects/minrights-ai.png",
    },
    liveUrl: "https://www.mineralrights.ai/",
    githubUrl: "",
    techStack: [
      // Based on the comprehensive deep dive analysis from PM1, PM2, and the architecture planner, here is
      // the complete inventory of ALL tech stacks in your MinRights codebase:

      // 🏗️ Complete MinRights Tech Stack Inventory

      // Frontend Technologies (Next.js 14 Ecosystem)

      // Core Framework:
      { name: "Next.js 14.1.0", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 18", icon: "react", color: "#61DAFB" },
      { name: "TypeScript 5.7.3", icon: "typescript", color: "#3178C6" },
      { name: "Node.js >=18", icon: "nodejs", color: "#339933" },
      { name: "pnpm >=8", icon: "pnpm", color: "#F69220" },

      // UI Framework & Styling:
      { name: "Mantine v7.17.4", icon: "mantine", color: "#339AF0" },
      { name: "Tailwind CSS 3.3.0", icon: "tailwindcss", color: "#06B6D4" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
      { name: "Framer Motion 12.5.0", icon: "framer", color: "#0055FF" },
      { name: "@tabler/icons-react", icon: "tabler", color: "#94A3B8" },
      { name: "Lucide React", icon: "lucide", color: "#94A3B8" },
      { name: "React Icons", icon: "react-icons", color: "#94A3B8" },

      // State & Data Management:
      { name: "Zustand 5.0.3", icon: "zustand", color: "#FF4154" },
      { name: "Immer 10.0.0", icon: "immer", color: "#00D8FF" },
      { name: "Axios 1.9.0", icon: "axios", color: "#5A29E4" },
      { name: "Zod 4.0.5", icon: "zod", color: "#3E67B1" },

      // Maps & Geospatial:
      { name: "MapLibre GL JS 5.1.0", icon: "maplibre", color: "#396CB2" },
      { name: "React Map GL 8.0.1", icon: "mapbox", color: "#4264FB" },
      { name: "@turf/turf 7.2.0", icon: "turf", color: "#6BB843" },
      { name: "GeoJSON 0.5.0", icon: "geojson", color: "#47A4C2" },

      // Charts & Visualization:
      { name: "Chart.js 4.4.8", icon: "chartjs", color: "#FF6384" },
      { name: "React ChartJS 2", icon: "react-chartjs", color: "#FF6384" },
      { name: "ECharts 5.6.0", icon: "echarts", color: "#5470C6" },
      { name: "Recharts 2.15.2", icon: "recharts", color: "#8884D8" },
      { name: "React Gauge Chart", icon: "gauge", color: "#82CA9D" },
      { name: "React Sparklines", icon: "sparklines", color: "#FFC658" },
      { name: "React Animated Numbers", icon: "animated-numbers", color: "#FF7300" },
      { name: "Mantine DataTable", icon: "datatable", color: "#339AF0" },

      // Database Integration:
      { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
      { name: "pg 8.15.5", icon: "postgresql", color: "#336791" },

      // Utilities:
      { name: "date-fns 4.1.0", icon: "date-fns", color: "#770C98" },
      { name: "dayjs 1.11.13", icon: "dayjs", color: "#FB8C3A" },
      { name: "clsx 2.1.1", icon: "clsx", color: "#0284C7" },
      { name: "Financial 0.2.4", icon: "financial", color: "#16A34A" },
      { name: "jsPDF 3.0.1", icon: "jspdf", color: "#E53E3E" },

      // Backend Technologies (Python FastAPI)

      // Core Framework:
      { name: "Python 3.10+", icon: "python", color: "#3776AB" },
      { name: "FastAPI 0.115.12", icon: "fastapi", color: "#009688" },
      { name: "Uvicorn 0.23.2", icon: "uvicorn", color: "#417E87" },
      { name: "Pydantic 2.10.0", icon: "pydantic", color: "#E92063" },
      { name: "Poetry", icon: "poetry", color: "#60A5FA" },

      // Database & ORM:
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "SQLAlchemy 2.0", icon: "sqlalchemy", color: "#D71F00" },
      { name: "psycopg2-binary 2.9.9", icon: "psycopg2", color: "#336791" },

      // Data Analysis:
      { name: "Pandas 2.0.0", icon: "pandas", color: "#150458" },
      { name: "NumPy 2.2.4", icon: "numpy", color: "#013243" },
      { name: "Matplotlib 3.8.0", icon: "matplotlib", color: "#11557c" },

      // Document Generation:
      { name: "WeasyPrint 62.3", icon: "weasyprint", color: "#006233" },
      { name: "ReportLab 4.1.0", icon: "reportlab", color: "#1F4788" },
      { name: "Jinja2 3.1.4", icon: "jinja", color: "#B41717" },
      { name: "PyPDF2 3.0.1", icon: "pypdf", color: "#E53E3E" },
      { name: "XlsxWriter 3.1.9", icon: "xlsxwriter", color: "#217346" },

      // External Services:
      { name: "OpenAI 1.16.2", icon: "openai", color: "#412991" },
      { name: "Stripe 7.0.0", icon: "stripe", color: "#635BFF" },
      { name: "minrights-chatbot", icon: "chatbot", color: "#FF6B6B" },

      // Development Tools:
      { name: "Black 23.9.1", icon: "black", color: "#000000" },
      { name: "isort 5.12.0", icon: "isort", color: "#EF5552" },
      { name: "MyPy 1.5.1", icon: "mypy", color: "#2E8B57" },
      { name: "Ruff 0.0.292", icon: "ruff", color: "#D7FF64" },
      { name: "pytest 7.4.2", icon: "pytest", color: "#0A9EDC" },

      // Infrastructure & Deployment
      { name: "Heroku", icon: "heroku", color: "#E5E7EB" },
      { name: "AWS App Runner", icon: "aws", color: "#FF9900" },
      { name: "Webpack", icon: "webpack", color: "#8DD6F9" },
      { name: "SWC", icon: "swc", color: "#FE5F08" },
      { name: "Turbopack", icon: "turbopack", color: "#0070F3" },
      { name: "Concurrently 8.2.2", icon: "concurrently", color: "#6CC04A" },
      { name: "Git", icon: "git", color: "#F05032" },

      // This represents 87 distinct technologies across frontend (46), backend (25), infrastructure (8), and      
      // shared packages (8), making it a comprehensive full-stack application with sophisticated geospatial       
      // and financial analysis capabilities.
    ],
    features: [
      "Modern UI with Mantine v7 components",
      "API integration and data management",
      "Responsive design for all device sizes",
      "Server-side rendering with Next.js",
      "Cross-browser compatibility",
      "Frontend and backend collaboration",
      "Authentication and user management",
    ],
    category: "Full Stack",
    status: "Completed",
    completedAt: "2025-06",
    featured: true,
    featuredRank: 1,
  },
  {
    id: "excel-glass",
    title: "Excel Glass Inc.",
    description:
      "A modern website for Excel Glass Inc. showcasing their products and services with a beautiful UI and responsive design.",
    image: "/images/projects/excel-glass.webp",
    video: {
      src: "/videos/excel_glass.mp4",
      poster: "/images/projects/excel-glass.webp",
    },
    liveUrl: "https://excel-glass.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/ExcelGlass",
    techStack: [
      { name: "Next.js 14", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Shadcn UI", icon: "shadcn", color: "#E5E7EB" },
      { name: "Radix UI", icon: "radix", color: "#FF69B4" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Sonner", icon: "sonner", color: "#4F46E5" },
      { name: "clsx", icon: "clsx", color: "#0284C7" },
      { name: "cva", icon: "cva", color: "#16A34A" },
      { name: "Lucide Icons", icon: "lucide", color: "#94A3B8" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
      { name: "pnpm", icon: "pnpm", color: "#F69220" },
      { name: "Vercel", icon: "vercel", color: "#E5E7EB" },
    ],
    features: [
      "Responsive design with mobile-first approach",
      "Custom theme integration with Headless UI",
      "Product showcase with image optimization",
      "Contact form integration",
      "Optimized CSS with PostCSS and CSSNano",
      "Code quality with ESLint",
      "Smooth animations with Framer Motion",
      "SEO optimized with Next.js",
    ],
    category: "Web Development",
    status: "Completed",
    completedAt: "2024-01",
  },
  {
    id: "weather-api",
    title: "Weather API Integration",
    description:
      "A weather application that provides real-time weather information using modern API integration techniques.",
    image: "/images/projects/weather-api.webp",
    video: {
      src: "/videos/weather_api.mp4",
      poster: "/images/projects/weather-api.webp",
    },
    liveUrl: "https://weather-api-s.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/Weather_API-s",
    techStack: [
      { name: "Flask 3.0", icon: "flask", color: "#E5E7EB" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "Jinja2", icon: "jinja", color: "#B41717" },
      { name: "Requests", icon: "requests", color: "#2563EB" },
      { name: "URLLib3", icon: "urllib", color: "#4B8BBE" },
      { name: "Python-dotenv", icon: "dotenv", color: "#ECD53F" },
      { name: "Werkzeug", icon: "werkzeug", color: "#06B6D4" },
      { name: "Click", icon: "click", color: "#FF69B4" },
    ],
    features: [
      "Real-time weather data fetching",
      "Location-based weather information",
      "Responsive weather cards",
      "Search functionality",
      "Environment variable management",
      "Template-based rendering",
      "HTTP request handling",
      "Error handling and validation",
    ],
    category: "API Integration",
    status: "Completed",
    completedAt: "2023-12",
  },
  {
    id: "edible-artistry",
    title: "Edible Artistry",
    description:
      "A sample food menu website showcasing culinary creations with an artistic touch.",
    image: "/images/projects/edible-artistry.webp",
    video: {
      src: "/videos/edible-artistry.mp4",
      poster: "/images/projects/edible-artistry.webp",
    },
    liveUrl: "https://edible-artistry.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/edible-artistry",
    techStack: [
      { name: "Next.js 15", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19 RC", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "TailwindCSS 3.4", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
    ],
    features: [
      "Interactive menu showcase",
      "Beautiful food photography",
      "Category filtering",
      "Responsive grid layout",
      "Mobile-first design",
      "Type-safe development",
      "Modern React features with RC 19",
      "Advanced ESLint configuration",
    ],
    category: "UI/UX Design",
    status: "In Progress",
    completedAt: "2024-02",
  },
  {
    id: "wedding-memories",
    title: "Wedding Memories",
    description:
      "A beautiful wedding memories website with photo galleries and event information.",
    image: "/images/projects/wedding-memories.webp",
    video: {
      src: "/videos/wedding_memories.mp4",
      poster: "/images/projects/wedding-memories.webp",
    },
    liveUrl: "https://nicholsweddingmemories.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/nichols-wed-blog",
    techStack: [
      { name: "Next.js 13.5", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript 5", icon: "typescript", color: "#3178C6" },
      { name: "Prisma 6", icon: "prisma", color: "#5A67D8" },
      { name: "TailwindCSS 3.3", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Radix UI", icon: "radix", color: "#FF69B4" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Sharp", icon: "sharp", color: "#99CC00" },
      { name: "Lucide React", icon: "lucide", color: "#94A3B8" },
      { name: "Zod", icon: "zod", color: "#3E67B1" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
      { name: "pnpm", icon: "pnpm", color: "#F69220" },
    ],
    features: [
      "Photo gallery with lightbox",
      "Event timeline",
      "RSVP system",
      "Responsive design",
      "Image optimization with Sharp",
      "Type-safe data validation",
      "Custom animations",
      "Production-ready deployment",
      "Performance optimizations",
      "Custom device optimizations",
      "WebP format support",
      "Strict TypeScript checks",
    ],
    category: "Full Stack",
    status: "Completed",
    completedAt: "2024-03",
  },
  {
    id: "youtube-channel",
    title: "T1nker Gaming",
    description:
      "A YouTube gaming channel featuring gameplay videos, tutorials, and gaming content with professional editing and production.",
    image: "/images/projects/youtube.webp",
    video: {
      src: "/videos/youtube.mp4",
      poster: "/images/projects/youtube.webp",
    },
    liveUrl: "https://www.youtube.com/@t1nkergaming731",
    githubUrl: null,
    techStack: [
      { name: "Canva", icon: "canva", color: "#00C4CC" },
      { name: "OBS Studio", icon: "obs", color: "#94A3B8" },
      { name: "CapCut", icon: "capcut", color: "#FF3B5C" },
    ],
    features: [
      "Professional video editing",
      "Custom thumbnails",
      "Gaming content creation",
      "Streaming setup",
    ],
    category: "Content Creation",
    status: "Completed",
    completedAt: "2024-03",
  },
  {
    id: "portfolio-marquez",
    title: "Portfolio Website",
    description:
      "Modern portfolio website showcasing my projects and skills with advanced animations and interactions",
    image: "/images/projects/portfolio-marquez.webp",
    video: {
      src: "/videos/portfolio-marquez.mp4",
      poster: "/images/projects/portfolio-marquez.webp",
    },
    liveUrl: "https://portfolio-marquez.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/portfolio_marquez",
    techStack: [
      { name: "Next.js 15", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript 5", icon: "typescript", color: "#3178C6" },
      { name: "TailwindCSS", icon: "tailwind", color: "#06B6D4" },
      { name: "Shadcn UI", icon: "shadcn", color: "#E5E7EB" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "GSAP", icon: "gsap", color: "#88CE02" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "React Query", icon: "query", color: "#FF4154" },
      { name: "EmailJS", icon: "email", color: "#00A95C" },
      { name: "Sentry", icon: "sentry", color: "#7B61FF" },
      { name: "Vercel", icon: "vercel", color: "#E5E7EB" },
    ],
    features: [
      "Modern UI with glass morphism",
      "Advanced animations with Framer Motion & GSAP",
      "Dark mode with next-themes",
      "Form handling with React Hook Form & Zod",
      "State management with Zustand",
      "Error tracking with Sentry",
      "Performance optimized",
      "Responsive design",
      "SEO optimized",
      "Type-safe development",
      "Email integration",
      "Analytics integration",
    ],
    category: "Web Development",
    status: "Completed",
    completedAt: "2024-03",
  },
  {
    id: "kusina-de-amadeo",
    title: "Kusina de Amadeo",
    description:
      "A modern restaurant management system with online ordering, inventory tracking, and customer relationship management.",
    image: "/images/projects/kda-product-showcase.vercel.app.jpeg",
    video: {
      src: "/videos/kusina_de_amadeo.mp4",
      poster: "/images/projects/kda-product-showcase.vercel.app.jpeg",
    },
    liveUrl: "https://kda-product-showcase.vercel.app/",
    githubUrl: "https://github.com/T1nker-1220/kda-product-showcase",
    techStack: [
      { name: "Next.js 14", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Shadcn UI", icon: "shadcn", color: "#E5E7EB" },
      { name: "Radix UI", icon: "radix", color: "#FF69B4" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Sonner", icon: "sonner", color: "#4F46E5" },
      { name: "clsx", icon: "clsx", color: "#0284C7" },
      { name: "cva", icon: "cva", color: "#16A34A" },
      { name: "Lucide Icons", icon: "lucide", color: "#94A3B8" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
      { name: "pnpm", icon: "pnpm", color: "#F69220" },
      { name: "Vercel", icon: "vercel", color: "#E5E7EB" },
    ],
    features: [
      "Modern Next.js 14 App Router architecture",
      "Responsive UI with Tailwind CSS",
      "Custom Shadcn UI components",
      "Radix UI primitives integration",
      "Smooth animations with Framer Motion",
      "State management with Zustand",
      "Toast notifications with Sonner",
      "Type-safe development with TypeScript",
      "Optimized images with Next.js Image",
      "Component-based architecture",
      "Environment variables management",
      "Module path aliases optimization",
    ],
    category: "UI/UX Design",
    status: "In Progress",
    completedAt: "2024-06",
  },
  {
    id: "filipino-cuisine-ui",
    title: "Filipino Cuisine UI",
    description:
      "A modern UI/UX design system for a Filipino restaurant, combining cultural elements with professional e-commerce functionality.",
    image: "/images/projects/filipino-cuisine-ui.png",
    liveUrl: "#",
    githubUrl: null,
    techStack: [
      { name: "Next.js 14", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "TailwindCSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Shadcn UI", icon: "shadcn", color: "#E5E7EB" },
      { name: "Radix UI", icon: "radix", color: "#FF69B4" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Sonner", icon: "sonner", color: "#4F46E5" },
      { name: "pnpm", icon: "pnpm", color: "#F69220" },
      { name: "Vercel", icon: "vercel", color: "#E5E7EB" },
    ],
    features: [
      "Cultural-inspired design system",
      "E-commerce functionality",
      "Accessible components",
      "Motion design animations",
      "Toast notifications",
      "Responsive layout",
      "Dark mode support",
      "Image optimization",
    ],
    category: "Coming Soon",
    status: "Coming Soon",
    completedAt: "2024-04",
  },
  {
    id: "todo-list",
    title: "Todo List",
    description:
      "A feature-rich todo list application with task management, categories, and progress tracking capabilities.",
    image: "/images/projects/todo-list.png",
    liveUrl: "#",
    githubUrl: null,
    techStack: [
      { name: "Next.js 14", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 18", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "TailwindCSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "LocalForage", icon: "localforage", color: "#FF9900" },
      { name: "DnD Kit", icon: "dndkit", color: "#6366F1" },
    ],
    features: [
      "Task categorization",
      "Drag and drop reordering",
      "Progress tracking",
      "Due date reminders",
      "Priority levels",
      "Offline support",
      "Dark mode",
      "Data persistence",
    ],
    category: "Coming Soon",
    status: "Coming Soon",
    completedAt: "2024-05",
  },
  {
    id: "t1nker-pc-rental",
    title: "T1NKER PC Rental & Management System",
    description:
      "A secure, automated, and user-friendly time-based PC rental system for internet cafes and gaming lounges. Features a web-based admin dashboard, real-time session management, robust client kiosk app, and comprehensive transaction and activity logging. Built for operational efficiency, security, and a seamless user experience.",
    image: "/images/projects/tinker-pc-rental.png",
    video: {
      src: "/videos/tinker-pc-rental.mp4",
      poster: "/images/projects/tinker-pc-rental.png",
    },
    liveUrl: "",
    githubUrl: "",
    techStack: [
      { name: "Next.js (App Router)", icon: "nextjs", color: "#E5E7EB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "Electron", icon: "electron", color: "#47848F" },
      { name: "bcryptjs", icon: "lock", color: "#F7B32B" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
    ],
    features: [
      "Admin dashboard for user, session, and transaction management",
      "Real-time updates via Supabase Realtime",
      "Time-based PC rental with secure session handling",
      "Kiosk mode Electron client with PC_ID enforcement",
      "First-time password setup and secure authentication",
      "Session monitoring and stale session cleanup",
      "Detailed transaction and activity logs",
      "Low-time warnings and auto-logout",
      "Manual and automatic session termination",
      "Theme customization (dark/light mode)",
      "API endpoints for all core operations",
      "Database triggers for session consistency",
    ],
    category: "Full Stack",
    status: "Completed",
    completedAt: "2025-05",
    featured: true,
    featuredRank: 2,
  },
];
