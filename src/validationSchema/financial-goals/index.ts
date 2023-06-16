import * as yup from 'yup';

export const financialGoalValidationSchema = yup.object().shape({
  name: yup.string().required(),
  amount: yup.number().integer().required(),
  progress: yup.number().integer().required(),
  investor_id: yup.string().nullable(),
});
