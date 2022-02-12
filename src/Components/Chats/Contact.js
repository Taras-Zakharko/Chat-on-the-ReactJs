import React, { useEffect } from "react";
import useForceUpdate from "use-force-update";

import "./Chats.scss";

export default function Contact(props) {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    props.setFilter((prev) => {
      return (prev = props.users);
    });

    if (props.searcChat !== "") {
      props.filter.filter((user) => {
        return props.setFilter(
          (prev) => (prev = _filter(props.filter, props.searcChat))
        );
      });
    }
  }, [props.searcChat, props.setFilter]);

  function _filter(arr, value) {
    if (arr.length > 0) {
      return arr.filter((el) => {
        return el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
    }
  }
  useEffect(() => {
    props.filter.sort((a, b) => {
      let c = new Date(+a.message[a.message.length - 1].date);
      let d = new Date(+b.message[b.message.length - 1].date);
      return d - c;
    });
    forceUpdate();
  }, [props, forceUpdate]);

  return (
    <div className="contacts-box">
      {props.filter.map((user) => {
        return (
          <div
            className="contact"
            key={user.id}
            id={user.id}
            onClick={() => {
              return props.setContId((prev) => (prev = user.id));
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
    </div>
  );
}
