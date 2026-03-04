// import { useNavigate, useLocation } from "react-router-dom";
// import { LayoutDashboard, Search, AlertCircle, Settings } from "lucide-react";
// import { ThemeToggle } from "./theme-toggle";

// export function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navItems = [
//     {
//       key: "dashboard",
//       label: "Dashboard",
//       href: "/dashboard",
//       icon: <LayoutDashboard className="w-5 h-5" />,
//     },
//     {
//       key: "scans",
//       label: "Scans",
//       href: "/dashboard/scans",
//       icon: <Search className="w-5 h-5" />,
//     },
//     {
//       key: "vulnerabilities",
//       label: "Vulnerabilities",
//       href: "/dashboard/vulnerabilities",
//       icon: <AlertCircle className="w-5 h-5" />,
//     },
//     {
//       key: "settings",
//       label: "Settings",
//       href: "/dashboard/settings",
//       icon: <Settings className="w-5 h-5" />,
//     },
//   ];

//   const isActive = (href: string) => {
//     if (href === "/dashboard") {
//       return (
//         location.pathname === "/dashboard" ||
//         location.pathname === "/dashboard/"
//       );
//     }
//     return location.pathname.startsWith(href);
//   };

//   return (
//     <aside
//       className="fixed left-0 top-0 h-full bg-sidebar border-r border-sidebarBorder transition-all duration-300 z-40 w-20 lg:w-64"
//       style={{
//         backgroundColor: "var(--color-sidebar)",
//         borderColor: "var(--color-sidebarBorder)",
//       }}
//     >
//       <div className="flex flex-col h-full">
//         {/* Header */}
//         <div className="h-20 flex items-center justify-between px-2 lg:px-4 border-b border-sidebarBorder">
//           <div className="hidden lg:flex items-center gap-3">
//             <div className="w-8 h-8 rounded-full bg-badge flex items-center justify-center">
//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="12" cy="8" r="4" />
//                 <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
//               </svg>
//             </div>
//             <span className="font-bold text-base text-text">aps</span>
//           </div>
//           <div className="lg:hidden w-8 h-8 rounded-full bg-badge flex items-center justify-center">
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <circle cx="12" cy="8" r="4" />
//               <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
//             </svg>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 px-2 lg:px-3 py-6 space-y-1">
//           {navItems.map((item) => {
//             const active = isActive(item.href);
//             return (
//               <button
//                 key={item.key}
//                 onClick={() => navigate(item.href)}
//                 className={`w-full h-10 lg:h-auto lg:py-2 lg:px-3 rounded-lg flex items-center justify-center lg:justify-start gap-3 transition-colors text-sm font-medium cursor-pointer ${
//                   active
//                     ? "bg-activeNav text-text"
//                     : "text-textMuted hover:text-text hover:bg-activeNav/50"
//                 }`}
//                 style={
//                   active ? { backgroundColor: "var(--color-activeNav)" } : {}
//                 }
//               >
//                 {item.icon}
//                 <span className="hidden lg:inline">{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>

//         {/* Footer */}
//         <div className="p-3 lg:p-4 border-t border-sidebarBorder space-y-3">
//           <div className="flex justify-center lg:justify-start">
//             <ThemeToggle />
//           </div>

//           {/* User profile */}
//           <div className="flex items-center gap-2 px-2 py-2">
//             <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
//               <span className="text-xs font-bold text-orange-900">A</span>
//             </div>
//             <div className="hidden lg:block flex-1 min-w-0">
//               <div className="text-xs text-textMuted truncate">
//                 admin@edu.com
//               </div>
//               <div className="text-sm font-semibold text-text">
//                 Security Lead
//               </div>
//             </div>
//             <button className="hidden lg:block text-textMuted hover:text-text">
//               <svg
//                 width="13"
//                 height="13"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M9 18l6-6-6-6" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderOpen,
  Search,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const mainNavItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      key: "projects",
      label: "Projects",
      href: "/dashboard/projects",
      icon: <FolderOpen className="w-4 h-4" />,
    },
    {
      key: "scans",
      label: "Scans",
      href: "/dashboard/scans",
      icon: <Search className="w-4 h-4" />,
    },
    {
      key: "schedule",
      label: "Schedule",
      href: "/dashboard/schedule",
      icon: <Calendar className="w-4 h-4" />,
    },
  ];

  const secondaryNavItems = [
    {
      key: "notifications",
      label: "Notifications",
      href: "/dashboard/notifications",
      icon: <Bell className="w-4 h-4" />,
    },
    {
      key: "settings",
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      key: "support",
      label: "Support",
      href: "/dashboard/support",
      icon: <HelpCircle className="w-4 h-4" />,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return (
        location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/"
      );
    }
    return location.pathname.startsWith(href);
  };

  return (
    <aside
      className="fixed left-0 top-0 h-full bg-sidebar border-r border-sidebarBorder transition-all duration-300 z-40 w-20 lg:w-64"
      style={{
        backgroundColor: "var(--color-sidebar)",
        borderColor: "var(--color-sidebarBorder)",
      }}
    >
      <div className="flex flex-col h-full">
        <div className="h-20 flex items-center justify-between px-2 lg:px-4 border-b border-sidebarBorder">
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-500 backdrop-blur-sm flex items-center justify-center shrink-0">
              <div className="w-4 h-4 rounded-full bg-white" />
            </div>
            <span className="font-bold text-base text-text">aps</span>
          </div>
          <div className="lg:hidden w-8 h-8 rounded-full bg-badge flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        </div>

        <nav className="flex-1 px-2 lg:px-3 py-6">
          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const active = isActive(item.href);
              return (
                <button
                  key={item.key}
                  onClick={() => navigate(item.href)}
                  className={`w-full h-10 lg:h-auto lg:py-2 lg:px-3 rounded-lg flex items-center justify-center lg:justify-start gap-3 transition-colors text-sm font-medium cursor-pointer ${
                    active
                      ? "bg-activeNav text-text"
                      : "text-textMuted hover:text-text hover:bg-activeNav/50"
                  }`}
                  style={
                    active ? { backgroundColor: "var(--color-activeNav)" } : {}
                  }
                >
                  <span className={active ? "text-text" : "text-textMuted"}>
                    {item.icon}
                  </span>
                  <span className="hidden lg:inline">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="my-4 border-t border-sidebarBorder" />

          <div className="space-y-1">
            {secondaryNavItems.map((item) => {
              const active = isActive(item.href);
              return (
                <button
                  key={item.key}
                  onClick={() => navigate(item.href)}
                  className={`w-full h-10 lg:h-auto lg:py-2 lg:px-3 rounded-lg flex items-center justify-center lg:justify-start gap-3 transition-colors text-sm font-medium cursor-pointer ${
                    active
                      ? "bg-activeNav text-text"
                      : "text-textMuted hover:text-text hover:bg-activeNav/50"
                  }`}
                  style={
                    active ? { backgroundColor: "var(--color-activeNav)" } : {}
                  }
                >
                  <span className={active ? "text-text" : "text-textMuted"}>
                    {item.icon}
                  </span>
                  <span className="hidden lg:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="p-3 lg:p-4 border-t border-sidebarBorder space-y-3">
          <div className="flex justify-center lg:justify-start">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-orange-900">A</span>
            </div>
            <div className="hidden lg:block flex-1 min-w-0">
              <div className="text-xs text-textMuted truncate">
                admin@edu.com
              </div>
              <div className="text-sm font-semibold text-text">
                Security Lead
              </div>
            </div>
            <button className="hidden lg:block text-textMuted hover:text-text">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
