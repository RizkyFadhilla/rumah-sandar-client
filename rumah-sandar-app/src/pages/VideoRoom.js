import React from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap'
import {XCircle} from 'react-bootstrap-icons'

const APP_ID = "78fd29108df5426ca80b601699bb8434";
const TOKEN =
  "007eJxTYDB11A3YWm3ION2cU+TVPZWCRbm7KuRZK0772hUcWbtyb5MCg7lFWoqRpaGBRUqaqYmRWXKihUGSmYGhmaVlUpKFibGJqkh2ckMgI4O7WiAzIwMEgvisDM45icXFDAwAYMEbgA==";
const CHANNEL = "Class";

//untuk konek ke roomnya
const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8", //ini default
});

export default function VideoRoom(props) {
  const { setJoined } = props;
  const navigate = useNavigate()

  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  let [tracks, setTracks] = useState([]);
  const [uid, setUid] = useState([])


   async function closeRoom(event) {
    event.preventDefault();

    for (let localTrack of localTracks) {
      localTrack.stop();
      localTrack.close();
    }

    client.off("user-published", handleUserJoined);
    client.off("user-left", handleUserLeft);
    await client.unpublish(tracks);
    await setJoined(false)
    await client.leave()
    // .then(() => client.leave())
    
    navigate('/')
  }

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);


    if (mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user]);
    }
    if (mediaType === "audio") {
    //   setUsers((previousUsers) =>[...previousUsers, user])
    }
  };
  // ini untuk menghilangkan video play pada local host yang lain
  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((e) => e.uid !== user.uid)
    );
  };

  useEffect(() => {
    //ini untuk baca pas user ada yang join this chat room
    client.on("user-published", handleUserJoined);

    //ini untuk handle pas user left the chat room
    client.on("user-left", handleUserLeft);

    //untuk kasih tau browser untuk konek agora services
    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then((uid) => {
        setUid(uid)
        return  Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
      }
      
        //pas masuk ambil local microphone dan camera kita
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        setTracks(tracks);
        client.publish(tracks);
      });
  }, []);
 
    return (
    <>
      <div style={{ display: "flex", justifyContent: "center", position : 'relative'}}>

        {users.map((user) => { 
          if(user.uid === uid && users.length > 1) {
            return ( <VideoPlayer key={user.uid} user={user} style={{ width: "100px", height: "150px", marginRight: '20px', borderRadius:'10px', position: 'absolute', top: 30, left : 50, zIndex:100 }} /> )
          } else {
            return ( <VideoPlayer key={user.uid} user={user} style={{ width: "750px", height: "575px", marginRight: '20px', borderRadius:'10px'}} /> )
          }    
        })}
        
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
        <Button variant="danger" onClick={(event) => closeRoom(event)}>Akhiri Kelas</Button>
      </div>
    </>
  );
}
