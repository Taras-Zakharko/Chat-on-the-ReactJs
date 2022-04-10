import "./App.scss";
import Chats from "./Chats/Chats";
import MessageList from "./MessageList/MessageList";
import { useState, useEffect } from "react";
import useForceUpdate from "use-force-update";

function App() {
  const forceUpdate = useForceUpdate();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contId, setContId] = useState(1);
  const [filter, setFilter] = useState([]);

  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    fetch("https://chat-on-the-react.herokuapp.com/api/AllUsers")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setUsers(result);
        setFilter(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setUsers]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((result) => {
        setRandomMessage(result.value);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <div className="chats">
          <Chats
            users={users}
            contId={contId}
            setContId={setContId}
            setUsers={setUsers}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div className="message-block">
          {isLoading && <div>Loading...</div>}
          {users.length > 0 ? (
            <MessageList
              users={users}
              setUsers={setUsers}
              contId={contId}
              randomMessage={randomMessage}
              setRandomMessage={setRandomMessage}
              filter={filter}
              setFilter={setFilter}
              forceUpdate={forceUpdate}
            />
          ) : null}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
