<template>
  <div class="hello">
    <button @click="userRegister">注册用户</button>
    <button @click="getUserDatas">获取用户</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){

  },
  methods:{
    // 用户注册
    userRegister(){
      let data = {
        username: 'username',
        password: '312321'
      };
      this.$axios.http({type:'post',url:'/users',data:data}).then(res=>{
        console.log(res);
      })
    },
    // 查看用户数据
    getUserDatas(){
      let data = {
        username: 'username',
        password: '312321'
      };
      this.$axios.http({type:'get',url:'/users'}).then(res=>{
        console.log(res);
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
