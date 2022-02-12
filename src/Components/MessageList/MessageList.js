import React, { useState,useMemo } from "react";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import "./MessageList.scss";

export default function MessageList(props) {

  const [userMessanges, setUserMessanges] = useState(props.users[0])
  useMemo(()=> {for (const user of props.users) {
    console.log(+user.id , +props.contId);
    if(+user.id === +props.contId){
      setUserMessanges((prev) => prev = user)
    }
    
  }}, [props])
  console.log(userMessanges);


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
                <p className="my-message-date">{`${new Date(+text.date).toLocaleString()}`}</p>
              </div>
            );
          } else {
            return (
              <div className="my-message" key={index}>
                <p className="my-message-text">{text.messageText}</p>
                <p className="my-message-date">{`${new Date(+text.date).toLocaleString()}`}</p>
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
