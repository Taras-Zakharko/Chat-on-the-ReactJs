import React, { useCallback, useState,useMemo } from "react";

import "./SendMessageForm.scss";

export default function SendMessageForm(props) {
  const [user,setUser]= useState(props.users[props.contId]);

  useMemo(()=> {
    for (const user of props.users) {
      console.log(+user.id , +props.contId);
      if(+user.id === +props.contId){
        setUser((prev) => prev = user)
      }
      
    }
  },[props])

  let f = new Date().getTime();
  console.log(new Date(f).toLocaleString());

  const [inpText, setInpText] = useState("");
  console.log(props.users);
  const sendMessage = useCallback(() => {
    // let user = props.users[props.contId];
    console.log(user);
    
    
    

    let date = new Date().getTime();
    
    

    if (inpText !== "") {
      user.message.push({
        author: "Me",
        messageText: `${inpText}`,
        date: `${date}`
        
      });

      fetch(`http://localhost:3000/AllUsers/${props.contId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }

    setInpText("");

    setTimeout(() => {
      user.message.push({
        author: `${user.name}`,
        messageText: `${props.randomMessage}`,
        date: `${date}`
        
      });

      fetch(`http://localhost:3000/AllUsers/${props.contId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }, 10000);
  }, [props, inpText, user]);

  return (
    <div className="message-form">
      <input
        type="text"
        className="inp-message"
        placeholder="Type your message"
        value={inpText}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        onChange={() =>
          setInpText(
            (prev) => (prev = document.querySelector(".inp-message").value)
          )
        }
      />
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/lmooth-communication-solid/32/message_chat_conversation_communication_Send-512.png"
          alt=""
        />
      </button>
    </div>
  );
}
