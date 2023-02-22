<template>
    <div>
      <footer class="footer">
          <div class="footerbg">
          <img src="/assets/img/footer-bg.png" alt="">
          </div>
          <div class="footer-top pt-120 pb-110">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-sm-6">
                          <!-- footer widget -->
                          <div class="footer-widget">
                              <div class="footer-logo">
                                  <a href="/"><img src="/assets/img/logo.png" alt=""></a>
                              </div>
                              <p>Lorem ipsum dolor sit ame consy ect etur adipisc de elit. Quisque act raqum nunc no dolor sit de
                                  amet.</p>
                              <!-- footer social area -->
                              <div class="footer-social-area">
                                  <ul class="social-icons social-icons-light nav">
                                      <li><a href="#" target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                                      <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                      <li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                  </ul>
                              </div>
                              <!-- End of footer social area -->
                          </div>
                          <!--End of footer widget -->
                      </div>

                      <div class="col-lg-3 col-sm-6">
                          <div class="footer-widget">
                              <!-- widget header -->
                              <div class="widget-header">
                                  <h5>Our Address</h5>
                              </div>
                              <!-- widget header -->
                              <div class="widget-body">
                                  <ul class="address-list">
                                      <li>
                                          <span><i class="fa  fa-phone-square"></i></span>
                                          123 456 7890
                                      </li>
                                      <li>
                                          <span><i class="fa  fa-envelope"></i></span>
                                        im-5210@tom.com
                                      </li>
                                      <li>
                                          <span><i class="fa  fa-map"></i></span>
                                          855 road, broklyn street,
                                          new york 600
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                          <div class="footer-widget">
                              <!-- widget header -->
                              <div class="widget-header">
                                  <h5>Extra Links</h5>
                              </div>
                              <!-- widget header -->
                          </div>

                          <div class="widget-body">
                              <div class="extra-link">
                                  <div class="link-left">
                                      <ul>
                                          <li><a href="#">关于</a></li>
                                          <li><a href="#">我们团队</a></li>
                                          <li><a href="#">Features</a></li>
                                          <li><a href="#">博客</a></li>
                                          <li><a href="#">How It Works</a></li>
                                      </ul>
                                  </div>
                                  <div class="link-right">
                                      <ul>
                                          <li><a href="#">Help</a></li>
                                          <li><a href="#">Support</a></li>
                                          <li><a href="#">Clients</a></li>
                                          <li><a href="#">Blog</a></li>
                                          <li><a href="#">Contact</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-3 col-sm-6">
                          <div class="footer-widget">
                              <div class="widget-body">
                                  <div class="twetter-post-inner">
                                      <div class="footer-post-details">
                                          Tips-小提示窗口 <br><a href="http://localhost:3000/">跳转的链接</a>
                                      </div>
                                      <div class="twetter-post">
                                          <span><i class="fa fa-twitter"></i></span>
                                          StarAnalysis - 2023
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="footer-text text-center">
                  <p>© copyright 2023 by StarAnalysis<br><br>{{date}}</p>
              </div>
          </div>

      </footer>

      <!-- back to top -->
      <div @click="scrollTop" :class="`back-to-top ${scrollBtn ? 'show' : ''}`">
          <a href="#"><i class="fa fa-chevron-up"></i></a>
      </div>

    </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false,
          date: new Date()
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll); // 监听滚动事件
        let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
          _this.date = new Date(); // 修改数据date
        }, 1000)
      },
      beforeDestroy() {
        if (this.timer) {
          clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
      },
      methods: {
        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
            window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>
