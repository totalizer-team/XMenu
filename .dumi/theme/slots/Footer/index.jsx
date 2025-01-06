import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

import Logo from './logo.png';

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: '' },
      { name: 'Contact us', href: '' },
      { name: 'FAQs', href: '' },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and condition', href: '#' },
      { name: 'Privacy policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: '*****', href: '#' }],
  },
];

export default function Footer({ sx }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'divider',
        borderTop: 1,
        borderStyle: 'dashed',
        borderColor: 'divider',
        ...sx,
      }}
    >
      <Container
        sx={{
          pb: 5,
          pt: 10,
        }}
      >
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Box component={'img'} src={Logo} sx={{ width: 40, height: 40 }} />
          <Typography sx={{ fontSize: 24 }}>Totalizer</Typography>
        </Stack>
        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'space-between',
          }}
        >
          <Grid size={6}>
            <Typography color="textSecondary">
              Our mission is to empower everyone to easily develop applications.
            </Typography>
            <Typography color="textSecondary">
              The starting point for your next project with Totalizer Kit, built
              on the newest version of Material-UI ©, ready to be customized to
              your style.
            </Typography>
            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 0,
              }}
            >
              <IconButton color="inherit">
                <XIcon />
              </IconButton>
              <IconButton color="inherit">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={6}>
            <Stack spacing={5} direction={'row'} justifyContent={'flex-end'}>
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography>{list.headline}</Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
