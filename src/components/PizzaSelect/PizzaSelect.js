import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function PizzaSelect() {
    return (
        <>
            <h3>Step 1: Select Your Pizza!</h3>
            {/* Pepperoni pizza */}
            <Card sx={{ maxWidth: 345 }} className="pizza-card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="images/pizza_01.jpeg"
                alt="pizza_01"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Pepperoni Pizza
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Homemade classic pepperoni pizza, topped with the souls of our fallen employee's.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            {/* Sausage pizza */}
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
            {/* Pizza pineapple */}
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
        </>
    );
}

export default PizzaSelect;