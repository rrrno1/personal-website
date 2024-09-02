<template>
  <div class="hobbies">
    <div class="tree-view-container">
      <div class="window">
        <div class="window-body">
          <ul class="tree-view">
            <li>
              <details open>
                <summary>Hobbies</summary>
                <ul>
                  <li v-for="hobby in hobbies" :key="hobby.id">
                    <a href="#" @click.prevent="selectHobby(hobby)">{{
                      hobby.name
                    }}</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hobby-display">
      <div
        v-if="selectedHobby"
        class="window"
        style="width: 100%; height: 100%"
      >
        <div class="title-bar">
          <div class="title-bar-text">{{ selectedHobby.name }}</div>
          <div class="title-bar-controls">
            <button aria-label="Close" @click="closeHobby"></button>
          </div>
        </div>
        <div class="window-body">
          <p><strong>Description:</strong> {{ selectedHobby.description }}</p>
          <p><strong>Time Spent:</strong> {{ selectedHobby.timeSpent }}</p>
          <p>
            <strong>Favorite Aspect:</strong> {{ selectedHobby.favoriteAspect }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HobbiesView",
  data() {
    return {
      hobbies: [
        {
          id: 1,
          name: "MSFS2020",
          description:
            "Microsoft Flight Simulator 2020, a highly realistic flight simulation game.",
          timeSpent: "Several hours per week",
          favoriteAspect:
            "Exploring detailed recreations of real-world locations",
        },
        {
          id: 2,
          name: "ACC",
          description:
            "Assetto Corsa Competizione, a realistic racing simulation game focused on GT3 cars.",
          timeSpent: "A few hours every weekend",
          favoriteAspect:
            "The authentic physics and challenging multiplayer races",
        },
        {
          id: 3,
          name: "Basketball",
          description:
            "Playing and watching basketball, one of the most popular sports worldwide.",
          timeSpent: "Twice a week for playing, watching NBA games regularly",
          favoriteAspect: "The teamwork aspect and the thrill of close games",
        },
        {
          id: 4,
          name: "Tennis",
          description:
            "Playing and watching tennis, one of the most popular sports worldwide.",
          timeSpent: "Daily practice sessions of 30 minutes",
          favoriteAspect:
            "Expressing emotions through music and improving vocal range",
        },
      ],
      selectedHobby: null,
    };
  },
  methods: {
    selectHobby(hobby) {
      this.selectedHobby = hobby;
    },
    closeHobby() {
      this.selectedHobby = null;
    },
  },
};
</script>

<style scoped>
.hobbies {
  display: flex;
  height: 100vh;
}

.tree-view-container {
  width: 250px;
  padding: 10px;
  background-color: #c0c0c0;
  border-right: 2px solid #dfdfdf;
}

.hobby-display {
  flex: 1;
  padding: 10px;
  background-color: #c0c0c0;
}

.window {
  background-color: #c0c0c0;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
}

.tree-view {
  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 12px;
}

.tree-view a {
  color: #000;
  text-decoration: none;
}

.tree-view a:hover {
  text-decoration: underline;
}

.window-body {
  padding: 10px;
}

.window-body p {
  margin-bottom: 10px;
}
</style>
