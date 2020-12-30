<template>
  <div>
    <ValidateForm @submit-form="onFormSubmit">
      <ValidateInput
        :label="'Email'"
        v-model="emailVal"
        :rules="emailRules"
        type="text"
        placeholder="Enter Email"
        autocomplete="off"
      ></ValidateInput>
      <ValidateInput
        :label="'密码'"
        :rules="pwdRule"
        type="password"
        placeholder="Enter password"
        v-model="pwd"
        autocomplete="off"
      ></ValidateInput>
      <template #submit>
        <button class="button is-info">
          Submit
        </button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { Rules } from '../components/ValidateInput.vue'
const testRule: Rules = [
  { type: 'required', errMessage: '邮箱不能为空' },
  { type: 'email', errMessage: '邮箱格式不正确' },
]
const pwdRule: Rules = [{ type: 'required', errMessage: '请输入密码' }]

export default defineComponent({
  setup() {
    const emailVal = ref('123@qq.com')
    const pwd = ref('123')
    const router = useRouter()
    const store = useStore()
    const onFormSubmit = (result: boolean) => {
      console.log(result)
      if (result) {
        store.commit('login')
        router.push('/')
      }
    }

    return {
      emailRules: testRule,
      pwdRule: pwdRule,
      emailVal,
      pwd,
      onFormSubmit,
    }
  },
  components: {
    ValidateForm,
    ValidateInput,
  },
})
</script>

<style scoped></style>
