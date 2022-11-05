import React from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { useNavigate } from "react-router-dom";

const APP_ID = "78fd29108df5426ca80b601699bb8434";
const TOKEN =
  "007eJxTYPCqY/K+vftf0L3mTy9ajk75sCZe6/Be5+dqpdeLjstv3DtDgcHcIi3FyNLQwCIlzdTEyCw50cIgyczA0MzSMinJwsTYZMfMlOSGQEaGXpXFLIwMEAjiszI45yQWFzMwAABU1yJC";
const CHANNEL = "Class";

//untuk konek ke roomnya
const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8", //ini default
});

export default function VideoRoom(props) {
  const { Joined, setJoined } = props;
  const navigate = useNavigate()

  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  let [tracks, setTracks] = useState([]);
  const [uid, setUid] = useState([])


  function closeRoom(event) {
    event.preventDefault();

    for (let localTrack of localTracks) {
      localTrack.stop();
      localTrack.close();
    }
    client.off("user-published", handleUserJoined);
    client.off("user-left", handleUserLeft);
    client.unpublish(tracks);
    setJoined(false).then(() => client.leave()).then(() => navigate('/') );
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
    console.log(uid, 'INI UID STATE')
    return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>

      {/* {users.filter(user => user.uid !== uid).map((user) => { */} 
      {/* INI KALO MAU DI TAMPILIN LAYAR LAWAN BICARANYA AJA, LAYAR KITA GAK TAMPIL */}

        {users.map((user) => { 
          if(user.uid === uid) {
            return ( <VideoPlayer key={user.uid} user={user} style={{ width: "200px", height: "300px", marginRight: '20px', borderRadius:'10px' }} /> )
          } else {
            return ( <VideoPlayer key={user.uid} user={user} style={{ width: "800px", height: "900px", marginRight: '20px', borderRadius:'10px' }} /> )
          }    
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
        <button onClick={(event) => closeRoom(event)}> Close Room</button>
      </div>
    </>
  );
}
