
<script>
    import PostForm from "@/components/PostForm";
    import PostList from "@/components/PostList";
    import MyButton from "@/components/UI/MyButton";
    import axios from 'axios';
    import MySelect from "@/components/UI/MySelect";
    import MyInput from "@/components/UI/MyInput";

    export default {
        components: {
            MyInput,
            MySelect,
            MyButton,
            PostList,
            PostForm
        },
        data() {
            return {
                dialogVisible: false,

                posts: [],
                isPostsLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По содержимому'},
                ]
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible = false;
            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true;
            },
            // changePage(pageNumber) {
            //   this.page = pageNumber
            // },


            async fetchPosts() {
                try {
                    this.isPostsLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data;
                } catch (e) {
                    alert('Ошибка')
                } finally {
                    this.isPostsLoading = false;
                }
            },
            async loadMorePosts() {
                try {
                    this.page += 1;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data];
                } catch (e) {
                    alert('Ошибка')
                }
            }
        },
        mounted() {
            this.fetchPosts();
            // const options = {
            //   rootMargin: '0px',
            //   threshold: 1.0
            // }
            // const callback = (entries, observer) => {
            //   if (entries[0].isIntersecting && this.page < this.totalPages) {
            //     this.loadMorePosts()
            //   }
            // };
            // const observer = new IntersectionObserver(callback, options);
            // observer.observe(this.$refs.observer);
        },
        computed: {
            sortedPosts() {
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            },
            sortedAndSearchedPosts() {
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        watch: {
            // page() {
            //   this.fetchPosts()
            // }
        }
    }
</script>





<template>
  <div>
    <h1>Страница с постами</h1>

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

    <my-dialog v-model:show="dialogVisible">
      <post-form
        @createPost="createPost"
      />
    </my-dialog>


      <!-- List -->

    <post-list
      :posts="sortedAndSearchedPosts"
      @removeItem="removePost"

      v-if="!isPostsLoading"
    />

    <div v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePosts" class="observer"></div>

    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--        v-for="pageNumber in totalPages"-->
    <!--        :key="pageNumber"-->
    <!--        class="page"-->
    <!--        :class="{-->
    <!--          'current-page': page === pageNumber-->
    <!--        }"-->
    <!--        @click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
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
