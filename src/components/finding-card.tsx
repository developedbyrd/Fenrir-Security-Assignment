import { Finding } from "@/lib/mock-data";
import { SeverityBadge } from "./severity-badge";
import { StatusChip } from "./status-chip";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface FindingCardProps {
  finding: Finding;
}

export function FindingCard({ finding }: FindingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">
              {finding.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{finding.cwe}</p>
          </div>
          <div className="flex items-center gap-2">
            <SeverityBadge severity={finding.severity} size="sm" />
            <span className="text-sm font-mono font-semibold text-accent">
              {finding.cvss}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <StatusChip status={finding.status as any} size="sm" />
          <span className="text-xs text-muted-foreground">
            {new Date(finding.discoveredDate).toLocaleDateString()}
          </span>
        </div>

        {isExpanded && (
          <div className="space-y-3 pt-3 border-t border-border">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                Description
              </p>
              <p className="text-sm text-foreground">{finding.description}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                Remediation
              </p>
              <p className="text-sm text-foreground">{finding.remediation}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
