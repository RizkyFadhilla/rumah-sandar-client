import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import image from '../assets/anjar.jpg'


const CardNarasi = () => {
  return (
    <Container className="content-landing mt-5 shadow">
    <Row>
      <Col className='col-8 mt-3'>
        <h3><b>Berbagi itu nggak cuma dalam bentuk uang lho. </b></h3>
        <h6><em>Di Rumah Sandar, kamu bisa berbagi dengan menjadi relawan pengajar</em></h6>
        <br></br>
        <p>
          Bantu wujudkan mimpi adik-adik asuh belajar via Online Tutoring demi kehidupan mereka yang lebih baik.<br></br>
          Bantu salah satu adik di bawah dan temani mereka belajar.
        </p>
      </Col>
      <Col className="col-4" style={{alignSelf : "center"}} >
        <Image src={image} width={"350"} style={{borderRadius : 15}} />
      </Col>
    </Row>
  </Container>

  )
}

export default CardNarasi