import React, { createContext, useState, useContext, useEffect } from "react";

// Define a type for the context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook to access the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// ThemeProvider component to wrap around the app
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme state with value from localStorage if available
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState<string>(storedTheme);

  // Effect hook to update localStorage and body class whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Update the body class based on the theme
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
