import ChatComponent from "./compoents/ChatComponent";
import Sidebar from "./compoents/Sidebar";
import './App.css';
import {useEffect} from 'react'


function App() {
  useEffect(() => {
    // Run  this piece of code once the app load
    const pusher = new Pusher('51874f4b2abc85062490', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
  }, [])
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
