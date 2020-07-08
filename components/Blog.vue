<template>
  <div class="blog">
    <div class="desktop-wrapper">
      <div class="blog_header">
        <h2 style="margin-top:-30px; margin-bottom:-120px;">Блог ISTOK HOME</h2>
      </div>
      <div class="blog_body" style="margin-left:-20px; margin-bottom: -50px;">
        <no-ssr>
          <carousel :items="1" autoWidth:= 'true' :rewind='false' :dots="false" :nav='false'>
            <template slot="next">
            <span class="blog-next">
              <img src="~/assets/images/slider-next.png" style="width: 80px;
    top: -250px;
    position: relative; z-index: 1000; left:12px;"/>
            </span>
          </template>

          <template slot="prev">
            <span class="blog-prev">
              <img src="~/assets/images/slider-prev.png" style="width: 80px;
    position: relative;
    top: 180px;
    z-index: 100;
    right: 20px;"/>
            </span>
          </template>
            <div class="blog_item">
              <div class="item_left">
                <img src="~/assets/images/blog_photo.png" class="blog_photo" />
              </div>
              <div class="item_right">
                <div class="right_top">
                  <h3 class="blog_h3">Алина Бабаева</h3>
                  <h4 class="blog_h4">Декоратор</h4>
                  <div class="location">
                    <img
                      src="~/assets/images/location_tag.png"
                      class="blog_location-tag"
                    />
                    <h5 class="blog_h5">Алматы</h5>
                  </div>
                </div>
                <div class="right_bottom">
                  <h6 class="blog_h6">
                    First off, the display is lovely, it's an IPS LCD screen,
                    this by far is not the best screen on the market but this
                    phone has done a great job in keeping the colors rich and
                    bright. The size of the screen is perfect for watching
                    videos. I spend a lot of time on youtube and other streaming
                    sites and because of the screen I rely on msaid videos.
                  </h6>
                  <div class="blog-bottom_button">
                    <button class="blog_button">Читать полностью</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog_item">
              <div class="blog_item">
                <div class="item_left">
                  <img
                    src="~/assets/images/blog_photo.png"
                    class="blog_photo"
                  />
                </div>
                <div class="item_right">
                  <div class="right_top">
                    <h3 class="blog_h3">Name Surname</h3>
                    <h4 class="blog_h4">Декоратор</h4>
                    <div class="location">
                      <img
                        src="~/assets/images/location_tag.png"
                        class="blog_location-tag"
                      />
                      <h5 class="blog_h5">Alamty</h5>
                    </div>
                  </div>
                  <div class="right_bottom">
                    <h6 class="blog_h6">
                      First off, the display is lovely, it's an IPS LCD screen,
                      this by far is not the best screen on the market but this
                      phone has done a great job in keeping the colors rich and
                      bright. The size of the screen is perfect for watching
                      videos. I spend a lot of time on youtube and other
                      streaming sites and because of the screen I rely on msaid
                      videos.
                    </h6>
                    <div class="blog-bottom_button">
                      <button class="blog_button">Читать полностью</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog_item">
              <div class="blog_item">
                <div class="item_left">
                  <img
                    src="~/assets/images/blog_photo.png"
                    class="blog_photo"
                  />
                </div>
                <div class="item_right">
                  <div class="right_top">
                    <h3 class="blog_h3">Name Surname</h3>
                    <h4 class="blog_h4">Декоратор</h4>
                    <div class="location">
                      <img
                        src="~/assets/images/location_tag.png"
                        class="blog_location-tag"
                      />
                      <h5 class="blog_h5">Alamty</h5>
                    </div>
                  </div>
                  <div class="right_bottom">
                    <h6 class="blog_h6">
                      First off, the display is lovely, it's an IPS LCD screen,
                      this by far is not the best screen on the market but this
                      phone has done a great job in keeping the colors rich and
                      bright. The size of the screen is perfect for watching
                      videos. I spend a lot of time on youtube and other
                      streaming sites and because of the screen I rely on msaid
                      videos.
                    </h6>
                    <div class="blog-bottom_button">
                      <button class="blog_button">Читать полностью</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </carousel>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
