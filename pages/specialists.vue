<template>
  <div>
    <SpecialistsBanner
      @openSignInModal='openSignInModal'
    />
    <ModalWindow
      ref="modalWindow"
      @signUp='signUp'
    />
    <Instruction/>
    <BlogIstok/>
    <RegistrationBanner/>
    <BestSpecials/>
    <Void/>
  </div>
</template>

<script>
  import SpecialistsBanner from '~/components/SpecialistsBanner.vue'
  import Instruction from '~/components/Instruction.vue'
  import BlogIstok from '~/components/BlogIstok.vue'
  import Void from '~/components/Void.vue'
  import BestSpecials from '~/components/BestSpecials.vue'
  import RegistrationBanner from '~/components/RegistrationBanner'
  import LogInModal from '../components/ModalWindows/LogInModal'

  export default {
    layout: 'header',
    data: function() {
      return {
        showSignInModal: false
      }
    },
    components: {
      SpecialistsBanner,
      Instruction,
      BlogIstok,
      Void,
      BestSpecials,
      RegistrationBanner,
      LogInModal
    },
    methods: {
      openSignInModal() {
        this.$refs.modalWindow.isVisible = true
      },
      signUp(userData) {
        this.$store.dispatch('auth.js/authUser', userData)
      }
    },
  }
</script>

<style>

</style>
