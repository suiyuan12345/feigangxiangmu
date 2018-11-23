<template >
    <div style="background-color: #d3d3d3">
        <div class="header">
            <div class="header_1">
               <div class="zuojiantou"><img src="../assets/image/zuojiantou.png" style="width: 16px;height: 16px"></div>
                <div class="list">
                    <div class="list_g">{{gongying}}</div>
                    <div class="list_x">{{xuqiu}}</div>
                </div>
            </div>
            <div class="header_2">
            <div class="header_2_sousuo" input v-model="sousuo" placeholder="搜索">
                <div class="photo_1">
                    <img src="../assets/image/search/search_icon.png" >
                </div>
                <div class="header_2_sousuo_wen">{{sousuo}}</div>
            </div>
            </div>
            <div class="header_3">
                <div class="header_3_le">
                    <p>时间排序</p>
                    <img src="../assets/image/search/xia.png">
                </div>
                <div class="header_3_ri">
                    <p>距离排序</p>
                    <img src="../assets/image/search/xia.png">
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box_top" v-for="item in list" >
                <div class="box_top_top" >
                <div class="box_top_top_1">
                    <div class="box_top_top_1_le">{{item.biaoti}}</div>
                    <div class="box_top_top_1_ri">{{item.dunshu}}</div>
                </div>
                <div class="box_top_top_2">{{item.neirong}}</div>
                <div class="box_top_top_3">
                    <img src="../assets/image/home/07.png">
                    <img src="../assets/image/home/07.png">
                    <img src="../assets/image/home/08.png">
                </div>
                </div>
                <div class="box_top_bottom">
                <div class="gongyingsh">
                     <img src="../assets/image/service/shangjia.png">
                    <div>
                        供应商：{{item.gongsi}}
                    </div>
                </div>
                <div class="gongyingsh">
                        <img src="../assets/image/service/shijian.png">
                    <div>
                        发布时间：{{item.time}}
                    </div>
                </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    // @ is an alias to /src

    export default {
        name: 'gongyingliebiao',
        data(){
            return{
             gongying:'供应列表',
                xuqiu:'需求列表',
                sousuo:'搜索',

                list:[{
                    biaoti: '运送20吨废旧钢铁',
                    neirong: '废旧钢铁出售，供200吨，质量上乘，价格公道，童叟无欺！要的赶快联系我',
                    dunshu: '共200吨',
                    gongsi: '青岛钢材有限公司',
                    time: '2018-09-27',

                },
                    {
                        biaoti: '运送20吨废旧钢铁',
                        neirong: '废旧钢铁出售，供200吨，质量上乘，价格公道，童叟无欺！要的赶快联系我',
                        dunshu: '共200吨',
                        gongsi: '青岛钢材有限公司',
                        time: '2018-09-27',
                    },
                    {
                        biaoti: '运送20吨废旧钢铁',
                        neirong: '废旧钢铁出售，供200吨，质量上乘，价格公道，童叟无欺！要的赶快联系我',
                        dunshu: '共200吨',
                        gongsi: '青岛钢材有限公司',
                        time: '2018-09-27',
                    },
                    {
                        biaoti: '运送20吨废旧钢铁',
                        neirong: '废旧钢铁出售，供200吨，质量上乘，价格公道，童叟无欺！要的赶快联系我',
                        dunshu: '共200吨',
                        gongsi: '青岛钢材有限公司',
                        time: '2018-09-27',
                    },
                ],
            }

        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 132px;
    }
    .header_1{
        height: 44px;
        background-color: #ffffff;
        line-height: 44px;
    }
    .zuojiantou{
        margin: 14px 0px 14px 15px;
        top:-15px;
        height: 30px;
        float: left;
        overflow: hidden;
        position: relative;
    }
    .list{
        width: 160px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border:solid 1px #ff8758;
        text-align: center;
        margin: 7px auto;
    }
    .list_g{
        width: 80px;
        height: 30px;
        background-color: #ff8758;
        font-size: 13px;
        color: #ffffff;
        text-align: center;
        float: left;
        overflow: hidden;
        line-height: 30px;
    }
    .list_x{
        width: 80px;
        height: 30px;
        float: right;
        background-color: #ffffff;
        font-size: 13px;
        color:  #ff8758;
        text-align: center;
        overflow: hidden;
        line-height: 30px;
        border-radius: 5px;
    }
    .header_2{
        height: 44px;
        background-color: #ffffff;
        line-height:44px;
        border:1px solid #e5e5e5;
    }
    .header_2_sousuo{
        margin: 8px 7.5px 8px 10px;
        height: 28px;
       background-color: #eeeeee;
        border-radius: 14px;
    }
    .photo_1{

    }
    .photo_1 img{
        height: 15px;
        float: left;
        overflow: hidden;
        position: relative;
        margin:6.5px 0px 6.5px 0.5px;
            }
    .header_2_sousuo_wen{
        float: left;
        overflow: hidden;
        position: relative;
        margin-top:-8px;
        margin-left: 10px;
        font-size: 12px;
        color: #999999;
    }
    .header_3{
        height: 44px;
        background-color: #ffffff;
    }
    .header_3_le{
        margin-top:15px ;
        margin-left: 64.5px;
        float: left;
        overflow: hidden;
    }
    .header_3_le p{
        float: left;
        overflow: hidden;
        font-size: 15px;
        color: #ff8758;
    }
     .header_3_le img{
         float: left;
         overflow: hidden;
         width: 6px;
         height: 5px;
         margin: 12px 0px 12px 3px;
         position: relative;
     }
    .header_3_ri{
        margin-top:15px;
        margin-right:64.5px;
        float: right;
        overflow: hidden;
        position: relative;
    }
    .header_3_ri p{
        float: left;
        overflow: hidden;
        font-size: 15px;
        color: #999999;
    }
    .header_3_ri img{
        float: left;
        overflow: hidden;
        width: 6px;
        height: 5px;
        margin: 12px 0px 12px 3px;
        position: relative;
    }
    .box{
          margin: 10px;
    }
    .box_top{
         background-color: white;
        box-shadow: 0px 6px 20px 0px
        rgba(102, 102, 102, 0.21);
        border-radius: 5px;
    }
    .box_top_top{
        border-bottom: solid 1px #d8d8d8;
        overflow: hidden;
    }
    .box_top_top_1{
    }
    .box_top_top_1_le{
        margin-top:14.5px;
        font-size:16px;
        float: left;
        color: #333333;
        margin-left: 14.5px;
    }
    .box_top_top_1_ri{
        margin-top:14.5px;
         font-size: 14px;
        color:#e4394c;
        float: right;
        overflow: hidden;
        position: relative;
        margin-right: 14.5px;
    }
    .box_top_top_2{
        float: left;
        overflow: hidden;
        color: #666666;
        font-size: 14px;
        margin-top:7.5px;
        margin-left: 14.5px;
        text-align: left;

    }
    .box_top_top_3{

    }
    .box_top_top_3 img{
         width: 100px;
        margin-left: 10px;
        margin-top: 11px;
        height: 100px;
        float: left;
        border-radius: 2px;
        margin-bottom: 16px;
    }
    .box_top_bottom{
       margin-bottom: 10px;
        padding-bottom: 13px;
    }
    .gongyingsh{
        margin-left: 14.5px;
        display: flex;
        font-size: 13px;
        color: #666666;
        margin-top: 15px;
    }
    .gongyingsh img{
        width: 15px;
        height: 15px;
        color: #ff8758;
        margin-right: 6px;
    }

</style>