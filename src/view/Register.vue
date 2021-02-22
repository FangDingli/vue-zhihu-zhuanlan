<template>
  <div>
    <ValidateForm @submit-form="onFormSubmit">
      <ValidateInput
        :label="'Email'"
        v-model="formData.emailVal"
        :rules="emailRules"
        type="text"
        placeholder="Enter Email"
        autocomplete="off"
      ></ValidateInput>
      <ValidateInput
        :label="'昵称'"
        v-model="formData.nickName"
        :rules="nameRule"
      ></ValidateInput>
      <ValidateInput
        :label="'密码'"
        :rules="pwdRule"
        type="password"
        placeholder="Enter password"
        v-model="formData.pwd"
        autocomplete="off"
      ></ValidateInput>

      <ValidateInput
        :label="'请再次输入密码'"
        type="password"
        v-model="formData.repeatPwd"
        :rules="repeatRule"
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
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { Rules } from '../components/ValidateInput.vue'
import createMessage from '../components/createMessage'

export default defineComponent({
  setup() {
    const formData = reactive({
      emailVal: '',
      nickName: '',
      pwd: '',
      repeatPwd: '',
    })
    const router = useRouter()
    const emailRules: Rules = [
      { type: 'required', errMessage: '邮箱不能为空' },
      { type: 'email', errMessage: '邮箱格式不正确' },
    ]
    const nameRule: Rules = [{ type: 'required', errMessage: '请输入昵称' }]
    const pwdRule: Rules = [{ type: 'required', errMessage: '请输入密码' }]
    const repeatRule: Rules = [
      { type: 'required', errMessage: '密码不能为空' },
      {
        type: 'custom',
        errMessage: '密码错误',
        validate: () => {
          return formData.pwd === formData.repeatPwd
        },
      },
    ]
    const onFormSubmit = (result: boolean) => {
      console.log(result)
      if (result) {
        const payload = {
          email: formData.emailVal,
          password: formData.pwd,
          nickName: formData.nickName,
        }
        axios
          .post('/users/', payload)
          .then(data => {
            createMessage('注册成功 正在跳转登录页面', 'success')
            setTimeout(() => {
              router.push('/login')
            }, 2000)
          })
          .catch(e => {
            console.log(e)
          })
      }
    }

    return {
      emailRules: emailRules,
      pwdRule: pwdRule,
      nameRule,
      onFormSubmit,
      repeatRule,
      formData,
    }
  },
  components: {
    ValidateForm,
    ValidateInput,
  },
})
</script>

<style scoped></style>
