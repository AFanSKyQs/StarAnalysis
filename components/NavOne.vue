<template>
  <header class="header">
          <!-- Start Header Navbar-->
      <div :class="`main-header ${sticky ? 'sticky fadeInDown' : ''}`">
          <div class="main-menu-wrap">
              <div class="container">
                  <div class="row align-items-center">
<!--                      <div class="col-xl-1 col-lg-4 col-md-10 col-6">-->
                          <!-- Logo -->
                          <div class="logo">
                              <nuxt-link to="/">
                                  <img src="/assets/img/logo.png" alt="StarAnalysis">
                              </nuxt-link>
                          </div>
                          <!-- End of Logo -->
<!--                      </div>-->
                      <div class="col-xl-9 col-lg-6 col-md-4 col-6 menu-button">
                          <div class="menu--inner-area clearfix">
                              <div class="menu-wraper">
                                  <nav>
                                      <!-- Header-menu -->
                                      <div class="header-menu dosis">

                                        <div id="menu-button" class="">
                                          <i class="fa fa-bars"></i>
                                        </div>
                                          <ul class="main-nav">
                                            <li><nuxt-link to="/index2">HOME 2</nuxt-link></li>
<!--                                              <li><a href="#" class="active">HOME</a>-->
<!--&lt;!&ndash;                                            class="active"><nuxt-link to="/">HOME</nuxt-link>&ndash;&gt;-->
<!--                                                  <ul>-->
<!--                                                    <li><a href="#" class="active">HOME-1</a></li>-->
<!--&lt;!&ndash;                                                      <li class="active"><nuxt-link to="/">HOME-1</nuxt-link></li>&ndash;&gt;-->
<!--                                                      <li><nuxt-link to="/index2">HOME-2</nuxt-link></li>-->
<!--                                                  </ul>-->
<!--                                              </li>-->
                                              <li><a href="#baseinfo">基本信息</a></li>
                                              <li><a href="#permission">权限分析</a></li>
                                              <li><a href="#CertificationAndSDK">调证和SDK</a></li>
                                            <li><a href="#ServeInfo">服务器信息</a></li>
                                            <li><a href="#behavior">行为分析</a></li>
<!--                                              <li><a href="#">行为分析</a>-->
<!--                                                  <ul>-->
<!--                                                      <li><nuxt-link to="/blog">Blog Posts</nuxt-link></li>-->
<!--                                                      <li><nuxt-link to="/blog-details">single Post</nuxt-link></li>-->
<!--                                                  </ul>-->
<!--                                              </li>-->
                                          </ul>
                                      </div>
                                      <!-- End of Header-menu -->
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-1 col-md-4 col-sm-5 d-md-block d-none">
                          <div class="urgent-call text-right">
                             <a href="#" class="btn">To Analysis</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- End Header Navbar-->
  </header>
</template>

<script>
    export default {
      name: "NavOne",
      data(){
        return {
          sticky: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);

        this.mobileMenu();
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.sticky = true
          }
          else if (window.scrollY < 70) {
            this.sticky = false
          }
        },

        mobileMenu() {
            //Mobile Menu Toggle
            let mainNavToggler = document.querySelector("#menu-button");
            let mainNav = document.querySelector(".main-nav");

            mainNavToggler.addEventListener("click", function () {
                //mainNavToggler.classList.add('menu-opened');
                mainNav.style.display = ( (mainNav.style.display !== "block" ? "block" : "none" ) );
            });
        }

      }
    }
</script>

<style scoped>

</style>
