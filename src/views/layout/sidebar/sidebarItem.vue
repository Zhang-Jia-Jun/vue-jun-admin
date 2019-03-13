<template>
  <!-- 判断是否有多级菜单 -->
  <!-- 设置index选项为绝对路径，会根据该选项进行路由跳转 -->
  <el-menu-item v-if="!hasChildren()" :index="resolvePath(Item.path)">
    <!-- 如果有图标，则显示图标 -->
    <icon v-if="Item.meta.icon" :iconName="Item.meta.icon" class="sidebarIcon"/>
    <!-- 显示标题 -->
    <span class="title">{{Item.meta.title}}</span>
  </el-menu-item>

  <el-submenu v-else :index="Item.path" class="nest-menu">
    <!-- 进入多选栏，设置标题和图标 -->
    <template slot="title">
      <icon v-if="Item.meta.icon" :iconName="Item.meta.icon" class="sidebarIcon"/>
      <span class="title">{{Item.meta.title}}</span>
    </template>
    <!-- 递归组件，传入相对当前的路径 -->
    <sidebarItem
      v-for="children in Item.children"
      :key="children.path"
      :Item="children"
      :basePath="resolvePath(children.path)"
    />
  </el-submenu>
</template>

<script>
import path from "path";
export default {
  name: "sidebarItem",
  props: {
    // 用户路由表
    Item: Object,
    // 基础路径
    basePath: String
  },
  created() {},
  computed: {},
  methods: {
    //  将item的路径地址解析成绝对路径
    resolvePath(url) {
        // 当item不存在子路径时，表示已经不需要再记录路径，直接使用basePath就好了
        if(this.hasChildren()){
            console.log(path.resolve(this.basePath, url))
            return path.resolve(this.basePath, url);
        }else{
            console.log(this.basePath)
            return this.basePath;
        }
    },
    // 判断是否子路径
    hasChildren() {
      return this.Item.children && !!Object.keys(this.Item.children).length; //判断是否有children属性，并且children中有值
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebarIcon {
  font-size: 1.6rem;
  vertical-align: middle;
  margin-right: 10px;
}
</style>

<style lang="scss">
.el-submenu {
  .nest-menu .el-submenu__title,
  .el-menu-item {
    min-width: 180px !important;
    background-color: #1f2d3d !important;
    &:hover {
      background-color: #001528 !important;
    }
  }
}
</style>