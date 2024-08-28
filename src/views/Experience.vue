<template>
  <div class="experience">
    <div class="window" style="width: 80%; max-width: 800px; margin: 10px auto">
      <div class="title-bar">
        <div class="title-bar-text">Experience</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="content">
          <h2>Open to Opportunities!</h2>
          <p>
            I am looking for new challenges and opportunities. If you have a
            position that fits my skills and experience, or if you think I can
            bring value to your team, I would be happy to discuss a possible
            collaboration with you.
          </p>
          <p>
            If you would like to know more about my experience and abilities,
            please feel free to contact me or view my detailed resume. I look
            forward to contributing my talents and enthusiasm to your project or
            team!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceView",
};
</script>

<style scoped>
.experience {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 400px);
  padding: 0;
}

.window {
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
}

.content {
  padding: 20px;
}

h2 {
  margin-top: 0;
  margin-bottom: 15px;
  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #000080; /* 使用深蓝色突出标题 */
}

p {
  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* 添加一个简单的动画效果 */
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

h2 {
  animation: blink 2s infinite;
}
</style>
