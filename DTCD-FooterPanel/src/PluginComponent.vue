<template>
  <div class="Footer">
    <div class="MenuList">
      <span class="Copyright">© DataCAD 2022</span>
      <span>Политика конфиденциальности</span>
      <span>Лицензии</span>
      <span>Партнерам</span>
    </div>
    <div class="Version">V 0.4.0</div>
  </div>
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
  color: var(--header_background)
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
