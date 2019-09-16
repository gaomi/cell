<template>
  <div class="goods-body first-foods" ref="mainWrapper">
    <div class="left-goods" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in foodlist" class="li-meun" :key="index"
            :class="currentIndex === index ? 'current' : ''">
           <span class="text">
             <span v-show="item.type>0">*</span>
             {{item.name}}
           </span>
        </li>
      </ul>
    </div>
    <div class="right-goods" ref="foodsWrapper">
      <ul>
        <li v-for="goods in foodlist" class="goods-wrapper calc-height">
          <div class="goods-style">{{goods.name}}</div>
          <ul>
            <li v-for="food in goods.foods" class="food-wrapper">
              <div class="food-icon">
                <img class="item-icon" :src="food.image">
              </div>
              <div class="food-desc">{{food.name}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "item_a",
    data() {
      return {
        foodlist: [],
        heightList: [],
        scrollY: 0,
        mainHeight: 0
      }
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.heightList.length; i++) {
          let height1 = this.heightList[i];
          let height2 = this.heightList[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    }
    ,
    mounted() {
      let mainWrapper = this.$refs.mainWrapper;
      this.mainHeight = Math.round(mainWrapper.clientHeight / 2);
    }
    ,
    created() {
      this.$https.get('http://localhost:8091/api/goods')
        .then(response => {
          if (response.data.errno === _const.ERR_OK) {
            this.foodlist = response.data.data;
            this.$nextTick(() => {
              this._initScroll();
              this._calcHeight();
            });
          }
        })
    },
    methods: {
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs['menuWrapper'], {});
        this.foodScroll = new BScroll(this.$refs['foodsWrapper'], {
          probeType: 3
        });
        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y)) + this.mainHeight;
        });
      },
      _calcHeight() {
        let height = 0;
        this.heightList.push(height);
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('calc-height');
        for (let i = 0; i < foodList.length; i++) {
          height += foodList[i].clientHeight;
          this.heightList.push(height);
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .first-foods
    overflow hidden
    font-size: 15px
    display: flex

    .left-goods
      flex: 0 1 100px

      .li-meun
        display table
        width: 100px
        height 45px
        text-align center
        font-size 10
        background: rgba(224, 224, 224, 0.8)

        &.current
          background: rgba(224, 224, 224, 0.2)
          font-weight 700

        .text
          display: table-cell
          vertical-align: middle
          padding 0 10px

    .right-goods
      flex: 1

      .goods-style
        height 35px

      .food-wrapper
        display flex
        width 100%
        height 60px

        .food-icon
          flex 0 1 70px

          .item-icon
            width 50px
            height 50px

        .food-desc
          flex 1

</style>
