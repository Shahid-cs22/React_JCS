import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box
} from '@mui/material';

const detail = [
  {
    id: 1,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    imgSrc: '/assets/publicimg/user.jpg',
  },
  {
    id: 2,
    title: 'Gecko',
    description:
      'Geckos are small, mostly carnivorous lizards found in warm climates throughout the world.',
    imgSrc: '/assets/publicimg/user.jpg',
  },
  {
    id: 3,
    title: 'Iguana',
    description:
      'Iguanas are herbivorous lizards native to tropical areas of Mexico, Central America, South America, and the Caribbean.',
    imgSrc: '/assets/publicimg/user.jpg',
  },
];

const Home = () => {
  return (
    <>
     

      <Box display="flex" flexWrap="wrap" gap={3} p={2}>
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="secondary.main"
                >
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
      </Box>

      <Typography variant="h6" color="error.light" sx={{ fontWeight: 'bold' }}>
        sdafsdf
      </Typography>
    </>
  );
};

export default Home;
