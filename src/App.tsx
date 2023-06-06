import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import InteractionBar from "./components/InteractionBar/InteractionBar";
import MainBody from "./components/Main/MainBody";

function App() {
  return (
    <div className="app-main">
      <MainBody />
      <InteractionBar />
      <SideBar />
    </div>
  );
}

export default App;
