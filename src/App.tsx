import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import MainBody from "./components/Main/MainBody";

function App() {
  return (
    <div className="app-main">
      <MainBody />
      <SideBar />
    </div>
  );
}

export default App;
