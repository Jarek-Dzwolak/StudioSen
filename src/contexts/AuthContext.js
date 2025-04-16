import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config"; // Importujemy auth z firebase-config

// Kontekst autentykacji
const AuthContext = createContext();

// Provider kontekstu autentykacji
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Logowanie przez Google
  const signInWithGoogle = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (err) {
      setError("Wystąpił błąd podczas logowania. Spróbuj ponownie.");
      console.error("Error during Google sign in:", err);
      throw err;
    }
  };

  // Wylogowanie
  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
    } catch (err) {
      setError("Wystąpił błąd podczas wylogowania.");
      console.error("Error during sign out:", err);
      throw err;
    }
  };

  // Obserwowanie zmian stanu autentykacji
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      },
      (error) => {
        console.error("Auth state change error:", error);
        setError("Wystąpił błąd podczas sprawdzania stanu logowania.");
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    error,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook do używania kontekstu autentykacji
export function useAuth() {
  return useContext(AuthContext);
}
