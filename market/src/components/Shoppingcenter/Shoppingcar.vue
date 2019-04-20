<template>
<div class="container clearfix">
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="png" label="商品" width="460">
        <template slot-scope="scope">
          <div class="y-left img">
            <img width="100px" height="100px" :src="scope.row.png" alt="">
          </div>
          <div class="y-left text">
            <p class="commodityName">{{scope.row.name}}</p>
            <p class="commodityParticulars">爱上春天的味道</p>
          </div>
        </template>
    </el-table-column>
    <el-table-column align="center" prop="price" label="价格" width="197">
       <template slot-scope="scope">
            <span class="price">￥{{scope.row.price}}</span>
        </template>
    </el-table-column>
    <el-table-column align="center" prop="num" label="数量" width="357">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.num" :min="1" label="描述文字"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作" width="120">
      <template slot-scope="scope">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="total-price y-right clearfix">
      <h3>订单合计</h3>
      <p>商品数量总计：<span class="y-right">{{num}}</span></p>
      <p>总计：<span class="y-right">￥{{columnTotal}}</span></p>
      <button class="btn">
        <router-link to="/market">
          继续购物
        </router-link>
      </button>
      <button class="btn y-right">
        <router-link to="/flowpath/orderinformation">
          结算
        </router-link>
      </button>
    </div>
</div>
</template>

<script>
import png from 'common/images/banner/1.jpg'
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  },
  data () {
    return {
      img: null,
      id: null,
      tableData: [{
        png: png,
        name: '西美糕',
        price: 20,
        num: 1
      }]
    }
  },
  mounted () {
  },
  computed: {
    columnTotal () {
      return this.tableData.map(row => row.price * row.num).reduce((acc, cur) => (cur + acc), 0)
    },
    num () {
      return this.tableData.map(row => row.num).reduce((acc, cur) => (cur + acc), 0)
    }
  },
  watch: {
    tableData () {
      console.log(this.tableData)
    }
  }
}
</script>

<style lang="stylus" scoped>
.img
    width 100px
    height 100px
    overflow hidden
.text
  margin-left 30px
  margin-top 20px
  .commodityName
    line-height 2
    font-weight 600
    font-size 20px
    color #4f4f4f
  .commodityParticulars
    height 20px
    line-height 20px
    color #e9004f
.price
    color #e3004f
    font-weight 600
    font-size 20px

.total-price
    width 340px
    margin-right 16px
    h3,p
        height 40px
        line-height 40px
        border-bottom 1px solid #ccc
.btn
    width 80px
    height 30px
    border 0
    background #de5356
    margin-top 20px
    color #fff
    a
        color #fff
</style>
