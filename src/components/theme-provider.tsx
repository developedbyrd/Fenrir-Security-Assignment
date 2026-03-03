import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Color tokens from Claude code
const lightColors = {
  bg: "#f8f8f8",
  sidebar: "#ffffff",
  sidebarBorder: "#ebebeb",
  topbar: "#ffffff",
  topbarBorder: "#e5e7eb",
  text: "#111827",
  textMuted: "#6b7280",
  textSub: "#9ca3af",
  border: "#e5e7eb",
  card: "#ffffff",
  cardBorder: "#e5e7eb",
  tableHd: "#f9fafb",
  rowHover: "#f9fafb",
  input: "#ffffff",
  badge: "#f3f4f6",
  badgeText: "#374151",
  activeNav: "#f3f4f6",
  progressBg: "#e5e7eb",
  progressFill: "#6b7280",
  vuln: "#1f2937",
  vulnText: "#f9fafb",
  btnPrimary: "#111827",
  btnPrimaryText: "#ffffff",
  btnBorder: "#d1d5db",
};

const darkColors = {
  bg: "#161616",
  sidebar: "#1a1a1a",
  sidebarBorder: "#262626",
  topbar: "#1a1a1a",
  topbarBorder: "#262626",
  text: "#f0f0f0",
  textMuted: "#888888",
  textSub: "#555555",
  border: "#262626",
  card: "#1e1e1e",
  cardBorder: "#262626",
  tableHd: "#1a1a1a",
  rowHover: "#1e1e1e",
  input: "#1e1e1e",
  badge: "#262626",
  badgeText: "#cccccc",
  activeNav: "#262626",
  progressBg: "#2a2a2a",
  progressFill: "#888888",
  vuln: "#2a2a2a",
  vulnText: "#f0f0f0",
  btnPrimary: "#f0f0f0",
  btnPrimaryText: "#161616",
  btnBorder: "#333333",
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme;
    return stored || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const colors = theme === "dark" ? darkColors : lightColors;

    // Apply CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
