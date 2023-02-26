const install = `yarn add @mui/x-date-pickers date-fns moment`;

const initialized = `import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

ReactDOM.createRoot(document.getElementById('root')).render(
   <HelmetProvider>
      <BrowserRouter>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <App />
         </LocalizationProvider>
      </BrowserRouter>
  </HelmetProvider>
);`;

const date = `<FormControl margin="normal" fullWidth>
   <DatePicker
      label="Tanggal"
      inputFormat="dd/MM/yyyy"
      value={data.date}
      onChange={(newValue) => setData({
         ...data,
         date: newValue
      })}
      renderInput={(params) => (
         <TextField
            {...params}
            error={!!error.date}
            helperText={!!error.date && Validate(error.date[0])}
            required
         />
      )}
   />
</FormControl>`;

export default { install, initialized, date };
