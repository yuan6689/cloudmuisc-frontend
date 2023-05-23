import { createStore } from "vuex";
import { getMusicLyric } from "@/request/api/itemMusic";

export default createStore({
  state: {
    playlist: [
      //播放列表
      {
        name: "以剑试情长",
        id: 1995162601,
        pst: 0,
        t: 0,
        ar: [
          { id: 54306262, name: "青龙捕快", tns: [], alias: [] },
          { id: 31512071, name: "镜予歌", tns: [], alias: [] },
        ],
        alia: [],
        pop: 100,
        st: 0,
        rt: "",
        fee: 8,
        v: 4,
        crbt: null,
        cf: "",
        al: {
          id: 154328656,
          name: "以剑试情长",
          picUrl:
            "https://p1.music.126.net/fpZ1cNDThi1vmiaDMhFe5Q==/109951168027075034.jpg",
          tns: [],
          pic_str: "109951168027075034",
          pic: 109951168027075040,
        },
        dt: 211626,
        h: { br: 320000, fid: 0, size: 8467245, vd: -54234, sr: 48000 },
        m: { br: 192000, fid: 0, size: 5080365, vd: -51663, sr: 48000 },
        l: { br: 128000, fid: 0, size: 3386925, vd: -50074, sr: 48000 },
        sq: { br: 1026073, fid: 0, size: 27143069, vd: -54221, sr: 48000 },
        hr: { br: 1796204, fid: 0, size: 47515601, vd: -54221, sr: 48000 },
        a: null,
        cd: "01",
        no: 1,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 0,
        s_id: 0,
        mark: 536879104,
        originCoverType: 1,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 4,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        single: 0,
        noCopyrightRcmd: null,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 0,
        mv: 0,
        publishTime: 0,
      },
    ],
    playlistIndex: 0, //默认下标为0
    isBtnShow: false,
    playingId: 1995162601,
    isDetailShow: true,
    lyricList: {
      version: 6,
      lyric:
        "[00:00.00] 作词 : 唐思淼\n[00:01.00] 作曲 : 袁雨桐\n[00:02.00] 编曲 : 云宏\n[00:03.00] 制作人 : 袁雨桐\n[00:27.48]不曾见过风的形状\n[00:33.28]风在你白衣裳里震荡\n[00:39.25]故事铺序章\n[00:41.64]当你回头望\n[00:43.87]我心尖 落一朵朱砂状\n[00:50.12]那时风起摇落 漫天夕阳\n[00:53.46]映红你脸庞\n[00:56.11]那时心动隐藏\n[00:58.01]我的念想 说无常\n[01:02.04]手中的剑薄凉 热酒一烫\n[01:05.28]指着你方向\n[01:08.70]你不来我便去一趟\n[01:13.09]不愿你 唇间的谎 眉间横霜\n[01:17.13]落笔温柔谎\n[01:19.10]我要让 天下动荡 烽火沙场\n[01:23.10]换你红妆\n[01:24.88]看见你 眼底的光 指尖的烫\n[01:28.99]缠绕时光\n[01:32.40]足够我用一生向往\n[01:38.38]—M—\n[02:01.38]那时风吹海棠 纷纷扬扬\n[02:04.59]你摊开手掌\n[02:07.24]此时我的心事\n[02:09.20]沸沸扬扬 却惆怅\n[02:13.16]少年心性疏狂 爱恨一场\n[02:16.44]你端坐中央\n[02:19.79]我策马以剑试情长\n[02:24.24]不愿你 唇间的谎 眉间横霜\n[02:28.16]落笔温柔谎\n[02:30.21]我要让 天下动荡 烽火沙场\n[02:34.17]换你红妆\n[02:36.07]看见你 眼底的光 指尖的烫\n[02:40.01]缠绕时光\n[02:43.43]足够我用一生向往\n[02:47.89]不愿你 唇间的谎 眉间横霜\n[02:51.92]落笔温柔谎\n[02:53.86]我要让 天下动荡 烽火沙场\n[02:57.78]换你红妆\n[02:59.71]看见你 眼底的光 指尖的烫\n[03:03.66]缠绕时光\n[03:07.22]足够我用一生向往\n[03:12.24]\n[03:13.85] 监制 : 傅悦/陆棠疏/李乔倾\n[03:15.47] 录音工程师 : 爱依魔@YM Studio\n[03:17.08] 人声监棚 : 傅悦\n[03:18.70] 混音工程师 : 沙栩帆@杭州栩栩如声Studio\n[03:20.31] 母带工程师 : 沙栩帆@杭州栩栩如声Studio\n[03:21.93] 海报 : 菁华\n[03:23.54] 题字 : 茶凉煨酒\n[03:25.16] 和声 : 夏不予\n[03:26.77] 吉他 : 大牛\n[03:28.39] 企划统筹 : 陆棠疏\n[03:30.00] 宣传发行 : Jeff/Laikyn\n[03:31.62] （未经授权 请勿翻唱或使用）\n",
    },
    currentTime: 0,
    duration: 0,
  },
  getters: {},
  mutations: {
    changeBtnShow(state, value) {
      state.isBtnShow = value;
    },
    updatePlaylist(state, playlistNew) {
      state.playlist = playlistNew;
    },
    updatePlaylistIndex(state, value) {
      state.playlistIndex = value;
    },
    updatePlayingId(state, value) {
      state.playingId = value;
    },
    updateIsDetailShow(state, value) {
      state.isDetailShow = value;
    },
    updateLyricList(state, value) {
      state.lyricList = value;
    },
    updateCurrentTime(state, value) {
      state.currentTime = value;
    },
    updateDuration(state, value) {
      state.duration = value;
    },
  },
  actions: {
    getLyricList: async function (context) {
      const { data } = await getMusicLyric(context.state.playingId);
      console.log(data);
      context.commit("updateLyricList", data.lrc);
    },
  },
  modules: {},
});
