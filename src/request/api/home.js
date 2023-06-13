import service from "..";

function getBanner() {
  return service({
    method: "get",
    url: "banner?type=2",
  });
}

function getMusicList() {
  return service({
    method: "get",
    url: "personalized?limit=5",
  });
}

function getSearchMusic(data) {
  return service({
    method: "get",
    url: `/search?keywords=${data}`,
  });
}

function getSearchItemMusic(data) {
  return service({
    method: "get",
    url: `/album?id=${data}`,
  });
}



export {
  getBanner,
  getMusicList,
  getSearchMusic,
  getSearchItemMusic,
};
