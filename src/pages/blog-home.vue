<template>

  <!-- Wrapper -->
  <div id="wrapper">
    <common-header></common-header>
    <!-- Content -->
    <div id="content">
      <div id="content-inner">

        <!-- Post -->

        <article class="is-post is-post-excerpt" v-for="docItem in docList" :key="docItem.id">
          <header>
            <h2><a href="#">{{docItem.contentTitle}}</a></h2>
            <span class="byline">A free, fully responsive HTML5 site template by HTML5 UP</span>
          </header>
          <div class="info">
            <span class="date"><span class="month">Jan<span>uary</span></span> <span class="day">14</span><span
              class="year">, 2013</span></span>
            <ul class="stats">
              <li><a href="#" class="fa fa-comment">16</a></li>
              <li><a href="#" class="fa fa-heart">32</a></li>
              <li><a href="#" class="fa fa-twitter">64</a></li>
              <li><a href="#" class="fa fa-facebook">128</a></li>
            </ul>
          </div>
          <a href="#" class="image image-full"><img :src="pic+'pichome02.jpg'" alt=""/></a>
          <p>
            <strong>Hello!</strong> You're looking at <a href="http://html5up.net/striped/">Striped</a>, a fully
            responsive HTML5 site template designed by <a href="http://n33.co/">AJ</a>
            for <a href="http://html5up.net/">HTML5 UP</a> It features a clean, minimalistic design, styling for all
            basic page elements (including blockquotes, tables and lists), a
            repositionable sidebar (left or right), and HTML5/CSS3 code designed for quick and easy customization (see
            code comments for details).
          </p>
          <p>
            Striped is released for free under the <a href="http://html5up.net/license/">Creative Commons Attribution
            license</a> so feel free to use it for personal projects
            or even commercial ones &ndash; just be sure to credit <a href="http://html5up.net/">HTML5 UP</a> for the
            design. If you like what you see here, be sure to check out
            <a href="http://html5up.net/">HTML5 UP</a> for more cool designs or follow me on <a
            href="http://twitter.com/n33co">Twitter</a> for new releases and updates.
          </p>
          <hr/>
        </article>

        <!-- Pager -->
        <div class="pager">
          <!--<a href="#" class="button previous">Previous Page</a>-->
          <div class="pages" v-for="n in pages.total">
            <a href="#" :class="pages.current==n?'active':''">{{n}}</a>
          </div>
          <a href="#" class="button next">Next Page</a>
        </div>

      </div>
    </div>

    <!-- Sidebar -->
    <div id="sidebar">

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current_page_item"><a href="#">最新文档</a></li>
          <li><a href="#">最热文档</a></li>
          <li><a href="#">点赞最多</a></li>
        </ul>
      </nav>

      <!-- Search -->
      <section class="is-search">
        <form method="post" action="#">
          <input type="text" class="text" name="search" placeholder="Search(暂不支持)"/>
        </form>
      </section>

      <!-- 文档模块 -->
      <section class="is-recent-posts">
        <header>
          <h2>闲文</h2>
        </header>
        <ul>
          <li><a href="#">如何弄好一个博客?</a></li>
          <li><a href="#">如何分析源码?</a></li>
        </ul>
      </section>

      <!-- 热门文章 -->
      <section class="is-recent-comments">
        <header>
          <h2>系列合集</h2>
        </header>
        <ul>
          <li><a href="#"> Spring Boot 系列</a></li>
          <li><a href="#"> Spring Security 系列</a></li>
          <li><a href="#"> Spring Cloud 系列</a></li>
          <li><a href="#"> Cache Redis 系列</a></li>
          <li><a href="#"> 查看更多...</a></li>
        </ul>
      </section>

      <!-- Calendar -->
      <section class="is-calendar">
        <div class="inner">
          <table>
            <caption>February 2013</caption>
            <thead>
            <tr>
              <th scope="col" title="Monday">M</th>
              <th scope="col" title="Tuesday">T</th>
              <th scope="col" title="Wednesday">W</th>
              <th scope="col" title="Thursday">T</th>
              <th scope="col" title="Friday">F</th>
              <th scope="col" title="Saturday">S</th>
              <th scope="col" title="Sunday">S</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td colspan="4" class="pad"><span>&nbsp;</span></td>
              <td><span>1</span></td>
              <td><span>2</span></td>
              <td><span>3</span></td>
            </tr>
            <tr>
              <td><span>4</span></td>
              <td><span>5</span></td>
              <td><a href="#">6</a></td>
              <td><span>7</span></td>
              <td><span>8</span></td>
              <td><span>9</span></td>
              <td><a href="#">10</a></td>
            </tr>
            <tr>
              <td><span>11</span></td>
              <td><span>12</span></td>
              <td><span>13</span></td>
              <td class="today"><a href="#">14</a></td>
              <td><span>15</span></td>
              <td><span>16</span></td>
              <td><span>17</span></td>
            </tr>
            <tr>
              <td><span>18</span></td>
              <td><span>19</span></td>
              <td><span>20</span></td>
              <td><span>21</span></td>
              <td><span>22</span></td>
              <td><a href="#">23</a></td>
              <td><span>24</span></td>
            </tr>
            <tr>
              <td><a href="#">25</a></td>
              <td><span>26</span></td>
              <td><span>27</span></td>
              <td><span>28</span></td>
              <td class="pad" colspan="3"><span>&nbsp;</span></td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>


    </div>

  </div>

</template>

<style scoped>
  @import "../assets/css/common-style.css";

  hr {
    border: 1px dashed #d2d1d1;
    padding: 0;
    margin: 6em 0 0 0;
  }


</style>

<script>

  import {antUtils} from "../assets/js/ant/ant-utils";
  import {restApi} from "../assets/js/restApi";
  import {antFlush} from "../assets/js/ant/ant-flush";
  import CommonHeader from "../components/commonHeader";

  export default {
    name: "blog-home",
    components: {CommonHeader},
    data() {
      return {
        pic: "/static/home/images/",
        bodyClass: 'left-sidebar',
        docList: {},
        pages: {
          display: 10,
          total: 5,
          current: 2
        }
      }
    },
    methods: {
      refushDocList(backData) {

        // 数据渲染
        this.docList = backData.records;

        // 处理分页
        this.pages.total

      }
    },
    mounted: function () {
      document.getElementsByTagName("body")[0].className = "left-sidebar";

      antUtils.buildScript("/static/home/js/skel.min.js");
      antUtils.buildScript("/static/home/js/skel-panels.min.js");
      antUtils.buildScript("/static/home/js/init.js");

      antUtils.buildCss("http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,700|Open+Sans+Condensed:300,700");
      antFlush.flushHeader();

      // --> 加载文档
      restApi.getDocList(0, this.refushDocList);



    },
    beforeDestroy() {
      document.body.removeAttribute("class", "left-sidebar");
    },
  }
</script>
