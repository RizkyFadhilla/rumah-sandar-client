import ContentLandingPage from '../components/ContentLandingPage';
import CardContent from '../components/CardContent';
import HeaderNavbar from '../components/HeaderNavbar';
import CardMaterial from '../components/CardMaterial';

const LandingPage = () => {
  return (
    <>
      <HeaderNavbar />
      <ContentLandingPage />
      {localStorage.getItem('role') === 'orphan' && (
      <CardMaterial/>)}
      <CardContent /> 
    </>
  );
};

export default LandingPage;
