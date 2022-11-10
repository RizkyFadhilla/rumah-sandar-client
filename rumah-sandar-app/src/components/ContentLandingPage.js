import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../assets/content.png";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from "react-share"
// const shareUrl = "https://rumah-sandar.web.app/";
const shareUrl = "https://153e-202-165-46-22.ap.ngrok.io";


const ContentLandingPage = () => {


  return (
    <>
      <Container className="content-landing mt-5 shadow">
        <Row>
          <Col className='col-8 mt-5' style={{ paddingLeft: "40px", paddingRight: "10px" }}>
            <h3><b>Selamat Datang di Rumah Sandar</b></h3>
            <h6><em>Tempat belajar untuk adik-adik yang berada di bawah naungan yayasan panti asuhan di seluruh Indonesia.</em></h6>
            <br></br>
            <p>
              Rumah Sandar adalah komunitas e-learning nirlaba untuk anak-anak
              yang terdaftar di panti asuhan.<br></br>Merupakan wadah untuk
              menjembatani para relawan muda di Indonesia untuk melakukan
              bimbingan non formal <br></br> kepada anak yatim. Sesuai dengan
              namanya, Rumah Sandar adalah tempat bersandarnya anak-anak yatim,
              tidak hanya untuk pelengkap pendidikan mereka, tetapi juga untuk
              mendapatkan harapan untuk meraih masa depan yang cerah terlepas
              dari situasi mereka.
            </p>
          </Col>
          <Col className="col-4" style={{ paddingRight: "20px" }}>
            <Image src={Logo} width={"350"} />
          </Col>
          <div>
            Ajak teman untuk jadi relawan, bagikan Informasi tentang Rumah Sandar:<br></br>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={30} round />
            </TwitterShareButton>

            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={30} round />
            </FacebookShareButton>

            <WhatsappShareButton url={shareUrl}
              // quote={title} 
              separator=":: ">
              <WhatsappIcon size={30} round />
            </WhatsappShareButton>





          </div>
        </Row>
      </Container>
    </>
  );
};

export default ContentLandingPage;
