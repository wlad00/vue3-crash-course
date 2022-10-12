
<script>
    import PostForm from "@/components/PostForm";

    import PostList from "@/components/PostList";

    import MyButton from "@/components/UI/MyButton";

    import MySelect from "@/components/UI/MySelect";

    import MyInput from "@/components/UI/MyInput";


    import {getPosts} from "./getPosts"; // async - await
    import getSortedPosts from "./getSortedPosts";
    import getSearchedPosts from "./getSearchedPosts";

    export default {
        components: {
            MyInput,
            MySelect,
            MyButton,
            PostList, PostForm
        },
        data() {
            return {
                dialogVisible: false,
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По содержимому'},
                ]
            }
        },
        methods:{

            showDialog(){
                this.dialogVisible = true;
            },
            createPost(post){
              this.posts.push(post);
              this.dialogVisible = false;
            }
        },
        setup() {

            const { posts, totalPages, isPostsLoading }

            = getPosts(10);


            const { selectedSort, sortedPosts }

            = getSortedPosts(posts);


            const { searchQuery, sortedAndSearchedPosts }

            = getSearchedPosts(sortedPosts);



            return {
                posts,
                totalPages,
                isPostsLoading,
                sortedPosts,
                selectedSort,
                searchQuery,
                sortedAndSearchedPosts
            }
        }
    }
</script>




<template>
  <div>
    <h1>Страница с постами 4</h1>

      <!-- Search -->

    <my-input
      v-model="searchQuery"
      placeholder="Поиск...."
      v-focus
    />

      <!-- BUTTONS -->

    <div class="app__btns">

        <!-- Button-1-->

      <my-button
           @click="showDialog"
      >
        Создать пользователя
      </my-button>

        <!-- Select -->

      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

      <!-- Dialog -->

    <my-dialog v-model:isShow="dialogVisible">
      <post-form
        @createPost = "createPost"
      />

    </my-dialog>

      <!-- List -->

    <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />

    <div v-else>Идет загрузка...</div>
  </div>

</template>













<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>
