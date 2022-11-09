import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalChooseDate from "../components/ModalChooseDate";
import { fetchMatch } from "../redux/user";

const data = [
  {
    name: "Arya Yudha",
    email: "arya@gmail.com",
  },
  {
    name: "Lanny",
    email: "lanny@gmail.com",
  },
  {
    name: "Muhammad Fachrul",
    email: "fachrul@gmail.com",
  },
  {
    name: "Wandi",
    email: "wandi@gmail.com",
  },
  {
    name: "Rizky Fadhillah",
    email: "rizky@gmail.com",
  },
];

export default function OrphansList() {
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const [idOrphan, setIdOrphan] = useState()
  const { dataOrphan, isLoading } = useSelector((state) => {
    return state.user;
  });

  function patchOrphan(id) {
    setLgShow(true)
    setIdOrphan(id)
  }

  useEffect(() => {
    dispatch(fetchMatch());
  }, []);
  
  if (isLoading) {
    return <h1>Please Wait</h1>;
  }
  console.log(dataOrphan);
  return (
    <Container style={{ height: 500 }}>
      <Table striped bordered hover size="sm" className="text-center mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Adik</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataOrphan?.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.Orphan.fullName}</td>
                <td>{el.Orphan.email}</td>
                <td>
                  {/* <Button onClick={() => setLgShow(true)}>Pilih</Button> */}
                  <Button onClick={() => patchOrphan(el.id)}>Pilih</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalChooseDate lgShow={lgShow} setLgShow={setLgShow} id={idOrphan} />
    </Container>
  ); 
}
