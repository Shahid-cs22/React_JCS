import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


const detail = [
    {
        id: 1,
        title: "Lizard",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        imgSrc: '/assets/user1.jpg'
    },
    {
        id: 2,
        title: "Gecko",
        description:
            "Geckos are small, mostly carnivorous lizards found in warm climates throughout the world.",
        imgSrc: '/assets/user1.jpg'
    },
    {
        id: 3,
        title: "Iguana",
        description:
            "Iguanas are herbivorous lizards native to tropical areas of Mexico, Central America, South America, and the Caribbean.",
        imgSrc: '/assets/user1.jpg'
    }
];

const Home = () => {
    return (
        <>
            <Typography variant='h3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo?


            </Typography>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
                {detail.map((item) => (
                    <Card key={item.id} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={item.imgSrc}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="secondary.main">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                ))}

                <Typography variant="button h6" color="error.light" >sdafsdf</Typography>
            </div>
        </>
    );
};

export default Home;
