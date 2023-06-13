<template>
  <div class="music-detail">
    <img :src="musicList.al.picUrl" alt="背景图片" class="bgi" />
    <div class="detail-top">
      <div class="top-left">
        <svg
          t="1684560487126"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3412"
          width="200"
          height="200"
          @click="updateIsDetailShow(false)"
        >
          <path
            d="M962.877519 274.654264c-12.700775-12.700775-33.339535-12.700775-46.04031 0l-404.837209 405.631007-405.631008-405.631007c-12.700775-12.700775-33.339535-12.700775-46.04031 0-12.700775 12.700775-12.700775 33.339535 0 46.04031l427.857365 427.857364c6.350388 6.350388 14.288372 9.525581 23.020155 9.525581 7.937984 0 16.669767-3.175194 23.020155-9.525581l427.857364-427.857364c13.494574-12.700775 13.494574-33.339535 0.793798-46.04031z"
            p-id="3413"
          ></path>
        </svg>
        <div class="right-content">
          <my-marquee class="music-name">
            {{ musicList.name }}
          </my-marquee>
          <div class="author-name">
            <span v-for="(author, index2) in musicList.ar"
              ><span v-if="index2 >= 2"> / </span>{{ author.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="top-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudfenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="detail-content" v-show="!isLyricShow">
      <img
        src="@/assets/needle-ab.png"
        alt="播放针"
        :class="{ needle: true, active: isBtnShow }"
      />
      <div class="album-wrapper" @click="isLyricShow = true"></div>
      <img
        :class="{ album: true, active: isBtnShow }"
        :src="musicList.al.picUrl"
        alt="唱片"
      />
    </div>
    <div class="detail-lyric" v-show="isLyricShow" @click="isLyricShow = false">
      <p v-for="(item, index) in lyricArr" :class="{'lyric-item': true, active: item.totalTime < currentTime*1000 && item.pre > currentTime*1000}">
        {{ item.lrc }}
      </p>
    </div>
    <div class="detail-footer">
      <div class="footer-top">
        <svg
          t="1684559218277"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3671"
          width="200"
          height="200"
        >
          <path
            d="M539.33 978.45c-14.08 0-28.17-4.12-40.19-12.44-141.31-97.82-246.75-199.63-313.42-302.59-58.22-89.91-85.38-179.83-78.56-260.05 3.82-44.94 17.87-85.23 41.75-119.77 22.7-32.83 54-59.16 90.51-76.17 86.69-40.37 192.98-26.01 284.34 38.43 5.95 4.2 14.66 3.7 21.16-1.2 61.59-46.51 128.45-68.86 193.34-64.62 62.45 4.08 117.38 32.95 154.67 81.29 26.84 34.8 43.45 78.87 48.03 127.44 4.9 51.98-3.52 108.18-25.02 167.05-23.25 63.67-61.48 129.15-113.62 194.64C745.28 822.1 671.49 893.77 583 963.47c-12.65 9.96-28.15 14.98-43.67 14.98z m-196-745.57c-29.29 0-57.63 5.95-83.64 18.06-60.47 28.16-98.63 85.2-104.7 156.49-5.91 69.51 18.65 149.01 71.02 229.9C289.25 735 390.34 832.3 526.46 926.54c8.1 5.61 19.14 5.29 26.83-0.77 162.02-127.61 271.83-261.23 317.55-386.41 19.04-52.12 26.55-101.27 22.32-146.08-3.73-39.53-16.95-75.02-38.25-102.63-28.75-37.27-71.29-59.54-119.79-62.71-53.22-3.48-109.01 15.55-161.28 55.03-23.32 17.61-54.56 18.46-77.74 2.12-48.84-34.45-102.2-52.21-152.77-52.21z"
            p-id="3672"
          ></path>
        </svg>
        <svg
          t="1684559240611"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3823"
          width="200"
          height="200"
        >
          <path
            d="M925.6 337.9c-22.6-53.3-54.8-101.2-96-142.3-41.1-41.1-89-73.4-142.3-96C632.1 76.2 573.5 64.4 513 64.4S393.9 76.2 338.7 99.6c-53.3 22.6-101.2 54.8-142.3 96-41.1 41.1-73.4 89-96 142.3C77 393.1 65.2 451.8 65.2 512.2c0 60.4 11.8 119.1 35.2 174.3 22.6 53.3 54.8 101.2 96 142.3 41.1 41.1 89 73.4 142.3 96C393.9 948.2 452.6 960 513 960s119.1-11.8 174.3-35.2c53.3-22.6 101.2-54.8 142.3-96 41.1-41.1 73.4-89 96-142.3 23.4-55.2 35.2-113.9 35.2-174.3 0-60.4-11.8-119.1-35.2-174.3zM513 879.1c-202.3 0-366.9-164.6-366.9-366.9S310.7 145.3 513 145.3c202.3 0 366.9 164.6 366.9 366.9S715.4 879.1 513 879.1z"
            p-id="3824"
          ></path>
          <path
            d="M664.7 520.8c-17.6-15.6-44.7-13.9-60.3 3.7l-49.2 55.7V368.5c0-1.3-0.1-2.7-0.2-4 0.1-1.4 0.2-2.9 0.2-4.4v-30.3c0-23.2-19-42.2-42.2-42.2-23.2 0-42.2 19-42.2 42.2v30.3c0 1.6 0.1 3.1 0.3 4.7-0.1 1.2-0.2 2.4-0.2 3.7v211.6l-49.2-55.6c-15.6-17.6-42.7-19.3-60.3-3.7-17.6 15.6-19.3 42.7-3.7 60.3L481 720.5c4.1 4.7 9 8.2 14.4 10.6 0.1 0 0.2 0.1 0.3 0.1l1.5 0.6c0.2 0.1 0.4 0.2 0.6 0.2 0.4 0.2 0.8 0.3 1.2 0.4 0.3 0.1 0.6 0.2 0.8 0.3 0.3 0.1 0.7 0.2 1 0.3s0.7 0.2 1 0.3 0.6 0.2 0.9 0.2c0.4 0.1 0.8 0.2 1.1 0.3 0.3 0.1 0.6 0.1 0.8 0.2 0.4 0.1 0.8 0.2 1.2 0.2 0.3 0 0.5 0.1 0.8 0.1 0.4 0.1 0.8 0.1 1.2 0.2 0.3 0 0.6 0.1 0.8 0.1 0.4 0 0.8 0.1 1.2 0.1 0.3 0 0.6 0 0.9 0.1h4.2c0.3 0 0.6 0 0.9-0.1 0.4 0 0.8-0.1 1.2-0.1 0.3 0 0.6-0.1 0.8-0.1 0.4 0 0.8-0.1 1.2-0.2 0.3 0 0.5-0.1 0.8-0.1 0.4-0.1 0.8-0.1 1.2-0.2 0.3-0.1 0.6-0.1 0.8-0.2 0.4-0.1 0.8-0.2 1.1-0.3s0.6-0.1 0.9-0.2c0.3-0.1 0.7-0.2 1-0.3s0.7-0.2 1-0.3 0.6-0.2 0.8-0.3c0.4-0.1 0.8-0.3 1.2-0.4 0.2-0.1 0.4-0.2 0.6-0.2l1.5-0.6c0.1 0 0.2-0.1 0.3-0.1 5.3-2.4 10.3-5.9 14.4-10.6L668 581.1c16-17.6 14.3-44.8-3.3-60.3z"
            p-id="3825"
          ></path>
        </svg>
        <svg
          t="1684559305359"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3976"
          width="200"
          height="200"
        >
          <path
            d="M459.838061 502.318545c0-30.657939 24.948364-55.606303 55.606303-55.606303s55.544242 24.948364 55.544242 55.606303-24.886303 55.606303-55.544242 55.606303a55.668364 55.668364 0 0 1-55.606303-55.606303m173.242181 0c0-64.884364-52.751515-117.666909-117.635878-117.666909a117.79103 117.79103 0 0 0-117.666909 117.666909 117.79103 117.79103 0 0 0 117.666909 117.66691 117.76 117.76 0 0 0 117.604848-117.66691"
            p-id="3977"
          ></path>
          <path
            d="M515.413333 935.439515c-238.809212 0-433.089939-194.311758-433.089939-433.089939 0-238.840242 194.249697-433.18303 433.12097-433.183031 238.809212 0 433.12097 194.342788 433.120969 433.183031 0 238.778182-194.311758 433.089939-433.120969 433.089939m0-928.302545C242.346667 7.13697 20.262788 229.251879 20.262788 502.349576c0 273.035636 222.145939 495.181576 495.181576 495.181576s495.181576-222.17697 495.181575-495.181576c0-273.066667-222.17697-495.243636-495.181575-495.243637"
            p-id="3978"
          ></path>
          <path
            d="M806.353455 471.288242a31.030303 31.030303 0 0 0-31.030303 31.030303v0.031031c0 143.297939-116.580848 259.847758-259.878788 259.847757a31.030303 31.030303 0 0 0 0 62.060606c177.493333 0 321.939394-144.41503 321.939394-321.939394a31.030303 31.030303 0 0 0-31.030303-31.030303M515.413333 242.439758a31.030303 31.030303 0 0 0 0-62.060606c-177.493333 0-321.877333 144.41503-321.908363 321.908363v0.03103a31.030303 31.030303 0 0 0 62.060606 0c0-143.297939 116.580848-259.878788 259.878788-259.878787z"
            p-id="3979"
          ></path>
        </svg>
        <svg
          t="1684559429502"
          class="icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4130"
          width="200"
          height="200"
        >
          <path
            d="M512.001024 895.995648c-32.743489 0-64.663681-2.95527-95.699135-8.093712L191.998336 1024 191.998336 797.421115C75.051158 715.310487 0 589.403291 0 448.002944 0 200.575377 229.233098 0 512.001024 0c282.769974 0 512.001024 200.575377 512.001024 448.002944C1024.002048 695.424367 794.773046 895.995648 512.001024 895.995648zM512.001024 64.004224c-247.423471 0-448.000896 171.921752-448.000896 383.99872 0 130.115844 75.696279 244.92081 191.205758 314.368629l-2.019332 148.433193 150.638893-90.546357c34.703429 7.387151 70.803598 11.743255 108.173528 11.743255 247.425519 0 448.000896-171.921752 448.000896-383.99872S759.426543 64.004224 512.001024 64.004224zM736.001472 416.000832l-448.000896 0c-17.672227 0-32.000064-14.325789-32.000064-31.998016s14.327837-32.002112 32.000064-32.002112l448.000896 0c17.672227 0 32.002112 14.329885 32.002112 32.002112S753.673699 416.000832 736.001472 416.000832zM352.000704 544.005184l320.00064 0c17.672227 0 32.000064 14.319645 32.000064 31.998016 0 17.668131-14.327837 31.991872-32.000064 31.991872l-320.00064 0c-17.674275 0-32.000064-14.323741-32.000064-31.991872C320.00064 558.324829 334.326429 544.005184 352.000704 544.005184z"
            p-id="4131"
          ></path>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudcategory"></use>
        </svg>
      </div>
      <div class="footer-center">
        <input
          type="range"
          class="range"
          min="0"
          :max="duration"
          v-model="rangeCurrentTime"
          step="0.5"
        />
      </div>
      <div class="footer-double">
        <svg
          t="1684559100575"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3367"
          width="200"
          height="200"
        >
          <path
            d="M380.68 345.7c-17.81 0-32.03-14.44-32.03-32.05 0-17.58 14.21-31.82 32.03-31.82h354.96c47.6 0 90.92 19.64 122.51 50.78 31.61 31.59 51 75.15 51 122.74v113.29c0 47.83-19.39 91.15-51 122.74-31.59 31.15-74.91 50.76-122.51 50.76H380.68c-47.83 0-91.15-19.62-122.74-50.76-27.98-28.42-46.93-66.34-50.09-107.86h-74.01c-10.37 0-18.97-8.8-18.97-19.18 0-5.2 2.26-10.15 5.87-13.31l52.13-52.59 52.59-52.34c7.21-7.44 19.18-7.44 26.62 0h0.44l52.36 52.34 52.13 52.59c7.44 7.21 7.44 19.41 0 27.08-4.07 3.6-9.47 5.87-14.9 5.41H271.5c3.14 24.15 14.67 46.26 31.12 62.73h0.23c20.08 19.85 47.62 32.25 77.84 32.25h354.96c29.99 0 57.53-12.4 77.38-32.25 20.08-19.85 32.51-47.39 32.51-77.61V455.37c0-30.22-12.43-57.77-32.51-77.61-19.85-20.08-47.39-32.05-77.38-32.05H380.68v-0.01zM216.85 545.62c5.87-5.41 13.54-8.78 21.9-8.78 8.34 0 16.01 3.37 21.65 8.78h37.02l-19.64-20.08v-0.21l-39.03-38.82-39.05 38.82v0.21l-19.85 20.08h37z"
            p-id="3368"
          ></path>
        </svg>
        <svg
          t="1684558893490"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3061"
          width="200"
          height="200"
          @click="() => $emit('go-play', -1)"
        >
          <path
            d="M98.31 483.06L654.05 162.2c22.43-12.95 50.47 3.24 50.47 29.14v641.71c0 25.9-28.04 42.09-50.47 29.14L98.31 541.34c-22.43-12.95-22.43-45.33 0-58.28z"
            p-id="3062"
          ></path>
          <path
            d="M653.42 505.91L929.92 156c5.97-7.56 18.12-3.33 18.12 6.3v699.82c0 9.63-12.15 13.85-18.12 6.3L653.42 518.5a10.17 10.17 0 0 1 0-12.59z"
            p-id="3063"
          ></path>
        </svg>
        <svg
          class="icon play"
          aria-hidden="true"
          v-if="isBtnShow"
          @click="pause"
        >
          <use xlink:href="#icon-cloudzanting"></use>
        </svg>
        <svg class="icon play" aria-hidden="true" v-else @click="play">
          <use xlink:href="#icon-cloudkaishi"></use>
        </svg>
        <svg
          t="1684558988067"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3214"
          width="200"
          height="200"
          @click="() => $emit('go-play', 1)"
        >
          <path
            d="M925.61 483.06L369.88 162.21c-22.43-12.95-50.47 3.24-50.47 29.14v641.71c0 25.9 28.04 42.09 50.47 29.14l555.74-320.86c22.43-12.95 22.43-45.33-0.01-58.28z"
            p-id="3215"
          ></path>
          <path
            d="M370.5 505.91L94 156c-5.97-7.56-18.12-3.33-18.12 6.3v699.82c0 9.63 12.15 13.85 18.12 6.3L370.5 518.5c2.92-3.69 2.92-8.9 0-12.59z"
            p-id="3216"
          ></path>
        </svg>
        <svg
          t="1684559163626"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3519"
          width="200"
          height="200"
        >
          <path
            d="M981.333333 917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H64a21.333333 21.333333 0 0 1 0-42.666667h896a21.333333 21.333333 0 0 1 21.333333 21.333333zM490.666667 170.666667h469.333333a21.333333 21.333333 0 0 0 0-42.666667H490.666667a21.333333 21.333333 0 0 0 0 42.666667z m469.333333 341.333333H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667zM76.193333 446.32C96 461.16 121.953333 469.333333 149.333333 469.333333s53.333333-8.173333 73.14-23.013333c21.333333-16 33.526667-38.666667 33.526667-62.32V179.266667q3.206667 3.58 6.586667 6.813333a21.473333 21.473333 0 0 0 2.953333 2.366667 64.24 64.24 0 0 1 13.333333 12c8.666667 10.22 15.84 24.18 20.733334 40.373333a21.333333 21.333333 0 0 0 40.84-12.346667c-6.666667-22.053333-16.44-40.773333-29.04-55.626666a107.46 107.46 0 0 0-20.493334-18.78c-8.813333-8.806667-16.526667-20.666667-22.36-34.42-9.033333-21.333333-11.813333-42.666667-12.553333-56.78A21.333333 21.333333 0 0 0 234.666667 42.666667h-0.566667A21.333333 21.333333 0 0 0 213.333333 64v251.56C195 304.613333 172.666667 298.666667 149.333333 298.666667c-27.38 0-53.333333 8.173333-73.14 23.013333-21.333333 16-33.526667 38.666667-33.526666 62.32s12.22 46.34 33.526666 62.32z"
            p-id="3520"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column nowrap;

  height: 100%;
  width: 100%;
  .bgi {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(70px) brightness(60%);
    z-index: -1;
  }

  .detail-top {
    // background-color: #fff;
    display: flex;
    padding: 0.1rem 0.2rem 0 0.2rem;
    width: 100%;
    height: 1.3rem;
    align-items: center;
    .top-left {
      margin-right: auto;
      width: 50%;
      display: flex;
      flex: 1;

      align-items: center;
      .icon {
        stroke: #fff;
        fill: #fff;
        width: 0.6rem;
        height: 0.6rem;
        padding-right: 0.2rem;
      }

      .right-content {
        display: flex;
        flex-flow: column nowrap;
        padding: 0.1rem 0.3rem;
        .music-name {
          font-size: 0.38rem;
          max-width: 2rem;
          color: #fff;
        }
        .author-name {
          color: #bbb;
          font-size: 0.22rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 5rem;
        }
      }
    }
    .top-right .icon {
      stroke: #ccc;
      fill: #ccc;
    }
  }
  .detail-content {
    position: relative;
    width: 100%;
    height: 8.5rem;
    margin-bottom: auto;
    .needle {
      width: 2rem;
      z-index: 10;
      position: absolute;
      top: -1rem;
      left: 3.55rem;
      transform-origin: 0.32rem 0.32rem;
      transform: rotate(-22deg);
      transition: all 1s;
      z-index: 2;
      &.active {
        transform: rotate(3deg);
      }
    }
    .album {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      position: absolute;
      left: 1.875rem;
      top: 2rem;
      // background-image: url(https://p1.music.126.net/Ak2mqnmim2sFjxKAYnRb-A==/109951163085080176.jpg);
      // background-color: #aaaaaa3d;
      // background-size: cover;
      // box-shadow: 0 0 .02rem rgba(0, 0, 0, 1);
      animation: rotate_al 10s linear infinite;
      animation-play-state: paused;
      &.active {
        animation-play-state: running;
      }
    }
    @keyframes rotate_al {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
    .album-wrapper {
      width: 6rem;
      height: 6rem;
      position: absolute;
      left: 0.75rem;
      top: 0.9rem;
      border-radius: 50%;
      position: relative;
      background-image: url(@/assets/cd.png);
      background-size: cover;
      transform: rotate(90deg);
      padding: 1rem;
      z-index: 1;
    }
  }
  .detail-lyric {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    width: 100%;
    height: 8.5rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
    align-items: center;
    text-align: center;
    .lyric-item {
      transition: all 0.5s;
      padding: 0.2rem 0;
      color: #ffffff66;
    }
    .active {
      font-size: 0.4rem;
      color: #fff;
    }
  }
  .detail-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #ffffff66;
    height: 3.8rem;
    padding: 0.3rem 0.4rem;
    width: 100%;
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1rem;
      .icon {
        fill: currentColor !important;
        stroke: currentColor !important;
      }
    }
    .footer-center {
      width: 100%;
      height: 0.6rem;
      .range {
        width: 100%;
        height: 100%;
      }
    }
    .footer-double {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      height: 1.6rem;
      .icon {
        fill: currentColor !important;
        stroke: currentColor !important;
        width: 0.6rem;
        height: 0.6rem;
        &.play {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }
}
</style>

<script>
import MyMarquee from "./MyMarquee.vue";
import { mapState, mapMutations } from "vuex";
import 'vant/es/toast/style';
import { showToast } from 'vant';
// import switchMusic from "@/plugin/myPlugins/switchMusic"
export default {
  data() {
    return {
      isLyricShow: false,
    };
  },
  computed: {
    ...mapState([
      "lyricList",
      "currentTime",
      "playlistIndex",
      "playlist",
      "duration",
    ]),
    lyricArr: function () {
      let res = [];
      if (this.lyricList.lyric) {
        res = this.lyricList.lyric.split(/[\r\n]+/).map((item) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11);
          if (isNaN(mill)) {
            mill = item.slice(7, 9);
            lrc = item.slice(10);
          }
          let totalTime =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          // 
          return { min, sec, mill, lrc, totalTime };
        }).filter(item => item.lrc != '');
      }
      res.forEach((item, index) => {
        if (index === res.length - 1) {
          item.pre = 0;
        } else {
          item.pre = res[index + 1].totalTime;
        }
      });
      return res;
    },
    rangeCurrentTime: {
      get() {
        return this.currentTime;
      },
      set(newValue){
        console.log('emit!')
        this.$emit("emit-update-time", newValue);
      }
    }
  },
  methods: {
    ...mapMutations(["updateIsDetailShow","updatePlaylistIndex","updateCurrentTime"]),
  },
  watch: {
    currentTime: function() {
      //更新active歌词
      const activeItem = document.querySelector("p.active");
      const parentEl = document.querySelector(".detail-lyric");
      const parentHeight = parentEl.getBoundingClientRect().height;
      if(activeItem && activeItem.scrollTop > parentHeight / 2){
        activeItem.scrollTop = parentHeight / 2;
      }
    }
  },
  props: ["musicList", "isBtnShow", "play", "pause"],
  emits: ["emit-update-time", "go-play"],
  components: {
    MyMarquee,
  },
  mounted() {
    this.$store.dispatch("getLyricList");
  },
};
/**
const props = defineProps(["musicList", "isBtnShow", "play", "pause"]);
const { lyricList, currentTime, playListIndex, playList, duration, playingId } =
mapState([
  "lyricList",
  "currentTime",
  "playListIndex",
  "playList",
  "duration",
  "playingId",
]);
const myAlbum = ref();
const myNeedle = ref();
const quitMusicDetail = function () {
  store.commit("updateIsDetailShow", false);
};
const changeMusic = function () {
  const album = myAlbum.value;
};
onMounted(() => {
  
});
const setup = () => {
  const store = useStore();
  watch(playingId, async () => {
    await store.dispatch("getLyricList");
  });
  return {
    lyricList,
    currentTime,
    playListIndex,
    playList,
    duration,
    playingId,
    myAlbum,
    myNeedle,
    quitMusicDetail,
    changeMusic,
  };
};
**/
</script>
