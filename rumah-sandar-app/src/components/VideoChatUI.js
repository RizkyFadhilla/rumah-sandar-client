import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';

 export default function MyChatComponent({talkUser}) {
 
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);
  Talk.ready.then(() => markTalkLoaded(true));

  useEffect(() => {
    if (talkLoaded) {
      if(localStorage.getItem('role') === 'volunteer') {
        const currentUser = new Talk.User({
          id: `volunteer-${talkUser[0]?.Volunteer?.id}`,
          name: talkUser[0]?.Volunteer?.fullName,
          email: talkUser[0]?.Volunteer?.email,
          photoUrl: talkUser[0]?.Volunteer?.imageUrl,
          welcomeMessage: `Hello, ${talkUser[0]?.Volunteer?.fullName}`,
          role: 'default',
        });
  
        const otherUser = new Talk.User({
          id: `orphan-${talkUser[0]?.Orphan?.id}`,
          name: talkUser[0]?.Orphan?.fullName,  
          email: talkUser[0]?.Orphan?.email,
          photoUrl: talkUser[0]?.Orphan?.imageUrl,
          welcomeMessage: `Hello, ${talkUser[0]?.Orphan?.fullName}`,
          role: 'default',
        });

        const session = new Talk.Session({
          appId: 'tdQXKoKQ',
          me: currentUser,
        });
  
        const conversationId = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = session.getOrCreateConversation(conversationId);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);

        // console.log(otherUser, 'ini other user login sebagai volunteer')
        // console.log(currentUser, 'ini current user login sebagai volunteer')
  
        const chatbox = session.createChatbox();
        chatbox.select(conversation);
        chatbox.mount(chatboxEl.current);
  
        return () => session.destroy()

      } else if (localStorage.getItem('role') === 'orphan') {
        const currentUser = new Talk.User({
          id: `orphan-${talkUser[0]?.Orphan?.id}`,
          name: talkUser[0]?.Orphan?.fullName,  
          email: talkUser[0]?.Orphan?.email,
          photoUrl: talkUser[0]?.Orphan?.imageUrl,
          welcomeMessage: `Hello, ${talkUser[0]?.Orphan?.fullName}`,
          role: 'default',
        });
  
        const otherUser = new Talk.User({
          id: `volunteer-${talkUser[0]?.Volunteer?.id}`,
          name: talkUser[0]?.Volunteer?.fullName,
          email: talkUser[0]?.Volunteer?.email,
          photoUrl: talkUser[0]?.Volunteer?.imageUrl,
          welcomeMessage: `Hello, ${talkUser[0]?.Volunteer?.fullName}`,
          role: 'default',
        });


        const session = new Talk.Session({
          appId: 'tdQXKoKQ',
          me: currentUser,
        });
  
        const conversationId = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = session.getOrCreateConversation(conversationId);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);
  
        const chatbox = session.createChatbox();
        chatbox.select(conversation);
        chatbox.mount(chatboxEl.current);
  
        return () => session.destroy()
      }
    }
  }, [talkLoaded]);

  return <div style={{height: '625px'}} ref={chatboxEl} />;
}
