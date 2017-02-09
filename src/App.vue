<template>
  <section>
    <div class="filter-div" :class="{'show-filter':showFilterContent}">
      <div class="filter" v-for="(index,item) in config"  @click="showFilterContentFun(index,item)">
          <div class="item" :class="{'active':item.showFilterFlag}">
              <div class="filter-text">{{item.activeFilterText}}</div>
              <i class="icon icon-down"></i>
              <i class="mask"></i>
              <i class="icon icon-active"></i>
          </div>
          <div class="filter-content" v-show="showFilterContent&&item.showFilterFlag">
              <div class="main">
                <ul>
                  <li class="item" :class="{'active':ele.text==item.activeFilterText}" v-for="(index,ele) in item.listData" @click="selectItemFun(ele,$event)">{{ele.text}}
                  </li>
                </ul>
              </div>
          </div>
      </div>
    </div>
    <div class="mask-div" v-show="showFilterContent" @click="hideFilterContentFun"></div>
  </section>
</template>
<style lang="less" scoped>
@import url('./less/util');
@import url('./less/border');
@import url('./less/tool');
ul{
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.filter-div{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    font-size: 14px;
    color: #111111;
    z-index: 20;
    background-color: white;
    display: flex;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    .filter{
        text-align: center;
        background-color: #fff;
        flex:1;
        box-flex: 1;
        -webkit-box-flex: 1;
        -ms-box-flex: 1;
        -ms-flex: 1;
        padding-bottom: 12px;
        padding-top: 12px;
        line-height: 20px;
        background-color: white;
        z-index: 11;
        &:last-child{
          .item{
            border-right: none;
            .borderline(none);
            background-image: none;
          }
        }
        .borderline(#e1e1e1,bottom);
        .filter-text{
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          max-width: 90px;
          vertical-align: bottom;
        }
        .item{
          // .borderline(#e1e1e1,right);
          // border-right: solid 1px #e1e1e1;
          background-image: url(//www.dpfile.com/mod/app-m-style/2.9.4/css/img/repeat-y.png);
          background-repeat: repeat-y;
          background-position: top right;
          background-size: auto 1px;
          line-height: 20px;
          color: #111111;
          font-size: 14px;
          position: relative;
          z-index: 11;
            .mask{
                display: none;
            }
            .icon-active{
                display: none;
                z-index: 11;
            }
            &:last-child{
                .borderline(none);
            }
            .icon-down{
                display: inline-block;
                width: 13px;
                height: 8px;
                background: url('./img/down-arrow.png') no-repeat top left;
                background-size: cover;
            }
        }
    }

    .filter-content{
        width: 100%;
        height: 100%;
        z-index: 10;
        .main{
            background: white;
            padding-bottom: 45px;
            position: fixed;
            left: 0;
            right: 0;
            z-index: 11;
            top: 44px;
            li{
                line-height: 45px;
                .borderline(#e1e1e1,bottom);
                // border-bottom: 1px solid #e1e1e1;
                font-size: 14px;
                margin-left: 12px;
                &.active{
                    color: #f7871f;
                    .borderline(#f7871f,bottom);
                    // border-bottom: 1px solid #f7871f;
                }
            }
        }
        .item{
          padding-top: 0;
          padding-bottom: 0;
          text-align: left;
        }
    }
}
.mask-div{
    height: 100%;
    background: #000000;
    opacity: 0.3;
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    bottom:0;
}

.filter-div.show-filter{
    .filter .item{
        &.active .mask{
            display: block;
            width: 10px;
            height: 2px;
            background-color: white;
            position: absolute;
            bottom: -12px;
            left: 50%;
            z-index: 11;
            margin-bottom: -1px;
        }
        &.active .icon-active{
            display: inline-block;
            width: 10px;
            height: 5px;
            background-image: url('./img/arrow-item-active.png');
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            bottom: -12px;
            left: 50%;
            margin-bottom: -1px;
        }
        &.active .icon-down{
            background-image: url('./img/up-arrow.png');
        }
    }
}
</style>
<script>
    export default{
        data(){
            return{
                activeNavList:this.config[0],
                showFilterContent:false
            }
        },
        props:['config'],
        components:{
            
        },
        ready() {
        },
        methods:{
          showFilterContentFun: function(index,item){
              this.showFilterContent = true;
              this.activeNavList = this.config[index];
              this.config.forEach(function(ele,index){
                 ele.showFilterFlag = false;
                 if(ele.navCat == item.navCat){
                    ele.showFilterFlag = true;
                 }
              });
          },
          selectItemFun: function(item,event){
              event.preventDefault();
              event.stopPropagation();
              var self = this;
              self.activeNavList.listData.forEach(function(ele,index){
                  if(ele.text == item.text){
                    self.activeNavList.activeFilterText = item.text;
                    self.activeNavList.activeFilterValue = item.value;
                    return;
                  }
              });
              self.showFilterContent = false;
              self.fetchData();
          },
          hideFilterContentFun: function(){
              this.showFilterContent = false;
          },
          fetchData: function(){
              var activeList=[];
              this.config.forEach(function(item,index){
                  item.listData.forEach(function(ele,index){
                    if(ele.text == item.activeFilterText){
                       activeList.push(ele.value);
                    }
                  });
              });
              this.$emit('surenav',activeList);
          }
        }
    }
</script>
