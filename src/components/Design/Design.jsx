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
      <h3>Step 5: Design Garden Layout</h3>
      <ul>
        <li>Design Tips and Considerations:</li>
        <li>1. Consider using grid paper to draw out your garden layout.</li>
        <li>2. Put the big plants in the back and the small plants in the front. </li>
        <li>3. Put tags next to your plants so you can more easily identify them when you need to weed the garden.</li>

      </ul>
      
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