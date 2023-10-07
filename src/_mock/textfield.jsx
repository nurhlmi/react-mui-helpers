const name = `<FormControl margin="normal" fullWidth>
   <TextField
      name="name"
      type="text"
      label="Nama Lengkap"
      value={data.name}
      onChange={handleChange}
      error={!!error.name}
      helperText={!!error.name && Validate(error.name[0])}
      required
   />
</FormControl>`;

const nik = `<FormControl margin="normal" fullWidth>
   <TextField
      name="nik"
      type="tel"
      label="NIK (Nomor Induk Kependudukan)"
      value={data.nik}
      onChange={handleChange}
      error={!!error.nik}
      helperText={!!error.nik && Validate(error.nik[0])}
      inputProps={{ minLength: 16, maxLength: 16 }}
      required
   />
</FormControl>`;

const email = `<FormControl margin="normal" fullWidth>
   <TextField
      name="email"
      type="email"
      label="Email"
      value={data.email}
      onChange={handleChange}
      error={!!error.email}
      helperText={!!error.email && Validate(error.email[0])}
      required
   />
</FormControl>`;

const start = `<FormControl margin="normal" fullWidth>
   <TextField
      name="total"
      type="tel"
      label="Total"
      value={data.total}
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
      name="total"
      type="tel"
      label="Total"
      value={data.total}
      onChange={handleChange}
      error={!!error.total}
      helperText={!!error.total && Validate(error.total[0])}
      InputProps={{
         endAdornment: <InputAdornment position="end">Orang</InputAdornment>,
      }}
      required
   />
</FormControl>`;

export default { name, nik, email, start, end };
