<template>
  <div>
    <article class="media" v-for="item in postList" :key="item.id">
      <figure class="media-left">
        <p class="image">
          <img :src="item.image" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ item.title }}</strong>
            <br />
            {{ item.content }}
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
import { PostProps } from '../../testData'
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

<style scoped></style>
