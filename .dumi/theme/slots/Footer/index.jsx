import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

import { BaseMenuList } from '@totalizer/xmenu';
import DashedBorder from './DashedBorder';
const OPTIONS_X = [
  {
    c: 'Title',
    title: 'X Projects',
  },
  {
    title: 'XForm',
    disabled: true,
  },
  {
    title: 'XMenu',
    disabled: true,
  },
  {
    title: 'XTable',
    disabled: true,
  },
  {
    title: 'XLayout',
    disabled: true,
  },
  {
    title: 'XCard',
    disabled: true,
  },
  {
    title: 'XBackground',
    disabled: true,
  },
  {
    title: 'XComponent',
    disabled: true,
  },
  {
    title: 'XTemplate',
    disabled: true,
  },
];
const OPTIONS_PLATFORM = [
  {
    c: 'Title',
    title: 'Platform',
    disabled: true,
  },
  {
    title: 'Data Delivery',
    disabled: true,
  },
  {
    title: 'Landing Page',
    disabled: true,
  },
  {
    title: 'Knowledge Base',
    disabled: true,
  },
  {
    title: 'Content Creation',
    disabled: true,
  },
];

const OPTIONS_HELP = [
  {
    c: 'Title',
    title: 'Help',
  },
  {
    title: 'FAQ',
    disabled: true,
  },
  {
    title: 'Change Log',
    disabled: true,
  },
  {
    title: 'Discussions',
    disabled: true,
  },
];

export default function Footer({ sx }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        // bgcolor: 'divider',
        // borderTop: 2,
        // borderStyle: 'dashed',
        // borderColor: 'divider',
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'repeat',
        // boxShadow: isDark
        //   ? '0 -1px 2px 0 rgba(255,255,255,.3)'
        //   : '0 -1px 2px 0 rgba(0,0,0,.3)',
        ...sx,
      }}
    >
      <Container
        sx={{
          pb: 5,
          pt: 10,
        }}
      >
        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'space-between',
          }}
        >
          <Grid size={6}>
            <Stack spacing={2}>
              <DashedBorder sx={{ py: 1.5, px: 2, width: 200 }}>
                <Typography sx={{ fontSize: 28 }}>Totalizer</Typography>
              </DashedBorder>
              <Typography>
                Develop the future, we’ll make it SEAMLESS.
              </Typography>
              <Typography color="textSecondary">
                Our mission is to empower everyone to effortlessly bring their
                websites and applications to life.
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 0,
              }}
            >
              <IconButton color="inherit" disabled>
                <XIcon />
              </IconButton>
              <IconButton color="inherit" disabled>
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" disabled>
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={6}>
            <Stack spacing={1} direction={'row'} justifyContent={'flex-end'}>
              <BaseMenuList sx={{ minWidth: 100 }} options={OPTIONS_X} />
              <BaseMenuList sx={{ minWidth: 100 }} options={OPTIONS_PLATFORM} />
              <BaseMenuList sx={{ minWidth: 100 }} options={OPTIONS_HELP} />
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
