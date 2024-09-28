import express, { Request } from "express";
import * as http from "http";
import { type Socket, type ServerOptions } from "socket.io";
// import { CorsOptions } from "cors";
// import { Server} from "socket.io";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";

const app = express();
app.use(cors());
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5002;

process.on("uncaughtException", (err) => {
    console.log(`Error: $err: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Expectation`);
    process.exit(1);
});




const ioOptions: Partial<ServerOptions> = {
    cors: {
      origin: "http://localhost:3000",
      // origin: "https://workers-chatapp-frontend.vercel.app",
      methods: ["GET", "POST"],
    },
  };
  
  const io: SocketIOServer = new SocketIOServer(server, ioOptions);
  
  app.get("/", (_req:Request, res) => res.send("Hello World!"));
  
  
  
  io.on("connection", (socket: Socket) => {  
    socket.on("disconnect", () => {
    //   io.emit(
    //     "get-users",
    //     online_Users
    //       .filter((i) => i.socketId !== socket.id)
    //       .map((j) => ({ email: j.email, socketId: j.socketId }))
    //   );
    //   online_Users = online_Users.filter((i) => i.socketId !== socket.id);
    });
  });
  







server.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
