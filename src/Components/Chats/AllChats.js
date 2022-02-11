import React from "react";
import "./Chats.scss";
import Contact from "./Contact";

export default function AllChats(props) {
  return (
    <div className="all-chats">
      <h2>Chats</h2>
      <Contact
        users={props.users}
        contId={props.contId}
        setContId={props.setContId}
      />
    </div>
  );
}
