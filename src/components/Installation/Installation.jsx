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
           
      <ol>
        <li>Make sure you call <a  href="http://www.gopherstateonecall.org/">Gopher One</a> to check for utilities before you dig!</li>
        <li>Consider how water will get to your garden. You may need to re-route water with pipes or draings. </li>
        <li>Remove the sod and create a shallow depression with a berm around the sides--Remember that the depth of the garden is measured from the lowest point on the garden bed to the bottom of the outlet (where water flows out of the garden)</li>
        <li>Dig down an additional 4-6 inches and till the soil--if you have a big garden, you could use a rototiller. Otherwise, you could just use a shovel.</li>
        <li>Add an inch of compost to the garden, then till that into the soil.</li>
        <li>Once you have your desired depth, you can grade the garden to the shape you want.</li>
        <li>Optional: Place edging around the garden bed (at least 4 inches deep) to prevent grass from getting into the garden. </li>
        <li>Check the infiltration--Do this before you plant! Fill up the garden with water with a hose, and make sure it drains within a day.</li>
        <li>You are ready to plant! Avoid letting your plants dry out before planting them.</li>
        <li>If you buy plugs, unwrap the roots from the bottom of the pot.</li>
        <li>Dig a hole deep enough to allow the roots to hang vertically to the bottom of the hole.</li>
        <li>Once you are done planting, add 3-4 inches of double shredded hardwood mulch around the plants to keep the weeds down.</li>
      </ol>

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