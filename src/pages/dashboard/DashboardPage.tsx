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
    icon: <Ban className="w-4 h-4 dark:text-gray-900" />,
  },
  {
    label: "High Severity",
    val: 16,
    sub: "+0.9% increase than yesterday",
    icon: <TriangleAlert className="w-4 h-4 dark:text-gray-900" />,
  },
  {
    label: "Medium Severity",
    val: 26,
    sub: "+0.9% decrease than yesterday",
    icon: <TriangleAlert className="w-4 h-4 dark:text-gray-900" />,
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
    <div className="p-6 lg:p-8 space-y-6 bg-zinc-50">
      <div className="p-3 bg-white rounded">
        <div className="bg-topbar border-topbarBorder pb-10">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {STATS_ITEMS.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-semibold text-text">{item.value}</span>
                </div>

                {index < STATS_ITEMS.length - 1 && (
                  <span className="text-gray-400 ml-6">|</span>
                )}
              </div>
            ))}

            <div className="flex items-center gap-1 text-gray-500 ml-auto">
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
                  <div className="w-7 h-7 rounded bg-badge flex items-center justify-center bg-[#ededed]">
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

      <div className="space-y-4 bg-white p-3 rounded">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted" />
            <input
              type="text"
              placeholder="Search scans by name or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border bg-white text-text placeholder-textSub rounded-lg text-sm focus:outline-none"
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
            <button className="px-3 py-2.5 bg-btnPrimary text-btnPrimaryText rounded text-sm font-medium hover:opacity-90 transition-colors flex items-center gap-2 bg-[#818181] text-white cursor-pointer">
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
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-600 dark:bg-gray-500 rounded-full"
                            style={{ width: `${row.prog}%` }}
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
                            className="w-6 h-6 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium flex items-center justify-center"
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
