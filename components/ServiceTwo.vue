<template>
  <section class="pt-120 pb-120" id='permission'>
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-5">
                <!-- user ineract text -->
                <div class="user-interact-inner">
                    <div class="interact-icon">
                      <div class="spinner">
                        <div class="spinner1"></div>
                      </div>
<!--                        <img src="/assets/img/icons/solution1.svg" class="svg" alt="">-->
                    </div>
<!--                    <h2>Interact With Your Users On Every Single Platform</h2>-->
<!--                    <p>-->
<!--                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered-->
<!--                        alteration in some form,-->
<!--                        by injected humour.-->
<!--                    </p>-->
                  <div class="container">
                    <div class="box">
                      <span class="title">APK权限分析</span>
<!--                      <div>-->
                        <strong>应用所需的权限信息分析
                          包括 普通权限、敏感权限、危险权限
                          分析结果包括直观比例的 饼装图展示
                          各权限信息，包括权限名称、权限描述、权限类型、权限危险等级、权限所属组等信息 ...</strong>
                        <a href="#" class="btn">Get Started</a>
<!--                      </div>-->
                    </div>
                  </div>
                </div>
                <!--End of user ineract text -->
            </div>
            <div class="col-lg-7 col-sm-7">
                <!-- user interact image -->
                <div class="user-interact-image type2">
                    <img src="/assets/img/feature/user-interact2.png"  alt="">
                </div>
                <!-- End of user interact image -->
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        name: "ServiceTwo"
    }
</script>

<style scoped>
.container {
  transform: translateX(-30px);
  z-index: 9;
  position: relative;
  font-family: sans-serif;
}

.container::before, .container::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
}

.container::before {
  border-radius: 50%;
  width: 8rem;
  height: 6rem;
  top: 30%;
  right: 50%;
}

.container .box {
  width: 26em;
  height: auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: .7rem;
  transition: all ease .3s;
}

.container .box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .box .title {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: .2em
}

.container .box div strong {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
/*addNew*/
.spinner {
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 200px;
  height: 200px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 100px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
}

.spinner1 {
  background-color: rgb(36, 36, 36);
  width: 200px;
  height: 200px;
  border-radius: 100px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}
</style>
