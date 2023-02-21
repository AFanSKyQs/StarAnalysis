<template>
  <div>
    <NavOne />
    <BannerOne/>
    <BaseInfo />
    <Counter />
<!--    <ServiceOne />-->
    <ServiceTwo />
<!--    <Video />-->
    <Screenshots />
<!--    <Pricing />-->
    <ServeInfo />
    <ClientsLogo />
    <BlogHome />
    <UploadApk />
    <Footer />
  </div>

</template>
<script>
  import NavOne from "../components/NavOne";
  import BannerOne from "../components/BannerOne";
  import Footer from "../components/Footer";
  import BaseInfo from "../components/BaseInfo.vue";
  import Counter from "../components/Counter";
  import ServiceTwo from "../components/ServiceTwo";
  // import ServiceOne from "../components/ServiceOne";
  // import Video from "../components/Video";
  import Screenshots from "../components/Screenshots";
  // import Pricing from "../components/Pricing";
  import ServeInfo from "../components/ServeInfo.vue";
  import ClientsLogo from "../components/ClientsLogo";
  import BlogHome from "../components/BlogHome";
  import UploadApk from "../components/UploadApk.vue";
  export default {
    components: {
      UploadApk,
      BlogHome,
      ClientsLogo,
      ServeInfo,
      // Pricing,
      Screenshots,
      // Video,
      // ServiceOne,
      ServiceTwo,
      Counter,
      BaseInfo,
      Footer,
      BannerOne,
      NavOne
    }
  }
</script>
