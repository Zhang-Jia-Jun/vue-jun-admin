<template>
  <div class="navber">
    <!-- Menu菜单按钮组件 -->
    <menuBtn />
    <!-- 面包屑组件 -->
    <breadcrumb />
    <!-- 用户角色信息组件 -->
    <dropdown />
  </div>
</template>

<script>
import breadcrumb from './breadcrumb'
import menuBtn from './menuBtn'
import dropdown from './dropdown'
export default {
  components:{
    breadcrumb,menuBtn,dropdown
  }
};
</script>

<style scoped lang='scss'>
.navber {
  display: flex;
  align-items:center;
  // box-shadow 绘制阴影 参数（x轴，y轴，阴影模糊范围，阴影大小，颜色） 以逗号隔开为多条阴影
  box-shadow: 0 0 3px 0 rgba($color: #000000, $alpha: 0.25),
    0 2px 5px 0 rgba($color: #000000, $alpha: 0.025);
    .breadcrumb{
      flex: auto;
    }
}
</style>

