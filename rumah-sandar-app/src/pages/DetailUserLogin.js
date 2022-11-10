import { Container, ListGroup, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginUserData } from '../redux/user';

const DetailUserLogin = () => {
  const dispatch = useDispatch();
  const { loginUserDataNow } = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    dispatch(checkLoginUserData());
  }, []);
  console.log(loginUserDataNow);
  return (
    <Container className="mt-5 text-center col-3" style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem', alignSelf: 'center' }} className="shadow">
        <Card.Header style={{ backgroundColor: '#ffbe76', color: 'white' }}>
          <b>Detail User</b>
        </Card.Header>
        <Card.Body>
          <Card.Img src={loginUserDataNow.imageUrl} />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <b>Nama Lengkap: </b>
            {loginUserDataNow.fullName}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Email: </b>
            {loginUserDataNow.email}
          </ListGroup.Item>
          {localStorage.getItem("role") === "volunteer" &&
          <ListGroup.Item>
            <b>LinkedIn: </b>
            {loginUserDataNow.linkedinUrl}
          </ListGroup.Item>}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default DetailUserLogin;
