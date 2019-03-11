<template>
  <!-- 面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <transition-group name="list-complete">
      <!-- 面包屑对象 -->
      <el-breadcrumb-item
        v-for="item in levelList"
        :key="item.path"
        :to="item.path"
        class="list-complete-item"
      >{{item.meta.title}}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      // 面包屑集合
      levelList: null
    };
  },
  watch: {
    // 监听路由发生的变动，当路由发生改变，面包屑导航就发生改变
    $route() {
      this.initLevelList();
    }
  },
  created() {
    this.initLevelList();
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.levelList.length);
    },
    add() {
      this.levelList.push({
        meta: { title: "text" },
        path: Math.random() * 100 + 1
      });
      console.log(this.levelList);
    },
    del() {
      this.levelList.pop();
    },
    // 初始化面包屑
    initLevelList() {
      // 筛选出路由中带有 mate.title 的路径
      this.levelList = this.$route.matched.filter(item => item.meta.title);
    }
  }
};
</script>

<style lang="scss" scoped>
// 面包屑样式
.breadcrumb {
  line-height: 50px;
  height: 50px;
  margin-left: 10px;
  font-size: 0.95rem;

  // 尽量不要用v-move，有坑！请使用class选中要动画的Item
  .list-complete-item {
    transition: all 0.5s;
  }
  .list-complete-enter,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  // ！！！重点，当元素被移除时，请写上该动画效果，表示，元素被移除时不占据文档流
  .list-complete-leave-active {
    position: absolute;
  }
}
</style>
