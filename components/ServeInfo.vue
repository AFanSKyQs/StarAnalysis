<template>
  <section class="pt-120 pb-110 bg-2" id="ServeInfo">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-8">
                      <div class="testimonial-author-arousel text-center">
                          <div class="testimonial-author-inner">
                              <div class="author-carousel">
                                <swiper :options="swiperOptions">
                                  <swiper-slide>
                                    <div class="single-author-imge">
                                        <img src="/assets/img/feature/author3.png" alt="">
                                    </div>
                                  </swiper-slide>
                                  <swiper-slide>
                                    <div class="single-author-imge">
                                        <img src="/assets/img/feature/author2.png" alt="">
                                    </div>
                                  </swiper-slide>
                                  <swiper-slide>
                                    <div class="single-author-imge">
                                        <img src="/assets/img/feature/author1.png" alt="">
                                    </div>
                                  </swiper-slide>
                                </swiper>
                              </div>
                          </div>
                      </div>

                      <div class="testimonial-author-comment text-center">
                          <div class="author-comment-carousel">

                            <swiper :options="swiperOptions">

                              <swiper-slide>
                                <div class="single-author-comment">
                                    <h4>信息1<br>信息1</h4>
                                    <p>描述？</p>
                                </div>
                              </swiper-slide>

                              <swiper-slide>
                                <div class="single-author-comment">
                                  <h4>信息2<br>信息2</h4>
                                  <p>描述？</p>
                                </div>
                              </swiper-slide>

                              <swiper-slide>
                                <div class="single-author-comment">
                                  <h4>信息3<br>信息3</h4>
                                  <p>描述？</p>
                                </div>
                              </swiper-slide>
                              <div class="swiper-button-prev" slot="button-prev"></div>
                              <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

    export default {
      name: "ServeInfo",
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
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>
