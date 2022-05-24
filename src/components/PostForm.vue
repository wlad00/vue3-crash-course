<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>


      <!-- post.title -->

    <my-input
      v-focus
      v-model="post.title"

      placeholder="Название"
    ></my-input>



      <!-- post.body -->

    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"
    ></my-input>



      <!-- post.title -->

    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
    >
      Создать
    </my-button>

  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('createPost', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  },
}
</script>


<style scoped>
form {
  display: flex;
  flex-direction: column;
    /*border: solid;*/
}

</style>
