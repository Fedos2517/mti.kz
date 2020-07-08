<template>
  <div>
    <SpecialistProfile  :special="special" :isEdit="false" />
    <SpecialistMenu @selectMenu="selectMenu" :special="special" :isEdit="false" :type="type"/>

    <SpecialistOverview v-show="type === 'Overview'" :overview="overview" />
    <SpecialistReviews v-show="type === 'Reviews'" :reviews="reviews"/>
    <SpecialisProjectPromotion v-show="type === 'Projects'" />
    <SpecialistProjectsManage v-show="type === 'Requests'" @acceptRequest="acceptRequest" @changeStatus="changeStatus" :status="status" :requests="requests":projectSum="projectSum"  />
  </div>
</template>

<script>
import SpecialistProjectsManage from '../components/SpecialistProjectsManage'
import SpecialistProfile from '../components/Specialist/SpecialistProfile'
import SpecialistMenu from '../components/Specialist/SpecialistMenu'
import SpecialistOverview from '../components/Specialist/SpecialistOverview'
import SpecialisProjectPromotion from '../components/SpecialisProjectPromotion'
import SpecialistReviews from '../components/Specialist/SpecialistReviews'

export default {
  layout: 'header',

  data() {
    return {
      type: 'Overview',
      status: 'new'
    }
  },

  components: {
    SpecialistProjectsManage,
    SpecialistProfile,
    SpecialistMenu,
    SpecialistOverview,
    SpecialisProjectPromotion,
    SpecialistReviews
  },

  computed: {
    special() {
      return this.$store.state.special.specialTopDetail
    },

    requests() {
      return this.$store.state.special.requests
    },

    overview() {
      return this.$store.state.special.specialOverview
    },

    projects() {
      return this.$store.state.special.specialProjects.results
    },

    projectSum() {
      return this.$store.state.special.requests.additional_data
    },

    reviews() {
      return this.$store.state.special.specialReviews
    }
  },

  methods: {

    selectMenu(type) {
      console.log(type)
      this.type = type

      this.$router.push(`/specialist-projects-manage?type=${type}`)
    },

    acceptRequest(id) {
      this.$store.dispatch('special/acceptRequest', id)
        .then(() => {
          this.$modals.showModal({modal: 'RequestAccepted'})
          this.$store.dispatch('special/getRequests', {status: this.status})
        })
    },

    changeStatus(status) {
      this.status = status
      this.$store.dispatch('special/getRequests', {status: this.status})
    }
  },

  watchQuery(newQuery) {
    this.type = newQuery.type

    if(newQuery.type === "Overview") {
      this.$store.dispatch('special/getSpecialOverview', this.$store.state.auth.user.user_id)
    }

    if(newQuery.type === 'Projects') {
      this.$store.dispatch('special/getSpecialProjects', this.$store.state.auth.user.user_id)
    }

    if(newQuery.type === 'Reviews') {
      this.$store.dispatch('special/getSpecialReviews', this.$store.state.auth.user.user_id)
    }

    if(newQuery.type === "Requests") {
      this.$store.dispatch('special/getRequests', { status: this.status })
    }

  },

  mounted() {
    this.type = this.$route.query.type

    if(this.$route.query.type === 'Overview') {
      this.$store.dispatch('special/getSpecialOverview', this.$store.state.auth.user.user_id)
    }

    if(this.$route.query.type === 'Projects') {
      this.$store.dispatch('special/getSpecialProjects', this.$store.state.auth.user.user_id)
    }

    if(this.$route.query.type === 'Reviews') {
      this.$store.dispatch('special/getSpecialReviews', this.$store.state.auth.user.user_id)
    }

    if(this.$route.query.type === 'Requests') {
      this.$store.dispatch('special/getRequests', {status: this.status})
    }

    this.$store.dispatch('special/getSpecialTopDetail')
  }
}
</script>

<style>
</style>
