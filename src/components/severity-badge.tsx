import { cn } from "@/lib/utils";

interface SeverityBadgeProps {
  severity: "critical" | "high" | "medium" | "low";
  size?: "sm" | "md" | "lg";
}

export function SeverityBadge({ severity, size = "md" }: SeverityBadgeProps) {
  const severityConfig = {
    critical: {
      label: "Critical",
      bg: "bg-severity-critical/10 dark:bg-severity-critical/20",
      text: "text-severity-critical",
      dot: "bg-severity-critical",
    },
    high: {
      label: "High",
      bg: "bg-severity-high/10 dark:bg-severity-high/20",
      text: "text-severity-high",
      dot: "bg-severity-high",
    },
    medium: {
      label: "Medium",
      bg: "bg-severity-medium/10 dark:bg-severity-medium/20",
      text: "text-severity-medium",
      dot: "bg-severity-medium",
    },
    low: {
      label: "Low",
      bg: "bg-severity-low/10 dark:bg-severity-low/20",
      text: "text-severity-low",
      dot: "bg-severity-low",
    },
  };

  const config = severityConfig[severity];
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-2.5 py-1.5 text-sm",
    lg: "px-3 py-2 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        config.bg,
        config.text,
        sizeClasses[size],
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", config.dot)} />
      {config.label}
    </span>
  );
}
