export interface Scan {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "queued" | "failed";
  severity: "critical" | "high" | "medium" | "low";
  domain: string;
  lastScanned: string;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  totalVulnerabilities: number;
}

export interface Finding {
  id: string;
  title: string;
  severity: "critical" | "high" | "medium" | "low";
  cvss: number;
  description: string;
  remediation: string;
  cwe: string;
  discoveredDate: string;
  status: "open" | "fixed" | "acknowledged";
}

export interface ScanActivity {
  timestamp: string;
  message: string;
  type: "info" | "warning" | "error" | "success";
}

export const mockScans: Scan[] = [
  {
    id: "scan-001",
    name: "API Gateway Scan",
    status: "completed",
    severity: "critical",
    domain: "api.example.com",
    lastScanned: "2024-03-01T10:30:00Z",
    criticalCount: 3,
    highCount: 5,
    mediumCount: 12,
    lowCount: 8,
    totalVulnerabilities: 28,
  },
  {
    id: "scan-002",
    name: "Web Portal Security",
    status: "completed",
    severity: "high",
    domain: "portal.example.com",
    lastScanned: "2024-03-01T09:15:00Z",
    criticalCount: 0,
    highCount: 2,
    mediumCount: 8,
    lowCount: 15,
    totalVulnerabilities: 25,
  },
  {
    id: "scan-003",
    name: "Database Infrastructure",
    status: "completed",
    severity: "medium",
    domain: "db.internal.example.com",
    lastScanned: "2024-02-28T18:45:00Z",
    criticalCount: 0,
    highCount: 1,
    mediumCount: 6,
    lowCount: 9,
    totalVulnerabilities: 16,
  },
];

export const mockFindings: Finding[] = [
  {
    id: "finding-001",
    title: "SQL Injection Vulnerability in Login Form",
    severity: "critical",
    cvss: 9.8,
    description:
      "The authentication endpoint does not properly validate or sanitize user input, allowing attackers to execute arbitrary SQL commands.",
    remediation:
      "Use parameterized queries and prepared statements. Implement input validation and output encoding.",
    cwe: "CWE-89",
    discoveredDate: "2024-03-01T10:30:00Z",
    status: "open",
  },
  {
    id: "finding-002",
    title: "Cross-Site Scripting (XSS) in User Profile",
    severity: "high",
    cvss: 8.2,
    description:
      "User input in profile pages is not properly escaped, allowing stored XSS attacks.",
    remediation:
      "Implement output encoding and use CSP headers to prevent inline script execution.",
    cwe: "CWE-79",
    discoveredDate: "2024-02-28T14:15:00Z",
    status: "acknowledged",
  },
  {
    id: "finding-003",
    title: "Weak Cryptographic Algorithm",
    severity: "high",
    cvss: 7.5,
    description:
      "The application uses MD5 for password hashing, which is cryptographically broken.",
    remediation:
      "Migrate to bcrypt, scrypt, or Argon2 for password hashing with appropriate cost factors.",
    cwe: "CWE-327",
    discoveredDate: "2024-02-27T11:00:00Z",
    status: "open",
  },
  {
    id: "finding-004",
    title: "Missing HTTPS Configuration",
    severity: "critical",
    cvss: 9.1,
    description:
      "Several endpoints are accessible over unencrypted HTTP, exposing sensitive data.",
    remediation:
      "Enable HTTPS for all endpoints and configure HSTS header to enforce secure connections.",
    cwe: "CWE-295",
    discoveredDate: "2024-02-26T09:30:00Z",
    status: "open",
  },
  {
    id: "finding-005",
    title: "Insecure Direct Object References",
    severity: "high",
    cvss: 7.8,
    description:
      "API endpoints do not validate user permissions, allowing access to other users' data.",
    remediation:
      "Implement proper access control checks for all API endpoints.",
    cwe: "CWE-639",
    discoveredDate: "2024-02-25T15:45:00Z",
    status: "fixed",
  },
];

export const mockScanActivities: ScanActivity[] = [
  {
    timestamp: "14:52:34",
    message: "Starting security scan for api.example.com",
    type: "info",
  },
  {
    timestamp: "14:52:45",
    message: "Discovered 45 open ports",
    type: "info",
  },
  {
    timestamp: "14:53:12",
    message: "Port 8080 running vulnerable version of Apache",
    type: "warning",
  },
  {
    timestamp: "14:53:45",
    message: "Critical SQL injection found in login endpoint",
    type: "error",
  },
  {
    timestamp: "14:54:02",
    message: "Checking SSL/TLS configuration",
    type: "info",
  },
  {
    timestamp: "14:54:33",
    message: "SSL certificate valid until 2025-03-15",
    type: "success",
  },
];

export function getScanById(id: string): Scan | undefined {
  return mockScans.find((scan) => scan.id === id);
}

export function getRandomScans(count: number): Scan[] {
  return mockScans.slice(0, count);
}

export function filterScansBySeverity(severity: string): Scan[] {
  return mockScans.filter((scan) => scan.severity === severity);
}

export function searchScans(query: string): Scan[] {
  const lowerQuery = query.toLowerCase();
  return mockScans.filter(
    (scan) =>
      scan.name.toLowerCase().includes(lowerQuery) ||
      scan.domain.toLowerCase().includes(lowerQuery),
  );
}
