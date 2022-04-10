import React, { useCallback, useEffect } from "react";

import "./SendMessageForm.scss";

export default function SendMessageForm(props) {
  useEffect(() => {
    for (const user of props.users) {
      if (+user.id === +props.contId) {
        props.setUser((prev) => (prev = user));
      }
    }
  }, [props]);

  const sendMessage = useCallback(() => {
    if (props.inpText !== "") {
      props.user.message.push({
        author: "Me",
        messageText: `${props.inpText}`,
        date: `${new Date().getTime()}`,
      });

      fetch(`https://chat-on-the-react.herokuapp.com/api/AllUsers/${props.contId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.user),
      });
    }

    props.setInpText("");
  }, [props]);

  const addRandomMessage = useCallback(() => {
    setTimeout(() => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((result) => {
          props.setRandomMessage(result.value);
        });
      props.user.message.push({
        author: `${props.user.name}`,
        messageText: `${props.randomMessage}`,
        date: `${new Date().getTime()}`,
      });

      fetch(`http://localhost:3003/AllUsers/${props.contId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.user),
      });
    }, 10000);
  }, [props]);

  return (
    <div className="message-form">
      <input
        type="text"
        className="inp-message"
        placeholder="Type your message"
        value={props.inpText}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendMessage();
            addRandomMessage();
            props.forceUpdate();
          }
        }}
        onChange={() =>
          props.setInpText(
            (prev) => (prev = document.querySelector(".inp-message").value)
          )
        }
      />
      <button
        onClick={() => {
          sendMessage();
          addRandomMessage();
          props.forceUpdate();
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
