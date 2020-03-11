import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import HistorySection from '../../components/HistorySection/HistorySection';
import VideoSection from '../../components/VideoSection/VideoSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return <div className="home_page">
            <Hero />

            <div style={{height: "150px", overflow: "hidden"}} >
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" 
                  style={{stroke: "none", fill: "#f8e994"}}>
                </path>
              </svg>
            </div>

            <HistorySection />

            <div style={{height: "150px", overflow: "hidden"}} >
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
                  style={{stroke: "none", fill: "#08f"}}>
                </path>
              </svg>
            </div>

            <VideoSection />

            <div style={{height: "150px", overflow: "hidden"}} >
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" 
                  style={{stroke: "none", fill: "#08f"}}>
                </path>
              </svg>
            </div>

            <ContactSection />
            <Footer />
          </div>
}

export default Home;
