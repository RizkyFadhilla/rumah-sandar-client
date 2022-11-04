import { useEffect, useRef } from "react";

export default function VideoPlayer({ user }) {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack?.play(ref.current);
    user.audioTrack?.play(ref.current);
  }, []);

  
  return (
    <div>
      Uid : {user.uid}
      <div ref={ref} style={{ width: "200px", height: "300px", marginRight: '20px', borderRadius:'10px' }}></div>
    </div>
  );
}
