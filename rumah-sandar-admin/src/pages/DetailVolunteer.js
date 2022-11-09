import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolunteer } from '../redux/user';
import { useParams } from 'react-router-dom';

const DetailVolunteer = () => {
  const {id} = useParams()
  
  console.log(id)
  let { dataVolunteer, isLoading } = useSelector((state) => {
    return state.user;
  });
  console.log(dataVolunteer)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVolunteer());
  }, []);
  if (isLoading) {
    <h1>Please Wait</h1>;
  }
  const detail = dataVolunteer?.filter(el => el.id == id)
  console.log(detail)
  return (
    <Container className="mt-5">
     <h1>{detail[0]?.fullName}</h1>
     <img src={detail[0]?.imageUrl}/> 
     <h1>{detail[0]?.lastEducation}</h1>
     <h1>{detail[0]?.linkedinUrl}</h1>
    </Container>
  );
};

export default DetailVolunteer;
