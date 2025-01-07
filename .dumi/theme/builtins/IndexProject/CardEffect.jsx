import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export default ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Grid container spacing={0}>
      {items.map((item, idx) => (
        <Grid
          size={3}
          key={idx}
          sx={{
            cursor: 'pointer',
            position: 'relative',
            p: 1,
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => {
            window.open(item.link);
          }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <Box
                component={motion.span}
                sx={{
                  position: 'absolute',
                  inset: '0',
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'rgba(200, 200, 200, 1)',
                  borderRadius: 1,
                }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            sx={{
              position: 'relative',
              zIndex: 2,
              margin: '0 auto',
            }}
            elevation={1}
          >
            <CardMedia component="img" height="140" image={item.img} />
            <CardContent>
              <Typography gutterBottom component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
