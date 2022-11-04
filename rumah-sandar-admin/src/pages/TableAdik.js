import { Container, Table, Button } from 'react-bootstrap';

const TableAdik = () => {
  return (
    <>
      <Container className="mt-5">
      <h3>Table Adik</h3>
        <Table striped hover className='styled-table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button variant="danger">Approve</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <Button variant="danger">Approve</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableAdik;
