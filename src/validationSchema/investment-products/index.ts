import * as yup from 'yup';

export const investmentProductValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  halal_status: yup.boolean().required(),
  advisor_id: yup.string().nullable(),
});
