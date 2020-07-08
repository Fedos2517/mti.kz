<template>
  <ProjectsDetails :projectDetail="projectDetail" />
</template>

<script>
import ProjectsDetails from '~/components/ProjectsDetails.vue'
export default {
  layout: 'header',
  components: {
    ProjectsDetails
  },

  methods: {

  },

  computed: {
    projectDetail() {
      return this.$store.state.projects.projectDetail
    }
  },

  mounted() {
    this.$store.dispatch('projects/getProjectDetail', this.$route.query.id)
  }
}
</script>

<style>
</style>
