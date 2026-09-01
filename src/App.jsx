"use client"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
  }, [])

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-ring" />
        <p className="loader-text">Loading</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <Portfolio />
    </div>
  )
}

export default App
