import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header isPrivacy onShowHome={() => (window.location.href = '/')} />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
