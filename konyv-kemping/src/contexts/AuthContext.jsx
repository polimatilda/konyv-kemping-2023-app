import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth"
import { database } from "../firebase"
import { collection, addDoc } from "firebase/firestore";


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password, name) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        // Create a new document for the user in the 'users' collection
        addDoc(collection(database, 'users'), {
          userId: cred.user.uid,
          name: name,
          guild: [],
          tbr: []
        });
      })

    //similar: database.collection('users').doc(cred.user.uid).set({name: name}) -> where you create a new doc in users collection using the unique user id.

  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function emailUpdate(email) {
    return updateEmail(auth.currentUser, email)
  }

  function passwordUpdate(password) {
    return updatePassword(auth.currentUser, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    passwordUpdate,
    emailUpdate
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}