<template>
  <div id="global-wrapper">
    <common-header></common-header>

    <main id="content">
      <header class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
            </div>
          </div>
        </div>
      </header>

      <section class="pt pb-medium">

        <div class="container">
          <div class="row">
            <div class="col-md-8">

              <article class="post box light-color mb">
                <div class="row">

                  <div class="post-pic col-sm-4 col-md-4 mb-xs">
                    <a href="blog-post.html"><img :src="pic+'logo-footer.png'" alt="" class="responsive"/></a>
                  </div>
                  <div class="col-sm-8 col-md-8">

                    <h2>Spring Boot文集</h2>
                    <ul class="entry-meta">
                      <li class="entry-date">
                        <a href="#">2020-06-13</a>
                      </li>
                      <li class="entry-category">
                        <a data-original-title="View all posts in Featured" class="tips" href="#"
                           title="">文集</a>
                      </li>
                      <li class="entry-author">
                        <a data-original-title="View all posts by admin" class="tips" href="#" title="">Gang</a>
                      </li>
                      <li class="entry-comments">
                        <i class="icon-comment"></i>No Comments
                      </li>
                    </ul>
                    <p>SpringBoot 文档合集: </p>
                    <p class="doc_content_item"> 1 Spring 常用案例 </p>
                    <p class="doc_content_item"> 2 Spring 源码分析 </p>
                    <a href="#" class="btn small border readme">查看详情</a>

                  </div>
                </div>

              </article>


              <article class="post box light-color mb">
                <div class="row">

                  <div class="post-pic col-sm-4 col-md-4 mb-xs">
                    <a href="blog-post.html"><img :src="pic+'logo-footer.png'" alt="" class="responsive"/></a>
                  </div>
                  <div class="col-sm-8 col-md-8">

                    <h2>Apero CAS 文集</h2>
                    <ul class="entry-meta">
                      <li class="entry-date">
                        <a href="#">2020-06-13</a>
                      </li>
                      <li class="entry-category">
                        <a data-original-title="View all posts in Featured" class="tips" href="#"
                           title="">文集</a>
                      </li>
                      <li class="entry-author">
                        <a data-original-title="View all posts by admin" class="tips" href="#" title="">Gang</a>
                      </li>
                      <li class="entry-comments">
                        <i class="icon-comment"></i>No Comments
                      </li>
                    </ul>
                    <p>CAS 文档合集: </p>
                    <p class="doc_content_item"> 1 Spring 常用案例 </p>
                    <p class="doc_content_item"> 2 Spring 源码分析 </p>
                    <a href="#" class="btn small border readme">查看详情</a>

                  </div>
                </div>

              </article>

              <ul class="pagination">
                <li><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">»</a></li>
              </ul>
            </div>
            <!-- Sidebar -->
            <aside class="col-md-4">
              <section class="widget">
                <h1><span>My Docs</span>文档类型集合</h1>
                <p>保存自己工作生活中积累的知识书文档 , 用于记录和分享.</p>
              </section>

              <section class="widget">
                <h3>Popular</h3>
                <nav class="sidebar-menu">
                  <ul>
                    <li><a href="#">SpringBoot源码梳理</a></li>
                    <li><a href="#">SpringSecurity源码梳理</a></li>
                    <li><a href="#">ApereoCAS技术梳理</a></li>
                    <li><a href="#">项目运维快查手册</a></li>
                    <li><a href="#">SQL快查手册</a></li>
                  </ul>
                </nav>
              </section>
              <!--              <section class="widget">-->
              <!--                <h3>Archives</h3>-->
              <!--                <nav class="sidebar-menu">-->
              <!--                  <ul>-->
              <!--                    <li><a href="#">March 2014</a></li>-->
              <!--                    <li><a href="#">September 2011</a></li>-->
              <!--                    <li><a href="#">July 2011</a></li>-->
              <!--                    <li><a href="#">June 2011</a></li>-->
              <!--                  </ul>-->
              <!--                </nav>-->
              <!--              </section>-->
              <section class="tag-cloud">
                <h3>Category</h3>
                <a href="#" class="w2">Spring</a>
                <a href="#" class="w1">Linux</a>
                <a href="#" class="w3">CA</a>
                <a href="#" class="w3">SSO</a>
                <a href="#" class="w1">面经</a>
                <a href="#" class="w2">设计</a>
                <a href="#" class="w2">思路</a>
                <a href="#" class="w1">前端</a>
                <a href="#" class="w3">UI</a>
                <a href="#" class="w2">测试</a>
              </section>
            </aside>
          </div><!-- row -->
        </div><!-- container -->
      </section>
    </main>
    <!-- content -->

  </div>
</template>

<script>

  import CommonHeader from "../components/commonHeader";
  import {antUtils} from "../assets/js/ant/ant-utils";
  import {restApi} from "../assets/js/restApi";
  import {antFlush} from "../assets/js/ant/ant-flush";
  export default {
    name: "blog_docs",
    components: {CommonHeader},
    data() {
      return {
        pic: "/static/docs/images/"
      }
    },
    mounted: function () {
      document.getElementsByTagName("body")[0].className = "activate-appear-animation header-7";

      antUtils.buildCss("http://fonts.googleapis.com/css?family=Ubuntu:400,700");
      antUtils.buildCss("/static/docs/custom-icons.css");
      antUtils.buildCss("/static/docs/neko-framework/external-plugins/external-plugins.min.css");
      antUtils.buildCss("/static/docs/neko-framework/css/layout/neko-framework-layout.css");
      antUtils.buildCss("/static/docs/neko-framework/css/color/neko-framework-color.css");

      antFlush.flushHeader();

    }, beforeDestroy() {
      document.body.removeAttribute("class", "activate-appear-animation header-7");
    },
  }
</script>

<style scoped>
  @import "../assets/css/common-style.css";

  .post .readme {
    float: right;
  }
</style>
