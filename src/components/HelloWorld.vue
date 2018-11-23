<template xmlns="http://localhost:8080/#/">
    <div class="quan">
        <div class="header">
            <div class="box">
             <div class="photo1"><img src="../assets/logo.png" style="width: 59.5px;height: 59.5px"></div>
                <div class="box_r">
                    <div class="name">{{ name}}</div>
                    <div class="per">个人印象:{{per}}</div>
                </div>
            </div>
        </div>
        <div class="xinxi">
            <div class="phone">
                <img src="../assets/image/person/dianhua.png" style="width: 14px;height: 11px;margin-right: 3px">
                {{phone}}
            </div>
            <div class="mail">
                <img src="../assets/image/person/youxiang.png" style="width: 11.5px;height: 9px;margin-right: 3px">
                {{mail}}</div>
            <div class="address">
                <img src="../assets/image/person/didian.png" style="width: 12px;height: 12px;;margin-right: 3px">
                {{address}}</div>
        </div>
        <div class="pro">
          <div  class="cell">
               <img src="../assets/image/person/pengyouquan.png" style="width: 15px;height: 15px;">
              <div>
                  <p>{{myxiao}}</p>
                  <span style="float:right;"><img src="../assets/image/person/jinrujiantou.png" style="width: 15px;height: 15px;"></span>
              </div>

          </div>
            <div class="cell" >
                <img src="../assets/image/person/bangong.png" style="width: 15px;height: 15px;">
                <div><p>{{chengwei}}</p>
                    <span style="float:right;"> <img src="../assets/image/person/jinrujiantou.png" style="width: 15px;height: 15px;"></span></div>
            </div>
            <div class="cell" >
                <img src="../assets/image/person/bianji.png" style="width: 15px;height: 15px;">
                <div>
                <p>{{myfa}}</p>
                <span style="float:right;"><img src="../assets/image/person/jinrujiantou.png" style="width: 15px;height: 15px;"></span></div>
            </div>
            <div class="cell" >
                <img src="../assets/image/person/wuliu.png" style="width: 15px;height: 15px;">
              <div> <p>{{mywuliu}}</p>
                <span style="float:right;"><img src="../assets/image/person/jinrujiantou.png" style="width: 15px;height: 15px;"></span></div>
            </div>
            <div class="cell" >
                <img src="../assets/image/person/shoucang.png" style="width: 15px;height: 15px;">
                <div><p>{{myshou}}</p>
                <span style="float:right;"><img src="../assets/image/person/jinrujiantou.png" style="width: 15px;height: 15px;"></span></div>
            </div>
            <div class="cell" >
                <img src="../assets/image/person/mima.png" style="width: 15px;height: 15px;">
                <div><p>{{xiugai}}</p>
                <span style="float:right;"><img src="../assets/image/person/jinrujiantou.png" style="width: 15px;height: 15px;"></span></div>
            </div>
        </div>
        <div class="menu">
         <div class="menu_wen">
             <img src="../assets/image/footer/home.png" style="width: 20px;height: 20px;">
             <div>{{shouye}}</div>
         </div >
            <div class="menu_wen">
                <img src="../assets/image/footer/huoche.png" style="width: 20px;height: 20px;">
              <div>{{xiaohuoche}}</div>
            </div>
            <div class="menu_wen">
                <img src="../assets/image/footer/fabu.png" style="width: 20px;height: 20px;">
                <div>{{fabu}}</div>
            </div>
            <div class="menu_wen">
                <img src="../assets/image/footer/shangmen.png" style="width: 20px;height: 20px;">
                <div>{{shangmen}}</div>
            </div>
            <div class="menu_wen">
                <img src="../assets/image/footer/gerenS.png" style="width: 20px;height: 20px;">
                <div>{{geren}}</div>
            </div>
        </div>
    </div>
    </template>
<script>
    export default {
        name :"HelloWorld",
        data(){
            return{
               white:"white",
                orange:"orange",
                name:'王二狗',
                per:'旅游达人，豁达',
                phone:'18212341234',
                mail:'ganggang@123.com',
                address:'青岛市市南区株洲路1101号',
                myxiao:'我的小火车',
                chengwei:'成为服务商',
                myfa:'我的发布',
                mywuliu:'我的物流',
                myshou:'我的收藏',
                xiugai:'修改密码',
                shouye:'首页',
                xiaohuoche:'小火车',
                fabu:'发布',
                shangmen:'上门服务',
                geren:'个人中心',
            }
        }
    }

</script>
<style scoped>
    .cell {
        height: 53px;
        overflow: hidden;
        text-align: left;
    }
    .cell>div {
        overflow: hidden;
        margin-left: 20px;
        height: 52px;
        border-bottom: 1px solid gray;
    }
    .cell img {
        float: left;
        margin-top: 18px;

    }
    .cell p {
        float: left;
        margin-top: 15px;

    }
    .cell span {
        float: right;
        margin-top: 20px;
    }
    .quan{
        padding: 0;
        margin: 0;
        background-image: linear-gradient(#a69db9,#a69db9);
        background-blend-mode: normal,normal;
    }
    .header{
        width: 100%;

    }
    .box{
        background-image: linear-gradient(#ffa666,#ffcf4c);
        height: 113px;
    }
    .photo1{
        float: left;
        margin-left: 18px;
        margin-top: 15px;
        overflow: hidden;
        width: 58px;
        height: 58px;
        border-radius: 70%;
    }
    .box_r{
        float: left;
        margin-left: 11px;
        margin-top: 25px;
    }
    .name{
        font-size: 16px;
        float: left;
        position: relative;
        overflow: hidden;
        width: 100%;
        color: #ffffff;
    }
    .per{
        font-size: 14px;
        float: left;
        position: relative;
        margin-top: 10px;
        color:white;
    }
    .xinxi{
        margin:-15px 12px 10px;
        background-color: white;
        box-shadow: 0px 6px 20px 0px  rgba(102, 102, 102, 0.21);
        border-radius: 20px;
        text-align: center;
        overflow: hidden;
        padding: 0 0 10px 0;
    }
    .phone{
         margin-left: 20px;
        margin-top: 20px;
        float: left;
        color: #666666;
        overflow: hidden;
    }
    .mail{
        margin-left: 20px;
        margin-top: 20px;
        float: left;
        color: #666666;
        overflow: hidden;
    }
    .address{
        margin-left: 20px;
        margin-top: 15px;
        float: left;
        color: #666666;
        overflow: hidden;
    }
    .pro{
        position: relative;
        margin:0 13px;
        background-color: white;
        padding: 0 11px 0 16px;
        border-radius: 20px;
        overflow: hidden;
    }

    .menu{
        height: 49px;
       float: left;
        position: relative;
        overflow: hidden;
    }
    .menu_wen{
      float: left;
        margin-top: 9px;
        margin-left: 27px;
        overflow: hidden;
        font-size: 11px;
    }
</style>