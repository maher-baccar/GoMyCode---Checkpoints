import './App.css';
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from './Component/Profile/ProfilePhoto';


const App = () => (
  <div id="card">
 <>

   <ProfilePhoto/>
   <FullName />

   <Address />

 </>
 </div>
);
export default App;