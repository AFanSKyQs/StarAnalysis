export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
      { rel: "stylesheet", href: "/assets/css/custom.css" }
    ],
    script: [
      { src: "/assets/plugins/mediabox/mediabox.min.js", body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#f77ade',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  // css: [
  // ],
  css:[
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins:[
    '~/plugins/element-ui'
    // "~/plugins/axios"
  ],
  /*
** 跨域配置
*/
  devServer:{
    proxy:{
      ["/dev-api"]:{
        target:'http://localhost:8080',
        changeOrigin:true,
        pathRewrite: {
          ['^' + "/dev-ap"]: ''
        }
      }
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/proxy'
  ],
  /*
  ** Build configuration
  */
  build: {
    // vendor: ["axios"],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}


