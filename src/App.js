import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ReviewSection from './components/ReviewSection/ReviewSection';
import DownnloadSection from './components/DownloadSection/DownnloadSection';
import Footer from './components/Footer/Footer';
import ChooseUsSection from './components/ChooseUsSection/ChooseUsSection';

function App() {
  return (
    <div className='App'>
      <NavigationBar/>
      <WelcomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ChooseUsSection/>
      <ReviewSection/>
      <DownnloadSection/>
      <Footer/>
    </div>
  )
}


export default App;