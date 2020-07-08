<template>
  <div>
    <ProjectPreview />
    <GoToProModal />
  </div>
</template>

<script>
import ProjectPreview from '../components/ProjectPreview'
import GoToProModal from '../components/SpecialProfileModals/GoToProModal'
export default {
  layout: 'header',

  components: {
    ProjectPreview,
    GoToProModal
  }
}
</script>

<style>
</style>