<template>
  <div class="div">
    <ProjectsDetails :projectDetail="projectDetail" />
    <ProjectCommentsModal />
    <AboutProjectModal />
  </div>
</template>

<script>
import ProjectsDetails from '~/components/ProjectsDetails.vue'
import ProjectCommentsModal from '../components/ProjectsModals/ProjectCommentsModal'
import AboutProjectModal from '../components/ProjectsModals/AboutProjectModal'
export default {
  layout: 'header',
  components: {
    ProjectsDetails,
    ProjectCommentsModal,
    AboutProjectModal
  },

  methods: {},

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
