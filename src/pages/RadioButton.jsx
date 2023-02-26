import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function RadioButton() {
  return (
    <Page title="Radio Button">
      <Container>
        <Typography variant="h3">Radio Button</Typography>
        <Section mock={mock.radiobutton.gender} />
        <Section mock={mock.radiobutton.ttd} />
      </Container>
    </Page>
  );
}
