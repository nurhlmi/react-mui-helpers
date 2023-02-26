import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function Select() {
  return (
    <Page title="Select">
      <Container>
        <Typography variant="h3">Select</Typography>
        <Section mock={mock.select.province} />
        <Section mock={mock.select.city} />
      </Container>
    </Page>
  );
}
