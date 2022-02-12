import React, { useState } from "react";
import "./Chats.scss";
import SearchChat from "./SearchChat";
import Contact from "./Contact";

export default function Chats(props) {
  const [searcChat, setSearchChat] = useState("");

  return (
    <>
      <SearchChat setSearchChat={setSearchChat} searcChat={searcChat} />
      <div className="all-chats">
        <h2>Chats</h2>
        <Contact
          users={props.users}
          contId={props.contId}
          setContId={props.setContId}
          searcChat={searcChat}
          setUsers={props.setUsers}
          filter={props.filter}
          setFilter={props.setFilter}
        />
      </div>
    </>
  );
}
