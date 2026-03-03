import { cn } from "@/lib/utils";

interface StatusChipProps {
  status:
    | "completed"
    | "in-progress"
    | "queued"
    | "failed"
    | "open"
    | "fixed"
    | "acknowledged";
  size?: "sm" | "md";
}

export function StatusChip({ status, size = "md" }: StatusChipProps) {
  const statusConfig = {
    completed: {
      label: "Completed",
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-300",
      dot: "bg-green-500",
    },
    "in-progress": {
      label: "In Progress",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-300",
      dot: "bg-blue-500",
    },
    queued: {
      label: "Queued",
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-700 dark:text-gray-300",
      dot: "bg-gray-500",
    },
    failed: {
      label: "Failed",
      bg: "bg-red-100 dark:bg-red-900/30",
      text: "text-red-700 dark:text-red-300",
      dot: "bg-red-500",
    },
    open: {
      label: "Open",
      bg: "bg-red-100 dark:bg-red-900/30",
      text: "text-red-700 dark:text-red-300",
      dot: "bg-red-500",
    },
    fixed: {
      label: "Fixed",
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-300",
      dot: "bg-green-500",
    },
    acknowledged: {
      label: "Acknowledged",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      text: "text-yellow-700 dark:text-yellow-300",
      dot: "bg-yellow-500",
    },
  };

  const config = statusConfig[status];
  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1.5",
    md: "px-2.5 py-1.5 text-sm gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
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
