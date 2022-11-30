import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SizeForm from './SizeForm';
import { Button } from "@mui/material";
import { SearchOffRounded } from '@mui/icons-material';


function Size() {

    const history = useHistory();

    const size = useSelector((store) => {
        return store.size;
    })
    console.log('size is', size);

    const map = () => {
        history.push('/location');
    }

    const search = () => {
        history.push('/search');
    }


    return (
        <>
            <h3>Step 3: Calculate Rain Garden Size</h3>
            <SizeForm />
            <h3>Your rain garden size is {size} ft²</h3>

            <Button
                variant="contained"
                onClick={map}
                sx={{
                    borderRadius: 3
                }}
                style={{
                    backgroundColor: 'darkseagreen',
                    color: 'black',
                    margin: 5
                }}
            >Back To Map
            </Button>

            <Button
                variant="contained"
                onClick={search}
                sx={{
                    borderRadius: 3
                }}
                style={{
                    backgroundColor: 'goldenrod',
                    color: 'black',
                    margin: 5
                }}
            >Search for Plants
            </Button>
        </>);
}

export default Size;