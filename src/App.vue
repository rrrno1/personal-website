<template>
  <div class="window">
    <!-- 窗口标题栏 -->
    <div class="title-bar">
      <div class="title-bar-text">Yiran Li - Website</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>

    <!-- 窗口主体 -->
    <div class="window-body">
      <!-- 头部组件，包含导航菜单 -->
      <Header />

      <!-- 主要内容区域，用于显示当前路由匹配的组件 -->
      <router-view></router-view>

      <!-- 底部组件，可以包含版权信息等 -->
      <Footer />
    </div>
  </div>
</template>

<script>
// 导入Header和Footer组件
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  // 这里可以添加全局的数据、方法或生命周期钩子
  data() {
    return {
      // 全局数据可以在这里定义
    };
  },
  methods: {
    // 全局方法可以在这里定义
  },
  mounted() {
    // 组件挂载后的操作可以在这里定义
    console.log("应用已加载");
  },
};
</script>

<style>
/* 重置默认边距和填充 */
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* 防止出现滚动条 */
}

body {
  background-color: #008080; /* Windows 98 经典蓝色背景 */
}

#app {
  height: 100vh; /* 使用视口高度单位 */
  display: flex;
  flex-direction: column;
}

/* 主窗口样式 */
.window {
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* 窗口标题栏样式 */
.title-bar {
  /* 保持原有的 title-bar 样式 */
}

/* 窗口主体样式 */
.window-body {
  flex: 1;
  overflow: auto; /* 允许内容滚动 */
  padding: 10px; /* 可选：添加一些内边距 */
}

/* 如果您有页脚，确保它不会被内容推出视口 */
.status-bar {
  /* 保持原有的 status-bar 样式 */
}
</style>
