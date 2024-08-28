<template>
  <div class="skills">
    <div class="window" style="width: 100%; height: 100vh">
      <div class="title-bar">
        <div class="title-bar-text">Skills</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="skill-list">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <div class="skill-name">{{ skill.name }}</div>
            <div class="skill-bar-container">
              <div class="skill-bar-labels">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
              <progress
                class="skill-bar"
                :value="skill.level"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsView",
  data() {
    return {
      skills: [
        { name: "Java", level: 50 },
        { name: "Python", level: 50 },
        { name: "HTML", level: 50 },
        { name: "MySQL", level: 50 },
        { name: "MyBatis", level: 50 },
        { name: "Maven", level: 50 },
        { name: "SpringBoot", level: 50 },
        { name: "Vue", level: 50 },
        { name: "React", level: 50 },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  height: 100vh;
  overflow: hidden;
}

.window {
  margin: 0;
  padding: 0;
  box-shadow: none;
}

.window-body {
  margin: 0;
  padding: 20px;
  height: calc(100vh - 30px); /* Adjust for title bar height */
  overflow-y: auto;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-item {
  display: flex;
  align-items: center;
}

.skill-name {
  width: 120px;
  font-weight: bold;
  font-family: "MS Sans Serif", Arial, sans-serif;
}

.skill-bar-container {
  flex: 1;
}

.skill-bar-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 12px;
}

.skill-bar {
  width: 100%;
  height: 20px;
}

/* Custom progress bar styling */
progress {
  appearance: none;
  -webkit-appearance: none;
}

progress::-webkit-progress-bar {
  background-color: #c0c0c0;
  border: 2px inset #dfdfdf;
}

progress::-webkit-progress-value {
  background-color: #000080;
}

progress::-moz-progress-bar {
  background-color: #000080;
}
</style>
