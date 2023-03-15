import { instance } from "..";

export const signUp = async (data: any) => {
	const url = "sign-up";
	const response = await instance
		.post(url, data, {
			headers: {
				Authorization: "Basic cm96ZXVzOnJvemV1czEyMyE=",
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
	return response;
};

export const login = async (data: any) => {
	const url = "sign-in";
	const response = await instance
		.post(url, data, {
			headers: {
				Authorization: "Basic cm96ZXVzOnJvemV1czEyMyE=",
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
	return response;
};

export const getUserInfo = async () => {
	const userInfo = localStorage.getItem("COM_USERINFO");
	if (userInfo) {
		const userUid = JSON.parse(userInfo);

		console.log(userUid.data[0].access_token);

		const response = await instance
			.get("myPage", {
				headers: {
					Authorization: `Bearer ${userUid.data[0].access_token}`,
				},
			})
			.then((response) => {
				return response.status === 200 && response.data;
			})
			.catch((err) => {
				return console.log(err);
			});

		return response;
	}
};
