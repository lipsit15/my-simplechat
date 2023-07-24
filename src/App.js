
import { useState ,useRef} from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from "universal-cookie";
import { Chat } from "./components/chat"
import { signOut } from 'firebase/auth';
import {auth} from "./firebase-config"
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  
  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false)
    setRoom(null);
    
  }
  
  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth } />
       
      </div>
    );
    
  }
  return (
    <>
      {room ? (<Chat room={ room} />) : (<div className='room'>
        {/* <label  style={{fontWeight:"bold",color:"#4A55A2"}}>Enter Room Name:</label> */}
        <input placeholder='Enter the room' ref={roomInputRef}/>
        <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
      </div>
      )}
      <div className="sign-out">
        <button onClick={signUserOut}>Sign out</button>
      </div>
    </>
  );
  
}

export default App;
