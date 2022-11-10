import { useEffect } from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDonation } from "../redux/user";
const DetailDonation = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let { dataDonation } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchDonation());
  }, []);
  if (!dataDonation) {
    <h1>Loading</h1>;
  }
  let data = dataDonation?.filter((el) => el.id == id);
  return (
    <div>
      <h1>{data[0].id}</h1>
    </div>
  );
};
export default DetailDonation;
