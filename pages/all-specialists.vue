<template>
  <div>
    <AllSpecialists />
    <Pagination />
  </div>
</template>

<script>
import AllSpecialists from '../components/AllSpecialists'
import Pagination from '../components/Pagination'
export default {
  layout: 'header',

  components: {
    AllSpecialists,
    Pagination
  }
}
</script>

<style>
</style>