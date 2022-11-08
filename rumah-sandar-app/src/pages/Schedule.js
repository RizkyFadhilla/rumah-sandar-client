import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { classUser } from "../redux/user";
import VideoRoom from "./VideoRoom";

export default function Schedule() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [value, onChange] = useState(new Date());
  const [Joined, setJoined] = useState(false);
  const classSchedules = ["2022-11-08", "2022-11-11"]; //yy-mm-dd
  const today = JSON.stringify(new Date()).substring(1, 11);
  
  const { userSchedule } = useSelector((state) => {
    return state.user
  })
  useEffect(()=>{
    dispatch(classUser)
  },[])
  

  
  // useEffect(() => {
  //   dispatch(classUser());
  // }, []);
  
  console.log(userSchedule, 'INI DI HALAMAN SCHEDULE')

  const userClasses = [
    {
      id: 1,
      VolunteerId: 1,
      OrphanId: 1,
      startDate: "2022-11-05T00:00:00.000Z",
      hour: "13:00:00",
      endDate: "2023-01-21T00:00:00.000Z",
      createdAt: "2022-11-04T20:24:28.884Z",
      updatedAt: "2022-11-04T20:48:20.798Z",
      Classes: [
        {
          id: 1,
          MatchId: 1,
          description: "This is Bahasa Indonesia Class",
          date: "2022-11-05T00:00:00.000Z",
          ClassCategoryId: 1,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 1,
            name: "Bahasa Indonesia",
            link: "https://drive.google.com/drive/folders/1CtSmvwDWkYJ-hYehnvp7MNXx6eXu9LV_?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 2,
          MatchId: 1,
          description: "This is Matemathic Class",
          date: "2022-11-08T00:00:00.000Z",
          ClassCategoryId: 2,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 2,
            name: "Matematika",
            link: "https://drive.google.com/drive/folders/1xE33PkAEM0mLljAKd4wuk3pL0Yxg9xxb?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 3,
          MatchId: 1,
          description: "This is Physic Class",
          date: "2022-11-19T00:00:00.000Z",
          ClassCategoryId: 3,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 3,
            name: "Pendidikan Jasmani",
            link: "https://drive.google.com/drive/folders/1B_OADX0v31QHyaPPL6J5nsfJ3xbxftB4?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 4,
          MatchId: 1,
          description: "This is Pancasila Class",
          date: "2022-11-26T00:00:00.000Z",
          ClassCategoryId: 4,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 4,
            name: "Pendidikan Pancasila",
            link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 4,
          MatchId: 1,
          description: "This is Pancasila Class",
          date: "2022-11-26T00:00:00.000Z",
          ClassCategoryId: 4,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 4,
            name: "Pendidikan Pancasila",
            link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 4,
          MatchId: 1,
          description: "This is Pancasila Class",
          date: "2022-11-26T00:00:00.000Z",
          ClassCategoryId: 4,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 4,
            name: "Pendidikan Pancasila",
            link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 4,
          MatchId: 1,
          description: "This is Pancasila Class",
          date: "2022-11-26T00:00:00.000Z",
          ClassCategoryId: 4,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 4,
            name: "Pendidikan Pancasila",
            link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 4,
          MatchId: 1,
          description: "This is Pancasila Class",
          date: "2022-11-26T00:00:00.000Z",
          ClassCategoryId: 4,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 4,
            name: "Pendidikan Pancasila",
            link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 4,
          MatchId: 1,
          description: "This is Pancasila Class",
          date: "2022-11-26T00:00:00.000Z",
          ClassCategoryId: 4,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 4,
            name: "Pendidikan Pancasila",
            link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
        {
          id: 4,
          MatchId: 1,
          description: "This is Pancasila Class",
          date: "2022-11-26T00:00:00.000Z",
          ClassCategoryId: 4,
          verifiedByOrphan: null,
          verifiedByVolunteer: null,
          createdAt: "2022-11-04T20:48:20.846Z",
          updatedAt: "2022-11-04T20:48:20.846Z",
          ClassCategory: {
            id: 4,
            name: "Pendidikan Pancasila",
            link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
            imgUrl: "https://bit.ly/3WtIFkx",
            createdAt: "2022-11-04T19:42:59.876Z",
            updatedAt: "2022-11-04T19:42:59.876Z",
          },
        },
      ],
    },
  ];
  userClasses[0].Classes.forEach((el) => {
    el.date = el.date.substring(0, 10);
  });

  console.log(userClasses[0], 'ini kelas2nya')

  const todayClass = userClasses[0].Classes.find((el) => el.date === today)

  console.log(todayClass, 'KELAS HARI ININYA BENER GAK')

  


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
              overflowY: 'scroll'
            }}
          >
            {userClasses[0]?.Classes?.map((el) => {
              if (el.date > today) {
                return (
                  <Card className="mt-2">
                    <Card.Body className="mt-2">
                      <div>Kelas : {el.ClassCategory?.name}</div>
                      <div>Deskripsi : {el.description}</div>
                      <div>Jam : {userClasses[0]?.hour}</div>
                      <div>
                        <img />
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
              alignSelf: 'center'
     
 
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

                if (classSchedules.find((schedule) => schedule === realDate)) {
                  return "highlight";
                }
              }}
            />
            <div style={{marginTop: 20, textAlign:'center'}}>
              {classSchedules.map((schedule) => {
                if (schedule == today) {
                  return (
                    <button  onClick={() => navigate("/class", {state: todayClass })}>
                      Masuk Kelas
                    </button>
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
