import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({children}: ProtectedLayoutProps) {
  const { isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <>
    {children}
    </>
  )
}