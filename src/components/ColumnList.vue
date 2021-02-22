<template>
  <div class="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
    <div class="list-item" v-for="item in columnList" :key="item._id">
      <figure class="image is-96x96" v-if="item.avatar">
        <img class="is-rounded" :src="item.avatar.url" />
      </figure>
      <h5 class="is-size-4 has-text-weight-medium">{{ item.title }}</h5>
      <p>{{ item.description }}</p>
      <router-link class="button is-success is-outlined" :to="`/detail/${item._id}`"
        >进入专栏</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColumnProps } from '../store'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = {
            url: require('@/assets/avatar.jpg'),
          }
        }
        return column
      })
    })

    return {
      columnList,
    }
  },
})
</script>

<style>
.list-item {
  width: 200px;
  text-align: center;
}
.list-item figure {
  margin-left: auto;
  margin-right: auto;
}
</style>
