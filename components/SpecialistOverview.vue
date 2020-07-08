<template>
  <div class="overview_bg">
    <div class="desktop-wrapper">
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
        text: 'Обзор',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }
    ]
  })
}
</script>
