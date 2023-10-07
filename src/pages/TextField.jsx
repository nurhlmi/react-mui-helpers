import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function TextField() {
  return (
    <Page title="Text Field">
      <Container>
        <Typography variant="h3">Text Field</Typography>
        <Section mock={mock.textfield.name} />
        <Section mock={mock.textfield.nik} />
        <Section mock={mock.textfield.email} />
        <Section mock={mock.textfield.start} />
        <Section mock={mock.textfield.end} />
      </Container>
    </Page>
  );
}
