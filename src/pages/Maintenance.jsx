import { Typography, Container, Box, Stack } from '@mui/material';
import Page from '../components/Page';

export default function Maintenance() {
  return (
    <Page title="Under Maintenance">
      <Container>
        <Stack
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          margin="auto"
          maxWidth={450}
          minHeight="60vh"
        >
          <Box component="img" src="/assets/illustrations/under_maintenance.png" height={250} mb={3} />
          <Typography variant="h3" paragraph>
            Under Maintenance
          </Typography>
          <Typography color="text.secondary">
            The page you're looking for is currently under maintenance and will be back soon.
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
}
