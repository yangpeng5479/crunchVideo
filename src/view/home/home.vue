<!-- Dom模板 -->
<template>
  <div class="box" id="env" infinite-scroll-distance='50px'  v-infinite-scroll="infiniteHandler" :infinite-scroll-immediate = false style="overflow:auto">
    <!-- Dom内容 -->
    <div class="head flex">
        <img class="headlogo" src="../../assets/page/pageLogo.png" alt="" srcset="">
         <img class="headmenu" src="../../assets/page/menu.png" alt="" srcset="">
    </div>
    <div class="banner">
          <van-swipe id="homebanner" @change="onChange" :autoplay="3000" ref="swiper" :show-indicators= false  >
        
                    <van-swipe-item v-for="(item,index) in bannerlist" :key="index">
                    <img  class="swipeimg" v-lazy="item.image" />
                  </van-swipe-item>
                
      </van-swipe>
   </div>
    <div class="custom-indicator">
      <span
        v-for="(item, index) in bannerlist"
        :key="index"
        :class="{ active: index === current }"
        @click="goToSlide(index)"
      ></span>
    </div>
    <div class="conmain">
        <div class="chostitle">All Series</div>
        
       
        
    </div>
      <div class="list"  > 
             <div class="mainshow" v-for="(item,index) in addlist" :key="index" @click="goDetail(item)">
            <div class="tap">
                <img class="showimg" :src="item.thumbnail_url" alt="" srcset="">
            </div>
            <div class="showfongt ">
              {{item.title}}
            </div>
        </div>
        </div>
        <div class="test">
          {{text}}
        </div>
  </div>
</template>

<script>
// import a from './a'; // 引入组件
// import InfiniteLoading from 'vue-infinite-loading';
import {getvideos,getbanner} from '../../until/api/newapi'
export default {
  // components: {
  //   InfiniteLoading,
  // },
  name: '',
  data() {
    return {
      msg: '测试',
      list:[],
      addlist:[],
      page:0,
      limit:10,
      text:'Loading...',
      bannerlist: [
        // {
        //   imgsrc:
        //     'https://img1.baidu.com/it/u=1687773862,501709891&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1727974800&t=eded5130bf8ae4b731fe203ddb98ba63',
        //   type: 0, //0 展示
        //   name:'Mrs.Fu.s Divorce Dilemema \ asdasda.',
        //   linkurl: '',
        // },
        // {
        //   imgsrc:
        //     'https://img0.baidu.com/it/u=1397114051,1766814204&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1727974800&t=37befd0421afb8f9fadbba29a5dfba2c',
        //   type: 0, //0 展示
        //    name:'Mrs.Fu.s',
        //   linkurl: '',
        // },
        //  {
        //   imgsrc:
        //     'https://img1.baidu.com/it/u=1687773862,501709891&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1727974800&t=eded5130bf8ae4b731fe203ddb98ba63',
        //   name:'Glass',
        //   type: 0, //0 展示
        //   linkurl: '',
        // },
        //  {
        //   imgsrc:
        //     'https://img1.baidu.com/it/u=1687773862,501709891&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1727974800&t=eded5130bf8ae4b731fe203ddb98ba63',
        //   type: 0, //0 展示
        //   linkurl: '',
        // },
      ],
      current: 0,
      count:0,
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getbanner()
    this.load()

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  // Vue方法定义
  methods: {
    getbanner(){
      const a = {}
         getbanner(a).then(res=>{
          this.bannerlist = res.data
          //   console.log(res,'123123');
          //   this.list = res.data
          //   this.page = res.data.page
          //  this.addlist.push(...res.data.list)
          //   console.log(this.addlist);
            
          })
    },
     infiniteHandler($state) {
      console.log('触发');
      // console.log($state);
      
      if (this.page == 0) {
        return
      }
      if (this.addlist.length >= this.list.total) {
          // $state.complete();
          this.text = 'no more...'
          return
      }else{
        this.load()
      }
    },
      load(){
          const a = {
             page:this.page+1 ,
             limit:this.limit,
          }
          getvideos(a).then(res=>{
            console.log(res,'123123');
            this.list = res.data
            this.page = res.data.page
           this.addlist.push(...res.data.list)
            console.log(this.addlist);
            
          })
      },


    onChange(index) {
      this.current = index
    },
      goToSlide(index) {
         this.$refs.swiper.swipeTo(index);
      this.current = index;
    },
    goDetail(e){
      console.log(e);
      this.$router.push({path: `/video?video_id=${e.video_id}`})
    }
  },
}
</script>

<style scoped>
/* @import url(''); 引入css类 */
.box {
  width: 100%;
  height: 100%;
  overflow: auto;
   box-sizing: border-box;
 
}
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
.headmenu{
  width: 1.5rem;
  height: 1.5rem;
}
.swipeimg{
  width:21.4375rem;
  height: 30.3125rem;
  border-radius: 1rem;
}

.banner{
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  
}
.custom-indicator {
  display: flex;
  justify-content: center;
}
.custom-indicator span {
  width: 1rem;
  height: .25rem;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin: 0 5px;
  cursor: pointer;
}
.custom-indicator span.active {
  background-color: #FFE133;
}
.list{
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
 
}
.test{
  margin-top: 10px;
  text-align: center;
  /* min-height: 500px; */
  /* height: 1000px; */
   /* overflow: auto; */
}
.mainshow{
  width:10.25rem ;
  height: 18.25rem;
  background: #000000;
 border-radius: .5rem ;
  margin-top: 1rem;
}
.mainshow:nth-child(2n+2) {
        margin-left: .9375rem; /* 设置第二个元素的左边距为 10px */
    }
.tap img{
width: 10.25rem;
height: 16rem;
border-radius: .5rem .5rem 0px 0px;
}
.shof{
  font-size: .75rem;
   padding-left: .625rem;
     /* display: flex;
    align-items: center;
     height: 1.5625rem;
     overflow: hidden; */
}
.showfongt{
     font-size: .75rem;
    display: flex;
    align-items: center;
    height: 1.5625rem;
    padding-left: .625rem;
    line-height: .9375rem;
    font-weight: 400;
}
.chostitle{
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 1rem;
}
</style>
<style>
.van-swipe #homebanner{
  border-radius: 1rem !important;
}
</style>