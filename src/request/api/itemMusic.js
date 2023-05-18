import service from "../index"

function getItemMusicInfo(id){
  return service({
    method: "get",
    url: `playlist/detail?id=${id}` 
  });
}

function getItemMusicList(id, limit, offset) {
  return service({
    method: "get",
    url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`
  })
}

function getPlayMusic(id) {
  return service({
    method: "get",
    url: `/song/url?id=${id}`
  })
}

export { getItemMusicInfo, getItemMusicList, getPlayMusic };