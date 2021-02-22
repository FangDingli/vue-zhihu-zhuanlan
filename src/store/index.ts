import axios from 'axios'
import { createStore, Commit } from 'vuex'

export interface UserProps {
  isLogin: boolean,
  nickName?: string,
  _id?: number,
  column?: number,
  email?: string
}

interface ImageProps {
  _id?: string,
  url?: string,
  createdAt?: string
}

export interface ColumnProps {
  _id: string,
  title: string,
  avatar?: ImageProps,
  description: string
}

export interface PostProps {
  _id: string,
  title: string,
  excerpt?: string,
  content?: string,
  image?: ImageProps,
  createdAt: string,
  column: string
}

export interface GlobalDataProps {
  error: GlobalErrorProps,
  token: string,
  isLoading: boolean,
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps
}

export interface GlobalErrorProps {
  status: boolean,
  message?: string
}

const getDataAndCommit = async (url: string, mutationName: string, commit: Commit) => {
  const { data } = await axios.get(url)
  commit(mutationName, data)
}

const postDataAndCommit = async (url: string, mutationName: string, commit: Commit, payload: any) => {
  const { data } = await axios.post(url, payload)
  commit(mutationName, data)
  return data
}

const store = createStore<GlobalDataProps>({
  state: {
    error: { status: true },
    token: localStorage.getItem('token') || '',
    isLoading: false,
    columns: [],
    posts: [],
    user: { isLogin: false }
  },
  mutations: {
    /* login(state) {
      state.user = { ...state.user, isLogin: true, userName: "Fang" }
    }, */
    login(state, rawData) {
      const { token } = rawData.data
      localStorage.setItem('token', token)
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    setLoading(state, status) {
      state.isLoading = status
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns(state, rawData) {
      state.columns = rawData.data.list
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData.data]
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.data.list
    },
    fetchCurrentUser(state, rawData) {
      state.user = { isLogin: true, ...rawData.data }
    },
    setError(state, error: GlobalErrorProps) {
      state.error = error
    }
  },
  actions: {
    fetchColumns({ commit }) {
      getDataAndCommit('/columns', 'fetchColumns', commit)
    },
    fetchColumn({ commit }, cid) {
      getDataAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
    },
    fetchPosts({ commit }, cid) {
      getDataAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)
    },
    fetchCurrentUser({ commit }) {
      getDataAndCommit('/user/current', 'fetchCurrentUser', commit)
    },
    login({ commit }, payload) {
      return postDataAndCommit('/user/login', 'login', commit, payload)
    },
    loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser')
      })
    }
  },
  getters: {
    getProfileById: (state) => (id: string) => {
      return state.columns.filter(p => p._id == id)[0]
    },
    getPostById: (state) => (id: string) => {
      return state.posts.filter(p => p.column == id)
    }
  }
})

export default store
