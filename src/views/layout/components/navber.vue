<template>
  <div class="navber">
    <!-- Menu 打开关闭按钮 -->
    <div class="sidebar-isopen">
      <icon
        @click.native="toggleMenu()"
        :class="{'is-active':!this.menuState}"
        iconName="menu-state"
      ></icon>
    </div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <transition-group
        name="list-complete"
      >
        <!-- 面包屑对象 -->
        <el-breadcrumb-item
          v-for="item in levelList"
          :key="item.path"
          :to="item.path"
          class="list-complete-item"
        >{{item.meta.title}}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <button @click="add">添加</button>
    <button @click="del">删除</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // 面包屑集合
      levelList: null
    };
  },
  computed: {
    // 引入store的侧边栏状态
    ...mapGetters(["sidebar"]),
    menuState() {
      return this.sidebar.opened;
    }
  },
  watch: {
    $route() {
      this.initLevelList();
    }
  },
  created() {
    this.initLevelList();
  },
  methods: {
        randomIndex: function () {
      return Math.floor(Math.random() * this.levelList.length)
    },
    add() {
      this.levelList.splice(1,0,{
        meta: { title: "text" },
        path: Math.random() * 100 + 1
      });
      console.log(this.levelList);
    },
    del() {
      this.levelList.splice(this.randomIndex(),1);
    },
    // 改变sidebar侧边栏状态
    toggleMenu() {
      this.$store.commit("TOGGLE_SIDEBAR");
    },
    // 初始化面包屑
    initLevelList() {
      // 筛选出路由中带有 mate.title 的路径
      this.levelList = this.$route.matched.filter(item => item.meta.title);
    }
  }
};
</script>

<style scoped lang='scss'>
$no-action-color: #97a8be;
$action-color: #303133;
$action-color-hover: #303133;
.navber {
  display: flex;
  // box-shadow 绘制阴影 参数（x轴，y轴，阴影模糊范围，阴影大小，颜色） 以逗号隔开为多条阴影
  box-shadow: 0 0 3px 0 rgba($color: #000000, $alpha: 0.25),
    0 2px 5px 0 rgba($color: #000000, $alpha: 0.025);
  // Menu 菜单样式
  .sidebar-isopen {
    font-size: 1.15rem;
    line-height: 50px;
    padding: 0 10px;
    height: 50px;
    .icon {
      font-size: 1.3rem;
      font-weight: bold;
      cursor: pointer;
      &.is-active {
        transform: rotate(180deg);
      }
    }
  }
  // 面包屑样式
  .breadcrumb {
    line-height: 50px;
    height: 50px;
    margin-left: 10px;
    font-size: 0.95rem;
  }
}
// 尽量不要用v-move，有坑！请使用class选中要动画的Item
.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
// ！！！重点，当元素被移除时，请写上该动画效果，表示，元素被移除时不占据文档流
.list-complete-leave-active {
  position: absolute;
}
</style>

