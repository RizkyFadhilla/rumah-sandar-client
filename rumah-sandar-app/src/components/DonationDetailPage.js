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
  let onDemandLink = data[0]?.on_demand_link;
  let linkDonation = `https://invoice-staging.xendit.co/donation/${onDemandLink}`;
  console.log(data[0]);
  return (
    <div>
      <h1>Id : {data[0]?.id}</h1>
      <h1>Name : {data[0]?.name}</h1>
      <h1>Total Amount : {data[0]?.totalAmount}</h1>
      <h1>Valid Until : {data[0]?.validUntil}</h1>
      <h1>linkDonation : {linkDonation}</h1>
    </div>
  );
};
export default DetailDonation;
