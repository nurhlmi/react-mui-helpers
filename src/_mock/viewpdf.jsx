const install = `yarn add @pdftron/pdfjs-express-viewer`;

const copy = `cp -R ./node_modules/@pdftron/pdfjs-express-viewer/public ./public/webviewer/lib`;

const initialized = `import { useEffect, useRef } from 'react';
import { Card } from '@mui/material';
import webviewerMin from '@pdftron/pdfjs-express-viewer';

export default function CustomViewPDF({ pdf }) {
  const viewer = useRef(null);

  useEffect(() => {
    webviewerMin(
      {
        path: '/webviewer/lib/public',
        initialDoc: pdf,
        licenseKey: import.meta.env.VITE_PDFJS_LICENSE_KEY,
      },
      viewer.current
    );
  }, []);

  return (
    <Card>
      <div style={{ height: '700px' }} ref={viewer} />
    </Card>
  );
}`;

export default { install, copy, initialized };
