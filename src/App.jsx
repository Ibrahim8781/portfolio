"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import WorkTabs from "./components/WorkTabs"
import CredentialsTabs from "./components/CredentialsTabs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <h2>Loading Portfolio...</h2>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <WorkTabs />
        <CredentialsTabs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
