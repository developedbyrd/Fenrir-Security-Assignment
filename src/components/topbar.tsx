import { Home } from "lucide-react";

interface TopbarProps {
  showActions?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
}

export function Topbar({
  showActions = true,
  breadcrumbs = [
    { label: "Scan" },
    { label: "Private Assets" },
    { label: "New Scan" },
  ],
}: TopbarProps) {
  return (
    <header
      className="bg-topbar border-b border-topbarBorder px-6 h-14 flex items-center justify-between sticky top-0 z-10"
      style={{
        backgroundColor: "var(--color-topbar)",
        borderColor: "var(--color-topbarBorder)",
      }}
    >
      <div className="flex items-center gap-2 text-sm">
        <span className="font-bold text-text ml-1">Scan</span>

        <Home className="w-4 h-4 text-textMuted" />

        {breadcrumbs.slice(1).map((crumb, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-textMuted">/</span>
            <span className="text-textMuted">{crumb.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {showActions && (
          <>
            <button className="px-4 py-2 border border-btnBorder rounded-lg text-sm font-medium text-text hover:bg-badge transition-colors cursor-pointer">
              Export Report
            </button>
            <button className="px-4 py-2 border border-btnBorder rounded-lg text-sm font-medium text-textMuted hover:bg-badge transition-colors cursor-pointer">
              Stop Scan
            </button>
          </>
        )}
      </div>
    </header>
  );
}
