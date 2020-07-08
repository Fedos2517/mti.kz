<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="1032">
      <div class="project_comments_modal">
        <div class="project_comments_modal_header">
          <h3 class="project_comments_modal_h3">Комментарии</h3>
          <h4 class="project_comments_modal_h4">Всего комментариев: 134</h4>
        </div>
        <div class="project_comments_modal_body">
          <div class="project_comments_modal_left">
            <div class="project_comments_modal_body_raiting">
              <h3 class="project_comments_modal_body_raiting_h3">Рейтинг проекта</h3>
              <h4 class="project_comments_modal_body_raiting_h4">7.5/10</h4>
              <div class="project_comments_modal_body_raiting_stars">
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_body_raiting_stars_img"
                />
              </div>
            </div>
            <div class="project_comments_modal_body_comment">
              <h3 class="project_comments_modal_body_comment_h3">Написать комментарий</h3>
              <h4 class="project_comments_modal_body_comment_h4">Оцените проект:</h4>
              <div class="project_comments_modal_body_comment_raiting">
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
                <img
                  src="~/assets/images/raiting-star_grey.png"
                  class="project_comments_modal_body_comment_raiting_img"
                />
              </div>
              <h4 class="project_comments_modal_body_comment_h4">Комментарий:</h4>
              <input
                type="text"
                class="project_comments_modal_body_comment_input"
                placeholder="Напишите о Вашем опыте работы с автором,
                чтобы помочь другим в выборе"
              />
              <h5 class="project_comments_modal_body_comment_h5">Добавить фотографии (6 максимум):</h5>
              <div class="p_c_m_input_div">
                <input type="file" class="project_comments_modal_body_comment_input_file" />
                <img
                  src="~/assets/images/add-photos.png"
                  class="project_comments_modal_body_comment_input_img"
                />
              </div>
              <div class="project_comments_modal_body_comment_btn">Комментировать</div>
            </div>
          </div>
          <div class="project_comments_modal_right">
            <div class="project_comments_modal_right_comment">
              <div class="project_comments_modal_right_comment_header">
                <img
                  src="~/assets/images/special_big_photo.png"
                  class="project_comments_modal_right_comment_header_img"
                />
                <div class="project_comments_modal_right_comment_header_title">
                  <h3 class="project_comments_modal_right_comment_header_h3">Мадина Абылкасымова</h3>
                  <h4 class="project_comments_modal_right_comment_header_h4">23 марта, 2020</h4>
                </div>
                <img
                  src="~/assets/images/raiting-star.png"
                  class="project_comments_modal_right_comment_header_star"
                />
                <h5 class="project_comments_modal_right_comment_header_h5">8.4</h5>
              </div>
              <div class="project_comments_modal_right_comment_body">
                <h3
                  class="project_comments_modal_right_comment_body_h3"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Ultrices in iaculis nunc sed augue lacus viverra vitae. At consectetur lorem donec massa sapien faucibus. Sit...</h3>
                <img
                  src="~/assets/images/PhotoRoll.png"
                  class="project_comments_modal_right_comment_body_img"
                />
              </div>
              <div class="project_comments_modal_right_comment_footer">
                <div class="project_comments_modal_right_comment_likes">
                  <h3 class="project_comments_modal_right_comment_likes_h3">81</h3>
                  <img
                    src="~/assets/images/rewievs-like.png"
                    class="project_comments_modal_right_comment_likes_img"
                  />
                </div>
                <img
                  src="~/assets/images/comment_complain.png"
                  class="project_comments_modal_right_comment_footer_complain"
                />
                <h3 class="project_comments_modal_right_comment_footer_h3">Читать полностью</h3>
                <img
                  src="~/assets/images/chevronright.png"
                  class="project_comments_modal_right_comment_footer_img"
                />
              </div>
            </div>
            <div class="project_comments_modal_right_answer">
              <div class="project_comments_modal_right_answer_sign">
                <img
                  src="~/assets/images/specialist_respond.png"
                  class="project_comments_modal_right_answer_sign_img"
                />
                <h3 class="project_comments_modal_right_answer_sign_h3">Ответ специалиста</h3>
              </div>
              <div class="project_comments_modal_right_comment" style="margin-left:48px;">
                <div class="project_comments_modal_right_comment_header">
                  <img
                    src="~/assets/images/special_big_photo.png"
                    class="project_comments_modal_right_comment_header_img"
                  />
                  <div class="project_comments_modal_right_comment_header_title">
                    <h3 class="project_comments_modal_right_comment_header_h3">Мадина Абылкасымова</h3>
                    <h4 class="project_comments_modal_right_comment_header_h4">23 марта, 2020</h4>
                  </div>
                  <img
                    src="~/assets/images/raiting-star.png"
                    class="project_comments_modal_right_comment_header_star"
                  />
                  <h5 class="project_comments_modal_right_comment_header_h5">8.4</h5>
                </div>
                <div class="project_comments_modal_right_comment_body">
                  <h3
                    class="project_comments_modal_right_comment_body_h3"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Ultrices in iaculis nunc sed augue lacus viverra vitae. At consectetur lorem donec massa sapien faucibus. Sit...</h3>
                </div>
                <div class="project_comments_modal_right_comment_footer">
                  <div class="project_comments_modal_right_comment_likes">
                    <h3 class="project_comments_modal_right_comment_likes_h3">81</h3>
                    <img
                      src="~/assets/images/rewievs-like.png"
                      class="project_comments_modal_right_comment_likes_img"
                    />
                  </div>
                  <img
                    src="~/assets/images/comment_complain.png"
                    class="project_comments_modal_right_comment_footer_complain"
                  />
                  <h3 class="project_comments_modal_right_comment_footer_h3">Читать полностью</h3>
                  <img
                    src="~/assets/images/chevronright.png"
                    class="project_comments_modal_right_comment_footer_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    }
  }
}
</script>