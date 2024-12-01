import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function MessageForm({ socket, room }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (room && message) {
      socket.emit("message", { message, room });
      setMessage(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSendMessage}>
      <h5>Send Message</h5>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="outlined-basic"
        label="Message"
        variant="outlined"
      />
      <TextField
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        id="outlined-basic"
        label="Room"
        variant="outlined"
        disabled
      />
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}

export default MessageForm;
