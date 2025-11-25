import * as yup from "yup";

const SearchSchema = yup.object({
  name: yup.string(),
});

export default SearchSchema;
