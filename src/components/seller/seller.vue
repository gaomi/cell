<template>

      <div class="hearder-wrapper">
          <div class="content-wrapper">
              <div class="avatar">
                <img width="64" height="64" :src="sell.avatar">
              </div>
                <div class="desc">{{sell.avatar}}</div>
                <div class="bullet" @click="showDate">2个</div>
            </div>
        <div class="gongao-wrapper" >{{sell.avatar}}</div>
        <div class="fixe-body" v-show="showFixe">
          <div class="close-div">
            <div class="close-model"  @click="closeDate">X</div></div>
        </div>
      </div>
      <!--<div>-->
        <!--<img :src="seller.avatar"/>-->
      <!--</div>-->
</template>

<script>
    export default {
      name: "seller",
      props: {
        sell:{
          type:Object
        }
      },
      data(){
        return {
            showFixe:false
        }
      },
      methods:{
        showDate(){
          this.showFixe = true;
        },
        closeDate(){
          this.showFixe = false;
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .hearder-wrapper
      padding-top :30px
      width : 100%
      height: 120px
      background : #999
      .content-wrapper
        height:90px
        padding-left :30px
        .avatar
          display inline-block
        .desc
          vertical-align :top
          overflow: hidden
          text-overflow: ellipsis
          display inline-block
          width :200px
          height :90px
        .bullet
          position :absolute
          right :20px
          top:50px
          background :#666
          width :50px
          height :24px
          border-radius 6px


      .gongao-wrapper
        overflow :hidden
        text-overflow :ellipsis
        margin-bottom 0px
        width 100%
        height 30px
        background #666


      .fixe-body
        position fixed
        top :0px
        width: 100%
        bottom :0px
        background :rgba(0,0,0,0.7)
        z-index :10
        .close-div
          position :absolute
          bottom :20px
          width :100%
          .close-model
            margin :auto
            width :28px
            height :28px
            background-color :#0ff







</style>
