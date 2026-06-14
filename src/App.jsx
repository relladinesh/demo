import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to drastically reduce initial bundle size and improve load times
const Stats = lazy(() => import('./components/Stats'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const TransformationJourney = lazy(() => import('./components/TransformationJourney'));
const Industries = lazy(() => import('./components/Industries'));
const WhyZipFoundry = lazy(() => import('./components/WhyZipFoundry'));
const Technology = lazy(() => import('./components/Technology'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Suspense boundary delays loading these heavy components until the main thread is free */}
        <Suspense fallback={<div className="h-32 bg-transparent" />}>
          <Stats />
          <About />
          <Services />
          <TransformationJourney />
          <Industries />
          <WhyZipFoundry />
          <Technology />
          <Process />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-transparent" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
