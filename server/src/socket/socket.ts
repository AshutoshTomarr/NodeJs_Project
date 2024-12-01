import { Server } from "socket.io";
import { Server as HTTPServer } from "http";
// /**
//  * Initializes the Socket.IO server.
//  * @param {http.Server} httpServer - The HTTP server instance.
//  * @returns {Server} io - The Socket.IO server instance.
//  */
const initializeSocketIO = (httpServer:HTTPServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173", // Update as needed
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("User Connected", socket.id);

    socket.on("message", ({ room, message }) => {
      console.log({ room, message });
      socket.to(room).emit("receive-message", message);
    });

    socket.on("join-room", (room) => {
      socket.join(room);
      console.log(`User joined room ${room}`);
    });

    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });

  return io;
};

export default initializeSocketIO;
