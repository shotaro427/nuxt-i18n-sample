export const state = () => ({
  lang: 'ja',
})

export const mutations = {
  SET_LANGUAGE(state, lang) {
    state.lang = lang
  },
}
