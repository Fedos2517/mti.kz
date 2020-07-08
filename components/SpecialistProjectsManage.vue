<template>
  <div class="s_p_m">
    <div class="desktop-wrapper">
      <div v-if="projectSum" class="c-requests">
        <div
          class="c-requests__request"
          :class="{'c-requests__request__active': status === 'new'}"
          @click="$emit('changeStatus', 'new')"
        >
          <h2>Новые ({{ projectSum.new }})</h2>
        </div>

        <div
          class="c-requests__request"
          :class="{'c-requests__request__active': status === 'confirmed'}"
          @click="$emit('changeStatus', 'confirmed')"
        >
          <h2>В процессе ({{ projectSum.confirmed_count }})</h2>
        </div>

        <div
          class="c-requests__request"
          :class="{'c-requests__request__active': status === 'finished'}"
          @click="$emit('changeStatus', 'finished')"
        >
          <h2>Завершенные ({{ projectSum.finished_count }})</h2>
        </div>

        <div
          class="c-requests__request"
          :class="{'c-requests__request__active': status === 'declined'}"
          @click="$emit('changeStatus', 'declined')"
        >
          <h2>Отклоненные ({{ projectSum.declined_count }})</h2>
        </div>

        <div
          class="c-requests__request"
          :class="{'c-requests__request__active': status === 'waiting'}"
          @click="$emit('changeStatus', 'waiting')"
        >
          <h2>Ожидают завершения ({{ projectSum.waiting_count }})</h2>
        </div>
      </div>
    </div>

    <div class="desktop-wrapper">
      <div v-if="special" class="specialist-projects_card">
        <div class="specialist-projects_card_left">
          <img :src="special.avatar" class="specialist-projects_card_left_avatar" />
          <img
            v-if="special.is_pro"
            src="~/assets/images/top-special.png"
            class="specialist-projects_card_left_prosign"
          />
        </div>
        <div class="specialist-projects_card_mid">
          <h2 class="specialist-projects_card_mid_h2">{{ special.full_name }}</h2>
          <h3 class="specialist-projects_card_mid_h3">{{ special.specialization_name }}</h3>
          <div class="specialist-projects_card_mid_location">
            <img
              src="~/assets/images/location_tag.png"
              class="specialist-projects_card_mid_location_img"
            />
            <h4 class="specialist-projects_card_mid_location-h4">{{ special.city }}</h4>
            <img src="~/assets/images/link.png" class="specialist-projects_card_mid_location-img2" />
            <h5 class="specialist-projects_card_mid_location-h5">
              <a :href="special.url" target="_blank">
                {{ special.url
                }}
              </a>
            </h5>
          </div>
          <h6 class="specialist-projects_card_mid-h6">{{ special.description_short }}</h6>
        </div>
        <div class="specialist-projects_card_right">
          <h3 class="specialist-projects_card_right-h3">Рейтинг специалиста</h3>
          <h4 class="specialist-projects_card_right-h4">{{ special.rating }}/10</h4>
          <div class="specialist-projects_card_right-stars">
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
            <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star" />
          </div>
          <div class="specialist-projects_card_right-sendinqury">Оставить заявку</div>
        </div>
      </div>
    </div>
    <div class="desktop-wrapper">
      <div v-if="requests.results" v-for="item in requests.results" :key="item" class="s_p_m_card">
        <div class="s_p_m_card_left">
          <div class="s_p_m_card_left_header">
            <h3 class="s_p_m_card_left_header_h3">Заявка №{{ item.id }}</h3>
            <h4 class="s_p_m_card_left_header_h4">Статус: {{ item.status }}</h4>
          </div>
          <h3
            class="s_p_m_card_left-h3"
            style="margin-bottom:37px;"
          >Дата отправки: {{ item.creation_date }}</h3>
          <div class="s_p_m_card_left_star">
            <h3 class="s_p_m_card_left-h3">Заказчик: {{ item.client.name }}</h3>
            <img v-if="item.client.rating" src="~/assets/images/raiting-star.png" class="s_p_m_card_left_star_img" />
            <div v-if="item.client.rating" class="s_p_m_card_left-h3" style="margin:0;">7,7</div>
          </div>
          <h3 class="s_p_m_card_left-h3" style="margin-bottom:6px;">Категория: {{ item.category }}</h3>
          <h3
            class="s_p_m_card_left-h3"
            style="margin-bottom:6px;"
          >Вложенные файлы: {{ item.document_names }}</h3>
          <h3
            class="s_p_m_card_left-h3"
            style="margin-bottom:6px;"
          >Комментарии: {{ item.comment }}</h3>
        </div>
        <div v-if="status === 'new'" class="s_p_m_card_right">
          <div @click="$emit('acceptRequest', item.id)" class="s_p_m_card_right_1">Принять</div>
          <div class="s_p_m_card_right_2">Просмотреть</div>
          <div class="s_p_m_card_right_3">Отклонить</div>
        </div>

        <div v-if="status === 'confirmed'" class="s_p_m_card_right">
          <div class="number-request">
            <a href="https://wa.me/77771399977" target="_blank">
              <img src="~/assets/images/whatsapp.svg" alt="">
            </a>

            <a href="https://wa.me/77078330244" target="_blank">
              <img src="~/assets/images/telegram.svg" alt="">
            </a>
            <h2 class="number-request__number">+7 777 139 99 77</h2>
          </div>

          <div class="s_p_m_card_right_1">Просмотреть</div>
          <div class="s_p_m_card_right_2">Завершить</div>
        </div>
      </div>

      <div  v-if="!requests.results" class="no-requests">
        <h2>Заявки пустые</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: ['special', 'requests', 'status', 'projectSum'],


  data: () => ({
    items: [
      {
        text: 'Главная',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      },
      {
        text: 'Проекты',
        disabled: false,
        href: 'breadcrumbs_link_1'
      },
      {
        text: '',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }
    ]
  }),
}
</script>
