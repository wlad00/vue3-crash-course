import {createStore} from "vuex";
import {postModule} from "@/store/postModule";

export default createStore({
    state: {
      isAuth: true,
        likes: 3
    },
    modules: {
        post: postModule
    },
    getters:{ // computed
        doubleLikes(state){
            return state.likes *2;
        }

    },
    mutations:{
        incrementLikes(state){
                state.likes += 1;
        },
        decrementLikes(state){
                state.likes -= 1;
        }

    },
    actions:{

    }
})
