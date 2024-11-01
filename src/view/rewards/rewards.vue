<template>
  <div class="box"  id="env">
    
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true,
      videoContent: {
        name: 'The Bahamas Redemption',
        imgsrc: 'https://img1.baidu.com/it/u=1687773862,501709891&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1727974800&t=eded5130bf8ae4b731fe203ddb98ba63',
        content: [
          {
            accid: '011123',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '0112',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0113',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '0114',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0115',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '0116',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0117',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '0118',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '01141',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '015311',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0111',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '012311',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0112341',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '234',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '011213311',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '01123441',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0111123',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '011231123',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '011231211',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '011231311',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          {
            accid: '0123111',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
           {
            accid: '011231411',
            videosrc: 'https://copyright-public.oss-cn-beijing.aliyuncs.com/picture/202410/1841832347415351296.mp4',
            unlock: 0, // 0 解锁 1 未解锁
          },
          // 其他视频数据...
        ]
      },
      activeTab: 0, // 当前选中的选项卡索引
      activeVideo: 0, // 当前选中的视频索引
      activeid:'011231411',
    };
  },
  computed: {
  visibleContent() {
    const startIndex = this.activeTab * 20;
    const endIndex = Math.min((this.activeTab + 1) * 20, this.videoContent.content.length);
    return this.videoContent.content.slice(startIndex, endIndex);
  }
},
mounted() {
  const activeId = this.activeid;
  const tabSize = 20;
  for (let i = 0; i < this.videoContent.content.length; i++) {
    if (this.videoContent.content[i].accid == activeId) {
      this.activeTab = Math.floor(i / tabSize);
      console.log( this.activeTab);
      break;
    }
  }
},
  methods: {
    changeTab(index) {
      this.activeTab = index;
      console.log(this.activeTab);
      
      // this.activeVideo = 0; // 切换选项卡时，重置视频索引为0
    },
    changeVideo(item,index) {
      this.activeVideo = index;
      this.activeid =item.accid
      console.log( '当前选中id',this.activeid);
      console.log( '剧集index',(this.activeTab * 20) + index);
      
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: auto;
   box-sizing: border-box;
 
}
.tabs {
  display: flex;
}

.tabs div {
  padding: 10px;
  cursor: pointer;
}

.tabs div.active {
  background-color: #ccc;
}

.video-list div {
  padding: 10px;
  cursor: pointer;
}

.video-list div.active {
  background-color: #ccc;
}
</style>
