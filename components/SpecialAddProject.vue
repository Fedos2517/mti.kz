<template>
  <div class="s_add_p">
    <div class="desktop-wrapper">
      <div class="s_add_p_card">
        <div class="s_add_p_card_left">
          <h3 class="s_add_p_card_left_h3">Добавление проекта</h3>

          <h4 class="s_add_p_card_left_h4">Придумайте интересное название проекта</h4>
          <input
            type="text"
            class="s_add_p_card_left_input"
            placeholder="Ванная комната в стиле Минимализм"
          />

          <h4 class="s_add_p_card_left_h4">Выберите категорию Вашего проекта</h4>
          <input type="text" class="s_add_p_card_left_input" placeholder="Дизайн интерьера" />

          <h4 class="s_add_p_card_left_h4">Выберите назначение Вашего проекта</h4>
          <input
            type="text"
            class="s_add_p_card_left_input"
            placeholder="Жилые - Квартира - Ванная комната"
          />

          <h4 class="s_add_p_card_left_h4">Выберите тип Вашего проекта</h4>
          <input type="text" class="s_add_p_card_left_input" placeholder="Частный" />

          <h4 class="s_add_p_card_left_h4">Выберите стиль Вашего проекта</h4>
          <input type="text" class="s_add_p_card_left_input" placeholder="Минимализм" />

          <h4 class="s_add_p_card_left_h4">Укажите площадь проекта</h4>
          <input type="text" class="s_add_p_card_left_input" placeholder="8 м2" />

          <h4 class="s_add_p_card_left_h4">Укажите стоимость проекта</h4>
          <div class="s_add_p_card_left_inputs">
            <h3 class="s_add_p_card_left_inputs_h3">от</h3>
            <input type="text" class="s_add_p_card_left_inputs_input" placeholder="0 тг/м2" />
            <h3 class="s_add_p_card_left_inputs_h3">до</h3>
            <input type="text" class="s_add_p_card_left_inputs_input" placeholder="0 тг/м2" />
          </div>
          <h4 class="s_add_p_card_left_h4">Добавьте теги для Вашего проекта</h4>
          <div class="s_add_p_card_left_tags">
            <input type="text" class="s_add_p_card_left_tags_input" placeholder="Введите теги" />
            <div class="s_add_p_card_left_tags_btn">Добавить</div>
          </div>
          <h4 class="s_add_p_card_left_h4">Добавьте описание проекта</h4>
          <input
            type="text"
            class="s_add_p_card_left_input_big"
            placeholder="Введите описание проекта (до 1 000 символов)"
          />

          <div class="s_add_p_card_left_footer">
            <div class="s_add_p_card_left_btn1">Добавить проект</div>
            <div class="s_add_p_card_left_btn2">Предпросмотр</div>
          </div>
        </div>
        <div class="s_add_p_card_right">
          <h3 class="s_add_p_card_right_h3">Добавить фотографии (12 максимум, не более 7мб):</h3>
          <input type="file" class="s_add_p_card_right_input" />
          <img src="~/assets/images/add-photos.png" class="s_add_p_card_right_img" />
          <h3 class="s_add_p_card_right_h3">
            Добавить рендер 360 градусов
            (1 максимум, не более 10мб):
          </h3>
          <input type="file" class="s_add_p_card_right_input" />
          <img src="~/assets/images/add-photos.png" class="s_add_p_card_right_img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>