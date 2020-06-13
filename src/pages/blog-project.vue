<template>
  <div class="homepage">

    <common-header></common-header>
    <!-- Wrapper-->
    <div id="wrapper">

      <!-- Nav -->
      <nav id="nav" class="pro-table">
        <a href="#me" class="fa fa-home active"><span>Home</span></a>
        <a href="#sso" class="fa fa-lock"><span>AntSSO</span></a>
        <a href="#engine" class="fa fa-flash"><span>AntEngine</span></a>
        <a href="#common" class="fa fa-arrows"><span>AntCommon</span></a>
        <a href="#case" class="fa fa-code"><span>AntCase</span></a>
      </nav>

      <!-- Main -->
      <div id="main">

        <!-- Me -->
        <article id="me" class="panel">
          <header>
            <h1>小蚂蚁的项目列表</h1>
            <div class="project-item">
              <a href="#two">Ant SSO 安全框架</a>
              <a href="#work">Ant Engine 数据同步引擎</a>
              <a href="#email">Ant Case 案例</a>
              <a href="#">Ant Common 公共组件包</a>
            </div>

          </header>
          <a href="#home" class="jumplink pic">
            <img :src="pic+'pic2.png'" alt=""/>
          </a>
        </article>
        <!-- Me -->
        <article id="sso" class="panel pro-item">
          <header>
            <h1>Ant SSO Security</h1>
            <span class="byline">一个基于SpringSecurity 的安全框架 ,扩展多种登录方式</span>
          </header>
          <a href="https://github.com/black-ant/antsso" class="jumplink pic" target="_blank">
            <img :src="pic+'vign3.jpg'" alt=""/>
            <div class="right">
              <div class="content">
                <p>基于 Spring Boot ,Spring Security</p>
                <p>1 账号密码登录</p>
                <p>2 验证码登录</p>
                <p>3 互联网认证 : 钉钉 ,微信 ... </p>
                <p>4 人脸识别 </p>
              </div>
              <div class="github" href="#">点击去Github查看详情</div>
            </div>
          </a>
        </article>

        <!-- Work -->
        <article id="engine" class="panel pro-item">
          <header>
            <h1>Ant Engine</h1>
            <span class="byline">一个数据传输引擎 , 数据清洗 ,高效写入</span>
          </header>
          <a href="https://github.com/black-ant/expengine" class="jumplink pic" target="_blank">
            <img :src="pic+'vign4.jpg'" alt=""/>
            <div class="right">
              <div class="content">
                <p>基于 Spring Boot ,Spring Security</p>
                <p>1 账号密码登录</p>
                <p>2 验证码登录</p>
                <p>3 互联网认证 : 钉钉 ,微信 ... </p>
                <p>4 人脸识别 </p>
              </div>
              <div class="github" href="#">Github 查看详情</div>
            </div>

          </a>
        </article>

        <article id="common" class="panel pro-item">
          <header>
            <h1>Ant Common</h1>
            <span class="byline">包含平台常用的Common包 ,快速开发脚手架</span>
          </header>
          <a href="https://github.com/black-ant/common" class="jumplink pic" target="_blank">
            <img :src="pic+'vign9.jpg'" alt=""/>
            <div class="right">
              <div class="content">
                <p>基于 Spring Boot ,Spring Security</p>
                <p>1 账号密码登录</p>
                <p>2 验证码登录</p>
                <p>3 互联网认证 : 钉钉 ,微信 ... </p>
                <p>4 人脸识别 </p>
              </div>
              <div class="github" href="#">Github 查看详情</div>
            </div>
          </a>

        </article>

        <!-- Email -->
        <article id="case" class="panel pro-item">
          <header>
            <h1>Ant Case</h1>
            <span class="byline">常见案例 , Demo 实践 , 内容超出你的想象</span>
          </header>
          <a href="https://github.com/black-ant/case" class="jumplink pic" target="_blank">
            <img :src="pic+'vign10.jpg'" alt=""/>
            <div class="right">
              <div class="content">
                <p>常见的Demo</p>
                <p>案例百宝箱</p>
              </div>
              <div class="github" href="#">Github 查看详情</div>
            </div>
          </a>
        </article>

      </div>
    </div>
  </div>


</template>
<style scoped>


  @import "../assets/css/common-style.css";
  @import "../assets/project/css/style.css";
  @import "../assets/project/css/style-desktop.css";

  /* Self Style*/

  #me heade {
    width: 50%;
  }

  #me .project-item {
    position: absolute;
    left: 0;
    bottom: 24%;
    width: 46%;
    margin: 0;
  }

  #me .project-item a {
    display: inline-block;
    width: 93%;
    margin: 0;
    background: none;
    color: #222;
    padding: 8px 20px;
    font-size: 10px;
    line-height: 1.5;
    border-radius: 6px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid #222;
    margin: 10px 0px;
    transition: all 1000ms cubic-bezier(0.23, 1, 0.32, 1);
    margin-bottom: 0;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    font-family: 'Ubuntu', sans-serif;
  }

  .pro-item .right .github {
    display: inline-block;
    width: 93%;
    margin: 0;
    background: none;
    color: #222;
    padding: 8px 20px;
    font-size: 10px;
    line-height: 1.5;
    border-radius: 6px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid #222;
    margin: 40px 0px 0 0;
    transition: all 1000ms cubic-bezier(0.23, 1, 0.32, 1);
    margin-bottom: 0;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    font-family: 'Ubuntu', sans-serif;
  }

  .pro-item .right .content p {
    color: #222;
    width: 66%;
    text-align: left;
    float: right;
    margin-bottom: 10px;
  }

  #main .pro-item img {
    width: 30%;
    float: left;
  }

</style>
<script>

  import {antUtils} from "../assets/js/ant/ant-utils";
  import commonHeader from '@/components/commonHeader'
  import {antFlush} from "../assets/js/ant/ant-flush";

  export default {
    name: "blog-project",
    data() {
      return {
        pic: "/static/project/images/"
      }
    },
    components: {
      commonHeader
    },
    mounted: function () {
      antUtils.buildScript("/static/project/js/html5shiv.js");
      antUtils.buildScript("/static/project/js/skel.min.js");
      antUtils.buildScript("/static/project/js/init.js");

      antFlush.flushHeader();
    },
  }


</script>




