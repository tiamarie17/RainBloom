import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SizeForm from '../Size/SizeForm';
import { Button } from "@mui/material";


function Installation() {

    const history = useHistory();

    const myGarden = () => {
        console.log('in myGarden');
        history.push('/mygarden');

    }


    const design = () => {
        console.log('in design');
        history.push('/design');

    }


    return (
        <>


            <h3>Step 6: Installation Tips</h3>

            <Button
                variant="contained"
                onClick={design}
                sx={{
                    borderRadius: 3
                }}
                style={{
                    backgroundColor: 'darkseagreen',
                    color: 'black',
                    margin: 5
                }}
            >Back To Design Layout
            </Button>

            <Button
                variant="contained"
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


        </>
    );
}

export default Installation;