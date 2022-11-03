import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import DateTimePicker from 'react-datetime-picker';


export default function ModalChooseDate(props) {

    const { setSmShow, smShow } = props
    const [value, onChange] = useState(new Date());

    return (
        <>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
    )
}