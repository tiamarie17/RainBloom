import { useHistory } from 'react-router-dom';
import Button from '@mui/material/IconButton';


function Design() {

  const history = useHistory();

  const installation = () => {
    console.log('in installation');
    history.push('/installation')
  }

  const search = () => {
    console.log('in search');
    history.push('/search')
  }


  return (
    <>
      <h3>Step 5: Design Garden Layout: Tips and Considerations</h3>
      <ol>
        <li>Consider using grid paper to draw out your garden layout.</li>
        <li>Put the big plants in the back and the small plants in the front. </li>
        <li>Put tags next to your plants so you can more easily identify them when you need to weed the garden.</li>
      </ol>
      
      <Button
        variant="contained"
        onClick={search}
        sx={{
          borderRadius: 3
        }}
        style={{

          backgroundColor: 'darkseagreen',
          color: 'black',
          fontSize: 14,
          margin: 5,
        }}
      >Back to Plant Search
      </Button>

      <Button
        variant="contained"
        onClick={installation}
        sx={{
          borderRadius: 3
        }}
        style={{

          backgroundColor: 'goldenrod',
          color: 'black',
          fontSize: 14,
          margin: 5,
        }}
      >Install Rain Garden
      </Button>

    </>
  );
}

export default Design;