<template>
  <div class="card">
    <!-- <div class="card-image">
      <figure class="image is-4by3">
        <img src="../assets/logo.png" alt="Placeholder image" />
      </figure>
    </div> -->
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="profile.avatar.url" :alt="profile.title" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ profile.title }}</p>
          <p class="subtitle is-6">{{ profile.description }}</p>
        </div>
      </div>

      <!-- <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div> -->
      <PostList :postList="postList"></PostList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PostList from '../components/PostList.vue'
import { GlobalDataProps } from '../store'
export default defineComponent({
  name: 'ColumnDetail',
  setup() {
    const route = useRoute()
    const store = useStore<GlobalDataProps>()
    const currentId = route.params.id
    const profile = computed(() => store.getters.getProfileById(currentId))
    const postList = computed(() => store.getters.getPostById(currentId))

    onMounted(() => {
      store.dispatch('fetchColumn', currentId)
      store.dispatch('fetchPosts', currentId)
    })
    return {
      profile,
      postList,
    }
  },
  components: {
    PostList,
  },
})
</script>

<style scoped></style>
