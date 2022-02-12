import React, { useState } from "react";
import "./Chats.scss";
import SearchChat from "./SearchChat";
import AllChats from "./AllChats";

export default function Chats(props) {
  const [searcChat, setSearchChat] = useState('');
  
  console.log(searcChat);

  return (
    <>
      <SearchChat users={props.users} setSearchChat={setSearchChat} searcChat={searcChat} />
      <AllChats
        users={props.users}
        contId={props.contId}
        setContId={props.setContId}
      />
    </>
  );
}
