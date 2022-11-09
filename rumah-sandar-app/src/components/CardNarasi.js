import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import image from '../assets/anjar.jpg'


const CardNarasi = () => {
  return (
    <Container className="content-landing mt-5 shadow">
    <Row>
      <Col className='col-8 mt-5'>
        <h3><b>Berbagi itu nggak cuma dalam bentuk uang lho. </b></h3>
        <h6><em>Di Rumah Sandar, kamu bisa berbagi dengan menjadi Kakak Pengajar </em></h6>
        <br></br>
        <p>
          Bantu wujudkan mimpi anak-anak panti belajar via Online Tutoring demi kehidupan mereka yang lebih baik.
        </p>
      </Col>
      <Col className="col-4">
        <Image src={image} width={"350"} />
      </Col>
    </Row>
  </Container>

  )
}

export default CardNarasi