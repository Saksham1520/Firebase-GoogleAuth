import "./App.css";
import Googleauth from "./Components/Googleauth";
import Home from "./Components/Home";
import { useFirebase } from "./Context/Firebase";

function App() {
  const firebase = useFirebase();
  return <>{firebase.currentUser ? <Home /> : <Googleauth />}</>;
}

export default App;
