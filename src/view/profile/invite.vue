<!-- Dom模板 -->
<template>
  <div class="env" id="enr">
    <!-- Dom内容 -->
   <div class="head flex">
        <img class="headlogo" @click="back" src="../../assets/page/pageLogo.png" alt="" srcset="">
         <!-- <img class="headmenu" src="../../assets/page/menu.png" alt="" srcset=""> -->
    </div>
     <div class="headet">
        <div class="Wallet">
       My Reards
      </div>
       <div class="flex euen ">
        <!-- <img class="Coin1" src="../../assets/page/Coin1.png" alt="" srcset=""> -->
        <div class="fonta">10,010,000</div>
      </div>

    </div>
      <div class="history ">
       History
      </div> 
      <div class="historylist">
            <div v-for="item,index in historydata" :key="index" class="flex setadd" >
         <div class="lockmen">
      <img class="frame" src="../../assets/page/Frame.png" alt="" srcset="">
      <div class="flex setparse ">
             <div class="ment">
        <div class="loknum">{{item.name}}</div>
        <div class="perep">
        {{item.time}}
        </div>
      </div>
      <div class="cont">
        {{item.cont}}
      </div>
      </div>
     
    </div>
            </div>
      </div>
  </div>
</template>

<script>
// import a from './a'; // 引入组件
export default {
  name: '',
  data() {
    return {
      msg: '测试',
      historydata:[
        {
            name:'0x_Shart',
            time:'2024-10-31',
            cont:'100'
        },
         {
            name:'0x_Json',
            time:'2024-10-31',
            cont:'10'
        },
         {
            name:'0x_Bay',
            time:'2024-10-31',
            cont:'20'
        },
         {
            name:'0x_Dachun',
            time:'2024-10-31',
            cont:'40'
        },
         {
            name:'0x_Mom',
            time:'2024-10-31',
            cont:'50'
        },
         {
            name:'0x_Dad',
            time:'2024-10-31',
            cont:'70'
        }

      ],
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
      
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      
  },
  // Vue方法定义
  methods: {
      back(){
        this.$router.go(-1)
      }
  }
}
</script>

<style scoped>
/* @import url(''); 引入css类 */
.flex{
  display: flex;
}
.head{
width: 100%;
justify-content:space-between;
}
.headlogo{
  width: 6.5375rem;
  height: 1.575rem;
}
.fonta {
  /* font-size: 0.625rem;
  margin-left: 0.1875rem;
  margin-right: 0.625rem;
  color: #c4c2c0; */
    font-size: 2.125rem;
    font-weight: 700;
    margin-left: -0.3125rem;
    margin-top: .3125rem;
}
.headet {
  width: 100%;
  height: 5.6875rem;
  background: #2f2f2f;
  border-radius: 8px;
  margin-top: 1.25rem;
  padding: 1.2rem;
  box-sizing: border-box;
  position: relative;
}
.history{
    margin: .9375rem 0px .9375rem 0px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #FFFFFF;
}
.frame{
  width: 3rem;
  height: 3rem;
  align-self: center;
}
.setparse{
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid ;
    height: 4.375rem;
}
.lockmen {
  display: flex;
  justify-content: left;
  width: 100%;
}
.ment {
  align-self: center;
  line-height: 1.25rem;
  margin-left: 0.625rem;
}
.Coinbig {
  width: 4.25rem;
  height: 4.25rem;
}
.loknum {
  font-weight: 600;
  font-size: 1.0625rem;
  color: #ffffff;
}
.perep {
  font-size: .9375rem;
  color: #ffffff;;
  text-align: left;
}
.cont{
    align-self: center;
    font-size: 1.875rem;
    font-weight: 700;
    color: #ffe133;
}
.setadd{
    margin-bottom: .625rem;
}
</style>