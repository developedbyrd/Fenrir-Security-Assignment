import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import LoginPage from "@/pages/LoginPage";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import ScansPage from "@/pages/dashboard/ScansPage";
import ScanDetailPage from "@/pages/dashboard/ScanDetailPage";
import SettingsPage from "@/pages/dashboard/SettingsPage";
import VulnerabilitiesPage from "@/pages/dashboard/VulnerabilitiesPage";
import "@/styles/globals.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="scans" element={<ScansPage />} />
            <Route path="scans/:id" element={<ScanDetailPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="vulnerabilities" element={<VulnerabilitiesPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
