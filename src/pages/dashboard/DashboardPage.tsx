import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Columns2,
  ListFilter,
  Ban,
  RefreshCcw,
  TriangleAlert,
  MoveUp,
  MoveDown,
} from "lucide-react";

const scanRows = [
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    prog: 100,
    vuln: [5, 12, 23, 18],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    prog: 100,
    vuln: [5, 12, 23, 18],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    prog: 100,
    vuln: [5, 12, 23, 18],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    prog: 100,
    vuln: [5, 12, 23, 18],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    prog: 100,
    vuln: [5, 12, 23, 18],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    prog: 100,
    vuln: [5, 12, 23, 18],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    prog: 100,
    vuln: [5, 12, 23, 18],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    prog: 100,
    vuln: [5, 12],
    last: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    prog: 100,
    vuln: [5, 12],
    last: "4d ago",
  },
  {
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    prog: 10,
    vuln: [2, 4, 8, 1],
    last: "3d ago",
  },
  {
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    prog: 10,
    vuln: [2, 4, 8, 1],
    last: "3d ago",
  },
];

const severityStats = [
  {
    label: "Critical Severity",
    val: 86,
    sub: "+25 increase than yesterday",
    icon: <Ban className="w-4 h-4" style={{ color: "var(--color-text)" }} />,
  },
  {
    label: "High Severity",
    val: 16,
    sub: "+0.9% increase than yesterday",
    icon: <TriangleAlert className="w-4 h-4" style={{ color: "var(--color-text)" }} />,
  },
  {
    label: "Medium Severity",
    val: 26,
    sub: "+0.9% decrease than yesterday",
    icon: <TriangleAlert className="w-4 h-4" style={{ color: "var(--color-text)" }} />,
  },
  {
    label: "Low Severity",
    val: 16,
    sub: "+0.9% increase than yesterday",
    icon: "",
  },
];

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getStatusStyle = (status: string) => {
    const map: Record<string, { classes: string }> = {
      Completed: {
        classes: "status-badge-light",
      },
      Scheduled: {
        classes: "status-badge-light",
      },
      Failed: {
        classes: "status-badge-light",
      },
    };
    return map[status] || map.Completed;
  };

  const filteredRows = scanRows.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.type.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const STATS_ITEMS = [
    { label: "Org:", value: "Project X" },
    { label: "Owner:", value: "Nammigiri" },
    { label: "Total Scans:", value: "100" },
    { label: "Scheduled:", value: "1000" },
    { label: "Rescans:", value: "100" },
    { label: "Failed Scans:", value: "100" },
  ] as const;

  return (
    <div className="p-6 lg:p-8 space-y-6" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="p-3 rounded" style={{ backgroundColor: "var(--color-card)" }}>
        <div className="border-b pb-10" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-topbarBorder)" }}>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {STATS_ITEMS.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <div className="flex items-center gap-2">
                  <span style={{ color: "var(--color-textMuted)" }}>{item.label}</span>
                  <span className="font-semibold text-text">{item.value}</span>
                </div>

                {index < STATS_ITEMS.length - 1 && (
                  <span style={{ color: "var(--color-textMuted)" }} className="ml-6">|</span>
                )}
              </div>
            ))}

            <div className="flex items-center gap-1 ml-auto" style={{ color: "var(--color-textMuted)" }}>
              <RefreshCcw className="w-4 h-4" />
              <span>10 mins ago</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {severityStats.map((stat, i) => {
            const isIncrease = stat.sub.includes("increase");
            return (
              <div key={i} className="p-4 bg-card">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-sm text-textMuted font-medium">
                    {stat.label}
                  </span>
                  <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: "var(--color-badge)" }}>
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-1 flex items-center gap-1">
                  <p className="text-4xl font-bold text-text">{stat.val}</p>
                  {isIncrease ? (
                    <MoveUp className="w-3 h-3" />
                  ) : (
                    <MoveDown className="w-3 h-3" />
                  )}
                  <p className="text-xs text-textMuted">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4 p-3 rounded" style={{ backgroundColor: "var(--color-card)" }}>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted" />
            <input
              type="text"
              placeholder="Search scans by name or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border text-text placeholder-textSub rounded-lg text-sm focus:outline-none"
              style={{ backgroundColor: "var(--color-input)" }}
            />
          </div>
          <div className="flex gap-2 lg:shrink-0">
            <button className="px-3 py-2.5 border border-border rounded text-sm font-medium text-text hover:bg-badge transition-colors flex items-center gap-2 cursor-pointer">
              <ListFilter className="w-4 h-4" />
              Filter
            </button>
            <button className="px-3 py-2.5 border border-border rounded text-sm font-medium text-text hover:bg-badge transition-colors flex items-center gap-2 cursor-pointer">
              <Columns2 className="w-4 h-4" />
              Column
            </button>
            <button className="px-3 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-colors flex items-center gap-2 cursor-pointer" style={{ backgroundColor: "var(--color-btnPrimary)", color: "var(--color-btnPrimaryText)" }}>
              <Plus className="w-4 h-4" />
              New scan
            </button>
          </div>
        </div>

        <div className="bg-card rounded-lg border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-tableHd border-b border-border">
              <tr>
                {[
                  "Scan Name",
                  "Type",
                  "Status",
                  "Progress",
                  "Vulnerability",
                  "Last Scan",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left font-semibold text-text"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, i) => {
                const statusStyle = getStatusStyle(row.status);
                return (
                  <tr
                    key={i}
                    onClick={() => navigate(`/dashboard/scans/${i + 1}`)}
                    className="hover:bg-rowHover transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium text-text">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 text-textMuted">{row.type}</td>
                    <td className="px-6 py-4">
                      <span className={`status-badge ${statusStyle.classes}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-progressBg)" }}>
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${row.prog}%`, backgroundColor: "var(--color-progressFill)" }}
                          />
                        </div>
                        <span className="text-xs text-textMuted w-8">
                          {row.prog}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1 justify-center">
                        {row.vuln.map((v, idx) => (
                          <span
                            key={idx}
                            className="w-6 h-6 rounded text-xs font-medium flex items-center justify-center"
                            style={{ backgroundColor: "var(--color-vuln)", color: "var(--color-vulnText)" }}
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-textMuted text-xs">
                      {row.last}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between text-xs text-textMuted pt-2">
          <span>Showing {filteredRows.length} of 100 Scans</span>
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded border border-border hover:bg-badge transition-colors flex items-center justify-center">
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button className="w-6 h-6 rounded border border-border hover:bg-badge transition-colors flex items-center justify-center">
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
