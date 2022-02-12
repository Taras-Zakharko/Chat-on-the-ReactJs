import React, {  useEffect, useMemo, useState } from "react";

import "./Chats.scss";

export default function Contact(props) {

  const [filter, setFilter] = useState(props.users);
  useEffect(() => {
    setFilter((prev) => prev = props.users);

    if (props.searcChat !== "") {
      props.users.filter((user) => {
        console.log(_filter(filter, props.searcChat));
        return setFilter((prev) => prev = _filter(filter, props.searcChat));
      });
    }
    
  }, [props, setFilter,filter]);

  function _filter(arr, value) {
    console.log(arr);
    if(arr.length > 0){
      return arr.filter((el) => {
        console.log(el);
        return el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
    }
    
  }
  useMemo(()=>{
    filter.sort((a, b) => {
      let c = new Date(+a.message[a.message.length - 1].date);
      let d = new Date(+b.message[b.message.length - 1].date);
      return d - c;
    });
  },[filter])
  

  console.log(filter);
  return (
    <>
      {filter.map((user) => {
        return (
          <div
            className="contact"
            key={user.id}
            id={user.id}
            onClick={() => {
              props.setContId((prev) => (prev = user.id));
              console.log(user.id - 1);
            }}
          >
            <div className="user-chat-info">
              <img src={user.photo} alt="" />
              <div className="info-text">
                <h4>{user.name}</h4>
                <p>{user.message[user.message.length - 1].messageText}</p>
              </div>
            </div>

            <p className="date">
              {new Date(
                +user.message[user.message.length - 1].date
              ).toLocaleDateString()}
            </p>
          </div>
        );
      })}
    </>
  );
}
