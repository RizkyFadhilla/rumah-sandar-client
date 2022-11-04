import { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import ModalChooseDate from '../components/ModalChooseDate';

const data = [
  {
    name: 'Arya Yudha',
    email: 'arya@gmail.com',
  },
  {
    name: 'Lanny',
    email: 'lanny@gmail.com',
  },
  {
    name: 'Muhammad Fachrul',
    email: 'fachrul@gmail.com',
  },
  {
    name: 'Wandi',
    email: 'wandi@gmail.com',
  },
  {
    name: 'Rizky Fadhillah',
    email: 'rizky@gmail.com',
  },
];

export default function OrphansList() {
<<<<<<< HEAD
    const [lgShow, setLgShow] = useState(false);
    
    return (
        <Container>
        <Table striped bordered hover size="sm" className='text-center mt-5'>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Adik</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {data.map((el, index) => {
                return (
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>
                        <Button onClick={() => setLgShow(true)}>
                            Choose
                        </Button>
                    </td>
                    </tr>
                )
            })}
      </tbody>
    </Table>
    <ModalChooseDate lgShow={lgShow}  setLgShow={setLgShow}/>
=======
  const [smShow, setSmShow] = useState(false);

  return (
    <Container>
      <Table striped bordered hover size="sm" className="mt-4">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Adik</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <Button onClick={() => setSmShow(true)}>Choose</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalChooseDate smShow={smShow} setSmShow={setSmShow} />
>>>>>>> Layouting-Arya
    </Container>
  );
}
