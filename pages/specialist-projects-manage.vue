<template>
  <div>
    <SpecialistProfile :special="special" :isEdit="false" />
    <SpecialistMenu :special="special" :isEdit="false" :type="type"/>
    <SpecialistProjectsManage @acceptRequest="acceptRequest" :requests="requests" />
  </div>
</template>

<script>
import SpecialistProjectsManage from '../components/SpecialistProjectsManage'
import SpecialistProfile from '../components/Specialist/SpecialistProfile'
import SpecialistMenu from '../components/Specialist/SpecialistMenu'

export default {
  layout: 'header',

  data() {
    return {
      type: ''
    }
  },

  components: {
    SpecialistProjectsManage,
    SpecialistProfile,
    SpecialistMenu
  },

  methods: {
    acceptRequest(id) {
      this.$store.dispatch('special/acceptRequest', id)
        .then(() => {
          this.$modals.showModal({modal: 'RequestAccepted'})
          this.$store.dispatch('special/getRequests', {status: this.$route.query.status})
        })
    }
  },

  computed: {
    special() {
      return this.$store.state.special.specialTopDetail
    },

    requests() {
      return this.$store.state.special.requests
    }
  },

  mounted() {
    this.type = this.$route.query.type
    this.$store.dispatch('special/getSpecialTopDetail', this.$route.query.id)
    this.$store.dispatch('special/getRequests', {status: this.$route.query.status})
  }
}
</script>

<style>
</style>
