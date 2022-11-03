import { useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from 'react-calendar';

export default function Schedule() {
    const [value, onChange] = useState(new Date());
    console.log(value, '<<<<<< INI VALUE')
    return (
        <>
        <Container>

        <div>
      <Calendar onChange={onChange} value={value} />
    </div>
        </Container>
        
        </>
    )
}