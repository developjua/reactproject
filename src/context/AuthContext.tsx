import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
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
  const [chartLabels, setChartLabels] = useState<string[]>([
    "Counter",
    "Editor",
    "Form",
  ]);

  const login = (usernames: string, passwords: string) => {
    const details = localStorage.getItem("userdetails");
        if(details==null){
          alert("Please signup");
        }
        console.log(details)
        const {username,password} =JSON.parse( details)
        console.log(username,password);

        if (usernames === username && passwords === password) {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", "true");
        } else {
          alert("Invalid credentials");
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