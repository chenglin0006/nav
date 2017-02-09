require('es6-promise').polyfill();
import Vue from 'vue';
import App from '../../src/App.vue';
import VueRainbow from 'vue-rainbow';
import './index.less';
Vue.use(VueRainbow);

new Vue({
  el: 'body',
  components: {
    'app': App
  },
  data:function(){
  	return {
  		configData:[
  			{'navCat':'hotelType',
  			listData:[{'text':'不限类型',value:'不限酒店'},{'text':'星级酒店',value:'星级酒店'},{'text':'特色餐厅',value:'特色餐厅'}],
  			activeFilterText:'不限类型',
  			showFilterFlag:false},
  			{'navCat':'tables',
  			listData:[{'text':'不限桌数',value:'不限桌数'},{'text':'10桌以下',value:'10桌以下'},{'text':'10~20桌',value:'10~20桌'},{'text':'20桌以上',value:'20桌以上'}],activeFilterText:'10桌以下',showFilterFlag:false},
  			{'navCat':'isWeddingServiceNeed',listData:[{'text':'需要婚庆',value:true},{'text':'不需要婚庆',value:false}],activeFilterText:'需要婚庆',showFilterFlag:false}
  		]
  	}
  },
  methods:{
  	sureNavFun:function(list){
  		console.log(list);
  	}
  }
})
