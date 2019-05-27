import { required, minLength, between,url } from 'vuelidate/lib/validators';

export default {
  validations: {
    title: {
      required,
      minLength: minLength(2)
    },
    hyperLink: {
      required,
      url
    },
    selectedTags : {
      required,
      minLength : minLength(1)
    }
  }
}
