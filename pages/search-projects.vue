<template>
  <div>
    <SearchNavBar />
    <TopProjectsForSearch />
    <AllProjects />
  </div>
</template>

<script>
import SearchNavBar from '../components/SearchNavBar'
import AllProjects from '../components/AllProjects'
import TopProjectsForSearch from '../components/TopProjectsForSearch'
export default {
  layout: 'header',
  components: {
    SearchNavBar,
    AllProjects,
    TopProjectsForSearch
  }
}
</script>

<style>
</style>