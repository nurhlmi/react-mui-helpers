const gender = `<FormControl margin="normal" fullWidth>
   <FormLabel sx={{ mb: 1 }}>Jenis Kelamin *</FormLabel>
   <RadioGroup name="gender" defaultValue="" value={data.gender} onChange={handleChange}>
      <FormControlLabel value="male" control={<Radio size="small" />} label="Laki-Laki" />
      <FormControlLabel value="female" control={<Radio size="small" />} label="Perempuan" />
   </RadioGroup>
   {!!error.gender && (
      <FormHelperText error sx={{ ml: 0 }}>
         {Validate(error.gender[0])}
      </FormHelperText>
   )}
</FormControl>`;

const ttd = `<FormControl margin="normal" fullWidth>
   <FormLabel sx={{ mb: 1 }}>Tanda Tangan *</FormLabel>
   <RadioGroup name="ttd_id" defaultValue="" value={data.ttd_id} onChange={handleChange}>
   {rows.signature.map((value, index) => (
      <FormControlLabel
         key={index}
         value={value.id}
         control={<Radio size="small" />}
         label={value.name}
      />
   ))}
   </RadioGroup>
   {!!error.ttd_id && (
   <FormHelperText error sx={{ ml: 0 }}>
      {Validate(error.ttd_id[0])}
   </FormHelperText>
   )}
</FormControl>`;

export default { gender, ttd };
