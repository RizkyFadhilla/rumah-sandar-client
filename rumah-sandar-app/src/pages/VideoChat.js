import { EaseApp, EaseChat } from "agora-chat-uikit"

export default function VideoChat() {

    const addListen = (res) => {
        if(res.isLogin){
               const WebIM = EaseChat.getSdk()
            WebIM.conn.addEventHandler('testListen',{
              onTextMessage:()=>{},
              onError:()=>{},
            })
         }
      }

    return (
        <div className="container">
            <EaseApp 
            // The App key for your chat project
            appkey= "61824775#1028799"
            // The user ID of the current user
            username= "Fachrul"
            // The <Vg k="COMPANY" /> token
            agoraToken= "007eJxTYKiYd8Ld3G5R9HdGzT3NgYeafURiu08uzUt2DXBhsF1oK63AYGSWYmFhZmGRbGJuZmKYZJyYmpaalGpmmmRimGZkbJi6lj81uSGQkaFulTkzIwMrAyMDEwOIz8AAANjkGsI="

            to="Fachri"
            successLoginCallback={addListen}
            />
    </div>
    );
    
}

