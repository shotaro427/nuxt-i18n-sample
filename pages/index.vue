<template>
  <v-col justify="center" align-content="center" class="text-center">
    <div>
      <img src="/fruit_apple.png" alt="" />
      <p>{{ $t('apple') }}</p>
    </div>
    <v-col>
      <div v-for="locale in availableLocales" :key="locale.code">
        <a @click="() => changeLocale(locale.code)">
          {{ locale.name }}
        </a>
      </div>
    </v-col>
  </v-col>
</template>

<script>
export default {
  components: {},
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    /**
     * リロードあり
     * クッキーへ言語設定。リロード後、言語切替
     */
    changeLocale(locale) {
      this.$i18n.setLocaleCookie(locale)
      this.$router.go(0)
    },

    /**
     * リロードなし
     * クッキーと、$i18n独自ストアのlocaleに言語を設定する
     * 直接storeを書き換えるためリロードは不要
     */
    // async changeLocale(locale) {
    //   await this.$i18n.setLocale(locale)
    // },
  },
}
</script>
