<template>
  <div class="profile_client">
    <div class="desktop-wrapper">
      <v-breadcrumbs :items="items" style="padding:0; margin-top:27px;"></v-breadcrumbs>
      <div class="profile_client_card_header">
        <h3 class="profile_client_card_header_h3">ПРОФИЛЬ</h3>
        <div class="profile_client_card_header_line"></div>
        <h3 class="profile_client_card_header_h3">МОИ ЗАЯВКИ</h3>
        <div class="profile_client_card_header_line"></div>
        <h3 class="profile_client_card_header_h3">УВЕДОМЕЛЕНИЯ</h3>
      </div>
      <div class="profile_client_card">
        <div class="profile_client_card_left">
          <h3 class="profile_client_card_left_h3">Личная информация</h3>
          <img src="~/assets/images/profile_avatar.png" class="profile_client_card_left_img" />
        </div>
        <div class="profile_client_card_right"></div>
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
        text: 'Профиль',
        disabled: true,
        href: 'breadcrumbs_link_1'
      }
    ]
  })
}
</script>