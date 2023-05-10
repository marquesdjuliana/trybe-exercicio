const PROFESSIONAL_FORM_SUBMIT = 'PROFESSIONAL_FORM_SUBMIT';

const PERSONAL_FORM_SUBIMT = 'PERSONAL_FORM_SUBIMT';

const submitPersonalForm = (personalProfile) => ({
  type: PERSONAL_FORM_SUBIMT,
  payload: personalProfile,
});
const submitProfessionalForm = (professionalProfile) => ({
  type: PROFESSIONAL_FORM_SUBMIT,
  payload: professionalProfile,
});
export {
  PERSONAL_FORM_SUBIMT,
  PROFESSIONAL_FORM_SUBMIT,
  submitPersonalForm,
  submitProfessionalForm,
};
