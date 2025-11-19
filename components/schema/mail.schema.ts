import * as yup from "yup";

const mailSchema = yup.object({
  name: yup.string().required("please enter you full name"),
  subject: yup
    .string()
    .required("please describe the subject that you want to talk to"),
  email: yup
    .string()
    .required("please enter your mail")
    .email("please enter a valid mail"),
  message: yup.string().required("please describe your message."),
});

export default mailSchema;
