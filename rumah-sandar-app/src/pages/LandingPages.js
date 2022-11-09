import ContentLandingPage from "../components/ContentLandingPage";
import ContentLandingPageOrphan from "../components/ContentLandingPageOrphan";
import CardContent from "../components/CardContent";
import HeaderNavbar from "../components/HeaderNavbar";
import CardMaterial from "../components/CardMaterial";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../components/Footer";
import { checkLoginUserData } from "../redux/user";

const LandingPage = () => {
  let dispatch = useDispatch();
  let { loginUserDataNow,checkLoginUserDataLoading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(checkLoginUserData());
  }, []);
  console.log(loginUserDataNow)
  return (
    <>
      <HeaderNavbar />
      {(loginUserDataNow && loginUserDataNow?.role === "orphan") && <ContentLandingPageOrphan />}
      {(!loginUserDataNow || loginUserDataNow?.role === "volunteer") && <ContentLandingPage />}
      {loginUserDataNow?.role === "orphan" && <CardMaterial />}
      <CardContent />
      <Footer />
    </>
  );
};

export default LandingPage;
