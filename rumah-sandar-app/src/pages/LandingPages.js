import ContentLandingPage from '../components/ContentLandingPage';
import CardContent from '../components/CardContent';
import HeaderNavbar from '../components/HeaderNavbar';
import CardMaterial from '../components/CardMaterial';

import { useEffect } from 'react';

import Footer from '../components/Footer';

const LandingPage = () => {

  useEffect(() => {
    console.log('INI DI LANDING PAGE')
  })
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
