<template>
  <div>
    <GlobalHeader :user="userProps"></GlobalHeader>
    <div class="column">
      <div class="columns is-gapless">
        <div class="column"></div>
        <div class="column is-full-mobile is-9-desktop">
          <ColumnList :list="list"></ColumnList>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProp } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const testData: ColumnProp[] = [
  {
    id: 1,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
  {
    id: 2,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
  {
    id: 3,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
  {
    id: 4,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
  {
    id: 5,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
  {
    id: 6,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
  {
    id: 7,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
  {
    id: 8,
    title: '专栏的标题',
    desc: '专栏的描述',
    avatarSrc:
      'http://i1.hdslb.com/bfs/face/b3d6b3320baea31e82af616e59e6d4e95fa3d3a8.jpg@100w_100h.webp',
  },
]
const testUserData: UserProps = {
  isLogin: true,
  userName: 'Fang',
  id: 1,
}
export default defineComponent({
  setup() {
    return {
      list: testData,
      userProps: testUserData,
    }
  },
  components: {
    ColumnList,
    GlobalHeader,
  },
})
</script>

<style></style>
