<template>
  <div>
    <Seller :sell="seller"></Seller>
    <Goods></Goods>
  </div>
</template>

<script>
  import Seller from './components/seller/seller';
  import Footer from './components/footer/foote';
  import Goods from './components/goods/goods';

  var ERR_OK=0;


export default {
  name: 'App',
  data(){
    return {
      seller:{}
    }
  },
  components:{
    Seller,"v-Footer":Footer,Goods
  },
  created(){
    this.$https.get('http://localhost:8080/api/seller')
      .then(response => {
        console.log(response.data);
        if(response.data.errno === ERR_OK) {
          this.seller = response.data.data;
          console.log(this.seller);
        }
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
