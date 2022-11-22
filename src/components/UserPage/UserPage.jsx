import React, {useHistory} from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const goToFaq = () =>{
      console.log('in goToFaq');
      history.push('/faq');
  }

  const buildRainGarden = () =>{
    console.log('in buildRainGarden');
    history.push('/search');
}

const goToMyGarden = () =>{
  console.log('in goToMyGarden');
  history.push('/mygarden');
}

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* <LogOutButton className="btn" /> */}
      <button onClick = {goToFaq}>FAQs</button>
      <button onClick= {buildRainGarden}>Build a Rain Garden</button>
      <button onClick = {goToMyGarden}>My Garden</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
