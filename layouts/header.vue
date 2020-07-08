<template>
  <v-app>
    <LogInModal/>
    <SelectRole />
    <SendEmail />
    <CheckEmail />
    <AddPhone />
    <VerifyCode />
    <RequestModal />
    <RequestAcceptModal />
    <RequestAccepted />
    <Header />
    <nuxt />
    <Footer/>
  </v-app>
</template>


<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import LogInModal  from '../components/ModalWindows/LogInModal'
import SelectRole  from '../components/ModalWindows/SelectRole'
import SendEmail  from '../components/ModalWindows/SendEmail'
import CheckEmail from '../components/ModalWindows/CheckEmail'
import AddPhone from '../components/ModalWindows/AddPhone'
import VerifyCode from '../components/ModalWindows/VerifyCode'
import RequestModal from '../components/ProjectsModals/RequestModal'
import RequestAcceptModal from '../components/ProjectsModals/RequestAcceptModal'
import RequestAccepted from '../components/ProjectsModals/RequestAccepted'

export default {
  components: {
    Header,
    Footer,
    LogInModal,
    SelectRole,
    SendEmail,
    CheckEmail,
    AddPhone,
    VerifyCode,
    RequestModal,
    RequestAcceptModal,
    RequestAccepted
  },

  mounted() {
    // this.$modals.showModal({modal: 'CheckEmail'})
  }
}
</script>

<style>
</style>
