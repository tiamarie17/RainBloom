import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import SizeForm from './SizeForm';


function Installation(){

    const history = useHistory();

    const size = useSelector((store)=>{
        return store.size;
    })

    const myGarden = () => {
        console.log('in myGarden');
        history.push('/mygarden');

    }


    const backLocation = () => {
        console.log('in backLocation');
        history.push('/location');

    }


    return(
    <>


    <h4>Calculate Rain Garden Size</h4>
        <SizeForm/>
        <h4>Rain garden size is {size} ft²</h4>

    <button onClick={myGarden}>Go To My Garden</button>
    <button onClick={backLocation}>Back to Location</button>
    </>);
}

export default Installation;