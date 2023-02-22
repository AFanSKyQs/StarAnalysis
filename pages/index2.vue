<template>
  <div>
    <NavTwo />
    <BannerTwo />
    <BaseInfo />
    <Counter />
<!--    <ServiceOne />-->
    <ServiceTwo />
<!--    <Video />-->
    <Screenshots />
<!--    <Pricing />-->
    <Testimonial />
    <ClientsLogo />
    <BlogHome />
    <DownloadApp />
    <Footer />
  </div>

</template>
<script>
  import NavTwo from "../components/NavTwo";
  import BannerTwo from "../components/BannerTwo";
  import Footer from "../components/Footer";
  import BaseInfo from "../components/BaseInfo.vue";
  import Counter from "../components/Counter";
  import ServiceTwo from "../components/ServiceTwo";
  // import ServiceOne from "../components/ServiceOne";
  // import Video from "../components/Video";
  import Screenshots from "../components/Screenshots";
  // import Pricing from "../components/Pricing";
  import Testimonial from "../components/ServeInfo.vue";
  import ClientsLogo from "../components/ClientsLogo";
  import BlogHome from "../components/BlogHome";
  import DownloadApp from "../components/UploadApk.vue";
  export default {
    components: {
      DownloadApp,
      BlogHome,
      ClientsLogo,
      Testimonial,
      // Pricing,
      Screenshots,
      // Video,
      // ServiceOne,
      ServiceTwo,
      Counter,
      BaseInfo,
      Footer,
      BannerTwo,
      NavTwo
    },
    head(){
      return {
        title: "HOME 2 | 星探 - Web端APK在线分析系统"
      }
    }
  }
</script>
