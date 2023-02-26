const name = `<FormControl margin="normal" fullWidth>
   <Autocomplete
      value={data.bank}
      onChange={(e, value) => {
         setData({
            ...data,
            bank: value !== null ? value : null,
            bank_id: value !== null ? value.id : "",
         });
      }}
      options={rows.bank}
      getOptionLabel={(row) => row.bank}
      isOptionEqualToValue={(row, value) => row.id === value.id}
      renderInput={(params) => <TextField {...params} label="Bank/Lembaga Penyalur KUR" />}
   />
</FormControl>`;

export default { name };
