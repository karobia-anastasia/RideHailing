import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import Layout from "./pages/Layout";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy-loaded components
const AvailableRides = lazy(() => import("./pages/dashboard/AvailableRides"));
const RideHistory = lazy(() => import("./pages/dashboard/RideHistory"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Non-lazy routes */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Layout wrapper for dashboard routes */}
            <Route element={<Layout />}>
              <Route path="/available-rides" element={<AvailableRides />} />
              <Route path="/history" element={<RideHistory />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
