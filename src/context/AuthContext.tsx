import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  signup: (username: string, password: string) => void; // Add signup method
  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: (value: boolean) => void;
  chartData: number[];
  chartLabels: string[];
  updateChartData: (interactionType: "counter" | "editor" | "form") => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [chartData, setChartData] = useState<number[]>([0, 0, 0]);

 const [chartLabels] = useState<string[]>(["Counter", "Editor", "Form"]);

  const signup = (username: string, password: string) => {
    const existingUser = localStorage.getItem("userdetails");
    if (existingUser) {
      const { username: existingUsername } = JSON.parse(existingUser);
      if (existingUsername === username) {
        alert("Username already exists. Please choose a different username.");
        return;
      }
    }

    localStorage.setItem("userdetails", JSON.stringify({ username, password }));
    alert("Signup successful! Please login.");
  };

  const login = (username: string, password: string) => {
    const details = localStorage.getItem("userdetails");
    if (!details) {
      alert("Please signup first.");
      return;
    }

    const { username: storedUsername, password: storedPassword } =
      JSON.parse(details);

    if (username === storedUsername && password === storedPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Invalid credentials.");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  const updateChartData = (interactionType: "counter" | "editor" | "form") => {
    const index = chartLabels.indexOf(
      interactionType.charAt(0).toUpperCase() + interactionType.slice(1)
    );

    if (index !== -1) {
      const newData = [...chartData];
      newData[index] += 1;
      setChartData(newData);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        signup,
        hasUnsavedChanges,
        setHasUnsavedChanges,
        chartData,
        chartLabels,
        updateChartData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
