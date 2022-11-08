import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import DateTimePicker from 'react-datetime-picker';
import { useDispatch } from 'react-redux';
import { setDateMatch } from '../redux/user';
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

export default function ModalChooseDate(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { setLgShow, lgShow, id } = props
    const [value, onChange] = useState(new Date());
    console.log(id, 'INI ID MASUK MODAL')

    function setStartDate(value, id) {
      console.log(value, id , 'DIDALAM FUNGSI')
      let date = dayjs(value).format('YYYY-MM-DD')
      let hour = dayjs(value).format("HH:MM")
      let newDate = {}
      newDate.startDate = date
      newDate.hour = hour

      dispatch(setDateMatch({newDate,id})).then(() => {
        localStorage.setItem('isMatched', 'alreadyMatch')
        navigate('/')
      })
    
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
          <Modal.Title id="example-modal-sizes-title-lg" className='text-center'>
            Tentukan tanggal untuk memulai mengajar adik
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='text-center'>
      <DateTimePicker onChange={onChange} value={value} />
        </div>
        <div className='text-center mt-3'>
        <Button onClick={() => setStartDate(value, id)}>
            Setuju
        </Button>
        </div>
        </Modal.Body>
      </Modal>
    </>
    )
}