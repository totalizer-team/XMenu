import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useCountdownDate from './use-countdown';

// ----------------------------------------------------------------------

export default function ComingSoonView({ title }) {
  const countdown = useCountdownDate(new Date('2025-01-20 00:00'));

  return (
    <Container>
      <Stack alignItems="center" spacing={2} sx={{ py: 10 }}>
        <Typography fontSize={52} color="textPrimary">
          {title}
        </Typography>
        <Typography>Coming soon!</Typography>
        <Typography>We are currently working hard on this page!</Typography>
        <Stack
          direction="row"
          justifyContent="center"
          divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
          sx={{
            pt: 5,
            typography: 'h2',
          }}
        >
          <TimeBlock label="days" value={countdown.days} />
          <TimeBlock label="hours" value={countdown.hours} />
          <TimeBlock label="minutes" value={countdown.minutes} />
          <TimeBlock label="seconds" value={countdown.seconds} />
        </Stack>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

function TimeBlock({ label, value }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </Box>
  );
}
