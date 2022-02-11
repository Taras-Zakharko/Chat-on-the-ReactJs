import React from "react";

import "./Chats.scss";

export default function Contact(props) {

  return (
    <>
      {props.users.map((user, index) => {
        return (
          <div
            className="contact"
            key={index}
            id={user.id}
            onClick={() => {
              props.setContId((prev) => (prev = user.id-1));
              console.log(user.id);
            }}
          >
            <div className="user-chat-info">
              <img src={user.photo} alt="" />
              <div className="info-text">
                <h4>{user.name}</h4>
                <p>{user.message[user.message.length - 1].messageText}</p>
              </div>
            </div>

            <p className="date">{user.message[user.message.length - 1].date}</p>
          </div>
        );
      })}
    </>
  );
}
