<template>
  <div >
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
          <el-aside width="200px">

          </el-aside>
          <el-main></el-main>
        </el-container>
        <el-footer></el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgList"
}
</script>

<style scoped>
.image-container{
  position: absolute;
  left: 0;
  right: 0;
  top:114px;
  bottom: 0;
}
.el-header, .el-footer {
  background-color: #fcfcfc;
  color: #333;
}
.options{

}
.el-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-footer{
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
}
.search{
  margin-left: 10px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  bottom: 60px;
  position: absolute;
  left: 0;
  top: 105px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  bottom: 60px;
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
}
</style>
