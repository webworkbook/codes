<template>
  <div class="clone">
    <div class="form" v-if="isEdit">
      <span>爱好：</span>
      <input type="text" v-model="habit"/>
      <span class="button action-button" @click="addHabit">添加</span>
      <br/>
      <br/>
      <br/>
      <span>名字：</span>
      <input type="text" placeholder="你叫啥？" v-model="form.username"/>
      <br/>
      <br/>
      <br/>
      <span>年龄：</span>
      <input type="text" placeholder="你多大？" v-model="form.age"/>
      <br/>
      <br/>
      <br/>
      <span v-for="(item, index) in form.habits" class="habit" :key="index">{{ item }}</span>
      <br/>
      <br/>
      <br/>
    </div>
    <div class="preview" v-if="!isEdit && previewData">
      <span>名字：</span>
      <span>{{ previewData.username }}</span>
      <br/>
      <br/>
      <br/>
      <span>年龄：</span>
      <span>{{ previewData.age }}</span>
      <br/>
      <br/>
      <br/>
      <span v-for="(item, index) in previewData.habits" class="habit" :key="index">{{ item }}</span>
      <br/>
      <br/>
      <br/>
    </div>
    <span class="button action-button" @click="onClick">{{ buttonText }}</span>
    <span class="button action-button" @click="onCancel" v-if="isEdit">取消</span>
  </div>
</template>

<script>
export default {
  name: 'Clone',
  data () {
    return {
      isEdit: true,
      habit: '',
      form: {
        username: '',
        age: '',
        habits: ['读书', '下棋', '玩乐器']
      },
      previewData: null
    }
  },
  computed: {
    buttonText () {
      return this.isEdit ? '确定' : '编辑'
    }
  },
  methods: {
    addHabit () {
      if (!this.habit) return

      this.form.habits.push(this.habit)
      this.habit = ''
    },
    onClick () {
      if ((!this.form.username || !this.form.age) && this.isEdit) return

      this.isEdit = !this.isEdit
      
      if (!this.isEdit) {
        this.previewData = JSON.parse(JSON.stringify())
      }
    },
    onCancel () {
      this.isEdit = false
    }
  }
}
</script>

<style>
.clone {
  background-color: #f2f2f2;
}

.habit {
  border-radius: 4px;
  padding: 12px;
  background-color: #ccc;
  margin-right: 12px;
}

.action-button {
  margin-left: 10px;
}
</style>
