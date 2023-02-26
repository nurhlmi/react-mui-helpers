import { Container, Link, Typography } from '@mui/material';
import Page from '../components/Page';
import Section from '../sections/Section';
import * as mock from '../_mock';

export default function Wysiwyg() {
  return (
    <Page title="WYSIWYG">
      <Container>
        <Typography variant="h3" paragraph>
          WYSIWYG
        </Typography>
        <Link
          href="https://ckeditor.com/docs/ckeditor5/latest/installation/frameworks/react.html"
          target="_blank"
          rel="noreferrer"
          underline="none"
        >
          Documentation
        </Link>
        <Section mock={mock.wysiwyg.install} />
        <Section mock={mock.wysiwyg.initialized} />
        <Section mock={mock.wysiwyg.name} />
      </Container>
    </Page>
  );
}
