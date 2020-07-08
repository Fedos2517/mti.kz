<template>
  <div class="specialist-reviews">
    <div v-if="reviews" class="desktop-wrapper">
      <div class="searchspecials_sort">
        <h2 class="searchspecials_sort_h2">Сортировать по:</h2>
        <h3 class="searchspecials_sort_h3">Сначала новые</h3>
        <img src="~/assets/images/chevron.png" class="searchspecials_sort_img"/>
        <h4 class="searchspecials_sort_h4">Найдено: 1 248 специалистов</h4>
      </div>

      <div v-if="reviews.results" class="specialist-reviews_comment-row">
        <div v-for="review in reviews.results" :key="review">
          <div class="specialist_reviews_row_comment">
            <div class="specialist_reviews_row_comment_header">
              <img
                v-show="review.user.avatar"
                :src="review.user.avatar"
                class="specialist_reviews_row_comment_header_img"
                style="border-radius: 50%;"
              />
              <div class="specialist_reviews_row_comment_title">
                <h3 class="specialist_reviews_row_comment_header_h3">{{ review.user.name }}</h3>
                <h4 class="specialist_reviews_row_comment_header_h4">{{ review.creation_date }}</h4>
              </div>
              <div class="specialist_reviews_row_comment_raiting">
                <img
                  src="~/assets/images/raiting-star.png"
                  class="specialist_reviews_row_comment_title_star"
                />
                <h5 class="specialist_reviews_row_comment_raiting_h5">{{ review.rating }}</h5>
              </div>
            </div>
            <h6
              class="specialist_reviews_row_comment_body"
            >{{ review.text }}</h6>

            <div class="specialist-reviews__images">
              <img class="specialist-reviews__image" v-for="photo in review.photos" :src="photo" alt="">
            </div>

            <div class="specialist_reviews_row_comment_footer">
              <div class="specialist_reviews_row_comment_footer_likes">
                <h3 class="specialist_reviews_row_comment_footer_h3">{{ review.likes_count }}</h3>
                <img
                  src="~/assets/images/rewievs-like.png"
                  class="specialist_reviews_row_comment_footer_img"
                />
              </div>
              <img
                src="~/assets/images/comment_complain.png"
                class="specialist_reviews_row_comment_footer_img2"
              />
              <h4 class="specialist_reviews_row_comment_footer_h4">Читать полностью</h4>
              <img
                src="~/assets/images/chevronright.png"
                class="specialist_reviews_row_comment_footer_img3"
              />
            </div>
          </div>


          <div v-show="review.reply">
            <div class="specialist_respond">
              <img src="~/assets/images/specialist_respond.png" class="specialist_respond_img"/>
              <h3 class="specialist_respond_h3">Ответ специалиста</h3>
            </div>
            <div class="specialist_reviews_row_comment_respond">
              <div class="specialist_reviews_row_comment_header">
                <img
                  :src="review.reply.user.avatar"
                  class="specialist_reviews_row_comment_header_img"
                />
                <div class="specialist_reviews_row_comment_title">
                  <h3 class="specialist_reviews_row_comment_header_h3">{{ review.reply.user.name }}</h3>
                  <h4 class="specialist_reviews_row_comment_header_h4">{{ review.reply.creation_date }}</h4>
                </div>
                <div class="specialist_reviews_row_comment_raiting">
                </div>
              </div>
              <h6
                class="specialist_reviews_row_comment_body"
              >{{ review.reply.text }}</h6>
              <div class="specialist-reviews__images">
                <img class="specialist-reviews__image" v-for="photo in review.reply.photos" :src="photo" alt="">
              </div>

              <div class="specialist_reviews_row_comment_footer">
                <div class="specialist_reviews_row_comment_footer_likes">
                  <h3 class="specialist_reviews_row_comment_footer_h3">{{ review.reply.likes_count }}</h3>
                  <img
                    src="~/assets/images/rewievs-like.png"
                    class="specialist_reviews_row_comment_footer_img"
                  />
                </div>
                <img
                  src="~/assets/images/comment_complain.png"
                  class="specialist_reviews_row_comment_footer_img2"
                />
                <h4 class="specialist_reviews_row_comment_footer_h4">Читать полностью</h4>
                <img
                  src="~/assets/images/chevronright.png"
                  class="specialist_reviews_row_comment_footer_img3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>Загрузка...</div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['reviews']
  }

</script>
