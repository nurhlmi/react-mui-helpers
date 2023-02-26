import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function Checkbox() {
  return (
    <Page title="Checkbox">
      <Container>
        <Typography variant="h3">Checkbox</Typography>
        <Section mock={mock.checkbox.handleCheckbox} />
        <Section mock={mock.checkbox.checkbox} />
      </Container>
    </Page>
  );
}
