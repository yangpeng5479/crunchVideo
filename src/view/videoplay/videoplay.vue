<!-- Dom模板 -->
<template>
  <div class="box" id="eplay">
    <!-- Dom内容 -->
    <div class="head flex">
      <div class="flex" @click="back()">
        <img class="headlogo" src="../../assets/page/chevron-left.png" alt="" srcset="">
        <div class="shortname">{{videocontent.name}}</div>
      </div>
      <div class="count">
        {{nowplay+1}}/{{videocontent.content.length}}
      </div>
    </div>
    <div class="playmain">
      <van-swipe @change="onChangevideo" :show-indicators= false  :loop=false ref="swiper" class="van-v" vertical>
        <van-swipe-item click= playAV() v-for="(item,index) in videocontent.content" :key="index">

          <div style="display: flex; justify-content: center;">
            <video v-if="item.unlock == 0" :id="item.accid" v-click="handleClick" x5-video-player-type="h5" webkit-playsinline=true playsinline class="video" ref="video"
              :muted=mutedset @volumechange="handleVolumeChange" @ended=next() className="video-js custom-controls"
              controls controlsList="nodownload noplaybackrate" disablePictureInPicture :src="item.videosrc"></video>
              
         
              <div v-else class="upduck" @click="showunlock = true" >
                  <img style="width:.6rem;height:.75rem;" src="../../assets/page/Icon.png" alt="" srcset="">
                  Unlock Now
              </div>
                   <!-- <van-overlay  :show="item.unlock == 0" >
               
                </van-overlay> -->
                
         
          
            <!-- <video  class="swipeimg" v-lazy="item.imgsrc" /> -->
            <div class="conctrl">
              <div class="bear">
                <div class="add shar "><img class="wind" :src="videocontent.imgsrc" alt="" srcset=""></div>
                <div class="add like"><img class="windsha" src="../../assets/page/like.png" alt="" srcset="">
                  <div class="font">0</div>
                </div>
                <div class="add mylus"><img class="windsha" src="../../assets/page/add.png" alt="" srcset="">
                  <div class="font">My List</div>
                </div>
                <div class="add List" @click="show = true"><img class="windsha" src="../../assets/page/list.png" alt=""
                    srcset="">
                  <div class="font">List</div>
                </div>
                <div class="add Share"><img class="windsha" src="../../assets/page/share.png" alt="" srcset="">
                  <div class="font">Share</div>
                </div>
              </div>
            </div>
          </div>

        </van-swipe-item>
      </van-swipe>

    </div>
    <van-popup id="videopop" v-model="show" round position="bottom" close-icon>
      <img class="close" @click="show =false" src="../../assets/page/cross.png" alt="" srcset="">

      <div class="popname">
        <div class="antclub">{{videocontent.name}}</div>
        <div class="antclub  "> {{nowplay+1}}/{{videocontent.content.length}}</div>
      </div>
      <div class="hairline"></div>
      <div class="tabs">
        <div v-for="(item, index) in Math.ceil(videocontent.content.length / 20)" :key="index"
          :class="{ active: activeTab === index }" class="videoad" @click="changeTab(index)">
          {{ index * 20 + 1 }} - {{ Math.min((index + 1) * 20, videocontent.content.length) }}
        </div>
      </div>
      <div class="video-list">
        <div v-for="(item, index) in videocontent.content.slice(activeTab * 20, (activeTab + 1) * 20)" :key="index"
          :class="{ active: nowplayid === item.accid }" class="choose" @click="changeVideo(item,index)">
          <div :class="{ lockfont:item.unlock == 1 }">
            {{  (activeTab * 20) + index +1   }}
          </div>

          <img class="line" :class="{ showline: nowplayid === item.accid }" src="../../assets/page/line.png" alt=""
            srcset="">
          <img class="lock" :class="{ showlock:item.unlock == 1 }" src="../../assets/page/lock.png" alt="" srcset="">

        </div>
      </div>
      <div class="unlockall">
        <div class="lockfontset">Unlock all episodes <br/> Get 1000 <img class="coin" src="../../assets/page/coin.png" alt="" srcset=""> fro Free  </div>
        <div class="alset"><img class="cnterimg " src="../../assets/page/Illustration.png" alt="" srcset=""></div>
        <div class="eddcoin ">
          <img class="coins" src="../../assets/page/Coin1.png" alt="" srcset="">
          <div>1000</div>
        </div>
      </div>
    </van-popup>
   <!-- 解锁弹窗 -->
    <van-popup id="videopop"  v-model="showunlock" round position="bottom" :style="{ minHeight: '10%' }" > 
      <img class="close" @click="showunlock =false" src="../../assets/page/cross.png" alt="" srcset="">

      <div class="popname">
        <div class="antclublock">Unlock</div>
      </div>
      <div class="hairline"></div>
      <div class="lockmain">
          <img class="Mascot" src="../../assets/page/Mascot.png" alt="" srcset="">
           <img class="Popcorn" src="../../assets/page/Popcorn.png" alt="" srcset="">
           <div class="lockmen">
                <img class="Coinbig" src="../../assets/page/Coinbig.png" alt="" srcset="">
                <div class="ment">
                  <div class="coinadd">
                      <div class="loknum">100</div>
                    <div class="coins">coins</div>
                    <br/>
                   
                  </div>
                <!-- <br/> -->
                  <div class="perep">
                  Per episode
                 </div>
                </div>
           </div>
          
      </div>
      <div class="check">
             <van-checkbox v-model="checked"></van-checkbox>
             <div style="margin-left:5px">Auto-unlock, no more prompts</div>
      </div>
        <div  class="downduck" @click="showunlock = false" >
                  <img style="width:.6rem;height:.75rem;" src="../../assets/page/Icon.png" alt="" srcset="">
                  Unlock Now
              </div>
    </van-popup> 
    <!-- <div class="slider">
                      <van-slider v-model="value" active-color="#FFFF00" button-size='20px'  @change="onChange">
                      <template #button>
                        <div class="custom-button"></div>
                      </template>
                    </van-slider>
        
                    </div> -->
  </div>
