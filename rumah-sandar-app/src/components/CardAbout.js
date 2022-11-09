import { Container, Row, Col, Table } from "react-bootstrap";

const CardAbout = () => {
  return <>
    <Container className="content-landing mt-5 shadow">
      <div className="mt-5" style={{ paddingLeft: "40px", paddingRight: "10px" }}>

        <Row>
          <Col>
            <h3>
              <b>Visi</b>
            </h3>
            <ul>
              <li>Mencerdaskan anak yayasan panti asuhan di seluruh Indonesia</li>
              <li>Memberikan inspirasi dan semangat adik asuh untuk berprestasi</li>
            </ul>
          </Col>


          <Col>
            <h3>
              <b>Misi</b>
            </h3>
            <ul>
              <li>Menumbuhkan minat belajar adik asuh</li>
              <li>Menyediakan pengajaran yang intensif dan berkualitas</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  </>
}

export default CardAbout;