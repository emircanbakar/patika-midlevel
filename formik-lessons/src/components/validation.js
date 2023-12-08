import { object, string, ref, min} from 'yup';

let validations = object({
    email: string().email("Geçerli bir email adresi giriniz").required("Zorunlu alanı doldurunuz!"),
    password: string().required("Zorunlu alanı doldurunuz!").min(5, "Parolanız en az 5 karakter olmalıdır."),
    passwordConfirmed: string().oneOf([ref('password')], "Parolanız eşleşmiyor!").required("Zorunlu alanı doldurunuz!"),
});

export default validations