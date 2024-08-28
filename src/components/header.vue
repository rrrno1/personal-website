<template>
  <header>
    <div class="window-body">
      <menu role="tablist">
        <li role="tab" :aria-selected="isActive('/')" @click="navigate('/')">
          <a href="#tabs">HomePage</a>
        </li>
        <li
          role="tab"
          :aria-selected="isActive('/skills')"
          @click="navigate('/skills')"
        >
          <a href="#tabs">Skills</a>
        </li>
        <li
          role="tab"
          :aria-selected="isActive('/education')"
          @click="navigate('/education')"
        >
          <a href="#tabs">Education</a>
        </li>
        <li
          role="tab"
          :aria-selected="isActive('/experience')"
          @click="navigate('/experience')"
        >
          <a href="#tabs">Experience</a>
        </li>
        <li
          role="tab"
          :aria-selected="isActive('/projects')"
          @click="navigate('/projects')"
        >
          <a href="#tabs">Projects</a>
        </li>
        <li
          role="tab"
          :aria-selected="isActive('/hobbies')"
          @click="navigate('/hobbies')"
        >
          <a href="#tabs">Hobbies</a>
        </li>
      </menu>
    </div>
  </header>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "HeaderComponent",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const navigate = (path) => {
      router.push(path);
    };

    const isActive = (path) => {
      return route.path === path;
    };

    return {
      navigate,
      isActive,
    };
  },
};
</script>

<style scoped>
/* 这里可以添加任何额外的自定义样式 */
menu[role="tablist"] {
  padding-left: 0px;
}
</style>
