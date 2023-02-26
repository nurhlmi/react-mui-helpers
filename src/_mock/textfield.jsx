const name = `<FormControl margin="normal" fullWidth>
   <TextField
      label="Nama Lengkap"
      name="name"
      value={value.name}
      onChange={handleChange}
      error={!!error.name}
      helperText={!!error.name && Validate(error.name[0])}
      required
   />
</FormControl>`;

const nik = `<FormControl margin="normal" fullWidth>
   <TextField
      label="Nomor Induk Kependudukan (NIK)"
      type="tel"
      name="nik"
      value={value.nik}
      onChange={handleChange}
      error={!!error.nik}
      helperText={!!error.nik && Validate(error.nik[0])}
      inputProps={{ minLength: 16, maxLength: 16 }}
      required
   />
</FormControl>`;

const start = `<FormControl margin="normal" fullWidth>
   <TextField
      label="Total"
      type="tel"
      name="total"
      value={value.total}
      onChange={handleChange}
      error={!!error.total}
      helperText={!!error.total && Validate(error.total[0])}
      InputProps={{
         startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
      }}
      required
   />
</FormControl>`;

const end = `<FormControl margin="normal" fullWidth>
   <TextField
      label="Total"
      type="tel"
      name="total"
      value={value.total}
      onChange={handleChange}
      error={!!error.total}
      helperText={!!error.total && Validate(error.total[0])}
      InputProps={{
         endAdornment: <InputAdornment position="end">Orang</InputAdornment>,
      }}
      required
   />
</FormControl>`;

export default { name, nik, start, end };
