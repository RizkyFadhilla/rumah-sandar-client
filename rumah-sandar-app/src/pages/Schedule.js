import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { classUser } from "../redux/user";
import VideoRoom from "./VideoRoom";

export default function Schedule() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userSchedule } = useSelector((state) => {
    return state.user;
  });

  console.log(userSchedule, "ini data dari store");

  const [value, onChange] = useState(new Date());
  const [Joined, setJoined] = useState(false);
  const today = JSON.stringify(new Date()).substring(1, 11);
  const todayDate = new Date();

  let classSchedules = [];

  userSchedule[0]?.Classes?.forEach((el) => {
    classSchedules.push(el.date);
  });

  let classSchedulesFormatted = classSchedules.map((el) => {
    return el.substring(0, 10);
  });

  useEffect(() => {
    dispatch(classUser());
  }, []);

  // CONTOH KALO DITARO DI USE EFFECT
  // useEffect(() => {
  //   const todayClass = userSchedule[0]?.Classes.filter((el) => {
  //     console.log(el.date.substring(0, 10), 'ini dalem loopingan')
  //     console.log(today,'sama kaya ini gak')
  //     if(el.date.substring(0, 10) == today) {
  //       return el
  //     } else {
  //       return
  //     }
  //   })
  // },[userSchedule])

  const todayClass = userSchedule[0]?.Classes.filter((el) => {
    if (el.date.substring(0, 10) == today) {
      return el;
    } else {
      return;
    }
  });

  console.log(todayClass, "INI TODAY CLASS");

  return (
    <>
      <Container className="mt-5">
        <div className="row">
          <div
            className="col-4"
            style={{
              borderRadius: 10,
              marginTop: 30,
              alignItems: "center",
              backgroundColor: "white",
              maxHeight: 590,
              overflowY: "scroll",
            }}
          >
            <div>
              <h2 style={{ textAlign: "center" }}>JADWAL KELAS</h2>
            </div>
            {userSchedule[0]?.Classes?.map((el, index) => {
              if (el.date > today) {
                return (
                  <Card key={index} className="mt-2">
                    <Card.Body style={{ backgroundColor: "#e3f2fd" }}>
                      <div style={{ padding: 10 }}>
                        <div style={{ border: "solid", borderColor: "silver" }}>
                          <div style={{ textAlign: "center", fontSize: 24 }}>
                            Kelas
                          </div>
                          <div style={{ textAlign: "center", fontSize: 20 }}>
                            {el.ClassCategory?.name}
                          </div>
                          <div style={{ textAlign: "center", fontSize: 16 }}>
                            {el.description}
                          </div>
                        </div>
                        <div
                          style={{
                            textAlign: "center",
                            marginTop: 10,
                            backgroundColor: "#1a237e",
                            color: "#ffffff",
                          }}
                        >
                          Tanggal : {el.date.substring(0, 10)}
                        </div>
                        <div></div>
                      </div>
                    </Card.Body>
                  </Card>
                );
              }
            })}
          </div>
          <div
            className="col-8 schedule"
            style={{
              marginTop: 30,
              alignSelf: "center",
            }}
          >
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
                  classSchedulesFormatted.find(
                    (schedule) => schedule === realDate
                  )
                ) {
                  return "highlight";
                }
              }}
            />
            <div style={{ marginTop: 20, textAlign: "center" }}>
              {todayClass?.length === 0  && 
                <Alert variant="primary" style={{ margin: 10 }}>
                  Tombol menuju ruang kelas akan muncul jika hari ini kamu
                  memiliki jadwal kelas, mohon ditunggu.
                </Alert>
              }

              {classSchedulesFormatted.map((schedule) => {
                if (schedule == today) {
                  console.log(schedule, "INI SCHEDULE");
                  console.log(today, "INI TODAYNYA");
                  return (
                    <>
                      <Alert variant="primary" style={{ margin: 10 }}>
                        Hari ini kamu ada jadwal kelas, silahkan masuk melalu
                        tombol dibawah ini!
                      </Alert>
                      <Button
                        className="outline-primary mt-2"
                        onClick={() =>
                          navigate("/class", { state: todayClass })
                        }
                      >
                        Masuk Kelas
                      </Button>
                    </>
                  );
                }
              })}
              {Joined && <VideoRoom Joined={Joined} setJoined={setJoined} />}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
