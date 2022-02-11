import React, { useCallback, useState } from "react";

import "./SendMessageForm.scss";

export default function SendMessageForm(props) {
  const [inpText, setInpText] = useState("");
  console.log(props.users);
  const sendMessage = useCallback(() => {
    let user = props.users[props.contId];
    

    let today = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    

    if (inpText !== "") {
      user.message.push({
        author: "Me",
        messageText: `${inpText}`,
        date: `${today}`,
        time:`${time}`
      });

      fetch(`http://localhost:3000/AllUsers/${user.id}`, {
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
        date: `${today}`,
        time:`${time}`
      });

      fetch(`http://localhost:3000/AllUsers/${props.contId + 1}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }, 10000);
  }, [props, inpText]);

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
