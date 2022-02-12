import "./App.scss";
import Chats from "./Chats/Chats";
import MessageList from "./MessageList/MessageList";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contId, setContId] = useState(0);

  const [randomMessage, setRandomMessage] = useState("Do you want a joke");
  

  useEffect(() => {
    fetch("http://localhost:3000/AllUsers")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setUsers(result);
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
            />
          ) : null}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
