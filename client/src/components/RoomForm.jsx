import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function RoomForm({ socket, setRoom }) {
  const [roomName, setRoomName] = useState("");

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (roomName) {
      socket.emit("join-room", roomName);
      setRoom(roomName);
      setRoomName("");
    }
  };

  return (
    <form onSubmit={handleJoinRoom}>
      <h5>Join Room</h5>
      <TextField
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        id="outlined-basic"
        label="Room Name"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Join
      </Button>
    </form>
  );
}

export default RoomForm;
