<template>
  <section class="border-top pt-115 pb-80" id='behavior'>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8 col-md-12">
                      <!-- section title -->
                      <div class="section-title text-center">
                          <h2>APK行为分析、包信息</h2>
                          <p>包括Apk所涉及的电话、邮箱，获取通讯录、获取短信的<a href="https://blog.csdn.net/weiwan721/article/details/22932275" target="_blank" rel="noopener">行为分析</a>
                            <br>打包商、打包id、<a href="https://blog.csdn.net/zhangge3663/article/details/120128077" target="_blank" rel="noopener">加固方式</a>、
                            <a href="https://blog.csdn.net/qq409732112/article/details/109382336" target="_blank" rel="noopener">脱壳</a>后文件下载等...</p>
                      </div>
                      <!-- End of section title -->
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog1.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>30</span>Sep</p>
                              </div>
                          </div>
                          <!--/.End of  blog image -->

                          <!-- post content -->
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>1</span> Comment</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">Pre and Post Launch Mobile App Marketing Pitfalls to Avoid</nuxt-link></h3>
                                  </div>
                                  <p>There are many variations of passages of available but majority have alteration in some by inject humour or random
                                  words.</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog2.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>11</span>Sep</p>
                              </div>
                          </div>
                          <!--/.End of  blog image -->

                          <!-- post content -->
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>2</span> Comments</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">Nascetur Etiam tempus sit amet vestibulum quis variations.</nuxt-link></h3>
                                  </div>
                                  <p>There are many variations of passages of available but majority have alteration in some by inject
                                      humour or random
                                      words.</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog3.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>20</span>Nov</p>
                              </div>
                          </div>
                          <!--/.End of  blog image -->

                          <!-- post content -->
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>5</span> Comments</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">It is a long established fact that and reader will be distracted.</nuxt-link></h3>
                                  </div>
                                  <p>There are many variations of passages of available but majority have alteration in some by inject
                                      humour or random
                                      words.</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
    export default {
        name: "Behavior"
    }
</script>

<style scoped>

</style>
