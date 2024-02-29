import axios, { AxiosInstance } from "axios";

interface Props {
	headerParams?: Record<string, any>;
}

function getEnv(name: string) {
	const value: string | undefined = process.env[name];
	if (!value) {
		throw new Error(`Environment variable ${name} not found`);
	}
	return value;
}

const baseService = ({ headerParams = {} }: Props): AxiosInstance => {
	const headers = {
		"Content-Type": "application/json",
		...headerParams,
	};
	return axios.create({
		baseURL: String(getEnv("REACT_APP_API_URL")),
		maxRedirects: 0,
		headers,
	});
};

export default baseService;
