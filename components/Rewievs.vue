<template>
  <div class="rewievs">
    <div class="desktop-wrapper">
      <div>
        <div class="rewievs_body">
          <div class="body_header">
            <h2>Отзывы</h2>
            <h3>Отзывы могут помочь Вам с выбором</h3>
          </div>
          <div class="body_body">
            <div v-for="index in 2" :key="index" class="body_item">
              <div class="rewiev-card_head">
                <img
                  src="~/assets/images/rewievs-avatar.png"
                  class="rewiev-card_avatar"
                />
                <div class="rewiev-card_header">
                  <h1 class="rewiev-card_header-h1">Динара Бактыбаева</h1>
                  <h2 class="rewiev-card_header-h2">23 марта, 2020</h2>
                </div>
                <div class="rewiev-card_rate">
                  <img
                    src="~/assets/images/rewievs_rate.png"
                    style="width:15px; height:15px;"
                  />
                  <h3 class="rewiev-card_h3">8.4</h3>
                </div>
              </div>
              <div
                class="rewiev-card_body"
                :class="{
                  'rewiev-card_body-expanded': expandedReviews == index
                }"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus
                pellentesque. Adipiscing bibendum est ultricies integer quis
                auctor elit sed vulputate. Ultrices in iaculis nunc sed augue
                lacus viverra vitae. At consectetur lorem donec massa sapien
                faucibus. Sit... Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Unde excepturi nihil recusandae iure. Quaerat
                iste a cum, ipsa dolores ex, rerum excepturi, obcaecati quod ad
                ab veniam fugiat libero perferendis. Deleniti non doloremque ut
                obcaecati quos vero, amet molestias, dolorem perferendis neque
                rem? Harum assumenda, quod dolorem possimus quos temporibus
                expedita recusandae repellendus qui totam quisquam voluptates
                nam tenetur deserunt. Beatae aliquid atque dolorem totam
                voluptate officiis facilis illo aut harum itaque, commodi in
                voluptatem perspiciatis maiores consequatur neque cupiditate.
                Porro blanditiis corrupti unde nam aperiam quae quas odio
                facilis? Vitae fugiat labore aperiam eveniet consectetur.
                Suscipit in nisi rerum libero unde et, quia, molestiae possimus
                quibusdam necessitatibus impedit ducimus itaque atque temporibus
                qui sequi consequuntur porro dignissimos inventore eaque. Saepe,
                omnis similique reprehenderit ab esse eum repellat totam
                sapiente numquam provident molestiae voluptatibus quos alias
                animi nostrum accusamus consequatur eveniet quae iure
                doloremque? Molestiae beatae nemo optio placeat eligendi.
              </div>
              <div class="rewiev-card_footer">
                <h3 class="rewiev-card_h3" style="margin-top:5px;">81</h3>
                <img
                  src="~/assets/images/rewievs-like.png"
                  style="margin-top:5px; margin-left:10px; width:15px; height:15px;"
                />
                <div
                  class="rewiev-card_button"
                  :class="{
                    'rewiev-card_button-expanded': expandedReviews == index
                  }"
                  @click="getReview(index)"
                >
                  <h3 class="rewiev-card_button-text">
                    Читать полностью
                  </h3>
                  <img
                    src="~/assets/images/chevronright.png"
                    style="margin-left:auto;
                    width:11px; height:6px; margin-top:4px; padding-left:5px;"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="body_item">
              <div class="rewiev-card_head">
                <img
                  src="~/assets/images/rewievs-avatar.png"
                  class="rewiev-card_avatar"
                />
                <div class="rewiev-card_header">
                  <h1 class="rewiev-card_header-h1">Мадина Абылкасымова</h1>
                  <h2 class="rewiev-card_header-h2">23 марта, 2020</h2>
                </div>
                <div class="rewiev-card_rate">
                  <img
                    src="~/assets/images/rewievs_rate.png"
                    style="width:15px; height:15px;"
                  />
                  <h3 class="rewiev-card_h3">8.4</h3>
                </div>
              </div>
              <div class="rewiev-card_body rewiev-card_body-expanded">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus
                pellentesque. Adipiscing bibendum est ultricies integer quis
                auctor elit sed vulputate. Ultrices in iaculis nunc sed augue
                lacus viverra vitae. At consectetur lorem donec massa sapien
                faucibus. Sit...
              </div>
              <div class="rewiev-card_footer">
                <h3 class="rewiev-card_h3" style="margin-top:5px;">81</h3>
                <img
                  src="~/assets/images/rewievs-like.png"
                  style="margin-top:5px; margin-left:10px; width:15px; height:15px;"
                />
                <div class="rewiev-card_button">
                  <h3
                    class="rewiev-card_button-text rewiev-card_button-expanded"
                  >
                    Читать полностью
                  </h3>
                  <img
                    src="~/assets/images/chevronright.png"
                    style="margin-left:auto;
                    width:11px; height:6px; margin-top:4px; padding-left:5px;"
                  />
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedReviews: null
    }
  },

  computed: {
    results() {
      return this.$store.state.search.search.results
    }
  },

  methods: {
    getReview(id) {
      this.expandedReviews = id
    }
  }
}
</script>

<style></style>
