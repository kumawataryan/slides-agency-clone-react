import React from 'react'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar'
import Header from './components/Header'
import Clients from './components/Clients'
import ReviewSection from './components/ReviewSection'
import RecordingSection from './components/RecordingSection'
import VideoFeaturesSection from './components/VideoFeaturesSection'
import CtaSection from './components/CtaSection'
import UseCasesSection from './components/UseCasesSection'
import FeatureSection from './components/FeatureSection'
import BlogSection from './components/BlogSection'
import EnterpriseSection from './components/EnterpriseSection'
import TestimonialSection from './components/TestimonialSection'
import FooterCta from './components/FooterCta'
import Footer from './components/Footer'

const App = () => (
  <>
  <Navbar />
  <Header />
  <Clients />
  <ReviewSection />
  <RecordingSection />
  <VideoFeaturesSection />
  <CtaSection />
  <UseCasesSection />
  <FeatureSection />
  <BlogSection />
  <EnterpriseSection />
  <TestimonialSection />
  <FooterCta />
  <Footer />
  </>
)
export default App