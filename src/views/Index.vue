<template>
  <div>
    <el-row :gutter="20" >
      <el-col :span="getCol(showList.length)" v-for="(item,index) in showList" :key="index">
        <el-card class="box-card" shadow="never">
          <div class="shop-data">
            <div class="icon-card" :style="{color: 'white',background: item.color}">
              <i :class="item.icon"></i>
            </div>
            <div class="show-num">
              <span class="num">{{item.num}}</span>
              <span class="title">{{item.title}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--店铺商品及提示-->
    <el-row :gutter="20" >
      <el-col :span="12">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>店铺及商品提示</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要关注的店铺信息及处理事项</el-button>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="6" class="message">
                <div class="item">
                  <p class="num">64</p>
                  <p class="title">出售中</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <!--交易提示-->
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>交易提示</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要立即处理的交易订单</el-button>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="4" class="message">
                <div class="item">
                  <p class="num">64</p>
                  <p class="title">出售中</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <!--数据图-->
      <el-col :span="12" >
        <el-card style="height: 375px" shadow="never">
          <div id="shopCharts" ref="shopCharts"></div>
        </el-card>
      </el-col>
    </el-row>
    <!--销售情况统计-->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card >
          <div slot="header" class="clearfix">
            <span>销售情况统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">按周期统计商家店铺的订单量和订单金额</el-button>
          </div>
          <div class="statistics">
            <div class="yesterday">
              <div class="title">
                昨日销售
              </div>
              <div class="money">
                <div class="amount">
                  amount
                </div>
                <div class="count">
                  count
                </div>
              </div>
            </div>
            <div class="month">
              <div class="title">
                本月销售
              </div>
              <div class="money">
                <div class="amount">
                </div>
                <div class="count">
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card >
          <div slot="header" class="clearfix">
            <span>单品销售排行</span>
            <el-button style="float: right; padding: 3px 0" type="text">按周期统计商家店铺的订单量和订单金额</el-button>
          </div>
          <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                prop="date"
                label="商品信息">
            </el-table-column>
            <el-table-column
                prop="name"
                label="销量"
                width="180">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: "Index",
  data(){
    return{
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
      }, {
        date: '2016-05-02',
        name: '王小虎',
      }, {
        date: '2016-05-04',
        name: '王小虎',
      }, {
        date: '2016-05-01',
        name: '王小虎',
      }, {
        date: '2016-05-08',
        name: '王小虎',
      }, {
        date: '2016-05-06',
        name: '王小虎',
      }, {
        date: '2016-05-07',
        name: '王小虎',
      }],
      showList:[
        {
          num:'60',
          title:'关注人数(个)',
          color:'blue',
          icon:'el-icon-user-solid'
        },
        {
          num:'120',
          title:'订单总数(笔)',
          color:'green',
          icon:'el-icon-user-solid'
        },
        {
          num:'4183.80',
          title:'今日订单总金额(元)',
          color:'red',
          icon:'el-icon-user-solid'
        },
        {
          num:'100',
          title:'本月销量(笔)',
          color:'yellow',
          icon:'el-icon-user-solid'
        },

      ]
    }
  },
  mounted() {
      let shopCharts=echarts.init(this.$refs.shopCharts);
      let option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      shopCharts.setOption(option)
  },
  methods:{
    getCol(length) {
      if (length !== 0) {
        return 24 / length;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.box-card{
  display: flex;
  align-items: center;
}
.shop-data{
  display: flex;
}
.el-card{
  margin-top: 10px;
}
.message{
   height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  .item{
    width: 80%;
    height: 80%;
    background: #eceeef;
    .num{
      font-size: large;
      text-align: center;
      margin-top: 3px;
      font-weight: bold;
    }
    .title{
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
    }
  }
  .item:hover{
    cursor: pointer;
    opacity: 0.9;
  }
}
.show-num{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55px;
  margin-left: 10px;
  .num{
    font-size: large;
  }
  .title{
    font-size: 12px;
    color: #c3c3c6;
  }
}
.icon-card{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}
#shopCharts{
  width: 500px;
  height:300px;
}
.statistics{
  .yesterday,.month{
    display: flex;
    width: 100%;
    height: 60px;
    .title{
      width: 20%;
      height: 100%;
      line-height: 60px;
      text-align: center;
      border: 1px solid #e8e8e8;
      background: #f0f0f3;
    }
    .money{
      width: 80%;
      display: flex;
      flex-direction: column;
      border: 1px solid #e8e8e8;
      height: 100%;
      .amount,.count{
        height: 50%;
        padding-left: 10px;
        border-bottom: 1px solid #E9EEF3;
      }
    }
  }
  .month{
    margin-top: 20px;
  }
}
</style>
