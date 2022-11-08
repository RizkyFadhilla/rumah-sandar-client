import ContentLandingPage from '../components/ContentLandingPage';
import CardContent from '../components/CardContent';
import HeaderNavbar from '../components/HeaderNavbar';
import CardMaterial from '../components/CardMaterial';
import Footer from '../components/Footer';

const LandingPage = () => {
  console.info("open landing pages")
  return (
    <>
      <HeaderNavbar />
      <ContentLandingPage />
      {localStorage.getItem('role') === 'orphan' && (
      <CardMaterial/>)}
      <CardContent /> 
      <Footer/>
    </>
  );
};

export default LandingPage;
