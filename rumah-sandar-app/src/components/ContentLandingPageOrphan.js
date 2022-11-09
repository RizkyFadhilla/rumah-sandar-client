import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../assets/content.png";
import { ToastContainer, toast } from "react-toastify";
import {
  checkLoginUserMatch,
  fetchClassCategories,
  requestMatchOrphan,
} from "../redux/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardMatch from "./CardMatch";

const ContentLandingPageOrphan = () => {
  let dispatch = useDispatch();
  let noMatch = true;
  const { loginUser, checkLoginUserMatchData, checkLoginUserLoading } =
    useSelector((state) => {
      return state.user;
    });

  useEffect(() => {
    dispatch(checkLoginUserMatch());
  }, []);
  function requestMatch(e) {
    e.preventDefault();

    dispatch(requestMatchOrphan())
      .unwrap()
      .then((result) => {
        toast.success(
          `Request Berhasil, Silahkan menunggu kakak Pengajar, untuk infonya akan kami kirim via email`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        return result;
      })
      .then((result) => {
        dispatch(checkLoginUserMatch());
      })
      .catch((error) => {
        console.log(error);
        return toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }
  if (checkLoginUserLoading) {
    <h1>Mohon Di tunggu</h1>;
  }
  // if (checkLoginUserMatchData.length > 0) {
  //   noMatch = false;
  // }

  return (
    <>
      <Container className="content-landing mt-5 shadow">
        <Row>
          <Col className="col-8 mt-5">
            <h3>
              <b>Selamat Datang Orphan di Rumah Sandar</b>
            </h3>
            <h6>
              <em>
                Tempat belajar untuk adik-adik yang berada di bawah naungan
                yayasan panti asuhan di seluruh Indonesia.
              </em>
            </h6>
            <br></br>
            <p>
              Rumah Sandar adalah komunitas e-learning nirlaba untuk anak-anak
              yang terdaftar di panti asuhan.<br></br>Merupakan wadah untuk
              menjembatani para relawan muda di Indonesia untuk melakukan
              bimbingan non formal <br></br> kepada anak yatim. Sesuai dengan
              namanya, Rumah Sandar adalah tempat bersandarnya anak-anak yatim,
              tidak hanya untuk pelengkap pendidikan mereka, tetapi juga untuk
              mendapatkan harapan untuk meraih masa depan yang cerah terlepas
              dari situasi mereka. <br></br>
              {noMatch && (
                <>
                  <p>
                    bagi adik-adik yang ingin mendapatkan pembinaan pembelajaran
                    dari relawan kami, bisa memencet tombol di samping ini :{" "}
                    <span>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={requestMatch}
                      >
                        ajukan pembinaan
                      </button>
                    </span>
                  </p>
                </>
              )}
              {!noMatch && (
                <>
                  <p>
                    Adik telah mengajukan pembinaan, mohon menunggu hingga ada
                    balasan dari para pembina kami, untuk info jadwal
                    pembelajaran akan kami kirimkan via email
                  </p>
                </>
              )}
            </p>
          </Col>
          <Col className="col-4">
            <Image src={Logo} width={"350"} />
          </Col>
        </Row>
      </Container>

      <CardMatch />
    </>
  );
};

export default ContentLandingPageOrphan;
