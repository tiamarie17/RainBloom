import {useHistory} from 'react-router-dom';
import Button from '@mui/material/IconButton';


function Depth(){

    const history = useHistory();

    const area = () => {
        console.log('in area');
        history.push('/location')
    }


    return(<>

         <h3>Step 2: Select Garden Depth</h3>

        <Button 
          variant="contained"
          onClick={area}
          sx={{
            borderRadius: 3
          }}
          style={{
            
            backgroundColor: 'darkseagreen',
            color: 'black',
            fontSize: 14,
            margin: 5,
           }}
          >Find Area with Map
        </Button>
    


    </>);
}

export default Depth;