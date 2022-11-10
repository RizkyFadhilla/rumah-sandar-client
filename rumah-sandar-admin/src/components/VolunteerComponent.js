import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchVolunteer, patchVolunteer } from '../redux/user';
import {toast} from 'react-toastify'


const VolunteerComponent = (data) => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  function clickHandler(e, id) {
    e.preventDefault();
    dispatch(patchVolunteer(id)).then(() => {
      toast("Mengubah Status",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
      dispatch(fetchVolunteer());
    });
  }
  let number = 1 + data.index;
  if (data.data.verified) {
    return (
      <tr>
        <td className='text-center'>{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        {data.data.matchStatus === "notMatch" &&
        <td>Belum Terjadwal</td>}
        {data.data.matchStatus === "alreadyMatch" &&
        <td style={{ color: "blue" }}>Sudah Terjadwal</td>}
        <td>
          <Button onClick={() => navigate(`/detail-volunteer/` + data.data.id)} variant="warning">
            Detail
          </Button>
        </td>
        <td>
          Terverifikasi
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className='text-center'>{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        {data.data.matchStatus === "notMatch" &&
        <td>Belum Terjadwal</td>}
        {/* <td>{data.data.matchStatus}</td> */}
        <td>
          <Button onClick={() => navigate(`/detail-volunteer/` + data.data.id)} variant="warning" className="me-3">
            Detail
          </Button>
        </td>
        <td>
          <Button onClick={(e) => clickHandler(e, data.data.id)} variant="primary">
            Verifikasi
          </Button>
        </td>
      </tr>
    );
  }
};

export default VolunteerComponent;
