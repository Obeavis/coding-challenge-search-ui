import baseService from "./baseService";

export const getData = (search: string) =>
	baseService({}).get(`/data${search ? `?search=${search}` : ""}`);
