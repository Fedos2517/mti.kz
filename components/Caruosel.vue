<template>
  <div class="carousel">
    <div class="desktop-wrapper">
      <div class="carousel_header">
        <h2 style="position:relative; top:40px;">ТОП проекты</h2>
        <h3 style="position:relative; top:40px;">Посмотрите тысячи красивых работ</h3>
      </div>
      <div class="carousel_body">
        <carousel :items="4" :nav="false" :dots="false" :rewind="false" :slideBy="4">
          <template slot="next">
            <span class="next">
              <img src="~/assets/images/slider-next.png" />
            </span>
          </template>

          <template slot="prev">
            <span class="prev">
              <img src="~/assets/images/slider-prev.png" />
            </span>
          </template>

          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>
          <div class="carousel_card">
            <div class="carousel_card-header">
              <h2 class="carousel_card-h2">Кухня в Европейском стиле</h2>
              <div class="carousel_card-rating-block">
                <h3 class="carousel_card-h3">от 7 900 тг/м2</h3>
                <img src="~/assets/images/rating.png" class="carousel_card-rating" />
                <h6 class="carousel_card-h6">8.4</h6>
              </div>
              <h4 class="carousel_card-h4">Мирзагалиев Магзум</h4>
            </div>
            <div class="carousel_card-img-place">
              <img src="~/assets/images/likeheartpng.png" class="carousel_card-like" />
              <img src="~/assets/images/top.png" class="carousel_card-top" />
            </div>
            <h5 class="carousel_card-h5">Подробнее о проекте</h5>
          </div>

          <div class="carousel_card-last">
            <h2 class="carousel_card-h2">Просмотреть все проекты</h2>
            <img src="~/assets/images/toOtherProjects.png" class="carousel_card-last-img" />
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
