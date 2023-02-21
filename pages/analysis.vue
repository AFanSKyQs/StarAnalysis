<template>
  <el-container style="height: 100%; border: 1px solid #36a3ce">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
        <button>
          <a href="/"><br>Back HOME</a>
          <span><a href="/">HOME </a> </span>
        </button>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Tom</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: rgba(255, 255, 255, 0.78);
  color: #333;
  height: 100%;
}
button {
  transform: translateX(350%);
  position: relative;
  text-decoration: none;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 48px;
  width: 160px;
  font-weight: bold;
  height: 55px;
  -webkit-box-reflect: bottom 1px linear-gradient(transparent, #0004);
}

button span {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 4px;
  right: 4px;
  bottom: 4px;
  left: 4px;
  text-align: center;
  background: #2E2E2E;
  color: rgba(255, 255, 255, 0.781);
  transition: 0.5s;
  z-index: 1;
}

button:hover span {
  color: rgba(255,255,255,1);
}
button::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: 400%;
  opacity: 0;
  transition: 0.5s;
  background: linear-gradient(45deg,#91155d,#525296,#0f0,#ff0,#fb0094,#00f,#0f0,#ff0);
  animation: animate123 20% linear infinte;
}

button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: 400%;
  filter: blur(20px);
  transition: 0.5s;
  background: linear-gradient(45deg,#91155d,#525296,#0f0,#ff0,#fb0094,#00f,#0f0,#ff0);
  animation: animate123 20% linear infinte;
}

button:hover::before,
button:hover::after {
  opacity: 1;
}

@keyframes animate123 {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 300% 0;
  }

  100% {
    background-position: 0 0;
  }
}

button span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(255,255,255,0.1);
}

</style>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
};
</script>
