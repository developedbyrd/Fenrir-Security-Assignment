import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Apple, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validate form
  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.length >= 8 &&
    formData.terms === true;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    // Simulate account creation delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to dashboard on success
    navigate("/dashboard");
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Seamless gradient background covering full viewport */}
      <div className="fixed inset-0 bg-linear-to-br from-slate-900 via-teal-800 to-orange-600 z-0" />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 lg:px-12 pt-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shrink-0">
              <div className="w-6 h-6 rounded-full bg-linear-to-br from-teal-300 to-orange-300" />
            </div>
            <span className="text-white font-medium text-base">aps</span>
          </div>
          {/* Theme toggle */}
          <ThemeToggle />
        </div>

        {/* Main content - split layout */}
        <div className="flex-1 flex items-center justify-end px-6 lg:px-0 py-8 lg:py-0">
          {/* Left side - Hero content (hidden on mobile) */}
          <div className="hidden lg:flex absolute left-0 inset-y-0 w-1/2 flex-col justify-center px-12">
            <div className="max-w-md space-y-8">
              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-6xl font-bold leading-tight text-white">
                  Expert level <span className="font-light">Cybersecurity</span>
                </h1>
                <p className="text-5xl font-bold text-white">
                  in <span className="font-light">hours</span> not weeks.
                </p>
              </div>

              {/* Features section */}
              <div className="space-y-6">
                <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                  What's included
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 text-xl font-bold shrink-0 leading-none mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-gray-200 leading-relaxed">
                      Effortlessly spider and map targets to uncover hidden
                      security flaws
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 text-xl font-bold shrink-0 leading-none mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-gray-200 leading-relaxed">
                      Deliver high-quality, validated findings in hours, not
                      weeks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 text-xl font-bold shrink-0 leading-none mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-gray-200 leading-relaxed">
                      Generate professional, enterprise-grade security reports
                      automatically.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Trustpilot rating */}
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-white font-semibold text-sm">
                    Trustpilot
                  </span>
                </div>
                <p className="text-white text-sm">
                  Rated <span className="font-bold">4.5/5.0</span>{" "}
                  <span className="text-gray-300">(100k+ reviews)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form card */}
          <div className="w-full lg:w-1/2 max-w-md lg:mr-12 xl:mr-16 shrink-0">
            <div className="bg-white dark:bg-slate-950 rounded-3xl p-8 lg:p-10 shadow-2xl">
              {/* Form header */}
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Sign up
              </h2>

              <p className="text-sm text-muted-foreground mb-8">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-accent hover:underline font-semibold"
                >
                  Log in
                </a>
              </p>

              {/* Form */}
              <form onSubmit={handleCreateAccount} className="space-y-4">
                {/* First name input */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name*"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Last name input */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name*"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Email input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Password input */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password (8+ characters)*"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-colors pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Terms checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-border mt-1 cursor-pointer accent-accent"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs text-foreground cursor-pointer leading-relaxed"
                  >
                    I agree to Aps's{" "}
                    <span className="font-semibold">Terms of Service</span> and
                    acknowledge the{" "}
                    <span className="font-semibold">Privacy Policy</span>
                  </label>
                </div>

                {/* Create account button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`w-full py-3.5 rounded-full font-semibold transition-all mt-8 ${
                    isFormValid && !isLoading
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </button>

                {/* Social login buttons */}
                <div className="flex gap-3 mt-6 pt-2">
                  {/* Apple button - filled black */}
                  <button
                    type="button"
                    className="flex-1 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <Apple className="w-5 h-5" />
                  </button>

                  {/* Chrome/Google button - outlined */}
                  <button
                    type="button"
                    className="flex-1 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-foreground font-medium hover:bg-muted/50 transition-colors flex items-center justify-center"
                  >
                    <Globe className="w-5 h-5" />
                  </button>

                  {/* Other provider button - outlined */}
                  <button
                    type="button"
                    className="flex-1 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-foreground font-medium hover:bg-muted/50 transition-colors flex items-center justify-center"
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
