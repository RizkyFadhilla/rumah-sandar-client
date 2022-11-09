import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchVolunteer, patchVolunteer } from '../redux/user';

const VolunteerComponent = (data) => {
  const navigate = useNavigate();
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
        <td>{data.data.matchStatus}</td>
        <td>
          <Button onClick={() => navigate(`/detail-volunteer/` + data.data.id)} variant="warning">
            Detail
          </Button>
        </td>
        <td>
          Approved
        </td>
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
          <Button onClick={() => navigate(`/detail-volunteer/` + data.data.id)} variant="warning" className="me-3">
            Detail
          </Button>
        </td>
        <td>
          <Button onClick={(e) => clickHandler(e, data.data.id)} variant="primary">
            Approve
          </Button>
        </td>
        <td>{data.data.matchStatus}</td>
      </tr>
    );
  }
};

export default VolunteerComponent;
