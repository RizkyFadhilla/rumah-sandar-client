import { Container, Image } from "react-bootstrap";
import MyChatComponent from "../components/VideoChatUI";
import photoKakak from '../assets/ex-photo-kakak.jpg'
import photoAdik from '../assets/ex-photo-adik.jpg'
import VideoRoom from "./VideoRoom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTalkUser } from "../redux/user";

export default function Class() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { talkUser } = useSelector((state) => {
    return  state.user
  })

    const [Joined, setJoined] = useState(false)
    
    useEffect(() => {
        setJoined(true)
        dispatch(getTalkUser())
    }, [])

  return (
    <Container>
      <div className="row mt-5">
        <div className="col-8">
            {Joined && <VideoRoom Joined={Joined} setJoined={setJoined}/>}
        </div>
        <div className="col-4">
          <div className="p-3" style={{backgroundColor: '#dfe4ea', marginBottom:20, borderRadius:15}}>
            <div style={{backgroundColor: '#F5F6FA', textAlign:'center', borderRadius:10}}>
            <h3>{location.state.ClassCategory.name}</h3> 
            </div>
            <div style={{display :'flex', alignContent:'center', marginTop:20}}>
                <div>
                    <Image src={talkUser[0]?.Volunteer.imageUrl}  width={40} height={40} style={{borderRadius: 100}} />
                </div>
                <div style={{alignSelf:'center', marginLeft: 10}}>
                    <h5>{talkUser[0]?.Volunteer.fullName}</h5>
                </div>
            </div>
            <div style={{display :'flex', alignContent:'center', marginTop:20}}>
                <div>
                    <Image src={talkUser[0]?.Orphan.imageUrl} width={40} height={40} style={{borderRadius: 100}} />
                </div>
                <div style={{alignSelf:'center', marginLeft: 10}}>
                    <h5>{talkUser[0]?.Orphan.fullName}</h5>
                </div>
            </div>
          </div>
          <div>
            {talkUser.length !== 0 && 
            <MyChatComponent talkUser={talkUser}/>}
          </div>
        </div>
      </div>
  
    </Container>
  );
}