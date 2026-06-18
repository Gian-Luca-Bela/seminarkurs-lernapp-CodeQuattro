import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider, useAuth } from "@/lib/AuthContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Onboarding from "@/pages/Onboarding";
import Vocabulary from "@/pages/Vocabulary";
import Grammar from "@/pages/Grammar";
import Reading from "@/pages/Reading";
import Writing from "@/pages/Writing";
import Listening from "@/pages/Listening";
import Speaking from "@/pages/Speaking";
import Mediation from "@/pages/Mediation";
import DailyPlan from "@/pages/DailyPlan";
import Progress from "@/pages/Progress";
import Exams from "@/pages/Exams";
import Profile from "@/pages/Profile";
import TestMode from "@/pages/TestMode";
import VocabularyTrainer from "@/pages/VocabularyTrainer";
import SeedData from "@/pages/SeedData";
import SettingsPage from "@/pages/Settings";
import VocabScan from "@/pages/VocabScan";
import AutoLearn from "@/pages/AutoLearn";
import Achievements from "@/pages/Achievements";
import LernStrategien from "@/pages/LernStrategien";
import SeedGrammarData from "@/pages/SeedGrammarData";
import { base44 } from "@/api/base44Client";

function OnboardingGuard({ children }) {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["current-user"],
    queryFn: () => base44.auth.me(),
  });

  const { data: profiles, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["user-profile", user?.email],
    queryFn: () => base44.entities.UserProfile.filter({ user_email: user?.email }),
    enabled: Boolean(user?.email),
  });

  if (isLoadingUser || isLoadingProfile || (user?.email && profiles === undefined)) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-primary" />
      </div>
    );
  }

  const profile = profiles?.[0];
  if (!profile || !profile.onboarding_complete) {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
}

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient">
            <span className="text-lg font-bold text-white">EB</span>
          </div>
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary" />
          <p className="mt-3 text-sm text-muted-foreground">English Boost wird geladen...</p>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === "user_not_registered") return <UserNotRegisteredError />;
    if (authError.type === "auth_required") {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route
        element={
          <OnboardingGuard>
            <AppLayout />
          </OnboardingGuard>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/daily-plan" element={<DailyPlan />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/mediation" element={<Mediation />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test-mode" element={<TestMode />} />
        <Route path="/vocab-trainer" element={<VocabularyTrainer />} />
        <Route path="/vocab-scan" element={<VocabScan />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/seed-data" element={<SeedData />} />
        <Route path="/seed-grammar" element={<SeedGrammarData />} />
        <Route path="/auto-learn" element={<AutoLearn />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/lernstrategien" element={<LernStrategien />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <ThemeProvider>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
          <SonnerToaster position="top-center" richColors />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
