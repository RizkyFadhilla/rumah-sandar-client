import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import DateTimePicker from 'react-datetime-picker';

export default function ModalChooseDate(props) {

    const { setLgShow, lgShow, id } = props
    const [value, onChange] = useState(new Date());

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
        <Button onClick={() => console.log(value)}>
            Setuju
        </Button>
        </div>
        </Modal.Body>
      </Modal>
    </>
    )
}