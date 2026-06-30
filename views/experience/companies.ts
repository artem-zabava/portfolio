import { Company } from "./types";

const akvelon: Company = {
  name: "Akvelon, Inc.",
  position: "Software Development Engineer",
  startDate: "May 2021",
  endDate: "Present",
  location: "Remote",
  description:
    "Full-stack engineer working within platform and product teams. Contributed to core architecture, system design, and developer tooling. Mentored junior engineers, helping improve code quality through regular code reviews and technical guidance.",
  projects: [
    {
      name: "GPU Utilization Optimization Platform",
      startDate: "May 2026",
      endDate: "Present",
      icon: "server",
      achievements: [
        "Owned the frontend architecture while contributing to .NET backend services.",
        "Implemented SSE-based real-time log streaming for low-latency observability of GPU workloads.",
        "Built a client-side RBAC system to control access and actions based on user roles across the platform.",
        "Automated API client and TypeScript type generation from OpenAPI specs, eliminating manual API sync issues between frontend and backend.",
        "Set up testing infrastructure using unit tests, e2e and MSW, enabling reliable API mocking and smooth frontend development.",
      ],
    },
    {
      name: "Internal Tools & R&D",
      startDate: "Jan 2026",
      endDate: "May 2026",
      icon: "brainCircuit",
      achievements: [
        "Built Azure Functions-based RAG pipeline for automated enrichment of task descriptions.",
        "Developed cross-platform developer productivity tools (Go backend, VS Code extension, Chrome extension).",
        "Contributed to internal AI research initiatives and engineering prototypes for automation workflows.",
        "Refactored legacy internal systems to improve maintainability and reduce technical debt.",
      ],
    },
    {
      name: "Enterprise API Gateway & Extensibility Platform",
      startDate: "Jun 2025",
      endDate: "Jan 2026",
      icon: "router",
      achievements: [
        "Developed an API gateway and transformation layer over multiple backend services, helping standardize authentication and external integration contracts.",
        "Implemented transformation plugins and a Kafka-based event routing service to normalize payloads and route events to customer-defined functions.",
        "Introduced OpenTelemetry instrumentation to track gateway overhead and simplify troubleshooting in production.",
        "Built internal tools that reduced development overhead, including generation of API Gateway configs and SDKs from OpenAPI specifications.",
      ],
    },
    {
      name: "Real-time Expense & Travel Management",
      startDate: "Sep 2021",
      endDate: "May 2025",
      icon: "receipt",
      achievements: [
        "Improved ERP integrations (NetSuite, Sage Intacct, QuickBooks) with robust sync control and failure recovery mechanisms.",
        "Centralized RBAC system using AWS Lambda authorizer and DynamoDB-based permissions model.",
        "Designed configurable CSV/Excel export engine with dynamic schema support.",
        "Built analytics pipeline using Tinybird enabling fast financial reporting on large datasets.",
        "Implemented passwordless authentication (OTP email-based login), improving security and UX.",
        "Established reusable NestJS backend foundation and infrastructure patterns using Pulumi.",
      ],
    },
  ],
};

export const companies: Company[] = [akvelon];
