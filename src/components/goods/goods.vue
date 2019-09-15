<template>
  <div class="goods">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/itemA">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/itemB">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/itemC">商家</router-link>
      </div>
    </div>
     <router-view class="goods-body" :goods="goodsData"></router-view>
  </div>
</template>

<script>

    export default {
        name: "goods",
      props: {
        seller:{
          type:Object
        }
      },
      data(){
          return {
            goodsData:{}
          }
      },
    created(){
      this.$https.get('http://localhost:8080/api/seller')
        .then(response => {
          console.log(response.data);
          if(response.data.errno === _const.ERR_OK) {
            this.goodsData = response.data.data;
          }
        })
    }
    }
</script>

<style scoped>
  .router-link-active{
    color: #0ff;
  }

  .goods{
    position: absolute;
    bottom: 60px;
    width: 100%;
    top: 150px;
  }
  .tab{
    width: 100%;
    height: 40px;
  }
  .tab{
    display: flex;
    line-height: 40px;
  }
  .tab-item{
    flex: 1;
    text-align: center
  }
  .tab-item > a{
    display: block;
  }

</style>
