<template>
  <div class="search-top">
    <div class="top-search">
      <svg
        @click="$router.go(-1)"
        t="1684831495331"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1771"
        width="200"
        height="200"
      >
        <path
          d="M710.153924 8.980397L266.007127 460.692524a81.118646 81.118646 0 0 0 0.861532 114.476097l446.192936 441.050666a26.922883 26.922883 0 0 0 37.853573-38.284339L304.722232 536.884282a27.27288 27.27288 0 0 1-0.323074-38.445877L748.545955 46.726278A26.922883 26.922883 0 1 0 710.180847 9.00732z"
          fill="#222222"
          p-id="1772"
        ></path>
      </svg>
      <!-- v-model="historyList[1]" -->
      <input
        class="input-text"
        type="text"
        @keyup.enter="handleSearch"
        ref="inputValue"
      />
      <svg
        @click="handleSearch"
        t="1684847277764"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4355"
        width="200"
        height="200"
      >
        <path
          d="M465.334857 146.285714c176.201143 0 319.024762 145.091048 319.024762 324.096a325.973333 325.973333 0 0 1-65.560381 196.827429L877.714286 828.611048 829.366857 877.714286l-157.647238-160.182857a314.855619 314.855619 0 0 1-206.384762 76.921904C289.133714 794.453333 146.285714 649.386667 146.285714 470.381714S289.133714 146.285714 465.334857 146.285714z m0 69.436953c-138.459429 0-250.684952 114.029714-250.684952 254.659047 0 140.629333 112.225524 254.634667 250.684952 254.634667 138.435048 0 250.660571-114.005333 250.660572-254.634667 0-140.629333-112.225524-254.659048-250.660572-254.659047z"
          p-id="4356"
        ></path>
      </svg>
    </div>
    <div class="top-history">
      <span>历史</span>
      <div class="history-list" @click="handleItemClick">
        <p class="history-item" v-for="item in state.historyList">{{ item }}</p>
      </div>
      <svg
        @click="handleHistoryDelete"
        t="1684832496620"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2972"
        width="200"
        height="200"
      >
        <path
          d="M674.6 251.5v0.3h99.1v3.9l-2.9 605.9c0 4.4-3.6 8-8 8l-504-2.4c-2.2 0-4.1-0.8-5.6-2.4-1.5-1.6-2.3-3.5-2.3-5.7l2.8-602.8v-4.5h94.9v-0.3h326m-8-153.3h-310c-37.6 0-68 30.4-68 68v25.6H96.2c-17.7 0-32.1 14.4-32.1 32.1S78.5 256 96.2 256h97.5l-2.8 602.8c-0.2 37.6 30.1 68.1 67.7 68.3l504 2.4h0.3c37.4 0 67.8-30.2 68-67.7l2.9-605.9h93.5c17.7 0 32.1-14.4 32.1-32.1s-14.4-32.1-32.1-32.1H734.6v-25.6c0-37.5-30.4-67.9-68-67.9zM348 191.5v-30.8c0-6.6 5.4-12 12-12h302.7c6.6 0 12 5.4 12 12v30.8H348z"
          p-id="2973"
        ></path>
        <path
          d="M353.6 737.8c-1 0-1.8-0.8-1.8-1.8V419.7c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8v316.4c-0.1 0.9-0.9 1.7-1.8 1.7z"
          fill="#FFFFFF"
          p-id="2974"
        ></path>
        <path
          d="M353.6 387.9c-17.5 0-31.8 14.2-31.8 31.7V736c0 17.5 14.2 31.8 31.8 31.8s31.8-14.2 31.8-31.8V419.7c-0.1-17.6-14.3-31.8-31.8-31.8z"
          p-id="2975"
        ></path>
        <path
          d="M513.3 735.7c-1 0-1.8-0.8-1.8-1.8V417.6c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8V734c0 1-0.8 1.7-1.8 1.7z"
          fill="#FFFFFF"
          p-id="2976"
        ></path>
        <path
          d="M513.3 385.9c-17.5 0-31.8 14.2-31.8 31.7V734c0 17.5 14.2 31.8 31.8 31.8 17.5 0 31.8-14.2 31.8-31.8V417.6c0-17.5-14.3-31.7-31.8-31.7z"
          p-id="2977"
        ></path>
        <path
          d="M672.4 733.9c-1 0-1.8-0.8-1.8-1.8V415.8c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8v316.4c0 0.9-0.8 1.7-1.8 1.7z"
          fill="#FFFFFF"
          p-id="2978"
        ></path>
        <path
          d="M672.4 384c-17.5 0-31.8 14.2-31.8 31.8v316.4c0 17.5 14.2 31.7 31.8 31.7s31.8-14.2 31.8-31.7V415.8c0-17.5-14.2-31.8-31.8-31.8z"
          p-id="2979"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import "vant/lib/index.css"; // 引入 vant 样式
import { showConfirmDialog } from "vant"; // 引入 Dialog 组件
const emit = defineEmits(["search-occur"]);
const inputValue = ref("");
const state = reactive({
  historyList: [],
});

const handleSearch = function () {
  if (inputValue.value.value === "") {
    return;
  }
  const ifFound = state.historyList.findIndex(i => i === inputValue.value.value);
  if(ifFound !== -1){
    state.historyList.splice(ifFound, 1);
  }
  state.historyList.unshift(inputValue.value.value);
  // inputValue.value.value = "";
  emit("search-occur", state.historyList[0]);
};

const handleHistoryDelete = () => {
  showConfirmDialog({
    title: "请确认",
    message: "是否删除所有的历史记录",
  })
    .then(() => {
      state.historyList = [];
      localStorage.setItem("historyList", JSON.stringify([]));
    })
    .catch(() => {});
};

const handleItemClick = (e) =>{
  inputValue.value.value = e.target.textContent;
  handleSearch();
}

onMounted(() => {
  // console.log(localStorage.getItem("historyList") || "[]");
  state.historyList = JSON.parse(localStorage.getItem("historyList") || "[]");
});

onUnmounted(() => {
  // console.log(JSON.stringify(state.historyList));
  localStorage.setItem("historyList", JSON.stringify(state.historyList));
});
</script>

<style lang="less" scoped>
.search-top {
  .top-search {
    display: flex;
    height: 1rem;
    padding: 0.2rem;
    align-items: center;
    .icon {
      margin-right: auto;
    }
    .input-text {
      border: none;
      border-bottom: 0.02rem solid rgba(0, 0, 0, 0.6);
      width: 85%;
      height: 0.6rem;
      font-size: 0.4rem;
    }
  }
  .top-history {
    height: 1rem;
    display: flex;
    height: 1rem;
    padding: 0.2rem;
    align-items: center;
    .history-list {
      max-width: 80%;
      overflow: scroll;
      scrollbar-width: none;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-left: 0.2rem;
      margin-right: auto;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      .history-item {
        padding: 0.1rem 0.2rem;
        margin-right: 0.1rem;
        background-color: #ddd;
        border-radius: 30px;
      }
    }
  }
}
</style>
