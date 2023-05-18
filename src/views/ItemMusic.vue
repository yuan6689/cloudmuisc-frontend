<template>
    <div>
      <ItemMusicTop :playlist="state.playlist"/>
      <ItemMusicList 
      :itemList="state.itemList"
      :subCount="state.playlist.subscribedCount"/>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { onMounted, reactive, computed } from "vue"
import { getItemMusicInfo, getItemMusicList } from "@/request/api/itemMusic.js";
import ItemMusicTop from "@/components/Item/ItemMusicTop.vue"
import ItemMusicList from "@/components/Item/ItemMusicList.vue"

const state = reactive({
  playlist: {},
  itemList: []
})

onMounted(async () => {
  let id = useRoute().query.id;

  let res = await getItemMusicInfo(id);
  // console.log('res: ', res);

  state.playlist = res.data.playlist;
  // console.log(state.playlist)

  let result = await getItemMusicList(id, 20, 0);
  // console.log(result);
  
  state.itemList = result.data.songs;

  // console.log(state.itemList);

  sessionStorage.setItem("itemDetail", JSON.stringify(state));
})

</script>

<style lang="less" scoped>

</style>