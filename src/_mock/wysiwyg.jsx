const install = `yarn add @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic`;

const initialized = `import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";`;

const name = `<FormControl margin="normal" fullWidth>
   <FormLabel sx={{ mb: 1 }}>Deskripsi *</FormLabel>
   <CKEditor
      editor={ClassicEditor}
      data={data.description}
      onChange={(e, editor) => {
         const value = editor.getData();
         setData({ ...data, description: value });
         setError({ ...error, description: undefined });
      }}
   />
   {!!error.description && (
      <FormHelperText error sx={{ ml: 0 }}>
         {Validate(error.description[0])}
      </FormHelperText>
   )}
</FormControl>`;

export default { install, initialized, name };
