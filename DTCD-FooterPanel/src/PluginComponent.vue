<template>
  <footer class="Footer">
    <nav class="MenuList">
      <a class="MenuItem with_copyright">© DataCAD {{ curYear }}</a>
    </nav>
    <div class="Version" v-text="`V ${version}`" />
  </footer>
</template>

<script>
export default {
  name: 'PluginComponent',
  computed: {
    version() {
      return Application.version;
    },

    curYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="sass" scoped>
.Footer
  display: flex
  align-items: center
  justify-content: space-between
  min-height: 30px
  padding: 0 20px
  background-color: var(--background_main)
  backdrop-filter: blur(40px)
  font-size: 15px
  font-family: 'Proxima Nova'
  color: var(--text_main)

  @media (max-width: 768px)
    flex-direction: column
    justify-content: center
    padding: 20px 0
    width: 100vw

  .MenuList
    display: flex
    align-self: stretch
    align-items: center
    column-gap: 80px

    .MenuItem
      text-decoration: none
      color: var(--text_main)
      text-align: center

      &.with_copyright
        font-weight: 600

    @media (max-width: 992px)
      gap: 32px

    @media (max-width: 768px)
      flex-direction: column

  .Version
    @media (max-width: 768px)
      padding-top: 74px
      color: var(--text_main)
</style>
