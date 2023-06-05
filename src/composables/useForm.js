import { ref, computed } from "vue";
import axios from "axios";

export function useForm(formLength) {
  /**
   * Returned
   * **/
  const formData = ref({});

  /**
   * Returned
   * **/
  const formState = ref({
    activeField: 0,
    valid: true,
    next: true,
    formLength: formLength,
    isLastField: computed(() => {
      return formState.value.activeField === formLength;
    }),
    isFirstField: computed(() => {
      return formState.value.activeField < 1;
    }),
    errorLength: 0,
  });

  /**
   * Returned
   * **/
  function validateField(value) {
    formState.value.valid = value;
  }

  /**
   * Returned
   * **/
  async function onSubmit() {
    // Asegúrate de marcar esta función como async
    if (formState.value.errorLength > 0) {
      validateField(false);
    } else {
      validateField(true);
      next();

      // Aquí es donde envías los datos del formulario a tu función serverless
      try {
        const response = await axios.post("https://dynamic-vue-form.vercel.app/api/send-email", formData.value);
        console.log(response);
        window.location.href = 'https://www.grouzy.com';
      } catch (error) {
        console.error(error);
      }
    }
  }

  /**
   * Returned
   * **/
  function back() {
    formState.value.next = false;
    formState.value.activeField--;
  }

  function next() {
    formState.value.next = true;
    formState.value.activeField++;
  }

  return {
    formData,
    formState,
    validateField,
    onSubmit,
    back,
  };
}
