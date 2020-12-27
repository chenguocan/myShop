<template>
  <div>
    <div class="image-container">
      <el-container>
        <el-header>
          <div>
            <el-dropdown style="margin-right: 10px" trigger="click">
              <el-input placeholder="请选择图片区域" size="mini">
                <i slot="suffix" class="el-icon-arrow-down el-input__icon"></i>
              </el-input>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>区域一</el-dropdown-item>
                <el-dropdown-item>区域二</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-input placeholder="搜索图片名称" size="mini" style="width: 200px"></el-input>
            <el-button type="success" size="mini" class="search">搜索</el-button>
          </div>
          <div class="options">
            <el-button size="mini" type="success">创建相册</el-button>
            <el-button size="mini" type="warning">上传相册</el-button>
          </div>
        </el-header>
        <el-container>
          <el-aside width="225px">
            <ul>
              <li class="img-item" @click="currentAlbum(index)" :class="{active:albumIndex===index}"  v-for="(item,index) in imageList" :key="index">
                <span>{{item.name}}</span>
                <el-dropdown>
                   <span class="el-dropdown-link edit"  >
                        {{item.num}}<i class="el-icon-arrow-down el-icon--right"></i>
                   </span>
                  <!--相册删改-->
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.stop.native="modify">修改</el-dropdown-item>
                    <el-dropdown-item @click.stop.native="imgDelete(index)">删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
            </ul>
          </el-aside>
          <el-main></el-main>
        </el-container>
        <el-footer></el-footer>
      </el-container>
    </div>
   <!-- 对话框-->
    <el-dialog
        title="修改相册"
        :visible.sync="albumVisible"
        width="30%">
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      <span slot="footer" class="dialog-footer">
         <el-button @click="albumVisible = false">取 消</el-button>
         <el-button type="primary" @click="albumVisible = false">确 定</el-button>
       </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "ImgList",
  data() {
    return {
      imageList: [],
      albumIndex:0,
      albumVisible:false,
      num:0,
    }
  },
  created() {
    for(let i=1;i<20;i++){
      let xxx={
        name:'相册'+i,
        num:Math.floor(Math.random()*100),
        order:0,
      }
      this.imageList.push(xxx);
    }
  },
  methods: {
    imgDelete(index){
      this.imageList.splice(index,1);
    },
    currentAlbum(index){
      console.log(index);
      this.albumIndex=index;
    },
    modify(){
      this.albumVisible=true;
    },
    handleChange(){
      console.log('改变');
    }
  }
}
</script>

<style scoped lang="scss">
.image-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 114px;
  bottom: 0;
}

.el-header, .el-footer {
  background-color: #fcfcfc;
  color: #333;
}

.options {

}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-footer {
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
}

.search {
  margin-left: 10px;
}

.el-aside {
  background-color: #e6e9ea;
  color: #333;
  bottom: 60px;
  position: absolute;
  left: 0;
  top: 60px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  bottom: 60px;
  position: absolute;
  left: 225px;
  right: 0;
  top: 60px;
}
.img-item{
  background: #ffffff;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:1px solid #e4e9ee;
  cursor: pointer;
  .edit{
    background: #b7d6f8;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }
  span{
    margin: 0 15px;
  }
}
.img-item:hover{
  background: #f1f4fa;
}
.active{
 background: #E9EEF3;
}
</style>
