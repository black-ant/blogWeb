<template>
  <div>
    <common-header></common-header>
    <div class="bs-example">
      <!-- Bottom to top-->
      <div class="row">
        <div class="col-sm-12">
          <!-- normal -->
          <div class="col-sm-3 ih-item square effect10 bottom_to_top">
            <a href="#">
              <div class="img"><img :src="pic+'logo-footer.png'" alt="img"></div>
              <div class="info">
                <h3>Heading here</h3>
                <p>Description goes here</p>
              </div>
            </a>
          </div>
          <div class="col-sm-8 doclist-content">
            <div class="doclist-title">项目名称</div>
            <div class="doclist-desc">项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述</div>
            <div class="doclist-taglist">
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
            </div>
          </div>
          <!-- end normal -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <!-- normal -->
          <div class="col-sm-3 ih-item square effect10 bottom_to_top">
            <a href="#">
              <div class="img"><img :src="pic+'logo-footer.png'" alt="img"></div>
              <div class="info">
                <h3>Heading here</h3>
                <p>Description goes here</p>
              </div>
            </a>
          </div>
          <div class="col-sm-8 doclist-content">
            <div class="doclist-title">项目名称</div>
            <div class="doclist-desc">项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述</div>
            <div class="doclist-taglist">
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
            </div>
          </div>
          <!-- end normal -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <!-- normal -->
          <div class="col-sm-3 ih-item square effect10 bottom_to_top">
            <a href="#">
              <div class="img"><img :src="pic+'logo-footer.png'" alt="img"></div>
              <div class="info">
                <h3>Heading here</h3>
                <p>Description goes here</p>
              </div>
            </a>
          </div>
          <div class="col-sm-8 doclist-content">
            <div class="doclist-title">项目名称</div>
            <div class="doclist-desc">项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述</div>
            <div class="doclist-taglist">
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
            </div>
          </div>
          <!-- end normal -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <!-- normal -->
          <div class="col-sm-3 ih-item square effect10 bottom_to_top">
            <a href="#">
              <div class="img"><img :src="pic+'logo-footer.png'" alt="img"></div>
              <div class="info">
                <h3>Heading here</h3>
                <p>Description goes here</p>
              </div>
            </a>
          </div>
          <div class="col-sm-8 doclist-content">
            <div class="doclist-title">项目名称</div>
            <div class="doclist-desc">项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述</div>
            <div class="doclist-taglist">
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
            </div>
          </div>
          <!-- end normal -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <!-- normal -->
          <div class="col-sm-3 ih-item square effect10 bottom_to_top">
            <a href="#">
              <div class="img"><img :src="pic+'logo-footer.png'" alt="img"></div>
              <div class="info">
                <h3>Heading here</h3>
                <p>Description goes here</p>
              </div>
            </a>
          </div>
          <div class="col-sm-8 doclist-content">
            <div class="doclist-title">项目名称</div>
            <div class="doclist-desc">项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述,项目描述</div>
            <div class="doclist-taglist">
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
              <div class="doclist-tagitem">Spring</div>
            </div>
          </div>
          <!-- end normal -->
        </div>
      </div>
    </div>
  </div>


</template>

<script>

  import CommonHeader from "../components/commonHeader";

  export default {
    name: "blog-doclist",
    components: {CommonHeader},
    data() {
      return {
        pic: "/static/docs/images/"
      }
    },
  }
</script>

<style scoped>
  @import "../assets/css/common-style.css";
  @import "../assets/doclist/css/main.css";
  @import "../assets/doclist/css/default.css";
  @import "../assets/doclist/css/normalize.css";

  .bs-example {
    width: 100%;
    background: #EFEFEE;
  }

  .bs-example .row {
    background-color: #ffffff;
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 14px;
    padding-bottom: 1em;
    padding-top: 1em;
  }
</style>
