<template>
  <div>
    <article class="media post-item" v-for="item in postList" :key="item._id">
      <figure class="media-left" v-if="item.image">
        <p class="image is-96x96">
          <img :src="item.image.url" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ item.title }}</strong>
            <br />
            {{ item.excerpt }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            {{ item.createdAt }}
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '../store'
export default defineComponent({
  props: {
    postList: {
      type: Array as PropType<PostProps[]>,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.post-item {
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: 15px;
}
</style>
