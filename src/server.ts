import { http } from "./http";
import "./websocket/client"

http.listen(3001, () => console.log("Server running on port 3001"));
