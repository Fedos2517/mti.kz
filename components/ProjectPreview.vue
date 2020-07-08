<template>
  <div class="p_p">
    <div class="desktop-wrapper">
      <v-breadcrumbs :items="items" style="padding:0; margin-top:28px; margin-bottom:25px;"></v-breadcrumbs>
      <div class="p_p_body">
        <div class="p_p_left">
          <h2 class="project-details_body-h2">Ванная комната в стиле Минимализм</h2>
          <div class="project-details_body_spec-title">
            <div class="project-details_body_spec-title-div1">
              <img
                src="~/assets/images/rewievs-avatar.png"
                class="project-details_body_spec-title-img"
              />
              <img
                src="~/assets/images/top-special.png"
                class="projects-details_body_spec-tiile-imgpro"
              />
            </div>
            <div class="project-details_body_spec-title-div2">
              <h2 class="project-details_body_spec-title-div2_h2">Сеилов Санат</h2>
              <h3 class="project-details_body_spec-title-div2_h3">Дизайнер интерьера</h3>
              <h4 class="project-details_body_spec-title-div2_h4">Ванная-Лофт-Тиффани-Ванная</h4>
            </div>
          </div>
          <div class="project-details_body-second-div">
            <div class="project-details_body-second-div_slider">
              <h2>IN DEVELOPMENT</h2>
            </div>
          </div>
          <div class="project-details_statistics">
            <div class="project-details_statistics_views">
              <img src="~/assets/images/statistics_views.png" class="statistics_views" /> 12 589
            </div>
            <div class="project-details_statistics_comments">
              <img src="~/assets/images/statistics_comments.png" class="statistics_comments" /> 544
            </div>
            <div class="project-details_statistics_likes">
              <img src="~/assets/images/statistics_likes.png" class="statistics_likes" /> 12 589
            </div>
            <div class="project-details_statistics_complain">
              <img src="~/assets/images/statistics_complain.png" class="statistics_complain" /> Пожаловаться
            </div>
          </div>
          <div class="project-statistics_location">
            <img
              src="~/assets/images/statistics_location.png"
              class="project-statistics_location_img"
            />
            <h2 class="project-statistics_location_h2">Алма-Ата</h2>
          </div>
          <div class="project-statistics_tags">
            <div class="projects-statistics_left">
              <div class="tags-div">
                <img src="~/assets/images/statistics_dot.png" class="statistics_dot" />
                <h2 class="statistics_tags-h2">Категория: дизайн интерьера</h2>
              </div>
              <div class="tags-div">
                <img src="~/assets/images/statistics_dot.png" class="statistics_dot" />
                <h2 class="statistics_tags-h2">Назначение: Жилые - Квартира - Ванная Комната</h2>
              </div>
              <div class="tags-div">
                <img src="~/assets/images/statistics_dot.png" class="statistics_dot" />
                <h2 class="statistics_tags-h2">Тип: Частный</h2>
              </div>
            </div>
            <div class="projects-statistics_right">
              <div class="tags-div">
                <img src="~/assets/images/statistics_dot.png" class="statistics_dot" />
                <h2 class="statistics_tags-h2">Стиль: Минимализм</h2>
              </div>
              <div class="tags-div">
                <img src="~/assets/images/statistics_dot.png" class="statistics_dot" />
                <h2 class="statistics_tags-h2">Площадь: 8 м2</h2>
              </div>
              <div class="tags-div">
                <img src="~/assets/images/statistics_dot.png" class="statistics_dot" />
                <h2 class="statistics_tags-h2">Цены: от 11 900 тг/м2</h2>
              </div>
            </div>
          </div>
          <div class="project-details_description" style="margin-bottom:60px;">
            <h2 class="projects-details_description_h2">Описание проекта</h2>
            <h3
              class="projects-details_description_h3"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Enim sit amet venenatis urna cursus eget. Feugiat scelerisque varius morbi enim nunc faucibus. Arcu risus quis varius quam quisque id diam. Dignissim sodales ut eu sem. In mollis nunc sed id semper risus in hendrerit. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Viverra nam libero justo laoreet sit amet. Malesuada fames ac turpis egestas integer eget aliquet nibh. Donec et odio pellentesque diam volutpat commodo sed.</h3>
          </div>
        </div>
        <div class="p_p_right">
          <div class="p_p_right_edit">Редактировать</div>
          <div class="p_p_right_delete">Удалить</div>
          <div class="p_p_right_accept">Добавить проект</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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