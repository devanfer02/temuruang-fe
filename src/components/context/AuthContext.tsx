import React, { createContext, useContext, useEffect, useState } from "react";
import { UserLoginDTO } from "../../types/dto";
import { authLogin } from "../../services/auth";
import { jwtDecode } from "jwt-decode";

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextType {
  user: any;
  login: (dto: UserLoginDTO) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("user");
    if (storedToken) {
      setUser(jwtDecode(storedToken))
    }
    setLoading(false)
  }, [])

  const login = async (cred: UserLoginDTO): Promise<boolean> => {
    setLoading(true);
    const [success, data] = await authLogin(cred);
    setLoading(false);

    if (!success) {
      return false 
    }

    setUser(jwtDecode(data));
    localStorage.setItem("user", data); 
    return true
  };

  const logout = () => {
    setUser(null); 
    localStorage.removeItem("user"); 
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};