<template>
  <div class="home">
    <div class="window" style="width: 80%; max-width: 800px; margin: 10px auto">
      <div class="title-bar">
        <div class="title-bar-text">About Me</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="about-content">
          <div class="photo">
            <img src="@/assets/yiranli-photo.jpg" alt="Yiran Li" />
          </div>
          <div class="description">
            <h2>Yiran Li</h2>
            <p>
              Welcome to my personal website! I am committed to becoming a Full
              Stack Developer. My skills include Java, Python, HTML, MySQL,
              MyBatis, Maven, SpringBoot, Vue, React. I love learning new
              technologies and always look for opportunities to improve myself
              and solve complex problems.
            </p>
            <p>
              On this website, you can learn more about my project experience,
              educational background and personal interests. If you have any
              questions, please feel free to contact me!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 350px);
  padding: 0;
}

.window {
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
}

.about-content {
  display: flex;
  padding: 20px;
  align-items: flex-start;
}

.photo {
  flex: 0 0 245px; /* 增加照片容器的宽度 */
  margin-right: 50px; /* 增加图片和文字之间的间距 */
}

.photo img {
  width: 100%;
  height: auto;
  image-rendering: pixelated;
  border: 3px solid #000; /* 增加边框宽度 */
}

.description {
  flex: 1;
}

h2 {
  margin-top: 0;
  margin-bottom: 15px;
  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 24px; /* 增大标题字体 */
  font-weight: bold;
}

p {
  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 16px; /* 增大正文字体 */
  line-height: 1.5; /* 增加行高 */
  margin-bottom: 5px; /* 段落间增加间距 */
  text-shadow: 0 0 #fff; /* 添加文字阴影增加可读性 */
}
</style>
