<template>
  <div>
    <Nuxt />
    <ProjectsClientSpecial />
    <AllProjects />
  </div>
</template>

<script>
import ProjectsClientSpecial from '~/components/ProjectsClientSpecial.vue'
import AllProjects from '~/components/AllProjects.vue'

export default {
  layout: 'header',
  components: {
    ProjectsClientSpecial,
    AllProjects
  },



  mounted() {
    this.$store.dispatch('projects/getProjectList')
  }
}
</script>

<style></style>
