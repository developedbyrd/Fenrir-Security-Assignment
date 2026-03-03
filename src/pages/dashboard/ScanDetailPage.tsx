import { useState } from "react";
import { Settings, Map, Check, CheckCircle, FileText, X } from "lucide-react";

// Mock findings from Claude code
const findings = [
  {
    sev: "Critical",
    color: "#dc2626",
    bg: "rgba(127,29,29,0.3)",
    border: "rgba(185,28,28,0.5)",
    title: "SQL Injection in Authentication Endpoint",
    path: "/api/users/profile",
    desc: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    time: "10:45:23",
  },
  {
    sev: "High",
    color: "#ea580c",
    bg: "rgba(120,53,15,0.3)",
    border: "rgba(194,65,12,0.5)",
    title: "Unauthorized Access to User Metadata",
    path: "/api/auth/login",
    desc: "Authenticated low-privilege user able to access metadata of other users. Access control checks missing.",
    time: "10:45:23",
  },
  {
    sev: "Medium",
    color: "#b45309",
    bg: "rgba(113,63,18,0.3)",
    border: "rgba(161,98,7,0.5)",
    title: "Broken Authentication Rate Limiting",
    path: "/api/search",
    desc: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    time: "10:45:23",
  },
];

const stageLabels = [
  "Spidering",
  "Mapping",
  "Testing",
  "Validating",
  "Reporting",
];
const stageIcons = [Settings, Map, Check, CheckCircle, FileText];

const logLines = [
  {
    time: "[09:00:00]",
    text: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
  },
  {
    time: "[09:01:00]",
    text: "Good! target is online. Now let me perform port scanning to identify running services.",
  },
  {
    time: "[09:02:00]",
    text: "Excellent reconnaissance results: helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server) Let me probe the web server on target first to understand its structure.",
  },
  {
    time: "[09:03:00]",
    text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential.',
  },
  {
    time: "[09:04:00]",
    text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.",
  },
  {
    time: "[09:05:00]",
    text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths.",
  },
  {
    time: "[09:06:00]",
    text: "Great! I can access the dashboard using the 'X-UserId: 10032' header. This suggests an IDOR vulnerability - I can access any user's dashboard by just changing the X-UserId header.",
  },
];

export default function ScanDetailPage() {
  const [activeTab, setActiveTab] = useState<"activity" | "verification">(
    "activity",
  );

  const metaFields = [
    ["Scan Type", "Grey Box"],
    ["Targets", "google.com"],
    ["Started At", "Nov 22, 09:00AM"],
    ["Credentials", "2 Active"],
    ["Files", "Control.pdf"],
    ["Checklists", "40/350"],
  ];

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="bg-card border border-cardBorder rounded-xl overflow-hidden">
        <div className="p-6 flex items-center gap-6">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-vuln border-4 border-border flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-text">0%</span>
              <span className="text-[10px] text-textMuted">In Progress</span>
            </div>
          </div>

          <div className="flex-1 flex items-center">
            {stageLabels.map((label, i) => {
              const Icon = stageIcons[i];
              return (
                <div key={i} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-badge border border-border flex items-center justify-center text-textMuted">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-textMuted font-medium whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                  {i < stageLabels.length - 1 && (
                    <div className="flex-1 h-px bg-border mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-border mx-6" />

        <div className="grid grid-cols-6 gap-4 p-4">
          {metaFields.map(([label, val], i) => (
            <div key={i}>
              <div className="text-xs text-textMuted uppercase tracking-wider mb-1">
                {label}
              </div>
              <div className="text-sm font-bold text-text">{val}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
        <div className="bg-[#1a1a1a] border-b border-[#222] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 pulse" />
            <span className="font-semibold text-sm text-gray-200">
              Live Scan Console
            </span>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">
              ⏱ Running...
            </span>
          </div>
          <button className="text-gray-600 hover:text-gray-400">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex border-b border-[#1e1e1e] bg-[#111]">
          {[
            ["activity", "Activity Log"],
            ["verification", "Verification Loops"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === key
                  ? "border-gray-400 text-gray-200"
                  : "border-transparent text-gray-500 hover:text-gray-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex h-96">
          <div className="flex-1 p-4 font-mono text-xs text-gray-400 space-y-2 overflow-auto bg-[#111]">
            {logLines.map((line, i) => (
              <div key={i}>
                <span className="text-blue-400">{line.time}</span> {line.text}
              </div>
            ))}
          </div>

          <div className="w-px bg-[#1e1e1e]" />

          <div className="w-80 p-4 overflow-auto bg-[#0d0d0d]">
            <div className="text-xs font-bold text-gray-200 mb-3 sticky top-0 bg-[#0d0d0d] pb-2">
              Finding Log
            </div>
            <div className="space-y-2">
              {findings.map((f, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: f.bg,
                    borderColor: f.border,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold text-white"
                      style={{ backgroundColor: f.color }}
                    >
                      {f.sev}
                    </span>
                    <span className="text-xs text-gray-500">{f.time}</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-200 mb-1">
                    {f.title}
                  </div>
                  <div className="text-xs text-blue-400 font-mono mb-2">
                    {f.path}
                  </div>
                  <div className="text-xs text-gray-400">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 text-xs text-textMuted">
        <span>● Sub-Agents: 0</span>
        <span>● Parallel Executions: 2</span>
        <span>● Operations: 1</span>
        <span className="ml-auto flex gap-4">
          <span>Critical: 0</span>
          <span>High: 0</span>
          <span>Medium: 0</span>
          <span>Low: 0</span>
        </span>
      </div>
    </div>
  );
}
