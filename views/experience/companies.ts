import { Company } from "./types";

const akvelon: Company = {
  name: "Akvelon, Inc.",
  position: "Software Development Engineer",
  startDate: "May 2021",
  endDate: "Present",
  location: "Remote",
  description:
    "Worked on several client and internal projects - from product features and integrations to internal tools and platform work. Involved in technical research, RFCs, and solution design beyond just implementation.",
  projects: [
    {
      name: "Internal Tools & R&D",
      startDate: "Jan 2026",
      endDate: "Present",
      icon: "brainCircuit",
      achievements: [
        "Developed an Azure DevOps workflow enriching task descriptions via Azure Functions and RAG-based processing.",
        "Built a cross-platform time-tracking tool for developers using Go, a VS Code extension, and a Chrome extension.",
        "Researched AI agent capabilities and prepared technical project ideas for intern mentorship.",
        "Improved reliability of internal projects through refactoring and technical debt reduction.",
      ],
    },
    {
      name: "Enterprise API Gateway & Extensibility Platform",
      startDate: "Jun 2025",
      endDate: "Jan 2026",
      icon: "router",
      achievements: [
        "Developed an API gateway and transformation layer over multiple backend services, standardizing auth and integration contracts.",
        "Implemented transformation plugins and a Kafka-based event routing service for payload normalization.",
        "Introduced OpenTelemetry instrumentation to track gateway overhead and simplify production troubleshooting.",
        "Built internal tools for generating API Gateway configs and SDKs from OpenAPI specifications.",
      ],
    },
    {
      name: "Real-time Expense & Travel Management",
      startDate: "Sep 2021",
      endDate: "May 2025",
      icon: "receipt",
      achievements: [
        "Improved ERP integrations with NetSuite, Sage Intacct, and QuickBooks - manual sync controls, pause functionality, better error handling.",
        "Centralized RBAC into a dedicated Lambda authorizer backed by DynamoDB-stored roles and permissions.",
        "Reworked a hardcoded CSV/Excel export flow into a configurable system with custom columns and ordering.",
        "Developed travel expense analytics using Tinybird and pre-aggregated views for fast reporting on large datasets.",
        "Replaced legacy password auth with passwordless OTP email login, improving security and UX.",
        "Established a reusable NestJS foundation for new backend services, including shared libraries with Pulumi.",
      ],
    },
  ],
};

export const companies: Company[] = [akvelon];
