import { Container } from "react-bootstrap";
import { requestMatchOrphan } from "../redux/user";


const CardMatch = () => {
  return <>
    <Container className="content-landing mt-5 shadow">
      <h3>
        <b>Ajukan Bimbingan Belajar Bersama Kakak Asuh</b>
      </h3>
      <br></br>
      <p>
        Selamat atas verifikasi akun kamu!<br></br>
        Silakan ajukan diri untuk mendapatkan jadwal belajar bersama Kakak Asuh dari tim relawan Rumah Sandar. Jika sudah ada Kakak Asuh yang tersedia, kamu akan segera mendapatkan jadwal belajar. Sambil menunggu, jangan lupa belajar secara mandiri dulu ya!
      </p>

      <button className="btn btn-primary ms-2">Sini</button>
    </Container>
  </>
}

export default CardMatch;