<template>
  <div class="buy_pro">
    <div class="desktop-wrapper">
      <v-breadcrumbs :items="items" style="padding:0; margin-top:27px;"></v-breadcrumbs>
      <div class="buy_pro_card">
        <h3 class="buy_pro_card_h3">Стать PRO</h3>
        <div class="buy_pro_card_line"></div>
        <h4 class="buy_pro_card_h4">Выберите тариф</h4>
        <div class="buy_pro_card_cards"></div>
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
        text: 'Специалист',
        disabled: false,
        href: 'breadcrumbs_link_1'
      },
      {
        text: 'Купить PRO',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }
    ]
  })
}
</script>