import service from "..";

function loginOut(){
  return service({
    url: "/logout",
    method: "get",
  })
}

function getLoginStatus(cookie) {
  return service({
    url: `/login/status?timestamp=${Date.now()}`,
    method: "post",
    data: {
      cookie,
    },
  });
}

function getLoginKey() {
  return service({
    method: "get",
    url: `/login/qr/key?timestamp=${Date.now()}`,
  });
}

function getQrInfo(data) {
  return service({
    method: "get",
    url: `/login/qr/create?key=${data}&qrimg=true&timestamp=${Date.now()}`,
  });
}

function getQrStatus(data){
  return service({
    method: "get",
    url: `/login/qr/check?key=${data}&timestamp=${Date.now()}`
  })
}

export {
  loginOut,
  getLoginStatus,
  getLoginKey,
  getQrInfo,
  getQrStatus,
}