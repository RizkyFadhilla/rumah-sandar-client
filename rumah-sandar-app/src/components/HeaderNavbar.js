import { useDispatch, useSelector } from "react-redux";
import { fetchClassCategories, requestMatchOrphan } from "../redux/user";
import { useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Image,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LogoProfile from "../assets/ex-photo-kakak.jpg";
import LogoRumahSandar from "../assets/logo-rumah-sandar.png";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton,
} from "react-share";
import Logo from "../assets/content.png";
import { toast } from 'react-toastify'

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginUser } = useSelector((state) => {
    return state.user;
  });

  function logoutHandler(e) {
    e.preventDefault();

    localStorage.clear();
    dispatch(fetchClassCategories());
    navigate("/")

    toast('Akun kamu berhasil keluar!', {
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

  function requestMatch(e) {
    e.preventDefault();

    dispatch(requestMatchOrphan()).then(() => {
      //swal disini kalo request matchnya udah disampaikan
      console.log("match requested");
    });
  }

  // const access_token = loginUser?.access_token
  // const role = loginUser.sendData?.role
  // const isMacthed = loginUser.sendData?.matchStatus
  // const username = loginUser.sendData?.fullName
  // const imageProfile = loginUser.sendData?.imageUrl
  const access_token = localStorage.access_token;
  const role = localStorage.role;
  const isMatched = localStorage.isMatched;
  const username = localStorage.username;
  const imageProfile = localStorage.image;
  const shareUrl = "https://rumah-sandar.web.app/";
  const title = "Rumah Sandar";
  // if(!access_token){
  //   <Navbar bg="light" variant="light" className="navbar" sticky="top"></Navbar>
  // }
  return (
    <Navbar bg="light" variant="light" className="navbar" sticky="top">
      <Container>

            <Navbar.Brand href="#home">
              <img
                src={LogoRumahSandar}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <FacebookShareButton url={shareUrl} quote={title}>
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
            </TwitterShareButton>
       
       
          <Nav className="">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            {role !== 'orphan' && <Nav.Link onClick={() => navigate("/orphanages")}>
              Daftar Panti
            </Nav.Link>}
            {!access_token && (
              <NavDropdown title="Daftar" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  href=""
                  onClick={() => navigate("/register")}
                >
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
                <NavDropdown.Item
                  href=""
                  onClick={() => navigate("/login")}
                >
                  Adik Asuh
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {access_token &&
              role === "volunteer" &&
              isMatched === "notMatch" && (
                <Nav.Link onClick={() => navigate("/orphansList")}>
                  Daftar Adik
                </Nav.Link>
              )}
            {access_token && isMatched === "alreadyMatch" && (
              <Nav.Link onClick={() => navigate("/schedule")}>
                Jadwal Kelas
              </Nav.Link>
            )}
            {access_token && isMatched === "notMatch" && role === "orphan" && (
              <Nav.Link onClick={requestMatch}>Minta Pengajar</Nav.Link>
            )}
            {/* {access_token && (
              <Nav.Link className="ms-2" onClick={logoutHandler}>
                Keluar
              </Nav.Link>
            )} */}
            {/* {access_token && (
              <Nav.Link className="ms-2">Hello, {username}!</Nav.Link>
            )} */}
                {access_token && (
                <NavDropdown title={username} id="navbarScrollingDropdown">
                  {role === "orphan" &&
                  <NavDropdown.Item
                  href=""
                  onClick={() => navigate('/detail-orphan/:id')}
                >
                  Profil Orphan
                </NavDropdown.Item>}
                  {role === "volunteer" &&
                  <NavDropdown.Item
                  href=""
                  onClick={() => navigate('/detail-volunteer/:id')}
                >
                  Profil Relawan
                </NavDropdown.Item>}
                <NavDropdown.Item
                  href=""
                  onClick={logoutHandler}
                >
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
