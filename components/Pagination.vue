<template>
  <div class="pagination_background">
    <div class="desktop-wrapper">
      <div class="all-projects_footer">
        <div v-if="total_pages" class="allprojects_footer_pagination">
          <button @click="$emit('changePage', item)" v-for="item in total_pages" :key="item" class="allprojects_footer_pagination_btn" :class="{'allprojects_footer_pagination_btn__active-page': item == page}">{{ item }}</button>
          <button @click="$emit('changePage', page++)" class="allprojects_footer_pagination_btn-last">
            Следущая
            <img
              src="~/assets/images/all-projects-pagination-btn-last.png"
              class="allprojects_footer_pagination_btn-last_img"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['page', 'total_pages']
}
</script>

<style>
</style>
