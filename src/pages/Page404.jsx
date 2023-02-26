import { Typography, Container, Box, Stack } from '@mui/material';
import Page from '../components/Page';

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <Stack
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          margin="auto"
          maxWidth={450}
          minHeight="63vh"
        >
          <Box component="img" src="/assets/illustrations/empty_content.png" height={250} mb={3} />
          <Typography variant="h3" paragraph>
            Page Not Found
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling.
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
}
