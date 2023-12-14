import type { PageContextBuiltInServer } from "vike/types";
import Layout from "../layout";
import {
	getCompanyByName,
	getProductByCompany,
	getProductsByDepartment,
} from "#/components/product";
export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page({ name }: { name: string }) {
	return (
		<Layout>
			<div className="md:prose-5xl prose prose-base w-full max-w-4xl flex-grow px-4 pt-10 text-3xl font-bold drop-shadow-md before:pr-2 before:text-neutral-content before:content-['#']">
				Products of {name}
			</div>
			<div className="grid grid-cols-2 items-center justify-items-stretch gap-4 py-4 md:grid-cols-4">
				{getProductsByDepartment(name)?.map((item, idx) => (
					<Card
						key={`product${idx}`}
						name={item.name}
						description={item.description}
						price={item.price}
						href={`/product?name=${encodeURI(item.name)}`}
						src={item.image}
					/>
				))}
			</div>
		</Layout>
	);
}

function Card({
	name = "Product Name",
	description = "Description",
	price = NaN,
	href = "#",
	src,
}: {
	name: string;
	description: string;
	price: number;
	href: string;
	src: string;
}) {
	return (
		<a
			href={href}
			className="group flex aspect-[2/3] flex-col overflow-hidden rounded-xl bg-base-100 drop-shadow-md"
		>
			<figure className="relative flex-[4] overflow-hidden transition-all duration-700 group-hover:flex-1 group-hover:blur-md">
				<img src={src} alt="Your Image" />
			</figure>
			<div className="flex-1 overflow-hidden p-2 font-bold transition-all duration-500 after:blur-sm group-hover:flex-[4]">
				<p className="prose-lg line-clamp-1 pb-1 leading-5 transition duration-500 group-hover:text-error">
					{name}
				</p>
				<p className="text-sm font-normal">{description}</p>
				<p className="text-lg text-secondary">$ {price}</p>
			</div>
		</a>
	);
}

export function onBeforeRender(pageContext: PageContextBuiltInServer) {
	const name = pageContext.urlParsed.search.name;
	return {
		pageContext: {
			pageProps: {
				name,
			},
		},
	};
}
