<template>
  <div>
  <section class="pb-110" id='baseinfo'>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-12 col-lg-8">
                  <!-- section title -->
                  <div class="section-title text-center">
                      <h2>APK基本信息解析</h2>
                    <ul>
                      Apk基本信息分析，包括<a href="https://baike.baidu.com/item/MD5/212708" target="_blank" rel="noopener">MD5</a>、
                      <a href="https://blog.csdn.net/u011583927/article/details/80905740" target="_blank" rel="noopener">SHA256</a>、文件大小 、包名、版本信息 、程序入口等基本信息 ...
                    </ul>
<!--                      <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit lorem ipsum anim id est laborum perspiciatis unde.</p>-->
                  </div>
                  <!-- End of section title -->
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-12">
                  <div class="feature-carousel owl-carousel">

                    <swiper :options="swiperOptions">

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/project-management.svg" class="svg" alt=""></div>
                          <h5>编码解析<br>MD5、SHA256</h5>
                          <p>常见编码解析如MD5、SHA256等编码信息。</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/solution.svg" class="svg" alt=""></div>
                          <h5>文件大小<br> 基本信息展示</h5>
                          <p>APK最基本信息的解析展示</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/planning.svg" class="svg" alt=""></div>
                          <h5>版本信息</h5>
                          <p>APK的版本信息等解析...</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/goal.svg" class="svg" alt=""></div>
                          <h5>程序入口<br>解析APK的查询入口</h5>
                          <p>解析APK的查询入口</p>
                      </div><!-- End of single feature inner -->
                      </swiper-slide>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                  </div><!--/.feature-carousel-->
              </div><!--/.col-->
          </div><!--/.row-->
      </div><!--/.container-->
  </section>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "BaseInfo",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 3,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Responsive breakpoints
          breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2
            },
            320:{
                slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>
</style>
