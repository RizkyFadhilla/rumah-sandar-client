import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  checkLoginUserData,
  checkLoginUserMatch,
  fetchClassCategories,
  requestMatchOrphan,
} from "../redux/user";
import { useEffect } from "react";
import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LogoProfile from "../assets/ex-photo-kakak.jpg";
import LogoRumahSandar from "../assets/logo-rumah-sandar.png";
// import {
//   EmailShareButton,
//   EmailIcon,
//   FacebookShareButton,
//   FacebookIcon,
//   HatenaShareButton,
//   InstapaperShareButton,
//   LineShareButton,
//   LinkedinShareButton,
//   LivejournalShareButton,
//   MailruShareButton,
//   OKShareButton,
//   PinterestShareButton,
//   PocketShareButton,
//   RedditShareButton,
//   TelegramShareButton,
//   TumblrShareButton,
//   TwitterIcon,
//   TwitterShareButton,
//   ViberShareButton,
//   VKShareButton,
//   WhatsappShareButton,
//   WhatsappIcon,
//   WorkplaceShareButton,
// } from "react-share";
import Logo from "../assets/content.png";

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutHandler(e) {
    e.preventDefault();

    localStorage.clear()
    dispatch(fetchClassCategories())
      .then(() => {
        return dispatch(checkLoginUserData())
      }).then(() => {
        return navigate("/");
      })

    toast("Akun kamu berhasil keluar!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(() => {
    dispatch(checkLoginUserData())
  }, [])
  const access_token = localStorage.access_token;
  const role = localStorage.role;
  const isMatched = localStorage.isMatched;
  const username = localStorage.username;
  const imageProfile = localStorage.image;
  // const shareUrl = "https://rumah-sandar.web.app/";
  // const title = "Rumah Sandar";

  return (
    <Navbar bg="light" variant="light" className="navbar" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={LogoRumahSandar}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        {/* <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={30} round />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} quote={title} separator=":: ">
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} quote={title}>
          <EmailIcon size={30} round />
        </EmailShareButton>
        <TwitterShareButton url={shareUrl} quote={title}>
          <TwitterIcon size={30} round />
        </TwitterShareButton> */}

        <Nav className="">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          {role !== "orphan" && (
            <Nav.Link onClick={() => navigate("/orphanages")}>
              Daftar Panti
            </Nav.Link>
          )}
          {!access_token && (
            <NavDropdown title="Daftar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="" onClick={() => navigate("/register")}>
                Relawan
              </NavDropdown.Item>
              <NavDropdown.Item
                href=""
                onClick={() => navigate("/register-adik")}
              >
                Adik Asuh
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {!access_token && (
            <NavDropdown title="Masuk" id="navbarScrollingDropdown">
              <NavDropdown.Item
                href=""
                onClick={() => navigate("/loginVolunteer")}
              >
                Relawan
              </NavDropdown.Item>
              <NavDropdown.Item href="" onClick={() => navigate("/login")}>
                Adik Asuh
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {access_token && role === "volunteer" && isMatched === "notMatch" && (
            <Nav.Link onClick={() => navigate("/orphansList")}>
              Daftar Adik
            </Nav.Link>
          )}
          {access_token && isMatched === "alreadyMatch" && (
            <Nav.Link onClick={() => navigate("/schedule")}>
              Jadwal Kelas
            </Nav.Link>
          )}
          {access_token && (
            <NavDropdown title={username} id="navbarScrollingDropdown">
              <NavDropdown.Item href="" onClick={() => navigate('/detail-user')}>
                Profil
              </NavDropdown.Item>
              <NavDropdown.Item href="" onClick={logoutHandler}>
                Keluar
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {access_token && (
            <Image
              src={imageProfile}
              width={"40"}
              height={"40"}
              roundedCircle={true}
            />
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
