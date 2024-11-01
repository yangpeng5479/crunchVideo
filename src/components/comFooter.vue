<!-- Dom模板 -->
<template>
  <div class="foot"  v-if="!shouldHideNavigation">
    <!-- Dom内容 -->
  <van-tabbar route v-model="active" active-color="#FFFFFF" inactive-color="#C4C2C0">
  <van-tabbar-item replace to="/" icon="home-o">
   <span>Home</span>
    <template #icon="props">
      <img :src="props.active ? icon.homeactive : icon.homeinactive" />
    </template>
  </van-tabbar-item>
   <van-tabbar-item replace to="/rewards" icon="home-o">
   <span>Rewards</span>
    <template #icon="props">
      <img :src="props.active ? icon.rewardsactive : icon.rewardsinactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item replace to="/profile" icon="search">
    <span>Profile</span>
    <template #icon="props">
      <img :src="props.active ? icon.profileactive : icon.profileinactive" />
    </template>
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
// import a from './a'; // 引入组件
export default {
  name: '',
  data() {
    return {
      msg: '测试',
       active: 0,
         shouldHideNavigation: false,
      icon: {
        homeactive: require('../assets/nav/home2.png'),
        homeinactive: require('../assets/nav/home1.png'),
         rewardsactive: require('../assets/nav/rewards2.png'),
         rewardsinactive: require('../assets/nav/rewards1.png'),
         profileactive: require('../assets/nav/profile2.png'),
         profileinactive: require('../assets/nav/profile1.png'),
      },
    }
  },
  created() {
    // console.log(window.location.hash.replace('#', ''));
    
    this.checkNavigationVisibility(window.location.hash.replace('#', ''));
  },
  methods: {
    checkNavigationVisibility(e) {
      // console.log(e);
      // 
      this.shouldHideNavigation = !['/', '/profile', '/rewards'].includes(e);

    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      // console.log(to.path);
      // this.shouldHideNavigation = !['/', '/profile', '/rewards'].includes(to.path);
      this.checkNavigationVisibility(to.path);
      next();
    });
  }
}
</script>

<style scoped>
/* @import url(''); 引入css类 */
.van-tabbar {
  height: 5.75rem;
  background: black;
  border-radius: 1.25rem 1.25rem 0px 0px;
 
}
.van-tabbar-item{
 line-height: 2;
 margin-bottom: 1.0625rem;
 font-size: 0.75rem;
}
.van-tabbar-item--active {
    color: #1989fa;
    background-color: black;
      border-radius:1.25rem 1.25rem 0px 0px;
}
.van-tabbar-item__icon img {
    display: block;
    height: 1.5rem;
}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border-width: 1px 0;
    border: none;
}
</style>