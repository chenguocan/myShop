<template>
  <div class="layout">
    <el-container>
      <!--头部-->
      <el-header>
        <h1>后台管理系统</h1>
        <el-menu
            :default-active="navBar.active"
            class="el-menu-demo"
            mode="horizontal"
            @select="headerSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item :index="index.toString()" :key="index" v-for="(item,index) in navBar.list">{{item.name}}</el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <el-avatar size="small" style="margin-right: 10px"
                         src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              我的
            </template>
            <el-menu-item index="4-1">管理</el-menu-item>
            <el-menu-item index="4-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <!--侧边栏-->
        <el-aside style="width: 200px">
          <el-menu
              :default-active="slideMenuActive"
              class="el-menu-vertical-demo"
              text-color="gray"
              @select="asideSelect">
            <el-menu-item :index="index.toString()" v-for="(item,index) in slideMenu" :key="item.id">
              <i :class="item.icon || ''"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主内容-->
        <el-main>
          <div class="nav-breadcrumb">
            <el-breadcrumb separator="/" v-if="slideMenuActive" >
              <el-breadcrumb-item >首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,index) in breadList " :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-backtop target=".el-main">👆</el-backtop>
  </div>
</template>

<script>
import data from "@/config/static"
export default {
  name: "Layout",
  data() {
    return {
      navBar: '',
      breadList:[],
    }
  },
  created() {
    this.navBar=data.navBar;
    this.getActive();
  },
  watch:{
    '$route'(){
      this.breadList=[];
      let router=this.$route.matched;
      console.log(router);
      let arr=router.filter(item=>{
        if(item.name==='index'||item.name==='layout'){
          return;
        }else{
          return item;
        }
      })
      if(arr.length > 0) {
        arr.forEach(item => {
          this.breadList.push(item.meta.title);
        })
      }
      localStorage.setItem('currentList',JSON.stringify(this.breadList));
      localStorage.setItem('active',JSON.stringify(this.navBar.active));
      localStorage.setItem('slideActive',JSON.stringify(this.slideMenuActive));
    }
  },
  computed:{
    slideMenu(){
      return this.navBar.list[this.navBar.active].subMenu ||[]
    },
    slideMenuActive:{
      get(){
        return this.navBar.list[this.navBar.active].subActive
      },
      set(val){
        this.navBar.list[this.navBar.active].subActive=val;
      }
    }
  },

  methods: {
    getBranch(){

    },
    headerSelect(key) {
      if(key==='4-1'){
        return console.log("管理");
      }else if(key==='4-2'){
        return console.log("退出");
      }
      this.navBar.active=key;
      this.slideMenuActive='0';
      this.$router.push({name:this.navBar.list[this.navBar.active].subMenu[this.slideMenuActive].pathname})
    },
    asideSelect(key){
      this.slideMenuActive=key;
      this.$router.push({name:this.navBar.list[this.navBar.active].subMenu[this.slideMenuActive].pathname})
    },
    async getActive(){
      let active=await localStorage.getItem('active');
      let slideActive=await localStorage.getItem('slideActive');
      let currentList=await localStorage.getItem('currentList');
      if(active && slideActive){
        let currentActive=JSON.parse(active);
        let currentSlideActive=JSON.parse(slideActive);
        this.navBar.active=currentActive;
        this.slideMenuActive=currentSlideActive;
        let pushName=this.navBar.list[currentActive].subMenu[currentSlideActive].pathname;
        this.$router.push({name:pushName});
        this.breadList=JSON.parse(currentList)
      }
    },
  }
}
</script>

<style scoped>
.layout {
  height: 100%;
  width: 100%;
}

.el-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #545c64;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  position: fixed;
  z-index: 2;
}

.el-aside {
  color: #333;
  border-right:1px solid #e0e2e5;
  padding-top: 60px;
}
.el-menu{
  margin: 0;
  border: none;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding-top: 60px;
  position: relative;
}
.nav-breadcrumb{
  background: white;
  padding: 20px;
  margin: 0 -20px;
}
</style>
