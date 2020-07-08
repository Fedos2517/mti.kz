export default ({ app, store }, inject) => {
  inject('modals', {
    showModal({ modal }) {
      store.commit(`modal/${modal}`)
    }
  })
}
