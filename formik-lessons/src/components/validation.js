import { object, string, ref} from 'yup';

let validations = object({
    email: string().email().required(),
    password: string().required(),
    passwordConfirmed: string().oneOf([ref('password')]).required(),
});

export default validations