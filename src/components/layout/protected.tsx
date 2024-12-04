import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({children}: ProtectedLayoutProps) {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  
  if (!isAuthenticated) {
    navigate(-1)
    return 
  }

  return (
    {children}
  )
}