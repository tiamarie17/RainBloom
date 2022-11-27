import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import SizeForm from './SizeForm';


function Installation(){

    const history = useHistory();

    const myGarden = () => {
        console.log('in myGarden');
        history.push('/mygarden');

    }

    const size = useSelector((store)=>{
        return store.size;
    })

    return(
    <>

    <h1>Installation info here!</h1>

    <h4>Calculate Rain Garden Size</h4>
        <SizeForm/>
        <h4>Rain garden size is {size} ft²</h4>

    <button onClick={myGarden}>Go To My Garden</button>
    </>);
}

export default Installation;