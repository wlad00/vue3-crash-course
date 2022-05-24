import axios from "axios";
import {ref, onMounted} from 'vue';

export function getPosts(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);

    const fetchingFn = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });

            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);

            posts.value = response.data;

        } catch (e) {
            alert('Ошибка')
        } finally {
            isPostsLoading.value = false;
        }
    };

    onMounted(fetchingFn);
    /*onMounted(


    var self = this;
    setTimeout(function () { self.fetchHole() } , 1000)

        fetchingFn


    ); */

    // onCreated, computed, watch

    return {
        posts, isPostsLoading, totalPages
    }
}
