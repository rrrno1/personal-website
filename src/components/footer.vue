<template>
  <footer class="status-bar">
    <div class="footer-content">
      <!-- 左侧：联系信息 -->
      <div class="contact-info">
        <p>Phone：+61-0478295853</p>
        <p>Email：liyiran1_lyr@outlook.com</p>
        <p>Address：Waterloo 2017, Sydney, Australia</p>
      </div>

      <!-- 右侧：联系表单 -->
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="field-row-stacked" style="width: 200px">
            <label for="email">Email</label>
            <input id="email" type="email" v-model="form.email" required />
          </div>
          <div class="field-row-stacked" style="width: 200px">
            <label for="name">Name</label>
            <input id="name" type="text" v-model="form.name" required />
          </div>
          <div class="field-row-stacked" style="width: 200px">
            <label for="message">Info</label>
            <textarea
              id="message"
              rows="4"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    <!-- 版权信息 -->
    <div class="copyright-info">
      <p>© 2024 Yiran Li. All rights reserved.</p>
      <p>
        Built with
        <a href="https://github.com/jdan/98.css" target="_blank">98.css</a> |
        <a href="https://github.com/yourusername" target="_blank">GitHub</a> |
        License: MIT
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      // 这里添加表单提交逻辑
      this.form = { email: "", name: "", message: "" };
    },
  },
};
</script>

<style scoped>
.status-bar {
  padding: 10px;
  background-color: #c0c0c0;
  border-top: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.contact-info,
.contact-form {
  width: 48%;
}

.copyright-info {
  text-align: center;
  font-size: 0.8em;
  border-top: 1px solid #dfdfdf;
  padding-top: 10px;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  width: 200px;
}

a {
  color: #0000ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
