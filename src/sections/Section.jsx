import { Box } from '@mui/material';
import Syntax from '../components/Syntax';

export default function Section(props) {
  const { mock } = { ...props };
  return (
    <Box mt={3} mb={5}>
      <Syntax>{mock}</Syntax>
    </Box>
  );
}
