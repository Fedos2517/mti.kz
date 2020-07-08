<template>
  <div>
    <Banner />
    <Instruction />
    <TopProjects />
    <BlogIstok/>
    <Flipcards />
    <BestSpecials/>
    <Rewievs />
    <FAQ />
    <!-- <Carousel />
    <Blog />

    <Ourspecials />
    -->
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Instruction from '~/components/Instruction.vue'
import TopProjects from '~/components/TopProjects.vue'
import BlogIstok from '~/components/BlogIstok.vue'
import Carousel from '~/components/Caruosel.vue'
import Blog from '~/components/Blog.vue'
import Flipcards from '~/components/Flipcards.vue'
import BestSpecials from'~/components/BestSpecials.vue'
import Ourspecials from '~/components/Ourspecials'
import Rewievs from '~/components/Rewievs.vue'
import FAQ from '~/components/FAQ.vue'

export default {
  layout: 'header',

  components: {
    Banner,
    Instruction,
    TopProjects,
    BlogIstok,
    BestSpecials,
    FAQ,
    Carousel,
    Blog,
    Flipcards,
    Ourspecials,
    Rewievs
  },

  computed: {
    token() {
      return this.$store.state.auth.token
    }
  },
}
</script>

<style></style>
