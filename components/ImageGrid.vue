<template>
  <div class="card">
    <div class="image-grid">
      <div
        v-for="(imageUrl, index) in imageUrls"
        :key="index"
        class="image-item"
        @click="openFullscreen(imageUrl)"
      >
        <img :src="imageUrl" :alt="'Image ' + (index + 1)" />
      </div>
    </div>

    <!-- 全屏显示图片的遮罩层 -->
    <div v-if="isFullscreen" class="fullscreen-overlay" @click="closeFullscreen">
      <img :src="fullscreenImage" alt="Fullscreen Image" class="fullscreen-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGrid",
  props: {
    imageUrls: {
      type: Array,
      required: true,
      validator: (value) => value.length === 4, // 确保传入的数组长度为 4
    },
  },
  data() {
    return {
      isFullscreen: false, // 是否全屏显示
      fullscreenImage: "", // 当前全屏显示的图片 URL
    };
  },
  methods: {
    // 打开全屏显示
    openFullscreen(imageUrl) {
      this.fullscreenImage = imageUrl;
      this.isFullscreen = true;
    },
    // 关闭全屏显示
    closeFullscreen() {
      this.isFullscreen = false;
      this.fullscreenImage = "";
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #fff; /* 卡片背景色 */
  border-radius: 8px; /* 卡片圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 卡片阴影 */
  padding: 20px; /* 卡片内边距 */
  max-width: 600px; /* 限制卡片的最大宽度 */
  margin: 0 auto; /* 居中 */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 过渡效果 */
}

.card:hover {
  transform: translateY(-5px); /* 悬停时卡片上移 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 悬停时阴影加深 */
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 列 */
  grid-template-rows: repeat(2, 1fr); /* 2 行 */
  gap: 10px; /* 图片之间的间距 */
}

.image-item {
  width: 100%;
  height: 100%;
  overflow: hidden; /* 防止图片溢出 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* 鼠标悬停时显示手型 */
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* 保持图片比例 */
  border-radius: 4px; /* 图片圆角 */
}

/* 全屏遮罩层 */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 半透明黑色背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 确保遮罩层在最上层 */
}

/* 全屏图片 */
.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain; /* 保持图片比例 */
  border-radius: 8px; /* 图片圆角 */
}
</style>