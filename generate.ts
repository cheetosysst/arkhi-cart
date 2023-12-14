import { faker } from "@faker-js/faker";
import fs from "fs";
import type { Company, Product } from "./productType.js";
import { departments as departments_ } from "./productType.js";

const departments = Object.values(departments_);

const companies: Array<Company> = Array(100)
	.fill(null)
	.map(() => ({
		name: faker.company.name(),
		moto: faker.company.catchPhrase(),
		address: faker.location.streetAddress(),
		tel: faker.phone.number(),
		email: faker.internet.email(),
		image: faker.image.urlPicsumPhotos({}),
	}));

const products: Array<Product> = Array(1000)
	.fill(null)
	.map(() => ({
		name: faker.commerce.productName(),
		department: departments.at((Math.random() * departments.length) | 0)!,
		description: faker.commerce.productDescription(),
		manufacturer: companies.at((Math.random() * departments.length) | 0)!
			.name,
		price: Number(faker.commerce.price({ min: 10 })),
		image: faker.image.urlPicsumPhotos({
			width: 400,
			height: 600,
		}),
		detail: faker.lorem.paragraphs(5),
	}));

fs.writeFileSync(
	"mock.json",
	JSON.stringify({
		products,
		companies,
		departments,
	}),
);
