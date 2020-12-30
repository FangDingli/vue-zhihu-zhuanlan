<template>
  <div class="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
    <div class="list-item" v-for="item in list" :key="item.id">
      <figure class="image is-96x96" v-if="item.avatar">
        <img class="is-rounded" :src="item.avatar" />
      </figure>
      <h5 class="is-size-4 has-text-weight-medium">{{ item.title }}</h5>
      <p>{{ item.description }}</p>
      <router-link class="button is-success is-outlined" :to="`/detail/${item.id}`"
        >进入专栏</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ColumnProps } from '../../testData'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
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
