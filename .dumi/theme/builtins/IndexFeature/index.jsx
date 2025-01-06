import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HubIcon from '@mui/icons-material/Hub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HomeChart from './home-chart.webp';
import { CircleSvg, FloatLine, FloatPlusIcon } from './svg-elements';
const ITEMS = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 52 }} />,
    title: 'Boost Development Speed by 10x',
    description:
      'With flexible and easy-to-use components, significantly enhance your development speed. Whether building simple pages or implementing complex features, our component library helps you complete tasks quickly and efficiently.',
  },
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 52 }} />,
    title: 'Design Aesthetics Amplified, Website Looks 10x Better',
    description:
      "Offering meticulously designed, high-quality components to ensure every detail is beautifully crafted. Whether it's responsive layouts or dynamic interactions, our components help you create websites that are both visually stunning and highly functional.",
  },
  {
    icon: <HubIcon sx={{ fontSize: 52 }} />,
    title: 'Ongoing Maintenance, Continuous Component Expansion',
    description:
      'Our component library is continuously maintained and expanded with new features and components. You’ll always have access to the latest, most stable tools, ensuring your projects stay efficient and innovative for the long term.',
  },
];

export default function HomeMinimal({ sx, ...other }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  console.log(theme, isDark);

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderDescription = (
    <>
      <Stack
        spacing={6}
        sx={{
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        {ITEMS.map((item) => (
          <Stack direction={'row'} spacing={3} key={item.title}>
            {item.icon}
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 24 }}>{item.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );

  const renderImg = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: 1, position: 'relative' }}
    >
      <Box
        sx={{
          left: 0,
          width: 720,
          borderRadius: 2,
          position: 'absolute',
          bgcolor: 'background.default',
        }}
      >
        <Box
          component="img"
          alt="Home Chart"
          src={`./home-chart.webp`}
          sx={{ width: 720 }}
        />
      </Box>
    </Stack>
  );

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        backgroundColor: isDark ? '#333' : '#fff',
        ...sx,
      }}
      {...other}
    >
      {renderLines}

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          columnSpacing={{ xs: 0, md: 8 }}
          sx={{ position: 'relative', zIndex: 9 }}
        >
          <Grid size={7}>{renderDescription}</Grid>

          <Grid size={5}>
            <Box
              component={'img'}
              src={HomeChart}
              sx={{
                width: '100%',
              }}
            ></Box>
          </Grid>
        </Grid>

        <CircleSvg />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
