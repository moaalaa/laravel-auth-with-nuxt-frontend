export default function ({ $axios, store }) {
    // onError
    $axios.onError(error => {
        if (error.response.status == 422) {
            store.dispatch('validation/setErrors', error.response.data.messages)
        }

        return Promise.reject(error);
    })

    // onRequest
    $axios.onRequest(() => {
      store.dispatch('validation/clearErrors')
    })
}