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
  let { loginUserDataNow } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(checkLoginUserData());
  }, []);
  return (
    <>
      <HeaderNavbar />
      {loginUserDataNow.role === "orphan" && <ContentLandingPageOrphan />}
      {loginUserDataNow.role === "volunteer" && <ContentLandingPage />}
      {localStorage.getItem("role") === "orphan" && <CardMaterial />}
      <CardContent />
      <Footer />
    </>
  );
};

export default LandingPage;
