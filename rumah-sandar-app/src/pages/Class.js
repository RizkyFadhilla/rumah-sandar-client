import { Container, Image } from "react-bootstrap";
import MyChatComponent from "../components/VideoChatUI";
import photoKakak from '../assets/ex-photo-kakak.jpg'
import photoAdik from '../assets/ex-photo-adik.jpg'
import { useLocation } from "react-router-dom";
import VideoRoom from "./VideoRoom";
import { useEffect, useState } from "react";

export default function Class() {

    // const {state} = useLocation()
    // const { Joined } = state
    const [Joined, setJoined] = useState(false)
    
    // console.log(Joined , 'INI JOINED DI CLASS SETELAH DARI SCHEDULE')
    useEffect(() => {
        setJoined(true)
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
            <h3>Nama Kelas</h3> 
            </div>
            <div style={{display :'flex', alignContent:'center', marginTop:20}}>
                <div>
                    <Image src={photoKakak} width={40} height={40} style={{borderRadius: 100}} />
                </div>
                <div style={{alignSelf:'center', marginLeft: 10}}>
                    <h5>Nama kakak</h5>
                </div>
            </div>
            <div style={{display :'flex', alignContent:'center', marginTop:20}}>
                <div>
                    <Image src={photoAdik} width={40} height={40} style={{borderRadius: 100}} />
                </div>
                <div style={{alignSelf:'center', marginLeft: 10}}>
                    <h5>Nama Adik</h5>
                </div>
            </div>
          </div>
          <div>
            <MyChatComponent />
          </div>
        </div>
      </div>
    </Container>
  );
}
