import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    });
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and security preferences
        </p>
      </div>

      {/* Organization Settings */}
      <div className="p-6 bg-card rounded-lg border border-border">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Organization</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Organization Name
              </label>
              <input
                placeholder="Your Organization"
                defaultValue="Acme Corp"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                placeholder="admin@example.com"
                defaultValue="admin@example.com"
                type="email"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                API Key
              </label>
              <div className="flex gap-2">
                <input
                  placeholder="sk_live_..."
                  value="sk_live_51234567890abcdefghijklmnop"
                  readOnly
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-xs focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
                <button className="px-4 py-2.5 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  Copy
                </button>
              </div>
            </div>

            <button
              onClick={handleSave}
              className="px-4 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="p-6 bg-card rounded-lg border border-border">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Notifications</h2>

          <div className="space-y-3">
            {[
              {
                label: "Critical vulnerabilities",
                description: "Get notified immediately of critical findings",
              },
              {
                label: "Weekly digest",
                description: "Receive a weekly summary of all scans",
              },
              {
                label: "Scan completion",
                description: "Get notified when scans complete",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
            ))}
          </div>

          <button
            onClick={handleSave}
            className="px-4 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </div>

      {/* Security */}
      <div className="p-6 bg-card rounded-lg border border-border border-destructive/20 bg-destructive/5">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Danger Zone</h2>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Delete your account and all associated data
            </p>
            <button className="px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
