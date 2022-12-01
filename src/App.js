import ChatComponent from "./compoents/ChatComponent";
import Sidebar from "./compoents/Sidebar";
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar />

        <ChatComponent />
      </div>
   
    </div>
  );
}

export default App;
