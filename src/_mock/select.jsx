const province = `<FormControl margin="normal" fullWidth>
   <TextField
      label="Provinsi"
      name="province_id"
      defaultValue=""
      value={value.province_id}
      onChange={handleChange}
      error={!!error.province_id}
      helperText={!!error.province_id && Validate(error.province_id[0])}
      required
      select
   >
      {rows.province.map((value,index) => (
         <MenuItem value={value.id} key={index}>
            {value.province}
         </MenuItem>
      ))}
   </TextField>
</FormControl>`;

const city = `<FormControl margin="normal" fullWidth>
   <TextField
      label="Kabupaten/Kota"
      name="city_id"
      defaultValue=""
      value={value.city_id}
      onChange={handleChange}
      error={!!error.city_id}
      helperText={!!error.city_id && Validate(error.city_id[0])}
      required
      select
   >
      {rows.city.map((value,index) => (
         <MenuItem value={value.id} key={index}>
            {value.city}
         </MenuItem>
      ))}
   </TextField>
</FormControl>`;

export default { province, city };
