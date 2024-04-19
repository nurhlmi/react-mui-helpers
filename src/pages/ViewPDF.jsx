import { Container, Link, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import CustomViewPDF from '../components/CustomViewPDF';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function ViewPDF() {
  return (
    <Page title="View PDF">
      <Container>
        <Typography variant="h3" paragraph>
          View PDF
        </Typography>
        <Stack spacing={5}>
          <Link
            href="https://pdfjs.express/documentation/get-started/react"
            target="_blank"
            rel="noreferrer"
            underline="none"
          >
            Documentation
          </Link>
          <CustomViewPDF pdf="/assets/documents/sample.pdf" />
          <Section mock={mock.viewpdf.install} />
          <Section mock={mock.viewpdf.copy} />
          <Section mock={mock.viewpdf.initialized} />
        </Stack>
      </Container>
    </Page>
  );
}