</template>

<script>
// import a from './a'; // 引入组件
// import Vant from 'vant';
import{getdetail} from'../../until/api/newapi'
export default {
  directives: {
    click: {
      inserted(el, binding) {
        el.addEventListener('click', binding.value);
      }
    }
  },
  name: '',
  data() {
    return {
      msg: '测试',
      value: 50,
      nowplay: 5,
      lastplayid:'',
      lastplaybfid:'',
      nowplayid: '0112',
      checked:true,
      show: false,
      showunlock: false,
      mutedset: true,
      videocontent: {
        name: 'The Bahamas Redemption',
        isbuy:false, //整剧解锁
        imgsrc:
          'https://img1.baidu.com/it/u=1687773862,501709891&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1727974800&t=eded5130bf8ae4b731fe203ddb98ba63',
        content: [
          {
            accid: '0111',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁 单集解锁
          },
          {
            accid: '0112',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0113',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0114',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0115',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0116',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0117',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0118',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '01141',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '015311',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '011123',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '012311',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0112341',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '23411',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '011213311',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '01123441',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '0111123',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '011231123',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '011231211',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '011231311',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '0123111',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '011231411',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          {
            accid: '333113',
            videosrc:
              'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 1, // 0 解锁 1 未解锁
          },
          // 其他视频数据...
        ],
      },
      activeTab: 0, // 当前选中的选项卡索引
      // activeVideo: 0, // 当前选中的视频索引
      // activeid:'0115',
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    console.log(this.$route.query.video_id);
    this.loadvideo()
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // 禁止拖动进度条

    this.init()
    // this.playAV()
    this.inittap() //设置弹窗下标
    //     this.fillVideoWithScreen()
    //     document.getElementById('video').addEventListener('click', function() {
    //   // 在这里处理点击事件，例如播放或暂停视频
    //   console.log('视频被点击');
    // });
  },
  // Vue方法定义
  methods: {
    loadvideo(){
      const a = {
        id:this.$route.query.video_id
      }
    getdetail(a).then(res=>{
      console.log(res,'ressssss');
      
    })
    },
        handleClick() {
      // 在这里执行您的点击事件逻辑
      console.log(222);
      
    },
    init() {
      //初次加载根据id获取到index 并且跳转至当前轮播集
      this.nowplay = this.videocontent.content.findIndex(
        (item) => item.accid === this.nowplayid
      )
      this.$refs.swiper.swipeTo(this.nowplay, { immediate: true })
      
      // this.play( this.nowplay)
    },
    inittap() {
      //设置弹窗内正确tap
      const activeId = this.nowplayid
      const tabSize = 20
      for (let i = 0; i < this.videocontent.content.length; i++) {
        if (this.videocontent.content[i].accid == activeId) {
          this.activeTab = Math.floor(i / tabSize)
          // console.log( this.activeTab);
          break
        }
      }
    },
       play(index) {  //play方法做两件事 1.获取上一个播放的视频暂停  播放当前的nowplayid的视频
      //鉴权成功 播放
      console.log('play')
      if (this.lastplaybfid) {
       console.log(this.lastplaybfid,'11111231232');
      const videolast = document.getElementById(this.lastplaybfid) //获取上一个播放器
      videolast.pause() //暂停
      videolast.currentTime = 0 //进度归零
      }
       this.lastplaybfid =  this.nowplayid
    //  return

      const video = document.getElementById(this.nowplayid) //获取当前播放器
      this.nowplay = index //设置当前播放的index
      this.nowplayid = this.videocontent.content[index].accid //设置当前播放的id
      this.lastplaybfid =  this.nowplayid
      console.log('nowplayindex', this.nowplay)
      console.log('nowplayid', this.nowplayid)
      this.inittap()
      video.play() //视频播放
    },

    changeVideo(item, index) {
      //点击切换视频 播放   如果点击剧集item.unlock 为1未解锁状态 弹出付费确认窗口
      // this.activeVideo = index;
      // console.log( this.activeVideo);
      if (item.accid == this.nowplayid) {
        this.show = false
        return
      }
      if(this.videocontent.content[this.activeTab * 20 + index].unlock == 0  ){ // 如果已经解锁
      this.lastplayid = this.nowplayid
      const videolast = document.getElementById(this.lastplayid) //获取上一个播放器
     if (videolast) {
       videolast.pause() //暂停
      videolast.currentTime = 0 //进度归零
     }
    
       this.nowplayid = item.accid
      this.nowplay = this.activeTab * 20 + index
      console.log('当前选中id', this.nowplayid)
      console.log('剧集index', this.activeTab * 20 + index)
      this.init()
      //  this.play(this.activeTab * 20 + index)
       this.show = false
      }else{
        this.show = false
        this.showunlock = true
        return false
      }
    },
    onChangevideo(index) {  //手动滑动切换视频方法
    console.log(index,'look now');
    //  return
      // const video = document.getElementById(index) //获取当前播放器
      //      video.pause()  //暂停
      // return
      // console.log(index)
      // const videolast = document.getElementById(this.lastplaybfid) //获取上一个播放器
      // videolast.pause() //暂停
      // videolast.currentTime = 0 //进度归零
      if(this.videocontent.content[index].unlock == 0  ){
        // this.lastplaybfid = this.videocontent.content[index] .accid
       this.nowplayid = this.videocontent.content[index].accid //设置当前播放的id
        this.play(index)
      }else{
        
          const videolast = document.getElementById(this.lastplaybfid) //获取上一个播放器
      videolast.pause() //暂停
      videolast.currentTime = 0 //进度归零
      this.nowplay = index
       this.nowplayid = this.videocontent.content[index].accid //设置当前播放的id
      this.inittap()
      this.showunlock = true
        return false
      }
     
      // Toast('当前值：' + value);
    },


    next() { //视频播放结束跳转下一集
      console.log('end To next')
      this.$refs.swiper.next()
    },
   
      back() { //回退
      this.$router.go(-1)
    },
    handleVolumeChange(e) { //静音切换方法
      this.mutedset = e.target.muted
    },
     changeTab(index) {
      //切换tap方法
      this.activeTab = index
      console.log(this.activeTab)
    },
     playAV() {
      console.log('click');
      
      // this.nowplay = 0
    },
  },
}
</script>

<style scoped>
/* @import url(''); 引入css类 */
.disable{
  display: none;
}
.head {
  margin-bottom: 1rem;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headlogo {
  width: 1rem;
  height: 1rem;
}
.shortname {
  font-size: 0.875rem;
}
.count {
  width: 61px;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  border-radius: 0.8125rem;
  border: 1px solid #c4c2c0;
  font-size: 0.8125rem;
  background: #2f2f2f;
  font-weight: 400;
  color: #ffffff;
}
.video {
  width: 100%;
  height: calc(100vh - 3.625rem);
  object-fit: scale-down;
  /* object-fit: fill;
    width: 100%;
    height: auto; */
}
.van-v {
  width: 100%;
  height: calc(100vh - 3.625rem);
}
.playmain {
  height: calc(100vh - 3.625rem);
}
.van-swipe-item {
  height: calc(100vh - 3.625rem);
}
.conctrl {
  width: 43px;
  height: 316px;
  position: absolute;
  right: 10px;
  bottom: 120px;
  z-index: 3;
}
.bear {
  width: 100%;
  height: 100%;
  position: relative;
  /* background: black; */
}
.add {
  position: absolute;
  right: 0;
}
.wind {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  transform: translate(3px, 0px);
}

.windsha {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transform: translate(2px, 0px);
}
.font {
  width: 42px;
  text-align: center;
  font-size: 14px;
  line-height: 8px;
}
.like {
  top: 70px;
}
.mylus {
  top: 140px;
}
.List {
  top: 210px;
}
.Share {
  top: 270px;
}
.shar {
}
/* .custom-button {
    width: 12px;
    height: 12px;
    color: black;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    font-weight: 700;
    background-color: #FFFF00;
    border-radius: 100px;
  } */
</style>
<style scoped >
/*video默认全屏按钮*/
video::-webkit-media-controls-fullscreen-button {
  display: none !important;
}
/* video::-webkit-media-controls-play-button { display: none !important;} */
.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
  opacity: 1;
}
/* .custom-controls .vjs-control-bar {
    display: block !important;
    opacity: 1 !important;
    visibility: visible;
} */

.vjs-player .vjs-control-bar {
  display: flex !important;
}
#videopop {
  background: #1a1b1a !important;
  box-sizing: border-box;
  padding: 16px;
  padding-top: 20px;
  /* min-height: 480px;
  max-height: 800px; */
  /* min-height: 66%; */
}
.close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
}
.antclub {
  font-size: 1rem;
  margin-bottom: 10px;
}
.hairline {
  border: 0px solid rgba(255, 255, 255, 0.21);
  border-bottom-width: 1px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.line {
  width: 12px;
  height: 12px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: none;
}
.showline {
  display: block;
}
.lock {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
}
.showlock {
  display: block;
}
.lockfont {
  color: #666666;
}
.unlockall {
  height: 60px;
  background: #ffe133;
  border-radius: .5rem;
  margin-top: 5px;
   /* display: flex;
  justify-content: center;
  justify-items: center;  */
  position: relative;
}
.cnterimg{
  width: 75px;
  height: 49px;
 position: absolute;
 bottom: 0;
 right:115px;
}
.coin{
  width: 16px;
  height: 16px;
  transform: translateY(3px);
}
.lockfontset{
  color: black;
  font-size: 14px;
  font-weight: 600;

      width: 160px;
    position: absolute;
    top: 12px;
    left: 10px;
}
.alset{
    /* align-self: end;
    position: absolute; */

}
.eddcoin{
  width: 94px;
  height: 40px;
  line-height: 40px;
  background: black;
  border-radius:1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ffe133;
}
.coins{
  width: 16px;
  height: 16px;
  margin-right: 3px;
}
.upduck{
  width: 10.8125rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: .875rem;
  background: #ffe133;
  color: black;
  text-align: center;
  border-radius: 1.25rem;
  font-weight: 600;
  transform: translateY(40vh);
}
.downduck{
  width: 10.8125rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: .875rem;
  background: #ffe133;
  color: black;
  text-align: center;
  border-radius: 1.25rem;
  font-weight: 600;
  margin-left: 50%;
  transform: translatex(-50%);
  margin-top: .625rem;


}
.antclublock{
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
}
.lockmain{
  width: 14.9375rem;
  height: 5.75rem;
  background: #2F2F2F;
  border-radius: .5rem;
  text-align: center;
  margin-left: auto;
    margin-right: auto;
    margin-top: 1.25rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Mascot{
  width: 2.875rem;
  height: 2.5rem;
  position: absolute;
  left: -1.4375rem;
  bottom: 0;
}
.Popcorn{
  width:2.575rem;
  height: 3.375rem;
  position: absolute;
  right: -1.125rem;
  top: 0;
}
.lockmen{
  display: flex;
  justify-content: center;
 
}
.ment{
  /* display: flex; */
  /* align-items: center; */
}
.Coinbig{
  width: 4.25rem;
  height: 4.25rem;
}
.coinadd{
  display: flex;
  align-items: baseline;
}
.loknum{
  font-weight: 700;
  font-size: 2.25rem;
  color: #ffe133;
}
.coins{
  font-weight: 400;
  color: #ffe133;
  font-size: .875rem;
  margin-left: .3125rem;

}
.perep{
  font-size: .75rem;
  color:#c4c2c0;
  text-align: left;
  margin-left: .4375rem;
}
.check{
 display: flex;
 justify-content: center;
 font-size: .75rem;
 color: #FFFFFF;
margin-top: .625rem;
}
</style>
<style scoped>

.tabs {
  display: -webkit-box;
  overflow: auto;
}

.tabs div {
  margin-top: 10px;
  margin-bottom: 10px;
  /* padding: 0px 10px; */
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  color: #666666;
}

.tabs div.active {
  /* background-color: #ccc; */
  color: #ffffff;
}

/* .video-list div {
  padding: 10px;
  cursor: pointer;
} */

.video-list div.active {
  color: #ffe133;
  border: 1px solid #ffe133;
}
.videoad {
  border-right: 1px solid #666666;
  /* margin-right: 10px; */
}
/* 取消最后一个元素的右边竖线 */
.videoad:last-child {
  border-right: none;
}
.videoad:first-child {
  padding-left: 0;
}

.video-list {
  display: flex;
  flex-wrap: wrap;
  min-height: 17.25rem;
}
.choose {
  width: 3.75rem;
  height: 3.75rem;
  border: 1px solid #2f2f2f;
  background: #2f2f2f;
  border-radius: .5rem;
  text-align: center;
  line-height: 3.75rem;
  position: relative;
  /* margin: 10px 20px; */
  /* 其他样式 */
}
.choose {
  --n: 5;
  --space: calc((100% - 2rem) / var(--n) - 3.5rem);
  --m: calc(var(--space) / 2);
  margin: 0.22rem var(--m);
}
</style>
<style>
.van-checkbox__icon  {
   font-size: 12px;
}
.van-checkbox__icon--checked .van-icon {
    color: black;
    background-color: #ffe133;
    border-color: #ffe133;
}
</style>