import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from '../../testData'
interface UserProps {
  isLogin: boolean,
  userName?: string,
  id?: number,
  columnId?: number
}

export interface GlobalDataProps {
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps
}

const store = createStore({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: true, userName: "Fang", column: 1 }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, userName: "Fang" }
    }
  },
  getters: {
    getProfileById: (state) => (id: number) => {
      return state.columns.filter(p => p.id == id)[0]
    },
    getPostById: (state) => (id: number) => {
      return state.posts.filter(p => p.columnId == id)
    }
  }
})

export default store
