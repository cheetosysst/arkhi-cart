import { faker } from "@faker-js/faker";
import fs from "fs";

const department = [
	"Computer",
	"Life",
	"Fashion",
	"Health",
	"Sport",
	"Book",
	"Eletronic",
	"Photography",
	"Food",
	"Make Up",
	"Anime",
];

const company = Array(100)
	.fill(null)
	.map(() => ({
		name: faker.company.name(),
		moto: faker.company.catchPhrase(),
		address: faker.location.streetAddress(),
		tel: faker.phone.number(),
		email: faker.internet.email(),
	}));

const products = Array(2000)
	.fill(null)
	.map(() => ({
		name: faker.commerce.productName(),
		department: department.at((Math.random() * department.length) | 0),
		description: faker.commerce.productDescription(),
		manufacturer: company.at((Math.random() * department.length) | 0)?.name,
		price: Number(faker.commerce.price({ min: 10 })),
	}));

fs.writeFileSync(
	"mock.json",
	JSON.stringify({
		products,
		company,
		department,
	}),
);
