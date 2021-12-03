import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';

function PizzaSelect() {
    const pizzaMenu = useSelector((store) => store.pizzaReducer)
    const cart = useSelector((store) => store.cartReducer)
    const [tempCart, setTempCart] = useState([]);

    const dispatch = useDispatch();
    
    const addToCart = () => {
        setTempCart();
        dispatch({
            type: 'ADD_TO_CART',
            payload: tempCart
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }} className="pizza-card-container">
            <h2 className="subtitle">Step 1: Select Your Pizza!</h2>
            <div>
                <p className="cart-total">Cart Total: $</p>
            </div>
                {pizzaMenu.map((pizza) => {
                   return (
                    <div className="pizza-card-spacer">
                        <Card sx={{ maxWidth: 345 }} className="pizza-card">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={pizza.image_path}
                                alt="pizza_01"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pizza.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pizza.description}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    <p>{pizza.price}</p>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Button onClick={addToCart} variant="contained" color="success">Add</Button>
                    </div>
                   ); 
                })}
        </Box>
    );
}

export default PizzaSelect;


 {/* Forbidden Pizza
            <div className="pizza-card-spacer">
                <Card sx={{ maxWidth: 345 }} className="pizza-card">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="images/pizza_03.jpeg"
                    alt="pizza_03"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        o̵͙̦̿̏r̸̢̥͌b̸͍͌í̸͔͗d̵͚̐̎ḑ̶̆è̴̼͘ǹ̷͚ ̸͔͛̇P̷̘̟͝i̵̳͝z̵̻̀͑z̸̲̒â̵̙
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ḥ̴̑ö̶̗́̈́m̷͚̎̋ë̵̜͎́ ̶͈͉͒g̵̱̪̾̄ṙ̷̬o̸̼̘̅͗w̸͕͗̒ņ̴̞̈ ̴̘̿t̵̡̔͒r̴̛̪ǒ̷̯͘p̵̟̖̃̌i̵͎͊c̴̨͈̄ȃ̶̰̝l̸̮̰̿ ̸̜̅p̶͎̈́͘͜i̴̭͒͝z̸͉͈̈̿ž̴̡a̴͈̺̍,̸̪̘͒ ̸̜̥̅̀f̵̩̅̀r̴͎͒̿͜ẻ̵͚͚̃ş̸͗͝ͅh̸̡͑̀ ̷̪͎͛f̸̗̲̒r̴̰͆ở̶͙̣m̶̜̮̈́ ̵͇͌̕t̵́͒͜h̴̥̍ẽ̵̬ ̸̾͜g̵̻̥͗a̴̙̋ř̴̗͉d̸̆͜é̴̯ṇ̸̏ͅ.̵̣̈
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                <Button variant="contained" color="success">Add</Button>
            </div> */}