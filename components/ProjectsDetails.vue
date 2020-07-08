<template>
  <div class="project-details">
    <div class="desktop-wrapper">
      <div v-if="projectDetail" class="project-details_body">
        <v-breadcrumbs :items="items" style="padding:0; margin-top:28px; margin-bottom:25px;"></v-breadcrumbs>
        <h2 class="project-details_body-h2">{{ projectDetail.project.name }}</h2>
        <div class="project-details_body_spec-title">
          <div class="project-details_body_spec-title-div1">
            <img
              :src="projectDetail.project.user.avatar"
              class="project-details_body_spec-title-img"
            />
            <img
              v-if="projectDetail.project.user.is_pro"
              src="~/assets/images/top-special.png"
              class="projects-details_body_spec-tiile-imgpro"
            />
          </div>
          <div class="project-details_body_spec-title-div2">
            <h2 class="project-details_body_spec-title-div2_h2">{{ projectDetail.project.user.name }}</h2>
            <h3 class="project-details_body_spec-title-div2_h3">{{ projectDetail.project.user.tags[0].name }}</h3>
            <!--            <h4 class="project-details_body_spec-title-div2_h4">Ванная-Лофт-Тиффани-Ванная</h4>-->
          </div>
        </div>
        <div class="project-details_body-second-div">
          <div class="project-details_body-second-div_slider">
            <carousel :items="1" :dots="false" :nav="false">
              <template slot="next">
                <span class="project-details_body-second-div_slider-next">
                  <img src="~/assets/images/slider-next.png"/>
                </span>
              </template>
              <template slot="prev">
                <span class="project-details_body-second-div_slider-prev">
                  <img src="~/assets/images/slider-prev.png"/>
                </span>
              </template>
              <img v-for="item in projectDetail.project.photos" :key="item" :src="item" alt="" class="l-slider-image">
            </carousel>
          </div>
          <div class="project-details_body-second-div_card">
            <div class="project-details_body-second-div_card_header">
              <div class="project-details_body-second-div_card_header_standart">Стандарт</div>
              <div class="project-details_body-second-div_card_header_istok-premium">ISTOK PREMIUM</div>
            </div>
            <div class="projects-details_body-second-div_card-buttons_div">
              <div class="projects-details_body-second-div_card-buttons_div_button">
                <img
                  src="~/assets/images/left-card-heart.png"
                  class="projects-details_body-second-div_card-buttons_div_button-img1"
                />
                В избранное
              </div>
              <div class="projects-details_body-second-div_card-buttons_div_button">
                <img
                  src="~/assets/images/left-card-share.png"
                  class="projects-details_body-second-div_card-buttons_div_button-img2"
                />
                Поделиться
              </div>
            </div>
            <div class="project-details_body-second-div_card_projects-raiting">
              <h2 class="card_projects-raiting_h2">Рейтинг проекта</h2>
              <h3 class="card_projects-raiting_h3">7.5/10</h3>
              <div class="card_projects-raiting_stars-div">
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
                <img
                  src="~/assets/images/raiting-star.png"
                  class="card_projects-raiting_stars-div-star"
                />
              </div>
            </div>
            <div class="card_project-raitng_cost-div">
              <h3 class="card_project-raiting_cost-div_h3">Стоимость</h3>
              <h4 class="card_project-raiting_cost-div_h4">{{ projectDetail.project.price_total_full }}</h4>
              <h2 class="card_project-raiting_cost-div_h2" style="color: #fff;">Lorem ipsum dolor sit amet?</h2>
            </div>
            <div class="card_projects-bottom-button-div">
              <div @click="$modals.showModal({modal: 'RequestModal'})" class="card_projects-bottom_btn1">Оставить заявку</div>
              <div class="card_projects-bottom_btn2">Портфолио специалиста</div>
            </div>
            <div class="card_projects-bottom_comment-button-div">
              <img src="~/assets/images/plus-button.png" class="card_projects_img-plus-button"/>
              <h2 class="card_projects-bottom_comment-button">Написать комментарий</h2>
            </div>
          </div>
        </div>
        <div class="project-details_statistics">
          <div class="project-details_statistics_views">
            <img src="~/assets/images/statistics_views.png" class="statistics_views"/> {{
            projectDetail.project.views_count }}
          </div>
          <div class="project-details_statistics_comments">
            <img src="~/assets/images/statistics_comments.png" class="statistics_comments"/> {{
            projectDetail.project.comments_count }}
          </div>
          <div class="project-details_statistics_likes">
            <img src="~/assets/images/statistics_likes.png" class="statistics_likes"/> {{
            projectDetail.project.favorites_count }}
          </div>
          <div class="project-details_statistics_complain">
            <img src="~/assets/images/statistics_complain.png" class="statistics_complain"/> Пожаловаться
          </div>
        </div>
        <div class="project-statistics_location">
          <img
            src="~/assets/images/statistics_location.png"
            class="project-statistics_location_img"
          />
          <h2 class="project-statistics_location_h2"> {{ projectDetail.project.city_name }}</h2>
        </div>
        <div class="project-statistics_tags">
          <div class="projects-statistics_left">
            <div class="tags-div">
              <img src="~/assets/images/statistics_dot.png" class="statistics_dot"/>
              <h2 class="statistics_tags-h2">Категория: {{ projectDetail.project.category_name }}</h2>
            </div>
            <div class="tags-div">
              <img src="~/assets/images/statistics_dot.png" class="statistics_dot"/>
              <h2 class="statistics_tags-h2">Назначение: {{ projectDetail.project.purpose_name }}</h2>
            </div>
            <div class="tags-div">
              <img src="~/assets/images/statistics_dot.png" class="statistics_dot"/>
              <h2 class="statistics_tags-h2">Тип: {{ projectDetail.project.type_name }}</h2>
            </div>
          </div>
          <div class="projects-statistics_right">
            <div class="tags-div">
              <img src="~/assets/images/statistics_dot.png" class="statistics_dot"/>
              <h2 class="statistics_tags-h2">Стиль: {{ projectDetail.project.style_name }}</h2>
            </div>
            <div class="tags-div">
              <img src="~/assets/images/statistics_dot.png" class="statistics_dot"/>
              <h2 class="statistics_tags-h2">Площадь: {{ projectDetail.project.area_full }}</h2>
            </div>
            <div class="tags-div">
              <img src="~/assets/images/statistics_dot.png" class="statistics_dot"/>
              <h2 class="statistics_tags-h2">Цены: {{ projectDetail.project.price_from_full }}</h2>
            </div>
          </div>
        </div>
        <div class="project-details_description">
          <h2 class="projects-details_description_h2">Описание проекта</h2>
          <h3
            class="projects-details_description_h3"
          >{{ projectDetail.project.description }}</h3>
        </div>
        <div class="project-details_comments">
          <div class="projects-details_comments_header">
            <h2 class="projects-details_comments_header_h2">Комментарии</h2>
            <div class="projects-details_comments_header_show_all-comments-div">
              <h3 class="projects-details_comments_header_h3">Показать все комментарии</h3>
              <img
                src="~/assets/images/show_all_comments.png"
                class="projects-details_comments_header_show_all-comments_img"
              />
            </div>
          </div>
          <no-ssr>
            <carousel :items="1" :autoWidth="true" :dots="false" :nav="false" style="width:790px;">
              <div v-for="item in projectDetail.comments" :key="item" class="project-details_slider_card">
                <div class="project-details_slider_card_left">
                  <img :src="item.user.avatar" class="slider_card_left_photo" style="border-radius: 50%;"/>
                  <img
                    v-show="item.user.is_pro"
                    src="~/assets/images/top-special.png"
                    class="project-details_slider_card_left_pro"
                  />
                </div>
                <div class="project-details_slider_card_right">
                  <div class="project-details_slider_card_right_main-header">
                    <div class="project-details_slider_card_right_header">
                      <h2 class="project-details_slider_card_right_h2">{{ item.user.name }}</h2>
                      <h3 class="project-details_slider_card_right_h3">{{ item.creation_date }}</h3>
                    </div>
                    <div class="project-details_slider_card_right_raiting">
                      <img
                        src="~/assets/images/raiting-star.png"
                        class="project-details_slider_card_right_raiting_img"
                      />
                      <h2 class="project-details_slider_card_right_raiting_h2">{{ item.rating }}</h2>
                    </div>
                  </div>
                  <div class="project-details_slider_card_right_body">
                    <h2
                      class="project-details_slider_card_right_body_h2"
                    >{{ item.text }}</h2>
                  </div>
                  <div class="project-details_slider_card_right_footer">
                    <div class="project-details_slider_card_right_footer_likes">
                      <h2 class="card_right_footer_likes_h2">{{ item.likes_count }}</h2>
                      <img
                        src="~/assets/images/rewievs-like.png"
                        class="card_right_footer_likes_img"
                      />
                    </div>
                    <div class="project-details_slider_card_right_footer_full">
                      <h2 class="project-details_slider_card_right_footer_full_h2">Читать полностью</h2>
                      <img
                        src="~/assets/images/chevronright.png"
                        class="project-details_slider_card_right_footer_full_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </carousel>
          </no-ssr>
          <div class="project-details_you-last-views">
            <h2 class="project-details_you-last-views_body_h2">Вы недавно смотрели</h2>
            <div class="project-details_you-last-views_body">
              <div class="all-projects_body_card-small">
                <div class="all-projects_body_card-small-header">
                  <h2 class="all-projects_body_card-small-h2">Кухня в Европейском стиле</h2>
                  <div class="all-projects_body_card-small-div">
                    <h3 class="all-projects_body_card-small-h3">от 9 900 тг/м2</h3>
                    <img src="~/assets/images/rating.png" class="all-projects_body_card-small-img"/>
                    <h4 class="all-projects_body_card-small-h4">8.4</h4>
                  </div>
                  <h5 class="all-projects_body_card-small-h5">Сеилов Санат</h5>
                </div>
                <div class="all-projects_body_card-small-body">
                  <img
                    src="~/assets/images/likeheartpng.png"
                    class="all-projects_body_card-small-body-img"
                  />
                </div>
                <div class="all-projects_body_card-small-footer">
                  <h6 class="all-projects_body_card-small-footer-h6">Подробнее о проекте</h6>
                </div>
              </div>
              <div class="all-projects_body_card-small">
                <div class="all-projects_body_card-small-header">
                  <h2 class="all-projects_body_card-small-h2">Кухня в Европейском стиле</h2>
                  <div class="all-projects_body_card-small-div">
                    <h3 class="all-projects_body_card-small-h3">от 9 900 тг/м2</h3>
                    <img src="~/assets/images/rating.png" class="all-projects_body_card-small-img"/>
                    <h4 class="all-projects_body_card-small-h4">8.4</h4>
                  </div>
                  <h5 class="all-projects_body_card-small-h5">Сеилов Санат</h5>
                </div>
                <div class="all-projects_body_card-small-body">
                  <img
                    src="~/assets/images/likeheartpng.png"
                    class="all-projects_body_card-small-body-img"
                  />
                </div>
                <div class="all-projects_body_card-small-footer">
                  <h6 class="all-projects_body_card-small-footer-h6">Подробнее о проекте</h6>
                </div>
              </div>
              <div class="all-projects_body_card-small">
                <div class="all-projects_body_card-small-header">
                  <h2 class="all-projects_body_card-small-h2">Кухня в Европейском стиле</h2>
                  <div class="all-projects_body_card-small-div">
                    <h3 class="all-projects_body_card-small-h3">от 9 900 тг/м2</h3>
                    <img src="~/assets/images/rating.png" class="all-projects_body_card-small-img"/>
                    <h4 class="all-projects_body_card-small-h4">8.4</h4>
                  </div>
                  <h5 class="all-projects_body_card-small-h5">Сеилов Санат</h5>
                </div>
                <div class="all-projects_body_card-small-body">
                  <img
                    src="~/assets/images/likeheartpng.png"
                    class="all-projects_body_card-small-body-img"
                  />
                </div>
                <div class="all-projects_body_card-small-footer">
                  <h6 class="all-projects_body_card-small-footer-h6">Подробнее о проекте</h6>
                </div>
              </div>
              <div class="all-projects_body_card-small">
                <div class="all-projects_body_card-small-header">
                  <h2 class="all-projects_body_card-small-h2">Кухня в Европейском стиле</h2>
                  <div class="all-projects_body_card-small-div">
                    <h3 class="all-projects_body_card-small-h3">от 9 900 тг/м2</h3>
                    <img src="~/assets/images/rating.png" class="all-projects_body_card-small-img"/>
                    <h4 class="all-projects_body_card-small-h4">8.4</h4>
                  </div>
                  <h5 class="all-projects_body_card-small-h5">Сеилов Санат</h5>
                </div>
                <div class="all-projects_body_card-small-body">
                  <img
                    src="~/assets/images/likeheartpng.png"
                    class="all-projects_body_card-small-body-img"
                  />
                </div>
                <div class="all-projects_body_card-small-footer">
                  <h6 class="all-projects_body_card-small-footer-h6">Подробнее о проекте</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['projectDetail'],

    data: () => ({
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Все проекты',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Проект',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    })

  }
</script>

<style>
</style>
