import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';

 export default function MyChatComponent() {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);
  Talk.ready.then(() => markTalkLoaded(true));

  useEffect(() => {
    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: '2',
        name: 'Fachri',
        email: 'fachril@gmail.com',
        photoUrl: 'https://scontent-cgk1-1.xx.fbcdn.net/v/t1.6435-9/133783991_3823459547705402_3716128787064210329_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I2Oz0dNQ8ZIAX9SnAgz&tn=ZUpqTEaXefXA3pyr&_nc_ht=scontent-cgk1-1.xx&oh=00_AfANYpRVDd1q8NgEqCjJcBUf3BA-gFddNE7Ea8V5miQHog&oe=638F0F11',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '3',
        name: 'Fachrul',  
        email: 'mfachrulph21@gmail.com',
        photoUrl: 'https://pbs.twimg.com/profile_images/1524540562551975936/gIilZ4-7_400x400.jpg',
        welcomeMessage: 'Hello!',
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
  }, [talkLoaded]);

  return <div style={{height: '600px'}} ref={chatboxEl} />;
}
