import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function Promise() {
  return (
    <Page title="Promise">
      <Container>
        <Typography variant="h3">Promise</Typography>
        <Section mock={mock.promise.uncontrolled} />
        <Section mock={mock.promise.controlled} />
      </Container>
    </Page>
  );
}
