<script src="//unpkg.com/vue@2/dist/vue.js" xmlns:margin="http://www.w3.org/1999/xhtml"></script>
<script src="//unpkg.com/element-ui@2.15.13/lib/index.js"></script>
<template>
<div>
  <div class="banner-area-inner">
    <div class="banner-inner-area banner-area1">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <!-- banner text -->
                    <div class="banner-text-inner">
                        <div class="banner-shape-wrap">
                            <div class="banner-shape-inner">
                                <img src="/assets/img/banner/shaps1.png" alt="" class='shape shape1 rotate3d'>
                                <img src="/assets/img/banner/shaps2.png" alt="" class='shape shape2 rotate2d'>
                                <img src="/assets/img/banner/shaps3.png" alt="" class='shape shape3 rotate-2d'>
                                <img src="/assets/img/banner/shaps4.png" alt="" class='shape shape4 rotate3d'>
                                <img src="/assets/img/banner/shaps5.png" alt="" class='shape shape5 rotate2d'>
                                <img src="/assets/img/banner/shaps6.png" alt="" class='shape shape6 rotate-2d'>
                                <img src="/assets/img/banner/shaps7.png" alt="" class='shape shape7 rotate3d'>
                            </div>
                        </div>
                        <h1>星探是一个Web端APK在线分析系统</h1>
                      <br>
                      <div class="card">
                        <div class="tools">
                          <div class="circle">
                            <span class="red box"></span>
                          </div>
                          <div class="circle">
                            <span class="yellow box">
                            </span>
                          </div>
                          <div class="circle">
                            <span class="green box"></span>
                          </div>
                        </div>
                        帮助你快速的在线分析apk信息，无需下载任何软件，即可分析apk的各种信息如权限、服务器、行为分析、包分析等...
                        <el-upload
                          class="upload-demo"
                          drag
                          action=""
                          multiple
                          ref="upload"
                          :auto-upload="false"
                          :on-change="changeDemoFile"
                          :limit=1
                          :on-exceed="handleExceed"
                          accept="application/apk,.apk"
                          :file-list="fileList"
                          :http-request="UploadApk"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                        >
                          <template #trigger>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">
                              选择上传文件或者 <em>拖入文件到此处</em><br>
                              只能上传apk文件，且大小不超过150MB
                            </div>
                          </template >
                          <div class="el-upload__text">
                            <el-button @click="UploadApk">开始上传</el-button>
                          </div>
                        </el-upload>
                        <div class="card__content">
                        </div>
                      </div>
<!--                        <p>帮助你快速的在线分析apk信息，无需下载任何软件，即可分析apk的各种信息如权限、服务器、行为分析、包分析等...</p>-->
                    </div>
                    <!-- banner text -->
                </div>
                <div class="col-lg-5 offset-lg-1 col-md-4 offse-xl-2">
                    <!-- banner image-->
                    <div class="banner-image">
                        <img src="/assets/img/banner/mockup.png" alt="">
                    </div>
                    <!--End of banner image-->
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import crypto from "crypto";
// import getMD5 from "../assets/UploadApk.js";
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    async UploadApk() {
      if(this.$refs.upload.uploadFiles.length === 0){
        this.$message.error('请先选择要上传的APK文件噢!');
        return
      }
      // 判断文件大小，大于150MB即不允许上传
      if (this.$refs.upload.uploadFiles[0].raw.size > 157286400) {
        this.$message.error('上传APK大小不能超过 150MB!');
        this.fileList = [];
        return
      }
      // 判断文件类型
      if (this.$refs.upload.uploadFiles[0].raw.type !== 'application/vnd.android.package-archive') {
        console.log(this.$refs.upload.uploadFiles[0].raw.type)
        this.$message.error('上传文件只能是 apk 格式!');
        // this.$refs.upload.uploadFiles.value =[];
        this.fileList = [];
      } else {
        let timeNow=Date.now()
        let UserID="用户ID还未定义"
        const formData = new FormData();
        const MD5 =await this.getMD5(this.$refs.upload.uploadFiles[0].raw)+""
        formData.append("file", this.$refs.upload.uploadFiles[0].raw);
        formData.append("md5", MD5);
        formData.append("timeStamp", timeNow);
        formData.append("userID", UserID);
        console.log("用户ID："+UserID+"\n"+"名字：" + this.$refs.upload.uploadFiles[0].raw.name+"\n"+"MD5："+MD5+"\n"+"大小：" + this.$refs.upload.uploadFiles[0].raw.size+"\n"+"类型：" + this.$refs.upload.uploadFiles[0].raw.type+"\n"+"现在时间戳："+timeNow)
        // 清空文件列表
        $.ajax({
          url: "http://localhost:8080/upload",
          type: "POST",
          data: formData,
          contentType: false,
          processData: false,
          success: function (data) {
            console.log("成功")
            console.log(data)
          },
          error: function (data) {
            console.log("失败")
            console.log(data)
          }
        });
        this.fileList = [];
        //   使用axios上传文件
        //     axios.post("http://localhost:8080/upload", formData, {
        //       headers: {
        //         'Content-Type': 'multipart/form-data'
        //       }
        //     }).then(res => {
        //       console.log(res)
        //     }).catch(err => {
        //       console.log(err)
        //     })
      }
    },
    handleSucess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    getMD5(data){
      function tOMD5(data) {
        return new Promise((resolve,reject) =>{
          let MD5
          let BufferData=""
          let reader = new FileReader();
          reader.readAsArrayBuffer(data);//files.raw这个是原始文件对象
          reader.onload = function(e) {
            try {
              let res = e.target.result;//ArrayBuffer
              BufferData = Buffer.from(res);//Buffer
               }catch (err) {
              MD5=""
              console.log("获取的MD5：",MD5)
              reject(err)
              return
            }
            MD5 = crypto.createHash('md5').update(BufferData, 'utf8').digest('hex');
            MD5 = MD5.toUpperCase();
            resolve(MD5)
        }
      })
      }
      return tOMD5(data).then((MD5) => {
          if (MD5.length === 0) {
            console.log('MD5_null');
            return 'MD5_null'
          }
          return MD5
        }).catch((err) => {
          console.log(err)
          return 'MD5_null'
        })
    },
    changeDemoFile(file,fileList){
      if (file.raw.type !== 'application/vnd.android.package-archive') {
        console.log(file.raw.type)
        this.$message.error('上传文件只能是 apk 格式!');
        this.fileList = [];
        fileList=[]
      }
      console.log(fileList)
    },
    handleExceed(file,fileList) {
    },
    async submitUpload() {
      if(this.$refs.upload.uploadFiles.length === 0){
        this.$message.error('请先选择要上传的APK文件噢!');
        return
      }
      console.log(this.$refs.upload.uploadFiles)
      // console.log("上传参数："+this.$refs)
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  }
}
</script>

<style scoped>
/*two*/
button {
  background-color: #e7fffe;
  margin: 0 auto;
  width: 14em;
  height: 3em;
  border-radius: 30em;
  font-size: 15px;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 6px 6px 12px rgb(157, 238, 175),
  -6px -6px 12px #48dec2;
}

button::before {
  content: '';
  width: 0;
  height: 3em;
  border-radius: 30em;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
  transition: .5s ease;
  display: block;
  z-index: -1;
}

button:hover::before {
  width: 14em;
}

.card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 105%;
  height: 100%;
  margin: 0 auto;
  background-color: #010f229e;
  border-radius: 9px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

</style>
