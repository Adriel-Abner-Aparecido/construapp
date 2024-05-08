const token = localStorage.getItem("token");
const tokenPayload = JSON.parse(token);

const settoken = tokenPayload?.token;
const id = tokenPayload?.userId;
const userName = tokenPayload?.userName;

export { settoken, id, userName };
