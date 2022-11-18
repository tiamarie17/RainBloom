import { useHistory } from "react-router-dom";


function Size(){

    const history = useHistory();

    const installation = () =>{
        console.log('in installation');
        history.push('/installation');
    }

    return(<>

    <h1>Rain Garden Size info here!</h1>

    <button onClick={installation}>Next</button>
    </>);
}

export default Size;