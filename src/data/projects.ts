import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "afterdark",
    title: "AfterDark Social Platform",
    description:
      "A Firebase-powered social discovery platform where communities come alive through real-time connections. Think Facebook meets Tinder for building genuine friendships and communities - users can create rich content with posts and videos, discover people through swipe-based matching, join interest-based groups, attend local events, and engage in real-time messaging. The web app serves as the in-depth engagement hub for content creation and community management, while the mobile app focuses on real-time interactions and location-based discovery. Built for real customers with dual Firebase environments (staging for development, production for live users) and deployed on Vercel serving thousands of active community members.",
    image: "/images/projects/afterdark.png",
    liveUrl: "",
    githubUrl: null,
    techStack: [
      { name: "Next.js 15", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Shadcn UI", icon: "shadcn", color: "#E5E7EB" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Vercel", icon: "vercel", color: "#E5E7EB" },
    ],
    features: [
      "Modern responsive design",
      "Server-side rendering",
      "Optimized performance",
      "Type-safe development",
      "Smooth animations",
      "State management",
      "SEO optimized",
      "Production deployment",
    ],
    category: "Websites",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 1,
  },
  {
    id: "mojogift",
    title: "MojoGift - Luxury Digital Gifting Platform",
    description:
      "A full-stack luxury experience platform that transforms digital gifting into emotionally-resonant moments. Imagine Instagram for memories meets AI-powered travel planner meets corporate gifting suite - users create beautiful memory journals with photos and videos to capture life's meaningful moments, get personalized travel recommendations from Clevis AI (powered by Google Gemini) through an interactive chat-based itinerary builder with Google Maps integration, and companies can manage bulk gift campaigns with employee roster uploads and analytics dashboards. Built with Next.js 15 (React 19, TypeScript) frontend and Express backend with Prisma ORM connecting to PostgreSQL, featuring Cloudinary media storage, Amazon SES emails, JWT authentication, and role-based access control. A complete ecosystem for personal memories, dream vacations, and corporate appreciation.",
    image: "/images/projects/mojogift.png",
    liveUrl: "",
    githubUrl: null,
    techStack: [
      { name: "Next.js 14", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 18", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
      { name: "Zustand", icon: "zustand", color: "#FF4154" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
    ],
    features: [
      "Gift tracking system",
      "User management",
      "Payment integration",
      "Real-time updates",
      "Responsive design",
      "Database integration",
      "State management",
      "Modern UI/UX",
    ],
    category: "Websites",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 2,
  },
  {
    id: "kda-ordering-system",
    title: "KDA Ordering System",
    description:
      "A comprehensive full-stack restaurant ordering system with customer-facing menus, kiosk mode, real-time order tracking, and admin dashboard. Features three interfaces: customer menu, kiosk ordering, and admin portal for managing products, orders, and revenue analytics with receipt printing capabilities.",
    image: "/images/projects/kda-ordering-system.png",
    liveUrl: "",
    githubUrl: null,
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
    category: "Websites",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 7,
  },
  {
    id: "minrights-chatbot",
    title: "Energy Data Chatbot",
    description:
      "A sophisticated Python package providing AI-powered conversational interfaces for oil & gas data analysis. Built for the platform, it implements a two-tier bot architecture (Basic and Premium) with comprehensive database integration, web search capabilities, and advanced analytics features.",
    image: "/images/projects/minrights-chatbot.png",
    liveUrl: "",
    githubUrl: null,
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
      "MCP server integrations (aws-postgres, context7)",
      "Query classification with ML-based routing",
      "Connection pooling for efficient resource management",
      "Base64 chart encoding for web compatibility",
      "SSL-secured database connections",
      "Interactive testing framework for real database testing",
      "Bot inheritance hierarchy for code reusability",
      "Environment variable management for secure configuration",
    ],
    category: "AI",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 8,
  },
  {
    id: "minrights-regulatory-platform",
    title: "Regulatory Data Platform",
    description:
      "A sophisticated multi-state regulatory data extraction and management system specifically designed for oil & gas spacing orders and operator information. The platform integrates directly with the PostgreSQL database to provide real-time regulatory data availability across multiple states with ultra-fast database operations achieving 7,799+ records/sec.",
    image: "/images/projects/minrights-regulatory-platform.png",
    liveUrl: "",
    githubUrl: null,
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
      { name: "Client Database", icon: "database", color: "#3ECF8E" },
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
      "Intelligent section mapping to section identifiers",
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
    category: "Scraping",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 9,
  },
  {
    id: "minrights-pipeline",
    title: "Data Processing Pipeline",
    description:
      "A sophisticated oil & gas data processing system designed for targeted investment analysis across multiple US states. This system processes large-scale energy data (~23,782 wells) to support investment decision-making in the oil & gas sector with nightly updates and zero-downtime deployments.",
    image: "/images/projects/minrights-pipeline.png",
    liveUrl: "",
    githubUrl: null,
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
    category: "MCP",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 10,
  },
  {
    id: "supabase-postgres-pcrental-mcp",
    title: "Supabase PostgreSQL PC Rental MCP Server",
    description:
      "A sophisticated Model Context Protocol (MCP) server designed for safe PostgreSQL database interactions with Supabase. Provides both read and controlled write access while maintaining security and performance safeguards specifically for PC rental management systems.",
    image: "/images/projects/supabase-postgres-pcrental-mcp.png",
    liveUrl: "",
    githubUrl: null,
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
    category: "MCP",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 11,
  },
  {
    id: "aws-postgres-mcp-server",
    title: "PostgreSQL MCP Server",
    description:
      "A sophisticated, production-ready Model Context Protocol server specifically designed for oil & gas industry data management with advanced PostgreSQL integration on AWS RDS. Features comprehensive safety controls, geospatial operations, and industry-specific tools for petroleum data analysis.",
    image: "/images/projects/aws-postgres-mcp-server.png",
    liveUrl: "",
    githubUrl: null,
    techStack: [
      // Runtime & Language
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "TypeScript ES2020", icon: "typescript", color: "#3178C6" },
      { name: "ES Modules (ESM)", icon: "javascript", color: "#F7DF1E" },
      { name: "NodeNext Module Resolution", icon: "nodejs", color: "#339933" },

      // MCP Framework
      { name: "@modelcontextprotocol/sdk v1.10.2", icon: "mcp", color: "#FF4154" },
      { name: "StdioServerTransport", icon: "transport", color: "#607D8B" },
      { name: "Custom MCP Tools", icon: "tools", color: "#9C27B0" },
      { name: "Advanced Protocol Handling", icon: "protocol", color: "#FF4154" },

      // Database Technologies
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "AWS RDS", icon: "aws", color: "#FF9900" },
      { name: "pg v8.15.1", icon: "postgresql", color: "#336791" },
      { name: "PostGIS", icon: "postgis", color: "#336791" },

      // Validation & Schema
      { name: "Zod v3.24.3", icon: "zod", color: "#3E67B1" },
      { name: "TypeScript Interfaces", icon: "typescript", color: "#3178C6" },
      { name: "Schema Validation", icon: "validation", color: "#4CAF50" },

      // Configuration & Security
      { name: "dotenv v16.5.0", icon: "dotenv", color: "#ECD53F" },
      { name: "SSL/TLS Configuration", icon: "security", color: "#4CAF50" },
      { name: "Certificate Handling", icon: "cert", color: "#FF9800" },

      // TypeScript Toolchain
      { name: "TypeScript v5.8.3", icon: "typescript", color: "#3178C6" },
      { name: "ts-node v10.9.2", icon: "nodejs", color: "#339933" },
      { name: "@types/pg v8.11.13", icon: "types", color: "#3178C6" },

      // Build Configuration
      { name: "Source Maps", icon: "sourcemap", color: "#FF6B6B" },
      { name: "Declaration Files", icon: "dts", color: "#3178C6" },
      { name: "ESM-first Architecture", icon: "esm", color: "#F7DF1E" },

      // Package Management
      { name: "pnpm v10.8.1", icon: "pnpm", color: "#F69220" },
      { name: "Binary Distribution", icon: "binary", color: "#607D8B" },
      { name: "aws-pg-mcp Command", icon: "cli", color: "#FF9900" },

      // Modular Architecture
      { name: "config.ts Module", icon: "config", color: "#2196F3" },
      { name: "sql-tools.ts Module", icon: "sql", color: "#336791" },
      { name: "domain-tools.ts Module", icon: "domain", color: "#FF5722" },
      { name: "resources.ts Module", icon: "resources", color: "#9C27B0" },
      { name: "types.ts Module", icon: "types", color: "#3178C6" },
      { name: "utils.ts Module", icon: "utils", color: "#607D8B" },

      // Security & Safety Architecture
      { name: "Multi-layered Validation", icon: "validation", color: "#4CAF50" },
      { name: "SQL Injection Prevention", icon: "security", color: "#F44336" },
      { name: "Critical Table Protection", icon: "protection", color: "#E91E63" },
      { name: "Transaction Management", icon: "transaction", color: "#8B5CF6" },
      { name: "Query Pattern Matching", icon: "pattern", color: "#FF9800" },

      // Database Schema Management
      { name: "Multi-Schema Architecture", icon: "schema", color: "#10B981" },
      { name: "Schema Prioritization", icon: "priority", color: "#6366F1" },
      { name: "Performance Optimization", icon: "performance", color: "#F59E0B" },

      // Oil & Gas Domain
      { name: "Well Management", icon: "oil", color: "#8B4513" },
      { name: "Section Analysis", icon: "analysis", color: "#FF5722" },
      { name: "Production Tracking", icon: "tracking", color: "#4CAF50" },
      { name: "Economic Modeling", icon: "economics", color: "#2196F3" },
      { name: "Decline Curve Analysis", icon: "curve", color: "#9C27B0" },
      { name: "Type Curve Generation", icon: "generation", color: "#FF6B6B" },

      // Geospatial Capabilities
      { name: "PostGIS Spatial Operations", icon: "spatial", color: "#4CAF50" },
      { name: "Geometry Processing", icon: "geometry", color: "#2196F3" },
      { name: "Geographic Boundaries", icon: "boundaries", color: "#FF9800" },
      { name: "Coordinate Systems", icon: "coordinates", color: "#9C27B0" },

      // Cloud Integration
      { name: "AWS RDS Integration", icon: "aws", color: "#FF9900" },
      { name: "Environment Configuration", icon: "env", color: "#4CAF50" },
      { name: "Encrypted Connections", icon: "encryption", color: "#F44336" },
    ],
    features: [
      "Production-ready MCP server for oil & gas industry data management",
      "Advanced PostgreSQL integration with AWS RDS hosting",
      "Modular architecture with separation of concerns across 6 core modules",
      "Comprehensive security with multi-layered validation and SQL injection prevention",
      "Critical table protection for production data safety",
      "PostGIS integration for advanced geospatial operations and analysis",
      "Industry-specific tools for petroleum data analysis and forecasting",
      "Well management with 10-digit and 14-digit API identifier support",
      "Section analysis with land section data and well intersection calculations",
      "Production tracking for monthly oil and gas production volumes",
      "Economic modeling with section scenarios and forecasted outcomes",
      "Decline curve analysis with PDP forecasting and hyperbolic decline parameters",
      "Type curve generation for PUD forecasting at undeveloped locations",
      "Drilling operations tracking with rig status and operational monitoring",
      "Multi-schema architecture supporting client, prod, data, spatial schemas",
      "Advanced query optimization with mandatory LIMIT clauses and timeouts",
      "Transaction management with dry-run capabilities and automatic rollback",
      "EXPLAIN plan analysis for query impact estimation",
      "Configurable row limiting and result size management for performance",
      "SSL/TLS encrypted database connections with certificate handling",
      "ESM-first architecture with modern TypeScript ES2020 support",
      "Zod schema validation for type-safe database operations",
      "Connection pooling for optimized database performance",
      "Binary distribution with aws-pg-mcp command-line interface",
      "Comprehensive error handling, logging, and monitoring capabilities",
    ],
    category: "MCP",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 12,
  },
  {
    id: "ultracontextai",
    title: "UltraContextAI",
    description:
      "A comprehensive system for managing AI interactions through memory management, lessons learned tracking, and dual-mode operation (Plan/Agent). Ensures consistent, high-quality development while maintaining detailed project documentation and knowledge retention.",
    image: "/images/projects/ulracontextai.png",
    liveUrl: "https://github.com/T1nker-1220/UltraContextAI",
    githubUrl: null,
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
    category: "AI",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 13,
  },
  {
    id: "memories-with-lessons-mcp-server",
    title: "Memory MCP Server",
    description:
      "Enhanced knowledge graph memory server that lets Claude remember information about users across chats and learn from past errors through a lesson system. Built on the MCP protocol for AI memory management.",
    image: "/images/projects/memories-with-lessons-mcp-server.png",
    liveUrl: "https://github.com/T1nker-1220/memories-with-lessons-mcp-server",
    githubUrl: null,
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
    category: "AI",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 14,
  },
  {
    id: "minrights-ai",
    title: "MinRights - Oil & Gas Property Evaluation Platform",
    description:
      "A sophisticated mineral rights analysis platform that transforms oil & gas property evaluation through interactive mapping and financial modeling. Imagine having the power to analyze entire states of oil & gas data - visualizing thousands of wells, townships, and land sections on an interactive MapLibre GL JS map with heat maps showing peak production, rig density, and section values, while running complex financial calculations including hyperbolic decline curves for production forecasting, NPV calculations with multiple discount rate scenarios, and economic modeling that accounts for royalty rates, deduction rates, operating expenses, and capital costs. Built as a pnpm monorepo with Next.js 14 (React 18, TypeScript, Mantine v7) frontend featuring Zustand state management, TanStack Query for data fetching, and Recharts/Chart.js/ECharts for visualizations paired with a Python FastAPI backend using SQLAlchemy, Pandas, and NumPy to crunch the numbers. The platform processes data across a 5-level geographic hierarchy (States → Counties → Townships → Sections → Wells), generates PDP (Producing Developed Petroleum) and PUD (Proved Undeveloped) forecasts, offers multi-scenario analysis (low/expected/high), creates PDF reports for premium users, and integrates with PostgreSQL via Supabase for real-time data access. From drilling to dollars, every decision backed by data.",
    image: "/images/projects/minrights-ai.png",
    liveUrl: "",
    githubUrl: null,
    techStack: [
      // Based on the comprehensive deep dive analysis from PM1, PM2, and the architecture planner, here is
      // the complete inventory of ALL tech stacks in the codebase:

      // 🏗️ Complete Tech Stack Inventory

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
      { name: "energy-chatbot", icon: "chatbot", color: "#FF6B6B" },

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
    category: "Websites",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 3,
  },
  {
    id: "excel-glass",
    title: "Excel Glass Inc. - Corporate Website",
    description:
      "A stunning headless WordPress website for Excel Glass, Inc., a prestigious glass company with 28 years of excellence in the industry. Built as a modern JAMstack architecture using WordPress as a headless CMS with Faust.js, the site showcases their premium glass products and services through elegant animations and interactive galleries. Features include a hero section with glass-effect backgrounds, animated service showcases with hover effects, client testimonial carousels, achievement counters highlighting their decades of service, portfolio galleries of completed projects, multi-channel contact options (forms, click-to-call, WhatsApp, social media), interactive Google Maps integration, and responsive design optimized for all devices. The website combines Playfair Display serif fonts for elegant headings with modern Inter sans-serif for body text, creating a sophisticated brand presence that reflects their professional craftsmanship.",
    image: "/images/projects/excel-glass.webp",
    liveUrl: "https://excel-glass.vercel.app",
    githubUrl: null,
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
    category: "Websites",
    status: "Completed",
    completedAt: "2024",
  },
  {
    id: "myprotein-scraper",
    title: "MyProtein Product Scraper",
    description:
      "High-performance web scraper for MyProtein products with JavaScript rendering capabilities. Extracts comprehensive product data including flavors, sizes, prices, nutritional information, and product variations using Scrapy and Selenium WebDriver for dynamic content handling.",
    image: "/images/projects/myprotein-scraper.png",
    liveUrl: "",
    githubUrl: null,
    techStack: [
      // Core Framework & Runtime
      { name: "Python 3.11+", icon: "python", color: "#3776AB" },
      { name: "Scrapy 2.11.0", icon: "scrapy", color: "#60A917" },
      { name: "Selenium WebDriver", icon: "selenium", color: "#43B02A" },
      { name: "Chrome WebDriver", icon: "chrome", color: "#4285F4" },

      // Data Processing & Export
      { name: "Pandas 2.1.4", icon: "pandas", color: "#150458" },
      { name: "CSV Export", icon: "csv", color: "#16A34A" },
      { name: "JSON Export", icon: "json", color: "#FFC107" },
      { name: "ItemLoaders 1.1.0", icon: "itemloader", color: "#9C27B0" },

      // Web Scraping & HTTP
      { name: "Requests 2.31.0", icon: "requests", color: "#2563EB" },
      { name: "lxml 4.9.3", icon: "lxml", color: "#8BC34A" },
      { name: "w3lib 2.1.2", icon: "w3lib", color: "#607D8B" },
      { name: "WebDriver Manager", icon: "webdriver", color: "#FF9800" },

      // JavaScript Rendering
      { name: "Selenium Middleware", icon: "middleware", color: "#43B02A" },
      { name: "Chrome Headless", icon: "headless", color: "#4285F4" },
      { name: "WebDriverWait", icon: "wait", color: "#9C27B0" },
      { name: "Dynamic Content Loading", icon: "dynamic", color: "#FF5722" },

      // Configuration & Environment
      { name: "python-dotenv", icon: "dotenv", color: "#ECD53F" },
      { name: "Environment Variables", icon: "env", color: "#4CAF50" },
      { name: "Command Line Interface", icon: "cli", color: "#4B5563" },
      { name: "argparse", icon: "argparse", color: "#6B7280" },

      // Data Validation & Quality
      { name: "Data Validation Pipeline", icon: "validation", color: "#4CAF50" },
      { name: "Duplicate Prevention", icon: "duplicate", color: "#FF9800" },
      { name: "Price Cleaning", icon: "cleaning", color: "#2196F3" },
      { name: "Text Normalization", icon: "normalize", color: "#9C27B0" },

      // Development Tools
      { name: "Poetry", icon: "poetry", color: "#60A5FA" },
      { name: "pytest 7.4.3", icon: "pytest", color: "#0A9EDC" },
      { name: "black 23.11.0", icon: "black", color: "#000000" },
      { name: "flake8 6.1.0", icon: "flake8", color: "#3F51B5" },

      // Architecture Patterns
      { name: "Pipeline Architecture", icon: "pipeline", color: "#FF6B6B" },
      { name: "Middleware Pattern", icon: "pattern", color: "#8BC34A" },
      { name: "Item Processing", icon: "processing", color: "#FF9800" },
      { name: "Async Operations", icon: "async", color: "#00D8FF" },

      // Performance & Optimization
      { name: "Concurrent Requests", icon: "concurrent", color: "#4CAF50" },
      { name: "Rate Limiting", icon: "ratelimit", color: "#FF9800" },
      { name: "HTTP Caching", icon: "cache", color: "#2196F3" },
      { name: "Auto Throttling", icon: "throttle", color: "#9C27B0" },

      // Error Handling & Monitoring
      { name: "Retry Logic", icon: "retry", color: "#FF5722" },
      { name: "Comprehensive Logging", icon: "logging", color: "#6B7280" },
      { name: "Error Recovery", icon: "recovery", color: "#4CAF50" },
      { name: "Progress Tracking", icon: "progress", color: "#2196F3" },
    ],
    features: [
      "JavaScript rendering with Selenium WebDriver for dynamic content",
      "Comprehensive product data extraction: names, prices, descriptions, images",
      "Product variation handling: flavors, sizes, nutritional information",
      "Intelligent CSS selector strategy with fallback mechanisms",
      "CSV and JSON export with structured data validation",
      "Anti-detection measures: rotating user agents and respectful rate limiting",
      "Pagination handling for complete category scraping",
      "Duplicate prevention and data deduplication",
      "Price cleaning and discount percentage calculation",
      "Configurable concurrency and download delays",
      "Robust error handling with retry strategies",
      "Resume capability with HTTP caching for interrupted sessions",
      "Pattern matching for standardized content (sizes: '250g', '1kg')",
      "Real-time progress tracking and comprehensive logging",
      "Command-line interface with customizable parameters",
      "Multiple output formats: CSV, JSON with timestamps",
      "Category-based product classification and brand detection",
      "Stock status monitoring and availability tracking",
      "Rating and review count extraction",
      "Nutritional information parsing with regex patterns",
      "URL format compatibility with automatic updates",
      "Memory-efficient processing for large datasets",
      "Production-ready configuration with environment variables",
      "Modular pipeline architecture for data processing",
      "Quality assurance with automated testing and validation",
    ],
    category: "Scraping",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 4,
  },
  {
    id: "gabe-gmb-scraper",
    title: "Gabe GMB Multi-Worker Scraper",
    description:
      "A sophisticated Google My Business scraper engineered for maximum efficiency and data quality. Features 13 parallel Chrome browsers with anti-detection mechanisms, processing 25 cities across British Columbia with 57 business categories. Built for lead generation with intelligent website filtering and real-time data validation.",
    image: "/images/projects/gabe-gmb-scraper.png",
    liveUrl: "",
    githubUrl: null,
    techStack: [
      // Core Framework & Runtime
      { name: "Python 3.11+", icon: "python", color: "#3776AB" },
      { name: "Selenium WebDriver", icon: "selenium", color: "#43B02A" },
      { name: "undetected-chromedriver", icon: "chrome", color: "#4285F4" },
      { name: "Chrome Browser 138", icon: "chrome", color: "#4285F4" },

      // Multi-Processing & Concurrency
      { name: "multiprocessing", icon: "multiprocessing", color: "#FF6384" },
      { name: "threading", icon: "threading", color: "#FF4154" },
      { name: "Queue Manager", icon: "queue", color: "#9C27B0" },
      { name: "Process Pool", icon: "pool", color: "#4CAF50" },

      // Data Processing & Export
      { name: "Pandas", icon: "pandas", color: "#150458" },
      { name: "CSV Export", icon: "csv", color: "#16A34A" },
      { name: "JSON Export", icon: "json", color: "#FFC107" },
      { name: "Data Validation", icon: "validation", color: "#4CAF50" },

      // Anti-Detection & Stealth
      { name: "Undetected Chrome", icon: "stealth", color: "#43B02A" },
      { name: "Random Delays", icon: "random", color: "#FF9800" },
      { name: "Human-like Scrolling", icon: "scroll", color: "#2196F3" },
      { name: "Viewport Randomization", icon: "viewport", color: "#9C27B0" },
      { name: "User Agent Rotation", icon: "useragent", color: "#607D8B" },

      // Browser Management
      { name: "WebDriverWait", icon: "wait", color: "#9C27B0" },
      { name: "Chrome Options", icon: "config", color: "#4285F4" },
      { name: "Health Monitoring", icon: "health", color: "#4CAF50" },
      { name: "Automatic Recovery", icon: "recovery", color: "#FF5722" },

      // Performance & Optimization
      { name: "13 Parallel Browsers", icon: "parallel", color: "#FF6B6B" },
      { name: "Sequential Launch", icon: "sequence", color: "#2196F3" },
      { name: "Load Balancing", icon: "balance", color: "#4CAF50" },
      { name: "Memory Management", icon: "memory", color: "#9C27B0" },

      // Data Quality & Validation
      { name: "Website Detection", icon: "detection", color: "#FF9800" },
      { name: "Duplicate Prevention", icon: "duplicate", color: "#F44336" },
      { name: "Phone Validation", icon: "phone", color: "#4CAF50" },
      { name: "Address Validation", icon: "address", color: "#2196F3" },
      { name: "Business Classification", icon: "classification", color: "#9C27B0" },

      // Geographic & Business Logic
      { name: "25 BC Cities Coverage", icon: "geography", color: "#8BC34A" },
      { name: "57 Business Categories", icon: "categories", color: "#FF5722" },
      { name: "Lead Qualification", icon: "qualification", color: "#4CAF50" },
      { name: "Location Targeting", icon: "targeting", color: "#2196F3" },

      // Error Handling & Monitoring
      { name: "Retry Logic", icon: "retry", color: "#FF5722" },
      { name: "Graceful Degradation", icon: "graceful", color: "#4CAF50" },
      { name: "Real-time Logging", icon: "logging", color: "#6B7280" },
      { name: "Progress Tracking", icon: "progress", color: "#2196F3" },
      { name: "Health Checks", icon: "health", color: "#4CAF50" },

      // Output & Reporting
      { name: "Real-time CSV Output", icon: "csv", color: "#16A34A" },
      { name: "JSON Export", icon: "json", color: "#FFC107" },
      { name: "Statistics Dashboard", icon: "stats", color: "#8884D8" },
      { name: "Lead Counting", icon: "counter", color: "#FF6384" },

      // Architecture & Design
      { name: "Worker Pattern", icon: "worker", color: "#607D8B" },
      { name: "Multi-City Distribution", icon: "distribution", color: "#4CAF50" },
      { name: "Intelligent Extraction", icon: "extraction", color: "#FF9800" },
      { name: "Browser Health Validation", icon: "validation", color: "#4CAF50" },
    ],
    features: [
      "13 parallel Chrome browsers for maximum scraping speed (13x faster)",
      "Covers 25 cities across British Columbia with 57 business categories",
      "Anti-detection system with undetected Chrome and human-like behavior",
      "Intelligent website filtering - only businesses WITHOUT websites",
      "Real-time data validation with strict phone and address requirements",
      "Multi-worker architecture with automatic city distribution",
      "Health monitoring and automatic browser recovery mechanisms",
      "Duplicate prevention using business name + city combination",
      "Sequential browser launch with health validation for stability",
      "Graceful error handling with individual failure isolation",
      "Real-time CSV and JSON output with immediate data saving",
      "Smart list extraction to minimize detail page clicks",
      "Chrome version matching (138.x) with automatic driver management",
      "Random delays and human-like scrolling patterns",
      "Quality-focused data collection with strict validation rules",
      "Progress tracking with detailed statistics and logging",
      "Memory-efficient processing with connection pooling",
      "Two-check website detection system based on screenshot analysis",
      "Load balancing across workers with failed city redistribution",
      "Production-ready configuration with environment management",
      "Comprehensive business data extraction (name, phone, address, maps link)",
      "Industry-specific categorization and lead qualification",
      "Timeout management and page load optimization",
      "Viewport and window positioning for visual monitoring",
      "Automatic retry and recovery for failed operations",
    ],
    category: "Scraping",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 6,
  },

  {
    id: "wedding-memories",
    title: "Nichols Wedding Memories - Love Story Timeline",
    description:
      "An elegant interactive wedding website that beautifully chronicles Jamaica and Morgan's love story from their digital meeting on Filipino Cupid to their wedding day. Features a stunning hero section, chronological timeline with five key milestone events (Digital Beginning in May 2023, First Visit & Proposal in December 2023, and more), each showcasing optimized image carousels with touch/swipe gestures and keyboard navigation. Built with Next.js 13.5, React 19, TypeScript, and Prisma 6 for the RSVP system, the site includes a full-size photo gallery with lightbox, automatic image advancement every 5 seconds, WebP and AVIF format optimization, responsive device sizes, blur placeholders for smooth loading, and an RSVP system for guests. The image carousels display at 600px height with object-fit contain for proper scaling, feature smooth transitions and animations, and are fully accessible. A romantic digital experience that captures their journey and invites guests to celebrate their special day.",
    image: "/images/projects/wedding-memories.webp",
    liveUrl: "https://nicholsweddingmemories.vercel.app",
    githubUrl: null,
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
    category: "Websites",
    status: "Completed",
    completedAt: "2024",
  },
  {
    id: "kusina-de-amadeo",
    title: "Kusina de Amadeo - Restaurant Showcase",
    description:
      "A modern product showcase website for Kusina de Amadeo restaurant, highlighting their authentic Filipino cuisine and signature dishes. Built with Next.js 14, React 19, and TypeScript, featuring beautiful product galleries with Framer Motion animations, responsive design with Tailwind CSS and Shadcn UI components, Radix UI primitives for accessible interactions, Zustand state management for smooth user experience, and Sonner toast notifications for user feedback. The site showcases the restaurant's menu items with optimized images, smooth scroll animations, and elegant hover effects that bring their culinary offerings to life. Deployed on Vercel with environment variables for different stages, featuring modular component-based architecture with proper TypeScript typing throughout.",
    image: "/images/projects/kda-product-showcase.vercel.app.jpeg",
    liveUrl: "https://kda-product-showcase.vercel.app/",
    githubUrl: null,
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
    category: "Websites",
    status: "In Progress",
    completedAt: "2024",
  },
  {
    id: "t1nker-pc-rental",
    title: "T1NKER PC Rental & Management System",
    description:
      "A complete full-stack PC rental ecosystem for internet cafes that combines a powerful web admin dashboard with Electron desktop clients deployed on every rental machine. Imagine a cyber cafe management system where admins can monitor all PCs in real-time through beautiful analytics dashboards with charts showing revenue, session statistics, and PC utilization - while customers interact with sleek kiosk interfaces on each rental computer to start/end sessions and make payments. Built with Next.js 15 (React 19, TypeScript) for the web dashboard and Electron for the desktop clients, all connected to Supabase PostgreSQL with real-time subscriptions that instantly sync data across all devices. Features Zustand stores for client-side state management, Tremor & Recharts for stunning analytics visualizations, bcryptjs for secure password hashing, and automated builds for individual PC deployments. The system tracks every second of usage, processes payments accurately, generates comprehensive reports, and provides a seamless experience from customer login to admin oversight.",
    image: "/images/projects/tinker-pc-rental.png",
    liveUrl: "",
    githubUrl: null,
    techStack: [
      // Frontend Framework
      { name: "Next.js 15.3.2", icon: "nextjs", color: "#E5E7EB" },
      { name: "React 19.0.0", icon: "react", color: "#61DAFB" },
      { name: "TypeScript 5", icon: "typescript", color: "#3178C6" },

      // Styling & UI
      { name: "Tailwind CSS 4.1.8", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Radix UI", icon: "radix", color: "#FF69B4" },
      { name: "Shadcn/ui", icon: "shadcn", color: "#E5E7EB" },
      { name: "Framer Motion 12.15.0", icon: "framer", color: "#0055FF" },
      { name: "Lucide React", icon: "lucide", color: "#94A3B8" },
      { name: "React Icons", icon: "react-icons", color: "#94A3B8" },
      { name: "next-themes", icon: "theme", color: "#4B5563" },

      // Backend & Database
      { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "Supabase Real-time", icon: "realtime", color: "#3ECF8E" },
      { name: "Supabase Auth", icon: "auth", color: "#3ECF8E" },
      { name: "Row Level Security", icon: "security", color: "#4CAF50" },
      { name: "Supabase SSR", icon: "ssr", color: "#3ECF8E" },

      // State Management
      { name: "Zustand 5.0.4", icon: "zustand", color: "#FF4154" },
      { name: "adminStore", icon: "store", color: "#FF4154" },
      { name: "clientStore", icon: "store", color: "#FF4154" },
      { name: "activityLogStore", icon: "store", color: "#FF4154" },
      { name: "adminNotificationStore", icon: "store", color: "#FF4154" },

      // Data Visualization & Charts
      { name: "Tremor React 3.18.7", icon: "tremor", color: "#8884D8" },
      { name: "Recharts 2.15.3", icon: "recharts", color: "#8884D8" },

      // Authentication & Security
      { name: "bcryptjs", icon: "lock", color: "#F7B32B" },
      { name: "Next.js Middleware", icon: "middleware", color: "#E5E7EB" },

      // Utilities & Tools
      { name: "date-fns", icon: "date-fns", color: "#770C98" },
      { name: "clsx", icon: "clsx", color: "#0284C7" },
      { name: "tailwind-merge", icon: "tailwind", color: "#06B6D4" },
      { name: "class-variance-authority", icon: "cva", color: "#16A34A" },
      { name: "react-toastify", icon: "toast", color: "#FF6B35" },
      { name: "sonner", icon: "sonner", color: "#4F46E5" },
      { name: "Resend", icon: "email", color: "#00A95C" },

      // Desktop Application
      { name: "Electron 36.2.1", icon: "electron", color: "#47848F" },
      { name: "Electron Builder", icon: "builder", color: "#47848F" },
      { name: "PNPM", icon: "pnpm", color: "#F69220" },

      // Development Tools
      { name: "ESLint 9", icon: "eslint", color: "#4B32C3" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
      { name: "Autoprefixer", icon: "autoprefixer", color: "#DD3A0A" },
      { name: "Turbopack", icon: "turbopack", color: "#0070F3" },
      { name: "cross-env", icon: "env", color: "#4CAF50" },

      // Build & Deployment
      { name: "Next.js Build System", icon: "build", color: "#E5E7EB" },
      { name: "Vercel-ready", icon: "vercel", color: "#E5E7EB" },
      { name: "GitHub Actions", icon: "github", color: "#181717" },

      // Architecture Patterns
      { name: "Server Components", icon: "server", color: "#61DAFB" },
      { name: "API Routes", icon: "api", color: "#FF4154" },
      { name: "Multi-client Architecture", icon: "architecture", color: "#9C27B0" },
      { name: "Modular Components", icon: "components", color: "#2196F3" },
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
    category: "Websites",
    status: "Completed",
    completedAt: "2025",
    featured: true,
    featuredRank: 5,
  },
];
