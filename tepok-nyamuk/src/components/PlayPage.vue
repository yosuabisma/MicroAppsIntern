<template>

</template>

<script>
export default {
  data: () => ({
  }),
  created() {
    let recaptchaScript = document.createElement('script')

    recaptchaScript.setAttribute('src', 'One.js')
    document.head.appendChild(recaptchaScript)
  },
  methods: {
  }
}
</script>
<style></style>
