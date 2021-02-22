<template>
  <div>
    <h2>新建文章</h2>
    <ValidateForm @submit-form="onFormSubmit">
      <ValidateInput
        :label="'请输入文章标题'"
        v-model="title"
        :rules="titleRule"
        type="text"
        placeholder="最多50个字"
        autocomplete="off"
      ></ValidateInput>
      <ValidateInput
        :label="'请输入文章内容'"
        :rules="contentRule"
        placeholder="请输入正文，支持MarkDown语法"
        v-model="content"
        autocomplete="off"
        :tagType="'textarea'"
      ></ValidateInput>
      <template #submit>
        <button class="button is-info">
          发表文章
        </button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { GlobalDataProps, PostProps } from '../store'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { Rules } from '../components/ValidateInput.vue'
const titleRule: Rules = [{ type: 'required', errMessage: '标题不能为空' }]
const contentRule: Rules = [{ type: 'required', errMessage: '内容不能为空' }]
export default defineComponent({
  setup() {
    const title = ref('')
    const content = ref('')
    const store = useStore<GlobalDataProps>()
    const router = useRouter()
    function onFormSubmit(result: boolean) {
      if (result) {
        const { column } = store.state.user
        if (column) {
          const newPost: PostProps = {
            _id: String(new Date().getTime()),
            title: title.value,
            content: content.value,
            createdAt: new Date().toLocaleString(),
            column: String(column),
          }
          store.commit('createPost', newPost)
          router.push({ name: 'detail', params: { id: column } })
        }
      }
    }
    return {
      onFormSubmit,
      titleRule,
      contentRule,
      title,
      content,
    }
  },
  components: {
    ValidateInput,
    ValidateForm,
  },
})
</script>

<style scoped></style>
