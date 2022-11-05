import { useEffect, useRef } from "react";

export default function VideoPlayer(props) {
  const ref = useRef();

  const { user, style } = props

  useEffect(() => {
    user.videoTrack?.play(ref.current);
    user.audioTrack?.play(ref.current);
  }, []);

  
  return (
    <div>
      <div ref={ref} style={style}></div> 
    </div>
  );
}
