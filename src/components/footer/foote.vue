<template>
  <div class="foot-wrapper">
    <div class="food-desc">
      <div class="icon-wrapper">
        <div class="icon-car"></div>
        <div class="food-count" :class="getFoodCount > 0 ? 'count-show' : ''">
          {{getFoodCount}}
        </div>
      </div>
      <div class="sum-count">还差￥{{chaCount-sumCount}}</div>
    </div>
    <div class="food-account" :class="getaccount ? 'to-account' : ''">￥{{sumCount}}</div>
  </div>
</template>

<script>
  export default {
    name: "foote",
    data() {
      return {
        sumCount: 27,
        foodsList: [],
        chaCount: 40
      }
    },
    computed: {
      getaccount() {
        if (this.chaCount - this.sumCount < 0) {
          return true;
        } else
          return false;
      },getFoodCount() {
        console.log(this.foodsList.length);
          return this.foodsList.length;
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .foot-wrapper
    position absolute
    bottom 0px
    width 100%
    height 60px
    display flex

    .food-desc
      padding-left 100px
      line-height 60px
      flex 1
      background #999

      .icon-wrapper
        position absolute
        left 30px
        bottom 0px
        background #999
        width 70px
        height 70px
        border-radius 35px

        .icon-car
          position absolute
          left 10px
          bottom 10px
          background #666
          width 50px
          height 50px
          border-radius 35px

        .food-count
          display none
          position absolute
          top 0px
          right 0px
          width 25px
          height 18px
          border-radius 6px
          background brown
          color #fff
          text-align center
          line-height 18px
          &.count-show
            display block


    .food-account
      flex 0 1 120px
      line-height 60px
      text-align center
      background #666

      &.to-account
        background chocolate

</style>
