import React from "react";
import { Typography, Stack } from "@mui/material";

function MessageList({ messages }) {
  return (
    <Stack spacing={2}>
      {messages.map((m, i) => (
        <Typography key={i} variant="body1" gutterBottom>
          {m}
        </Typography>
      ))}
    </Stack>
  );
}

export default MessageList;
