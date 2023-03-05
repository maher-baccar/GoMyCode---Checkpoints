import './App.css';
import { useState } from "react";
import UserCard from './components/UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [person, setPerson] = useState({
fullName:"Maher Baccar",
bio:"Web developer",
profession:"student",
img:"https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/289300540_814937826558996_1858301256440710435_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=9WNHUMgEJMMAX9o2p9_&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBnGD1QpP4OF-r2J7S2uTTWzhg6mjRPJJy7t9MZ0urG1Q&oe=6370DA58"
});
 const [show, setshow] = useState(false)
  return (
    <div>
<button onClick={()=>setshow(!show)}> here to show user</button>
   { show?<UserCard person={person}/>:null}

</div>
  );
}

export default App;
