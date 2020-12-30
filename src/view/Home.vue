<template>
  <div>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'
import { GlobalDataProps } from '../store'
export default defineComponent({
  setup() {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => store.state.columns)
    return {
      list,
    }
  },
  components: {
    ColumnList,
  },
})
</script>

<style scoped></style>
