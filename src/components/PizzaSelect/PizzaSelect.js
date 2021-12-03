import { useSelector } from 'react-redux';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';

function PizzaSelect() {
    const pizzaMenu = useSelector((store) => store.pizzaReducer)
    
    console.log(pizzaMenu);
    console.log(pizzaMenu.name);

    return (
        // <div>
        //     {pizzaMenu.map((pizza) => {
        //         return <p>{pizza.name}</p>
        //     })}
        // </div>

        <Box sx={{ flexGrow: 1 }} className="pizza-card-container">
            <h2 className="subtitle">Step 1: Select Your Pizza!</h2>
            <div>
                <p className="cart-total">Cart Total: $</p>
            </div>
            <div className="pizza-card-spacer">
                <Card sx={{ maxWidth: 345 }} className="pizza-card">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={pizzaMenu.image_path}
                    alt="pizza_01"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pizzaMenu.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {pizzaMenu.description}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <p>price</p>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                <Button variant="contained" color="success">Add</Button>
            </div>
            {/* Sausage pizza */}
            <div className="pizza-card-spacer">
                <Card sx={{ maxWidth: 345 }} className="pizza-card">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="images/pizza_02.jpeg"
                    alt="pizza_02"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Sausage Pizza
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hot italian sausage, frozen bread dough, pizza sauce, mozzarella
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                <Button variant="contained" color="success">Add</Button>
            </div>
            {/* Pizza pineapple */}
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
            </div>
        </Box>
    );
}

export default PizzaSelect;