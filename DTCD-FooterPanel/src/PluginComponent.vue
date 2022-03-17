<template>
  <div class="footer">
    <div class="menu">
      <span class="copyright">© DataCAD 2022</span>
      <span>Политика конфиденциальности</span>
      <span>Лицензии</span>
      <span>Партнерам</span>
    </div>
    <div class="version">V 0.4.0</div>
  </div>
</template>

<script>
export default {
  name: 'PluginComponent',
};
</script>

<style lang="sass" scoped>
.footer
  display: flex
  align-items: center
  justify-content: space-between
  min-height: 30px
  padding: 0 20px
  background-color: var(--background_main)
  color: var(--text_main)
  font-size: 15px
  font-family: 'Proxima Nova'

  .menu
    display: flex
    align-self: stretch
    align-items: center
    column-gap: 80px

    .copyright
      font-weight: 600
</style>
