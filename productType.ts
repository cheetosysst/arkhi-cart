export const departments = {
	computer: "Computer",
	life: "Life",
	fashion: "Fashion",
	health: "Health",
	sport: "Sport",
	book: "Book",
	eletronic: "Eletronic",
	photography: "Photography",
	food: "Food",
	anime: "Anime",
} as const;

export type Department = keyof typeof departments;

export type Company = {
	name: string;
	moto: string;
	address: string;
	tel: string;
	email: string;
	image: string;
};

export type Product = {
	name: string;
	department: string;
	description: string;
	manufacturer: string;
	price: number;
	image: string;
	detail: string;
};

export type Schema = {
	products: Array<Product>;
	companies: Array<Company>;
	departments: typeof departments;
};
