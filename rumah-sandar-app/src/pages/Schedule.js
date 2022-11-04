import { useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from "react-calendar";
import VideoChat from "./VideoChat";
import VideoRoom from "./VideoRoom";

export default function Schedule() {
  const [value, onChange] = useState(new Date());
  const [Joined, setJoined] = useState(false)
  const [showSession, setShowSession] = useState(false);

  return (
    <>
      <Container>
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div>
          <button onClick={() => setJoined(true)}>Go to class</button>
          {Joined && <VideoRoom Joined={Joined} setJoined={setJoined}/>}
        </div>
        <div>
		{ showSession && <VideoChat/> }
		<button onClick={()=>setShowSession(true)}>Launch the session</button>
		<button onClick={()=>setShowSession(false)}>Close the session</button>
	    </div>
      </Container>
    </>
  );
}
