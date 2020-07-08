<template>
  <div>
    <NavBar />
    <SearchBlogs />
    <Pagination />
  </div>
</template>

<script>
import NavBar from '../components/SearchNavBar'
import Pagination from '../components/Pagination'
import SearchBlogs from '../components/SearchBlogs'
export default {
  layout: 'header',

  components: {
    NavBar,
    Pagination,
    SearchBlogs
  }
}
</script>

<style>
</style>