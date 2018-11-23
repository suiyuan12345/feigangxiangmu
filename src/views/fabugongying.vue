<template>
    <div>
        <div class="header">
            <div class="header_top">
                <div class="header_le">
                    <img src="../assets/image/zuojiantou.png" style="width: 16px;height: 16px">
                </div>
                <div class="header_mid">{{fabugongxu}}</div>
                <div class="header_ri">{{tijiao}}</div>
            </div>
            <div class="header_bottom">
                <div class="header_bottom_wen1">{{fabugongy}}</div>
                <div class="header_bottom_wen2">{{faxuqiu}}</div>
                <div class="header_bottom_wen3">{{fabuwuliu}}</div>
            </div>
        </div>
        <div class="bor"></div>
        <div class="box">
            <div class="box_1">
                <div class="box_1_le"><p>类别</p></div>
                <div class="box_1_mid">{{list}}</div>
                <div class="box_1_ri">
                    <img src="../assets/image/person/jinrujiantou.png" style="width:5px;height: 10px">
                </div>
            </div>
            <div class="box_1">
                <div class="box_1_le"><p>名称</p></div>
                <div class="box_1_mid">
                    <input style="border: 0px;outline: none;cursor: pointer" type="text" name="tname1" placeholder="请输入货物名称">
                </div>
            </div>
            <div class="box_1">
                <div class="box_1_le"><p>重量</p></div>
                <div class="box_1_mid">
                <input style="border: 0px;outline: none;cursor: pointer" type="text" name="tname2" placeholder="请输入货物重量（KG）">
                </div>
            </div>
            <div class="box_1">
                <div class="box_1_le"><p>单价</p></div>
                <div class="box_1_mid">
                <input style="border: 0px;outline: none;cursor: pointer" type="text" name="tnam3" placeholder="请输入货物单价（KG）">
                </div>
            </div>
            <div class="box_1">
                <div class="box_1_le"><p>选择地址</p></div>
                <div class="box_1_mid">
                <input style="border: 0px;outline: none;cursor: pointer" type="text" name="tname" placeholder="请选择地址">
                </div>
                <div class="box_1_ri">
                    <img src="../assets/image/person/jinrujiantou.png" style="width:5px;height: 10px">
                </div>
            </div>
            <div class="box_1">
                <div class="box_1_le"><p>详细地址</p></div>
                <div class="box_1_mid">
                <input style="border: 0px;outline: none;cursor: pointer" type="text" name="tname" placeholder="请输入详细地址">
                </div>
            </div>
            <div class="box_2">
                <div class="box_2_top"><p>上传图片</p></div>
                <div class="box_2_top_1">
                    <img src="../assets/image/home/07.png" >
                    <img src="../assets/image/home/08.png" >
                    <img src="../assets/image/home/07.png" >
                    <img src="../assets/image/home/08.png" >
                </div>
            </div>
            <div class="box_3">
                <div class="box_2_top"><p>介绍</p></div>
                <div class="box_2_top_2">
                <input style="float:left;border: 0px;outline: none;cursor: pointer" type="text" name="tname" placeholder="请简要阐述产品（限200字）">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fabugongying",
        data() {
            return {
                fabugongxu: '发布供需',
                tijiao: '提交',
                fabugongy: '发布供应',
                faxuqiu: '发布需求',
                fabuwuliu: '发布物流',
                list:'设备（旧）',
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 88px;
    }
 .header_top{
     width: 100%;
     height:44px;
     overflow: hidden;
     line-height: 44px;
     display: flex;
 }
    .header_mid{
        font-size: 16px;
        color: #333333;
        text-align: center;
        flex: 1;
    }
    .header_le{
        margin-left: 15px;
        height: 30px;
        order: -1;
        flex-basis: 8px;
 }
     .header_ri{
        font-size: 15px;
        color: #333333;
        margin-right: 15px;
       flex: 0;
         flex-basis: 30px;
    }
    .header_bottom{
        height: 44px;
        overflow: hidden;
        border-top:1px solid #e5e5e5;
    }
    .header_bottom_wen2{
        font-size: 14px;
        color:#999999;
        margin: 16px 0px;
        padding:0 158px;
        position: absolute;
    }
    .header_bottom_wen1{
        font-size: 15px;
        color: #ff8758;
        float: left;
        position: relative;
        margin:15px 0px 15px 30px;
    }
    .header_bottom_wen3{
        float: right;
        font-size: 14px;
        margin:16px 30px 16px 0px;
        position: relative;
        color: #999999;
    }
    .bor{
        height: 10px;
        background-color: #e5e5e5;
    }
    .box{
         }
    .box_1{
        height: 49px;
        margin: 0 15px;
        overflow: hidden;
        line-height: 49px;
        border-bottom: 1px solid #e5e5e5;
    }
    .box_1_le{
        font-size: 14px;
        color:#333333;
        float: left;

    }
    .box_1_le p{
        width: 56px;
        text-align: left;
    }
    .box_1_mid{
        font-size: 13px;
        color: #333333;
        float: left;
        margin-left: 48.5px;
    }
    .box_1_ri{
         float: right;
    }
    .box_1_ri img{

    }
    .box_2{
        margin: 0 15px;
        overflow: hidden;
        line-height: 49px;
        border-bottom: 1px solid #e5e5e5;
    }
    .box_2_top{
        font-size: 14px;
        color:#333333;
        text-align: left;
    }
    .box_2_top_1{

    }
    .box_2_top_1 img{
       width: 80px;
        height: 80px;
        margin-right: 5px;
    }
    .box_2_top_2{
      overflow: hidden;
    }
    .box_3{
        margin: 0 15px;
        overflow: hidden;
        line-height: 49px;
        
    }
</style>