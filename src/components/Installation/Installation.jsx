import {useHistory} from 'react-router-dom';


function Installation(){

    const history = useHistory();

    const myGarden = () => {
        console.log('in myGarden');
        history.push('/mygarden');

    }

    return(
    <>

    <h1>Installation info here!</h1>

    <button onClick={myGarden}>Go To My Garden</button>
    </>);
}

export default Installation;