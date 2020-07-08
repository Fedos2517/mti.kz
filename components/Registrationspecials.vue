<template>
  <div class="registration-specials">
    <div class="desktop-wrapper" style="display:flex; flex-direction:row;">
      <div class="registration-specialists_left">
        <h2 class="registration-specials_h2">
          Ваш аккаунт зарегистрирован, пожалуйста заполните информацию
        </h2>
        <input
          type="text"
          class="registration-specials_input"
          placeholder="Введите фамилию*"
          v-model="user.last_name"
        />
        <input
          type="text"
          class="registration-specials_input"
          placeholder="Введите имя*"
          style="margin-bottom:50px;"
          v-model="user.first_name"
        />
        <!--        <input-->
        <!--          type="text"-->
        <!--          class="registration-specials_input"-->
        <!--          -->
        <!--          v-model="user.city"-->
        <!--        />-->
        <select class="registration-specials_input" v-model="user.city" name="" id="">
          <option value="" disabled selected>Выберите город*</option>
          <option v-for="city in cities" :value="city.id" :key="city">{{ city.name }}</option>
        </select>
        <input
          type="text"
          class="registration-specials_input"
          placeholder="Введите улицу, здание, офис"
          v-model="user.address"
        />
        <input
          type="text"
          class="registration-specials_input"
          placeholder="Введите e-mail*"
          v-model="user.email"
        />
        <input
          type="text"
          class="registration-specials_input"
          placeholder="Введите пароль*"
          v-model="user.password"
        />
        <input
          type="text"
          class="registration-specials_input"
          placeholder="Повторите пароль*"
          style="margin-bottom:50px;"
        />
        <div>
          <div v-for="item in user_category">
            <select v-model="item.categories" @change="selectCategory" class="registration-specials_input" name=""
                    id="">
              <option value="" disabled selected>Выберите категорию*</option>
              <option v-for="category in categories" :key="category" :value="category.id">{{ category.name }}</option>
            </select>

            <select v-model="item.specializations" class="registration-specials_input" name="" id="">
              <option value="" disabled selected>Выберите специализацию*</option>
              <option v-for="specialization in specializations" :key="specialization.name" :value="specialization.id">{{
                specialization.name }}
              </option>
            </select>
          </div>
          <h3 class="registration-specials_h3">
            Если Вашей услуги нет в списке, обратитесь в службу поддержки
          </h3>
        </div>


        <div @click="addCategory()" class="registration-specials_btn">
          <img
            src="~/assets/images/add-plus-button.png"
            class="registration-specials_btn-img"
          />
          Добавить категорию
        </div>

        <textarea
          v-model="user.description_short"
          placeholder="Коротко опишите свою компанию и/или себя (до 160 символов)*"
          class="registration-specials_input-big1"
        ></textarea>

        <textarea
          class="registration-specials_input-big2"
          placeholder="Опишите свою компанию и/или себя более подробно (до 1 000 символов)*"
          v-model="user.description_full"></textarea>

        <h4 class="registration-specials_input-h4">
          Ссылка на сайт или социальную сеть
        </h4>
        <input
          type="text"
          class="registration-specials_input"
          placeholder="https://www.instagram.com/emrata/"
          v-model="user.url"
        />
        <input
          v-if="user.phones"
          type="text"
          class="registration-specials_input"
          placeholder="+ 7 (702) 000 00 28"
          v-mask="'+# (###) ###-##-##'"
          v-model="user.phones"
        />
        <div v-if="!user.phones" @click="addPhone()" class="registration-specials_btn">
          <img
            src="~/assets/images/add-plus-button.png"
            class="registration-specials_btn-img"
          />
          Добавить номер телефона
        </div>
        <textarea
          class="registration-specials_input-big2"
          placeholder="Укажите имеющиеся у Вас сертификаты, грамоты, дипломы и т. п."
          v-model="user.documents_description"
        ></textarea>
        <div @click="$refs.file.click()" class="registration-specials_add-photos-btn">
          <input @change="onFileChange" multiple type="file" ref="file" style="display: none">
          Прикрепить файлы (6 максимум):

          <div class="c-images">
            <img
              v-if="url.length <= 5"
              src="~/assets/images/add-photos.png"
              class="registration-specials_add-photos-btn-img"
            />

            <img class="registration-specials_add-photos-btn-img" v-for="item in url" :key="item" v-if="url" :src="item" alt="">
          </div>

        </div>


        <div class="class-specials_finish">
          <button @click="login()" class="registration-specials_finish-btn1">Сохранить</button>
          <button class="registration-specials_finish-btn2">
            Очистить все
          </button>
        </div>
      </div>
      <div class="registration-specialists_right">
        <div class="registration-specialists_right-with-h2">
          <div class="h2-with-divs">
            <div
              class="line-div"
              style="position: relative;
    top: 10px;"
            ></div>
            <h2 class="registration-right-h2">ИЛИ</h2>
            <div
              class="line-div"
              style="position: relative;
    bottom: 12px;"
            ></div>
          </div>
          <input
            v-model="user.company_name"
            type="text"
            class="registration-specials_input"
            placeholder="Введите название компании*"
          />
        </div>
        <div class="registration-specials_input-2">
          <div class="registration-specials_input-2-block">
            <input
              v-model="user.tag"
              type="text"
              class="registration-specials_input-2-input"
              placeholder="Введите тэги услуг"
              @input="tagSearch()"
              @keyup.enter="addTag()"
            />
            <button class="registration-specials_input-2-button">Добавить</button>
          </div>

          <div v-if="user.tag" class="c-input-searcher">
            <ul class="c-input-searcher__lists">
              <li class="c-input-searcher__list" v-for="tag in tags" :key="tag" @click="selectTag(tag)">
                {{ tag.name }}
              </li>
            </ul>
          </div>

          <div class="c-tags">
            <div v-for="tag in user.tags" :key="tag" class="c-tags__tag">
              <h2 class="c-tags__title">{{ tag.name }}</h2>
              <img @click="deleteTag(tag)" src="~/assets/images/icons/close-icon.svg" alt="">
            </div>
          </div>
        </div>
        <h2 class="regitration-specials_change-number">
          Изменить номер телефона
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          first_name: '',
          last_name: '',
          company_name: '',
          address: '',
          phones: '',
          city: '',
          categories: '',
          specializations: '',
          tag: '',
          tags: [],
          description_short: '',
          description_full: '',
          url: '',
          documents_description: '',
          email: '',
          password: '',
          role: 2,
          documents: []
        },

        url: [

        ],
        user_category: [
          {
            categories: '',
            specializations: ''
          }
        ],
        searcher: false,
        phoneShow: false,
        phone: ''
      }
    },

    computed: {
      cities() {
        return this.$store.state.auth.cities
      },

      tags() {
        return this.$store.state.auth.tags
      },

      categories() {
        return this.$store.state.auth.categories
      },

      specializations() {
        return this.$store.state.auth.speacializations
      },

      verifyPhone() {
        return this.$store.state.auth.verifyPhone
      }
    },

    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.user.documents.push(file)
        this.url.push(URL.createObjectURL(file))
      },

      login() {
        let user = Object.assign({}, this.user)

        user.tags = this.user.tags.map((item) => item.id)
        user.categories = this.user_category.map((item) => item.categories)
        user.specializations = this.user_category.map((item) => item.specializations)

        this.$store.dispatch('auth/registerSpecialist', user)
          .then((res) => {
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err)
          })
      },

      addTag() {
        let tags = this.tags

        if (tags) {
          this.user.tags.push({
            id: tags[0].id,
            name: tags[0].name
          })

          this.user.tag = ''
        }
      },

      deleteTag(tag) {
        let index = this.user.tags.indexOf(tag)

        this.user.tags.splice(index, 1)
      },

      tagSearch() {
        this.$store.dispatch('auth/tagSearcher', this.user.tag)
      },

      selectTag(tag) {
        let tags = this.user.tags

        let exist = tags.some((item) => {
          return item.id === tag.id
        })

        if (exist) {
          this.user.tag = ''
          return
        } else {
          this.user.tags.push(tag)
          this.user.tag = ''
        }
      },

      selectCategory() {
        console.log(this.user.categories)
      },

      addPhone() {
        this.$modals.showModal({ modal: 'AddPhone' })
      },

      addCategory() {
        this.user_category.push({
          categories: '',
          specializations: ''
        })
      }
    },

    watch: {
      verifyPhone(newVal, oldVal) {
        this.user.phones = newVal
      }
    },

    mounted() {

      this.user.email = this.$route.query.email

      this.$store.dispatch('auth/getCities')
      this.$store.dispatch('auth/tagSearcher', '')
      this.$store.dispatch('auth/getCategories')
      this.$store.dispatch('auth/getSpecializations')
    }
  }
</script>

<style></style>
