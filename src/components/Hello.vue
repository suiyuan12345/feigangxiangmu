<template>
    <div style="background-image: linear-gradient( #a69db9, #a69db9)">
        <div class="header">
            <div class="header_le">
             <img src="../assets/logo.png" style="width: 58px;height: 58px">
                <div class="header_ri">
                    <div class="name">{{name}}</div>
                    <div class="per">个人印象：{{per}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hello",
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
 .header{
     height: 160px;
     background-image: linear-gradient(to right,#ffa666,#ffcf4c);
 }
    .header_le{
        margin-left: 17.5px;
        margin-top: 35px;
        width: 58px;
        height: 58px;
        overflow: hidden;
    }
    .header_ri{

    }
    .name{

    }
    .per{

    }
</style>