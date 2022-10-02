import './App.css';
import Profile from './profile/Profile';

function App() {

 function  handleName(name){
  console.log(name);
  //prompt("Yes, ça fonctionne");
 }
  return (
    <div>
      <Profile  fullName="Ngarison" handleName={handleName} bio="test"  profession="ingé" >
       <img className='image' src='./profil.jpg' alt='Mon Profil'/>
      </Profile>
    </div>
  );
}

export default App;
