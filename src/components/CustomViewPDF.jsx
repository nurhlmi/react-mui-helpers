/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { Card } from '@mui/material';
import webviewerMin from '@pdftron/pdfjs-express-viewer';

export default function CustomViewPDF({ pdf }) {
  const viewer = useRef(null);

  useEffect(() => {
    webviewerMin(
      {
        path: '/webviewer/lib/public',
        initialDoc: pdf,
        licenseKey: 'VMeLR5MsW5lX3X9YfqQF',
      },
      viewer.current
    );
  }, []);

  return (
    <Card>
      <div style={{ height: '700px' }} ref={viewer} />
    </Card>
  );
}
