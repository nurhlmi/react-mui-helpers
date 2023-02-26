import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function Autocomplete() {
  return (
    <Page title="Autocomplete">
      <Container>
        <Typography variant="h3">Autocomplete</Typography>
        <Section mock={mock.autocomplete.name} />
      </Container>
    </Page>
  );
}
