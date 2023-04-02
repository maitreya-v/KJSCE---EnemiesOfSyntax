import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import Package from "./pages/Package";
import Maps from "./pages/Maps";
import { ALAN_API } from "./constants";
import Chat from "./pages/Chat";
import Aos from "aos";
import "aos/dist/aos.css";
import Itinerary from "./pages/Itinerary";
import Pairing from "./pages/Pairing";
import Events from "./pages/Events";
import Companion from "./pages/Companion";
import Chating from "./pages/Forum/components/Chat";
import NavbarFire from "./pages/Forum/components/Navbar";
import Forum from "./pages/Forum/components/Forum";
import PackingList from "./pages/PackingList";
import Task from "./pages/Task";
import Groups from "./pages/Groups";
import GroupDetail from "./pages/GroupDetail";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500, once: false });
  }, []);

  useEffect(() => {
    alanBtn({
      key: ALAN_API,
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/pairing" element={<Pairing />} />
        <Route path="/companion/:id" element={<Companion />} />
        <Route path="/events" element={<Events />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/profile/list" element={<Task />}></Route>
        <Route path="/groupdetail/:id" element={<GroupDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
