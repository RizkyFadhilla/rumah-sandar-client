import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import { useDispatch } from "react-redux";
import { setDateMatch } from "../redux/user";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Alert from "react-bootstrap/Alert";
import { toast } from "react-toastify";

export default function ModalChooseDate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setLgShow, lgShow, id } = props;

  const [error, setError] = useState();
  const [value, onChange] = useState(new Date());

  function setStartDate(value, id) {
    let currentDate = dayjs(new Date());
    let selectedDate = dayjs(value);
    // console.log(currentDate)
    // console.log(selectedDate)

    // console.log(currentDate.diff(selectedDate, 'day'))

    if (currentDate.diff(selectedDate, "day") > 0) {
      setError("Tanggal yang kamu pilih tidak valid");
      return;
    } else if (currentDate.diff(selectedDate, "day") < -6) {
      setError(
        "Kamu tidak dapat memilih jadwal lebih dari seminggu dari sekarang!"
      );
      return;
    }

    let date = dayjs(value).format("YYYY-MM-DD");
    let hour = dayjs(value).format("HH:MM");
    let newDate = {};
    newDate.startDate = date;
    newDate.hour = hour;

    dispatch(setDateMatch({ newDate, id })).then(() => {
      localStorage.setItem("isMatched", "alreadyMatch");
      navigate("/");

      toast("Jadwal dengan adik berhasil dibuat!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }

  return (
    <>
      <Modal
        size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            className="text-center"
          >
            Tentukan tanggal dan waktu untuk memulai mengajar adik!
          </Modal.Title>
        </Modal.Header>
        {error && (
          <Alert variant="danger" style={{ margin: 10 }}>
            {error}
          </Alert>
        )}
        <Modal.Body>
          <div className="text-center">
            <DateTimePicker onChange={onChange} value={value} />
          </div>
          <div className="text-center mt-3">
            <Button onClick={() => setStartDate(value, id)}>Setuju</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
