<template>
  <div>

  </div>
</template>

<script>

  export default {
    methods: {
      socialLogin() {
        if(this.$cookies.get('token.strategy')) {
          this.$store.dispatch('auth/socialLogin').then((res) => {

            if(res.register) {
              this.$router.push(`/registration-users?email=${res.email}&first_name=${res.first_name}&last_name=${res.last_name}`)
            } else {
              this.$router.push('/')
            }
          })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    },

    mounted() {
      this.socialLogin()
    }
  }
</script>
