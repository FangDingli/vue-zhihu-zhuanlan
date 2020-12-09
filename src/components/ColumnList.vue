<template>
  <div class="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
    <div class="list-item" v-for="item in list" :key="item.id">
      <img :src="item.avatarSrc" alt="" />
      <h5 class="is-size-4 has-text-weight-medium">{{ item.title }}</h5>
      <p>{{ item.desc }}</p>
      <a class="button is-success is-outlined" href="">进入专栏</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnProp {
  id: number
  avatarSrc: string
  title: string
  desc: string
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProp[]>,
      required: true,
    },
  },
})
</script>

<style>
.list-item {
  width: 200px;
}
</style>
