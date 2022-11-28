import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import SizeForm from './SizeForm';
import { Button} from "@mui/material";


function Installation(){

    const history = useHistory();

    const size = useSelector((store)=>{
        return store.size;
    })
    console.log('size is', size);

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


    <h3>Step 3: Calculate Rain Garden Size</h3>
    <SizeForm/>
    <h3>Your rain garden size is {size} ft²</h3>

    <Button 
                variant = "contained" 
                onClick={myGarden}
                sx={{
                    borderRadius: 3
                  }}
                style={{
                    backgroundColor: 'goldenrod',
                    color: 'black',
                    margin: 5
                }}
                >Go to My Garden
    </Button>

    <Button 
                variant = "contained" 
                onClick={backLocation}
                sx={{
                    borderRadius: 3
                  }}
                style={{
                    backgroundColor: 'darkseagreen',
                    color: 'black',
                    margin: 5
                }}
                >Back To Location
    </Button>

    </>
    );
}

export default Installation;