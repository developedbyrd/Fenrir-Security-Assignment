import { useState } from "react";
import { mockFindings } from "@/lib/mock-data";

export default function VulnerabilitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredFindings = mockFindings.filter((finding) => {
    const matchesSearch =
      finding.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      finding.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSeverity =
      !severityFilter || finding.severity === severityFilter;
    const matchesStatus = !statusFilter || finding.status === statusFilter;

    return matchesSearch && matchesSeverity && matchesStatus;
  });

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Vulnerabilities</h1>
        <p className="text-muted-foreground">
          All security findings across your organization
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Critical",
            count: mockFindings.filter((f) => f.severity === "critical").length,
            severity: "critical" as const,
          },
          {
            label: "High",
            count: mockFindings.filter((f) => f.severity === "high").length,
            severity: "high" as const,
          },
          {
            label: "Medium",
            count: mockFindings.filter((f) => f.severity === "medium").length,
            severity: "medium" as const,
          },
          {
            label: "Low",
            count: mockFindings.filter((f) => f.severity === "low").length,
            severity: "low" as const,
          },
        ].map((item) => (
          <div
            key={item.severity}
            className="p-6 bg-card rounded-lg border border-border"
          >
            <p className="text-sm text-muted-foreground font-medium mb-2">
              {item.label}
            </p>
            <p className="text-3xl font-bold">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="p-6 bg-card rounded-lg border border-border space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <input
            placeholder="Search vulnerabilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2.5 border border-border bg-background text-foreground placeholder-muted-foreground rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
          <select
            value={severityFilter || ""}
            onChange={(e) => setSeverityFilter(e.target.value || null)}
            className="px-3 py-2.5 border border-border bg-background text-foreground rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
          >
            <option value="">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select
            value={statusFilter || ""}
            onChange={(e) => setStatusFilter(e.target.value || null)}
            className="px-3 py-2.5 border border-border bg-background text-foreground rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
          >
            <option value="">All Statuses</option>
            <option value="open">Open</option>
            <option value="fixed">Fixed</option>
            <option value="acknowledged">Acknowledged</option>
          </select>
        </div>
      </div>

      {/* Findings */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground font-medium">
          Showing {filteredFindings.length} of {mockFindings.length} findings
        </p>

        {filteredFindings.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredFindings.map((finding) => (
              <div
                key={finding.id}
                className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-foreground">
                      {finding.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {finding.description}
                    </p>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>CVSS: {finding.cvss}</span>
                      <span>CWE: {finding.cwe}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                        finding.severity === "critical"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : finding.severity === "high"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                            : finding.severity === "medium"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {finding.severity.charAt(0).toUpperCase() +
                        finding.severity.slice(1)}
                    </span>
                    <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded flex-shrink-0">
                      {finding.status.charAt(0).toUpperCase() +
                        finding.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 bg-card rounded-lg border border-border text-center">
            <p className="text-muted-foreground">
              No vulnerabilities match your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
