import React, {useHistory} from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Weather from '../Weather/Weather';
import { Button } from "@mui/material";
import './User.css';


function UserPage() {
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const goToFaq = () =>{
      console.log('in goToFaq');
      history.push('/faq');
  }

  const steps = () =>{
    console.log('in steps');
    history.push('/steps');
}

const goToMyGarden = () =>{
  console.log('in goToMyGarden');
  history.push('/mygarden');
}

  return (
    <>
    <div className="userWeather">
     <h2>Welcome, {user.username}!</h2>
     <Weather />
    </div>
    <div className = "full-screen bg-user"></div>
    <div className="container">
      
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}


     <div className="userButtons">
      <Button 
        onClick={goToFaq}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
            margin: 3
             }}
            style={{
            backgroundColor: 'mistyrose',
                color: 'black',
            }}
            >FAQs
    </Button>


    
    <Button 
        onClick={steps}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
            margin: 3
             }}
            style={{
            backgroundColor: 'mistyrose',
                color: 'black',
            }}
            >Build a Rain Garden
    </Button>
    
    
    
    <Button 
        onClick={goToMyGarden}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
            margin: 3
          
             }}
            style={{
            backgroundColor: 'mistyrose',
                color: 'black',
            }}
            >My Garden
    </Button>
    
    </div>
  
    </div>
    
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
