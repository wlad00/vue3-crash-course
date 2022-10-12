<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button  @click="$router.push('/oop')">OOP</my-button>
      <my-button  @click="$router.push('/store')">store</my-button>
      <my-button  @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;

}
.navbar__btns {
  /*margin-left: auto;*/


}
.navbar__btns >button{
    margin-left: 20px;
}

</style>
