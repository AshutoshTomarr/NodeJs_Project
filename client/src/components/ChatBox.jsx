import React, { useState } from "react";
import RoomForm from "./RoomForm";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

function ChatBox({ socket }) {
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);

  // Listens for incoming messages
  socket.on("receive-message", (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });

  return (
    <div>
      <RoomForm socket={socket} setRoom={setRoom} />
      {room && <MessageForm socket={socket} room={room} />}
      <MessageList messages={messages} />
    </div>
  );
}

export default ChatBox;
