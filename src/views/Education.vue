<template>
  <div class="education">
    <div class="window" style="width: 80%; margin: 20px auto">
      <div class="title-bar">
        <div class="title-bar-text">Bachelor's Degree</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <p>
          <strong>University:</strong> Jiangsu University of Technology (JSUT)
        </p>
        <p><strong>Major:</strong> Electrical Engineering (EE)</p>
        <p><strong>Year:</strong> 2019-2023</p>
        <p>
          <strong>Achievements:</strong>
        </p>
      </div>
    </div>

    <div class="window" style="width: 80%; margin: 20px auto">
      <div class="title-bar">
        <div class="title-bar-text">Master's Degree</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <p><strong>University:</strong> University of New South Wales (UNSW)</p>
        <p><strong>Major:</strong> Computer Science (CS)</p>
        <p><strong>Year:</strong> 2023-NOW</p>
        <p><strong>Thesis:</strong></p>
        <p>
          <strong>Achievements:</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationView",
};
</script>

<style scoped>
.education {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #c0c0c0;
  min-height: 20vh;
}

.window {
  background-color: #c0c0c0;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
  margin-bottom: 20px;
}

.title-bar {
  background: linear-gradient(90deg, navy, #1084d0);
  padding: 3px 2px 3px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-bar-text {
  font-weight: bold;
  color: white;
  letter-spacing: 0;
  margin-right: 24px;
}

.window-body {
  padding: 10px;
  font-family: "MS Sans Serif", Arial, sans-serif;
}

.window-body p {
  margin-bottom: 10px;
}

strong {
  font-weight: bold;
}
</style>
