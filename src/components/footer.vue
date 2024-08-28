<template>
  <footer class="status-bar">
    <div class="footer-content">
      <!-- 左侧：联系信息 -->
      <div class="contact-info">
        <p>Phone：+61-0478295853</p>
        <p>Email：liyiran1_lyr@outlook.com</p>
        <p>Address：Waterloo 2017, Sydney, Australia</p>
        <div class="social-media-links">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a> |
          <a href="https://www.linkedin.com/in/yourname" target="_blank"
            >LinkedIn</a
          >
          |
          <a href="https://space.bilibili.com/youruid" target="_blank"
            >Bilibili</a
          >
        </div>
      </div>

      <!-- 右侧：联系表单 -->
      <div class="contact-form">
        <form
          @submit.prevent="submitForm"
          action="https://formspree.io/f/xvgplbqe"
          method="POST"
        >
          <div class="field-row-stacked" style="width: 200px">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              name="email"
              required
            />
          </div>
          <div class="field-row-stacked" style="width: 200px">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              v-model="form.name"
              name="name"
              required
            />
          </div>
          <div class="field-row-stacked" style="width: 200px">
            <label for="message">Info</label>
            <textarea
              id="message"
              rows="4"
              v-model="form.message"
              name="message"
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
        <a href="https://github.com/rrrno1" target="_blank">GitHub</a> |
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
    async submitForm() {
      try {
        const response = await fetch("https://formspree.io/f/xvgplbqe", {
          method: "POST",
          body: JSON.stringify(this.form),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          this.form = { email: "", name: "", message: "" };
        } else {
          console.error("Error submitting form");
        }
      } catch (error) {
        console.error("Error submitting form", error);
      }
    },
  },
};
</script>
<style scoped>
.status-bar {
  padding: 20px;
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

.contact-info {
  width: 48%;
  font-size: 1em;
  float: right;
}

.contact-form {
  width: 48%;
  font-size: 1em;
  clear: both;
}

.copyright-info {
  text-align: center;
  font-size: 1em;
  border-top: 1px solid #dfdfdf;
  padding-top: 10px;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 6px;
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

.social-media-links {
  margin-top: 10px;
}
</style>
