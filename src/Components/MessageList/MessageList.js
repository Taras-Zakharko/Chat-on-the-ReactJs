import React from "react";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import "./MessageList.scss";

export default function MessageList(props) {


  return (
    <div className="message-list-block">
      <div className="interlocutor">
        <img src={props.users[props.contId].photo} alt="" />
        <h3>{props.users[props.contId].name}</h3>
      </div>
      <div className="message-list">
        {props.users[props.contId].message.map((text, index) => {
          if (text.author === props.users[props.contId].name) {
            return (
              <div className="message" key={index}>
                <div className="message-info">
                  <img src={props.users[props.contId].photo} alt="" />
                  <p>{text.messageText}</p>
                </div>
                <p className="my-message-date">{`${text.date} , ${text.time}`}</p>
              </div>
            );
          } else {
            return (
              <div className="my-message" key={index}>
                <p className="my-message-text">{text.messageText}</p>
                <p className="my-message-date">{`${text.date} , ${text.time}`}</p>
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
        
      />
    </div>
  );
}
