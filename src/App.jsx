import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import Layout from "./pages/Layout";
import { ThemeProvider } from "./context/ThemeContext";

const AvailableRides = lazy(() => import("./pages/dashboard/AvailableRides"));
const RideHistory = lazy(() => import("./pages/dashboard/RideHistory"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route element={<Layout />}>
              <Route path="/" element={<AvailableRides />} />
              <Route path="/history" element={<RideHistory />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
