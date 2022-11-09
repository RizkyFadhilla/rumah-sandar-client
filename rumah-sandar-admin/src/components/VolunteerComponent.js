import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchVolunteer, patchVolunteer } from "../redux/user";

const VolunteerComponent = (data) => {
  const navigate = useNavigate()
  let dispatch = useDispatch();
  function clickHandler(e, id) {
    e.preventDefault();
    dispatch(patchVolunteer(id)).then(() => {
      dispatch(fetchVolunteer());
    });
  }
  let number = 1 + data.index;
  if (data.data.verified) {
    return (
      <tr>
        <td>{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>Verified</td>
        <td></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>Not Verified</td>
        <td>
          <Button
            onClick={(e) => clickHandler(e, data.data.id)}
            variant="primary"
            className="me-3"
          >
            Approve
          </Button>
          <Button
            onClick={() => navigate(`/detail-volunteer/` + data.data.id)}
            variant="warning"
          >
            Detail
          </Button>
        </td>
      </tr>
    );
  }
};

export default VolunteerComponent;
