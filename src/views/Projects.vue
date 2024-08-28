<template>
  <div class="projects">
    <div class="tree-view-container">
      <div class="window">
        <div class="window-body">
          <ul class="tree-view">
            <li>
              <details open>
                <summary>Projects</summary>
                <ul>
                  <li v-for="project in projects" :key="project.id">
                    <a href="#" @click.prevent="selectProject(project)">{{
                      project.name
                    }}</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="project-display">
      <div
        v-if="selectedProject"
        class="window"
        style="width: 100%; height: 100%"
      >
        <div class="title-bar">
          <div class="title-bar-text">{{ selectedProject.name }}</div>
          <div class="title-bar-controls">
            <button aria-label="Close" @click="closeProject"></button>
          </div>
        </div>
        <div class="window-body">
          <p><strong>Description:</strong> {{ selectedProject.description }}</p>
          <p>
            <strong>Technologies:</strong>
            {{ selectedProject.technologies.join(", ") }}
          </p>
          <p><strong>Year:</strong> {{ selectedProject.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Project 1",
          description: "This is a description for Project 1.",
          technologies: ["Vue", "Node.js", "Express"],
          year: 2023,
        },
        {
          id: 2,
          name: "Project 2",
          description: "This is a description for Project 2.",
          technologies: ["React", "MongoDB", "GraphQL"],
          year: 2022,
        },
        {
          id: 3,
          name: "Project 3",
          description: "This is a description for Project 3.",
          technologies: ["Angular", "Firebase", "TypeScript"],
          year: 2021,
        },
      ],
      selectedProject: null,
    };
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project;
    },
    closeProject() {
      this.selectedProject = null;
    },
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  height: 100vh;
}

.tree-view-container {
  width: 250px;
  padding: 10px;
  background-color: #c0c0c0;
  border-right: 2px solid #dfdfdf;
}

.project-display {
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
