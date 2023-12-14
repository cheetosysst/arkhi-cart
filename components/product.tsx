import type { Company, Product } from "#/productType";
import data from "../mock.json";

export const companies = data.companies as Array<Company>;
export const products = data.products as Array<Product>;

export const raw = data;

const cacheProductByCompany = new Map<string, Array<Product>>();

export const getProductByCompany = (company: string) => {
	if (cacheProductByCompany.has(company))
		return cacheProductByCompany.get(company)!; // ts can't narrow content of map
	const cache = products.filter((item) => item.manufacturer === company);
	cacheProductByCompany.set(company, cache);
	return cache;
};

export const getRandomProduct = (count: number) => {
	const randomProducts = new Array(count)
		.fill(null)
		.map(() => products.at((Math.random() * products.length) | 1)!);
	return randomProducts;
};

export const getProduct = (name: string | undefined) => {
	if (!name) return undefined;
	const item = products.find((item) => item.name === name);
	return item;
};

export const getCompanyByName = (name: string) => {
	if (!name) return undefined;
	return companies.find((item) => item.name === name);
};

export const getProductsByDepartment = (name: string) => {
	if (!name) return undefined;
	return products.filter((item) => item.department === name);
};
