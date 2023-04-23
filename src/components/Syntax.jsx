import { useState } from 'react';
import { Box, Button, Divider, Snackbar, Stack } from '@mui/material';
import { ContentCopyRounded } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Syntax(props) {
  const { children } = { ...props };
  const [snackbar, setSnackbar] = useState(false);
  const handleSnackbar = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setSnackbar(!snackbar);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <Box bgcolor="#111b27" borderRadius={1}>
      <Stack direction="row" justifyContent="flex-end" p={1}>
        <Button variant="link" onClick={handleSnackbar} startIcon={<ContentCopyRounded />} sx={{ color: '#eee' }}>
          Copy
        </Button>
      </Stack>
      <Divider />
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {children}
      </SyntaxHighlighter>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        message="The source code has been copied to your clipboard."
      />
    </Box>
  );
}
