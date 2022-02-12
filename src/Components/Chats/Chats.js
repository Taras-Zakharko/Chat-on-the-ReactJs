import React, { useState } from "react";
import "./Chats.scss";
import SearchChat from "./SearchChat";
import AllChats from "./AllChats";

export default function Chats(props) {
  console.log(props.users)
  const [searcChat, setSearchChat] = useState('');

  return (
    <>
      <SearchChat users={props.users} setSearchChat={setSearchChat} searcChat={searcChat} />
      <AllChats
        users={props.users}
        contId={props.contId}
        setContId={props.setContId}
        searcChat={searcChat}
      />
    </>
  );
}
