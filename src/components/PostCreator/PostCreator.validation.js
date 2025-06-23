import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  details: Yup.string().required(""),
  housing: Yup.string().required(""),
  location: Yup.array().min(1, ""),
});

export default validationSchema;
