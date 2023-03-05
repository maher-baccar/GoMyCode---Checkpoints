import './App.css';
import Profile from './Components/Profile';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  const fullname="Maher Baccar";
  const bio="web developper";
  const profession="student";
  const handleAlert=(x)=>alert(x);
  
  return (
    <div className="App">
    <Profile fullname={fullname}  bio={bio} profession={profession} handleAlert={handleAlert}>
     <img  heigth="200px" width="200px  " src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/289300540_814937826558996_1858301256440710435_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=dZC8nQQRmLcAX_wDDdW&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDLEkavl2BqNCoVCT7Bh6KRpLQBr-PDSvFebzhZMW48rA&oe=636EE018"/>


    </Profile>
    </div>
  );
}

export default App;
