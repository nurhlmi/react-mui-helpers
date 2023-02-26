import { Container, Link, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function DatePicker() {
  return (
    <Page title="Date Picker">
      <Container>
        <Typography variant="h3" paragraph>
          Date Picker
        </Typography>
        <Link
          href="https://mui.com/x/react-date-pickers/getting-started/#react-components"
          target="_blank"
          rel="noreferrer"
          underline="none"
        >
          Documentation
        </Link>
        <Section mock={mock.datepicker.install} />
        <Section mock={mock.datepicker.initialized} />
        <Section mock={mock.datepicker.date} />
      </Container>
    </Page>
  );
}
