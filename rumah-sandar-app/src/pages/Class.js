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
          <div className="p-5" style={{backgroundColor: '#FAD390', marginBottom:30, borderRadius:30}}>
            <div style={{backgroundColor: '#F5F6FA', textAlign:'center', borderRadius:20}}>
            <h1>Nama Kelas</h1> 
            </div>
            <div style={{display :'flex', alignContent:'center', marginTop:20}}>
                <div>
                    <Image src={photoKakak} width={50} height={50} style={{borderRadius: 100}} />
                </div>
                <div style={{alignSelf:'center', marginLeft: 10}}>
                    <h4>Nama kakak</h4>
                </div>
            </div>
            <div style={{display :'flex', alignContent:'center', marginTop:20}}>
                <div>
                    <Image src={photoAdik} width={50} height={50} style={{borderRadius: 100}} />
                </div>
                <div style={{alignSelf:'center', marginLeft: 10}}>
                    <h4>Nama Adik</h4>
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
