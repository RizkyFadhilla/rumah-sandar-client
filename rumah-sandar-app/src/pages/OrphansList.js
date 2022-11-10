import { useEffect, useState } from "react";
import { Button, Container, Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CardNarasi from "../components/CardNarasi";
import ModalChooseDate from "../components/ModalChooseDate";
import { fetchMatch } from "../redux/user";

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
    <Container style={{height: '100vh'}}>
      <CardNarasi />
      <Table striped bordered hover size="sm" className="text-center mt-5">
        <thead style={{backgroundColor:'brown', color: 'white'}}>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Foto</th>
            <th>Nama Panti</th>
            <th>Alamat Panti</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataOrphan?.map((el, index) => {
            return (
              <tr key={index} >

                <td >{index + 1}</td>
                <td>{el.Orphan?.fullName}</td>
                <td>{el.Orphan?.email}</td>
                <td> <Image
                style={{margin: 10}}
                src={el.Orphan?.imageUrl}
                width={"50"}
                height={"50"}
                roundedCircle={true}
                alt={el.Orphan?.name}
              />
                </td>
                <td>{el.Orphan?.Orphanage?.name}</td>
                <td>{el.Orphan?.Orphanage?.address}</td>
                

                <td>
                  {/* <Button onClick={() => setLgShow(true)}>Pilih</Button> */}
                  <Button style={{margin:10, textAlign:'center'}} variant='warning' size="sm" onClick={() => patchOrphan(el.id)}>Jadwalkan</Button>
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
