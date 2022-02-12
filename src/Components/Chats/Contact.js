import React from "react";

import "./Chats.scss";

export default function Contact(props) {
  
  const sorted = props.users.sort((a,b)=>{
    let c = new Date(+a.message[a.message.length - 1].date);
    let d = new Date(+b.message[b.message.length - 1].date);
    return d-c;
  })
  
  console.log(sorted, props.users);

  return (
    <>
      {props.users.map((user, index) => {
        return (
          <div
            className="contact"
            key={user.id}
            id={user.id}
            onClick={() => {
              props.setContId((prev) => (prev = user.id));
              console.log(user.id-1);
            }}
          >
            <div className="user-chat-info">
              <img src={user.photo} alt="" />
              <div className="info-text">
                <h4>{user.name}</h4>
                <p>{user.message[user.message.length - 1].messageText}</p>
              </div>
            </div>

            <p className="date">{new Date(+user.message[user.message.length - 1].date).toLocaleDateString()}</p>
          </div>
        );
      })}
    </>
  );
}
