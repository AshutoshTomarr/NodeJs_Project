import React, { useMemo, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Container, Box, Typography } from "@mui/material";
import RoomForm from "./components/RoomForm";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

function App() {
  const socket = useMemo(() => io("http://localhost:8000", { withCredentials: true }), []);
  const [messages, setMessages] = useState([]);
  const [socketID, setSocketID] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setSocketID(socket.id);
      console.log("Connected to server with ID:", socket.id);
    });

    socket.on("receive-message", (data) => {
      console.log("New message received:", data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("welcome", (data) => {
      console.log("Welcome message:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ height: 50 }} />
      <Typography variant="h6" component="div" gutterBottom>
        <h5>Socket ID:</h5> {socketID}
      </Typography>

      <RoomForm socket={socket} setRoom={setRoom} />
      <MessageForm socket={socket} room={room} />
      <MessageList messages={messages} />
    </Container>
  );
}

export default App;
