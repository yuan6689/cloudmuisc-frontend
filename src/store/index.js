import { createStore } from "vuex";

export default createStore({
  state: {
    playlist: [
      {
        //播放列表
        name: "小城夏天",
        id: 1934251776,
        ar: [
          {
            id: 12277194,
            name: "LBI利比",
            tns: [],
            alias: [],
          },
        ],
        al: {
          id: 142885776,
          name: "小城夏天",
          picUrl:
            "https://p1.music.126.net/wYuFxK1i_5jqs58xXQ-Jfg==/109951167350445378.jpg",
          tns: [],
          pic_str: "109951167350445378",
          pic: 109951167350445380,
        },
      },
    ],
    playlistIndex: 0, //默认下标为0
    isBtnShow: false,
    playingId: 89039055,
    isDetailShow: true,
    lyricList: [],
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
    updatePlaylistIndex(state, indexNow) {
      state.playlistIndex = indexNow;
    },
    updatePlayingId(state, value) {
      state.playingId = value;
    },
    updateIsDetailShow(state, value) {
      state.isDetailShow = value;
    },
    updateLyricList(state, value){
      state.lyricList = value;
    },
    updateCurrentTime(state, value){
      state.currentTime = value;
    },
    updateDuration(state, value){
      state.duration = value;
    },
  },
  actions: {},
  modules: {},
});
