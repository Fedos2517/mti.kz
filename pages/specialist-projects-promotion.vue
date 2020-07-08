<template>
  <div>
    <SpecialistProjectsPromotion />
    <PhoneVerificationModal />
    <PhoneCodeModal />
    <PhoneVerificationAccept />
  </div>
</template>

<script>
import SpecialistProjectsPromotion from '../components/SpecialisProjectPromotion'
import PhoneVerificationModal from '../components/SpecialProfileModals/PhoneVerificationProfile'
import PhoneCodeModal from '../components/SpecialProfileModals/PhoneCodeModal'
import PhoneVerificationAccept from '../components/SpecialProfileModals/PhoneVerificationAccept'
export default {
  layout: 'header',

  components: {
    SpecialistProjectsPromotion,
    PhoneVerificationModal,
    PhoneCodeModal,
    PhoneVerificationAccept
  }
}
</script>

<style>
</style>