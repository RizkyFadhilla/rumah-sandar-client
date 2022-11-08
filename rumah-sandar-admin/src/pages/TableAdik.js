import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OrphanComponent from "../components/OrphanComponent";
import { fetchOrphan } from "../redux/user";

const TableAdik = () => {
  let { dataOrphan, isLoading } = useSelector((state) => {
    return state.user;
  });
  console.log(dataOrphan, "ini ditabel adik");
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrphan());
  }, []);

  if (isLoading) {
    <h1>Please Wait</h1>;
  }

  return (
    <>
      <Container className="mt-5">
        <h3>Table Adik</h3>
        <Table striped hover className="styled-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataOrphan.map((el, index) => {
              return (
                <OrphanComponent
                  data={el}
                  index={index}
                  status={el.verified}
                  key={el.id}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableAdik;
