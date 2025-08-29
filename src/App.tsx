import './App.css';
import { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Provides from './components/Provides/Provides';
import Product from './components/Product/Product';
import HubBusiness from './components/HubBusiness/HubBusiness';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Reasons from './components/Reasons/Reasons';
import FAQ from './components/FAQ/FAQ';
import OurHubsGallery from './components/OurHubsGallery/OurHubsGallery';
import MoreInfo from './components/MoreInfo/MoreInfo';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Footer/Footer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ToastProvider from './components/Toast/ToastProvider';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPolicy, setShowPolicy] = useState(false);

  const openPolicy = () => {
    setShowPolicy(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePolicy = () => {
    setShowPolicy(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        setActiveIndex={setActiveIndex}
        isPrivacy={showPolicy}
        onShowHome={closePolicy}
      />

      {showPolicy ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
          <Provides />
          <Product />
          <HubBusiness
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <Partners />
          <Modules />
          <Reasons />
          <OurHubsGallery />
          <FAQ />
          <MoreInfo />
        </main>
      )}

      <Footer onPolicyClick={openPolicy} />
      <ToastProvider />
    </>
  );
}

export default App;
