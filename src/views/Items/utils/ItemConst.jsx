import * as Yup from "yup";

export const itemSchema = Yup.object().shape({
    name: Yup.string().required("Item Name is required"),
});

