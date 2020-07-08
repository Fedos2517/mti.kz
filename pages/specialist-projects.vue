<template>
  <div class="specialist-projects">
    <SpecialistProfile :special="special" />
    <SpecialistMenu @selectMenu="selectMenu" :special="special" :type="type" />
    <SpecialistProjects v-if="type === 'Projects'" />
    <SpecialistReviews :reviews="reviews" v-if="type === 'Reviews'" />
    <SpecialistOverview :overview="overview" v-if="type === 'Overview'" />
    <Pagination :page="page" :total_pages="total_pages" />
  </div>
</template>

<script>
  import SpecialistProfile from '../components/Specialist/SpecialistProfile'
  import SpecialistMenu from '../components/Specialist/SpecialistMenu'

  import SpecialistProjects from '../components/SpecialistProjects'
  import SpecialistReviews from '../components/Specialist/SpecialistReviews'
  import SpecialistOverview from '../components/Specialist/SpecialistOverview'

  import Pagination from '../components/Pagination'

export default {
  layout: 'header',

  components: {
    SpecialistProfile,
    SpecialistMenu,

    SpecialistProjects,
    SpecialistReviews,
    SpecialistOverview,

    Pagination,
  },

  data() {
    return {
      type: ''
    }
  },

  computed: {
    special() {
      return this.$store.state.special.specialTopDetail
    },

    reviews() {
        return this.$store.state.special.specialReviews
    },

    overview() {
      return this.$store.state.special.specialOverview
    },

    page() {
      return this.$store.state.special.specialProjects.page
    },

    total_pages() {
      return this.$store.state.special.specialProjects.total_pages
    },
  },

   watchQuery(newQuery) {
    this.$store.dispatch(`special/getSpecial${newQuery.type}`, this.$route.query.id)

    this.type = newQuery.type
  },

  methods: {
    selectMenu(type) {
      this.$router.push(`/specialist-projects?id=${this.$route.query.id}&type=${type}`)
    }
  },

  mounted() {
    this.$store.dispatch('special/getSpecialTopDetail', this.$route.query.id)
    this.$store.dispatch(`special/getSpecial${this.$route.query.type}`, this.$route.query.id)

    this.type = this.$route.query.type
  }
}
</script>

<style>
</style>
