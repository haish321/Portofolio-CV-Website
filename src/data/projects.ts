interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  images?: string[];
  features?: string[];
  challenges?: string;
}

export const projects: Project[] = [
  {
    title: "Distributed Task Queue",
    description: "High-performance task queue system built with Go and Redis, handling millions of jobs daily. This system provides reliable task execution, job prioritization, and real-time monitoring capabilities.",
    tech: ["Go", "Redis", "gRPC", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    images: [
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Distributed task processing with automatic retries",
      "Real-time monitoring dashboard",
      "Priority queue implementation",
      "Horizontal scaling capabilities",
      "Dead letter queue handling"
    ],
    challenges: "One of the main challenges was implementing a reliable job scheduling system that could handle millions of tasks while maintaining consistency across multiple nodes. We solved this using Redis for distributed locking and implemented a custom priority queue algorithm."
  },
  {
    title: "Real-time Analytics API",
    description: "Scalable analytics system processing real-time data streams using Node.js and Kafka.",
    tech: ["Node.js", "Kafka", "MongoDB", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.com",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Real-time data processing",
      "Custom analytics dashboard",
      "API rate limiting",
      "Data aggregation pipeline"
    ]
  },
  {
    title: "Authentication Service",
    description: "Secure authentication system with OAuth2 and JWT support, serving multiple microservices.",
    tech: ["Python", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    images: [
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    title: "Searching Service",
    description: "Advanced search service with Elasticsearch integration, providing fast and accurate search results across multiple data sources.",
    tech: ["Python", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    images: [
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    title: "Kafka Service",
    description: "High-throughput message processing service using Apache Kafka for real-time event streaming.",
    tech: ["Python", "PostgreSQL", "Redis", "Docker"],
    demo: "https://demo.com",
    images: [
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1000"
    ]
  }
];