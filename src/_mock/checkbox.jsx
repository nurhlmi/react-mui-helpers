const handleCheckbox = `const handleCheckbox = (e) => {
   let newState = null;
   if (!data.constraint.includes(e.target.value)) {
      newState = data.constraint.concat(e.target.value);
   } else {
      newState = data.constraint.filter((v) => v !== e.target.value);
   }
   setData({
      ...data,
      constraint: newState,
   });
   setError({
      ...error,
      constraint_id: undefined,
   });
};`;

const checkbox = `<FormControl margin="normal" fullWidth>
   <FormLabel sx={{ mb: 1 }}>Jenis Kendala *</FormLabel>
   <FormGroup>
      {rows.constraint.map((value, index) => (
         <FormControlLabel
            key={index}
            label={value.param}
            control={
               <Checkbox
                  size="small"
                  value={value.id}
                  onChange={handleCheckbox}
                  checked={data.constraint.includes(value.id)}
               />
            }
         />
      ))}
   </FormGroup>
   {!!error.constraint_id && (
      <FormHelperText error sx={{ ml: 0 }}>
         {Validate(error.constraint_id[0])}
      </FormHelperText>
   )}
</FormControl>`;

export default { handleCheckbox, checkbox };
