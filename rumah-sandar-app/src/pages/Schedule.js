import { useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import VideoRoom from "./VideoRoom";

export default function Schedule() {
  const navigate = useNavigate();

  const [value, onChange] = useState(new Date());
  const [Joined, setJoined] = useState(false);
  const classSchedules = ["2022-11-06", "2022-11-11"]; //yy-mm-dd
  const today = JSON.stringify(new Date()).substring(1, 11)

  return (
    <>
      <Container>
        <div>
          <div className="row">
            <div className="col-4">1 of 3</div>
            <div className="col-8" style={{textAlign:'center',  marginTop:30}}>
              <Calendar
                showNeighboringMonth
                onChange={onChange}
                value={value}
                tileClassName={({ date }) => {
                  let day = date.getDate();
                  let month = date.getMonth() + 1;
                  if (date.getMonth() < 10) {
                    month = `0` + month;
                  }

                  if (date.getDate() < 10) {
                    day = `0` + day;
                  }

                  const realDate = date.getFullYear() + "-" + month + "-" + day;

                  if (
                    classSchedules.find((schedule) => schedule === realDate)
                  ) {
                    return "highlight";
                  }
                }}
              />
            <div>
              {classSchedules.map((schedule) => {
                if(schedule == today) {
                  return (<button onClick={() => navigate("/class")}>Go to class</button>)
                }
              })}
              {Joined && <VideoRoom Joined={Joined} setJoined={setJoined} />}
            </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
