import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { requestMatchOrphan, checkLoginUserMatch } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";

const CardMatch = () => {
  let dispatch = useDispatch();
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
      })
      .then((result) => {
        dispatch(checkLoginUserMatch());
      })
      .catch((error) => {
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

  return (
    <>
      <Container className="content-landing mt-5 shadow">
        <h3>
          <b>Ajukan Bimbingan Belajar Bersama Kakak Asuh</b>
        </h3>
        <br></br>
        <p>
          Selamat atas verifikasi akun kamu!<br></br>
          Silakan ajukan diri untuk mendapatkan jadwal belajar bersama Kakak
          Asuh dari tim relawan Rumah Sandar. Jika sudah ada Kakak Asuh yang
          tersedia, kamu akan segera mendapatkan jadwal belajar. Sambil
          menunggu, jangan lupa belajar secara mandiri dulu ya!
        </p>

        <button className="btn btn-primary ms-2" onClick={(e) => requestMatch(e)}>
          Sini
        </button>
      </Container>
    </>
  );
};

export default CardMatch;
