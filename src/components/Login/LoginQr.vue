<template>
	<div class="qr">
		<div class="toggle" >
			{{ hint }}
		</div>
		<img id="qrImg" :src="qrSrc"/>
	</div>
</template>

<script setup>
import {
	getLoginStatus,
	getLoginKey,
	getQrInfo,
	getQrStatus,
} from "@/request/api/login";
import { onMounted, ref } from "vue";
import { useStore } from "vuex"
const store = useStore();
const qrSrc = ref("");
const hint = ref("网易云移动端APP扫码登录");
onMounted(async()=>{
	await login();
})
const login = async function () {
	let timer;
	const cookie = localStorage.getItem("cookie");
	console.log(await getLoginStatus(cookie));
	const res = await getLoginKey();
	const key = res.data.data.unikey;
	const res2 = await getQrInfo(key);
	console.log(res2);
	qrSrc.value = res2.data.data.qrimg;

	timer = setInterval(async () => {
		const { data: statusRes  }= await getQrStatus(key);
		console.log('statusRes: ', statusRes);
		if (statusRes.code === 800) {
			alert("二维码已过期,请重新获取");
			clearInterval(timer);
		}else	if(statusRes.code === 802){
			hint.value = statusRes.nickname + "请点击确认";
		}else if (statusRes.code === 803) {
			//这一步会返回cookie
			clearInterval(timer);
			alert("授权登录成功");
			await getLoginStatus(statusRes.cookie);
			console.log(statusRes.cookie);
			// document.cookie = “statusRes.cookie”
			store.commit("updateIsLogin", true);
		}
	}, 3000);
};
</script>

<style lang="less" scoped>
.qr {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: .5rem;
}
</style>
