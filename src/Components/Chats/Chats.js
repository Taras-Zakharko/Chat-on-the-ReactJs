import React from "react";
import "./Chats.scss";
import SearchChat from "./SearchChat";
import AllChats from "./AllChats";

export default function Chats(props) {
  return (
    <>
      <SearchChat />
      <AllChats
        users={props.users}
        contId={props.contId}
        setContId={props.setContId}
      />
    </>
  );
}
