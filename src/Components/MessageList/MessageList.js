import React, { useState, useEffect } from "react";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import "./MessageList.scss";

export default function MessageList(props) {
  const [user, setUser] = useState(props.users[props.contId]);
  const [inpText, setInpText] = useState("");

  const [userMessanges, setUserMessanges] = useState(props.users[0]);
  useEffect(() => {
    for (const user of props.users) {
      if (+user.id === +props.contId) {
        setUserMessanges((prev) => (prev = user));
      }
    }
  }, [props, setUserMessanges]);

  return (
    <div className="message-list-block">
      <div className="interlocutor">
        <img src={userMessanges.photo} alt="" />
        <h3>{userMessanges.name}</h3>
      </div>
      <div className="message-list">
        {userMessanges.message.map((text, index) => {
          if (text.author === userMessanges.name) {
            return (
              <div className="message" key={index}>
                <div className="message-info">
                  <img src={userMessanges.photo} alt="" />
                  <p>{text.messageText}</p>
                </div>
                <p className="my-message-date">{`${new Date(
                  +text.date
                ).toLocaleString()}`}</p>
              </div>
            );
          } else {
            return (
              <div className="my-message" key={index}>
                <p className="my-message-text">{text.messageText}</p>
                <p className="my-message-date">{`${new Date(
                  +text.date
                ).toLocaleString()}`}</p>
              </div>
            );
          }
        })}
      </div>
      <SendMessageForm
        users={props.users}
        setUsers={props.setUsers}
        contId={props.contId}
        setRandomMessage={props.setRandomMessage}
        randomMessage={props.randomMessage}
        user={user}
        setUser={setUser}
        inpText={inpText}
        setInpText={setInpText}
        forceUpdate={props.forceUpdate}
      />
    </div>
  );
}
