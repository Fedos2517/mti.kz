<template>
  <div>
    <SearchNavBar />
    <SearchSpecials />
    <Pagination :page="page" :total_pages="total_pages" @changePage="changePage"/>
  </div>
</template>

<script>
import SearchNavBar from '../components/SearchNavBar'
import SearchSpecials from '../components/SearchSpecials'
import Pagination from '../components/Pagination'

export default {
  layout: 'header',

  data() {
    return {
      page: 1
    }
  },

  components: {
    SearchNavBar,
    SearchSpecials,
    Pagination
  },

  methods: {
    changePage(page) {
      if(page > this.total_pages)
        return
      this.$router.push(`/search-specials?page=${page}&search=${this.$route.query.search}`)
    }
  },

  computed: {
    total_pages() {
      return this.$store.state.search.search.total_pages
    }
  },

  watchQuery(newQuery) {
    this.$store.dispatch('search/search', {page: newQuery.page, value: newQuery.search})
    this.page = newQuery.page
  },

  mounted() {
    this.$store.dispatch('search/search', {page: this.$route.query.page, value: this.$route.query.search})
    this.page = this.$route.query.page
  }
}
</script>
