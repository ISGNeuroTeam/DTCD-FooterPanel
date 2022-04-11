<template>
  <footer class="Footer">
    <nav class="MenuList">
      <a href="#" class="MenuItem Copyright">© DataCAD 2022</a>
      <a href="#" class="MenuItem">Политика конфиденциальности</a>
      <a href="#" class="MenuItem">Лицензии</a>
      <a href="#" class="MenuItem">Партнерам</a>
    </nav>
    <div class="Version">V 0.4.0</div>
  </footer>
</template>

<script>
export default {
  name: 'PluginComponent',
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
  font-size: 15px
  font-family: 'Proxima Nova'

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

    & > * 
      text-align: center

    .MenuItem
      text-decoration: none
      color: var(--header_background)

    @media (max-width: 992px) 
      gap: 32px

    @media (max-width: 768px) 
      flex-direction: column

    .Copyright
      font-weight: 600

  .Version
    @media (max-width: 768px) 
      padding-top: 74px

</style>
