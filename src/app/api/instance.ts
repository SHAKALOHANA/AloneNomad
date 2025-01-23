import axios, { AxiosError } from "axios";
import { postRefresh } from "./authApi";

const BASE_URL = "https://sp-globalnomad-api.vercel.app/10-1";

export const instance = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(async (config) => {
	if (config.url === "/auth/tokens") return config; 

	try {
    const refresh = localStorage.getItem("refreshToken");
		if (!refresh)
			throw new AxiosError("저장된 유저 정보가 없습니다.", "401");
		const result = await postRefresh({ refreshToken: refresh }); 

		localStorage.setItem("accessToken",result.accessToken); 
		localStorage.setItem("refreshToken",result.refreshToken); 
	} catch {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("email");
		// TODO: 해당 정보 없는 유저는 어떻게 되야 하는지 생각해보고 추가하면 좋음
	}

	const access = localStorage.getItem("accessToken");
	if (access) config.headers["Authorization"] = `Bearer ${access}`;
	return config;
});

instance.interceptors.response.use(
	(response) => response,
	async (error: AxiosError<{ message: string }>) => {
		const res = error.response;
		if (res) {
			console.log(`[${res.status}:${res.config.url}] ${res.data.message}`);
      return Promise.reject({
        status: res.status,
        message: res.data.message,
      });
    }
		return Promise.reject(error);
	}
);
