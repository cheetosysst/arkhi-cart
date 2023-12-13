import type { PageContextBuiltInServer } from "vike/types";
import Layout from "../layout";
import { getRandomProduct } from "#/components/product";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<div className="group relative mx-4 mt-10 aspect-[8/3] overflow-hidden rounded-3xl drop-shadow-md lg:mx-auto">
				<img
					src={"https://picsum.photos/seed/SmxzTDUcy/1200/450"}
					className="scale-105 transition-transform duration-500 group-hover:scale-100"
				/>
				<h1 className="absolute bottom-5 right-0 bg-secondary py-1 pl-4 pr-10 text-[1.5rem] font-bold text-base-content drop-shadow-sm transition-all duration-500 group-hover:pr-14 lg:text-[2rem]">
					新品上市
				</h1>
			</div>
			<section className="mx-4 mt-8 lg:mx-auto">
				<div className="md:prose-5xl prose prose-base w-full max-w-4xl flex-grow px-4 pt-10 text-3xl font-bold drop-shadow-md before:pr-2 before:text-neutral-content before:content-['#']">
					On Sale{" "}
				</div>
				<div className="grid grid-cols-2 items-center justify-items-stretch gap-4 py-4 md:grid-cols-4">
					{getRandomProduct(8).map((item, index) => (
						<Card
							key={`product${index}`}
							name={item.name}
							description={item.description}
							price={item.price}
							href={`/product?name=${encodeURI(item.name)}`}
							src={item.image}
						/>
					))}
				</div>
			</section>
			<section className="mt-8">
				<div className="group card bg-base-100 shadow-xl lg:card-side">
					<figure>
						<img
							src="https://picsum.photos/id/690/350/350"
							alt="Album"
							className="scale-105 transition-transform duration-500 group-hover:scale-100"
						/>
					</figure>
					<div className="card-body">
						<h2 className="to card-title text-3xl font-extrabold text-secondary">
							Cyber Firday Sale!
						</h2>
						<h3 className="text-2xl">
							Unleash the Cyber Frenzy with Our <br />
							<span className="font-bold text-accent">
								Cyber Friday Sale!
							</span>
						</h3>
						<p>
							All eletronics on sale, starting at{" "}
							<span className="text-2xl font-bold text-error">
								80% off
							</span>
						</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Listen</button>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-8">
				<div className="group card bg-base-100 shadow-xl lg:card-side">
					<div className="card-body">
						<h2 className="to card-title text-3xl font-extrabold text-secondary">
							Cyber Firday Sale!
						</h2>
						<h3 className="text-2xl">
							Dive into{" "}
							<span className="font-bold text-accent">
								Cyber Friday Sale!
							</span>
							{" Madness"}
						</h3>
						<p>
							All eletronics on sale, starting at{" "}
							<span className="text-2xl font-bold text-error">
								80% off
							</span>
						</p>
						<div className="card-actions justify-start">
							<button className="btn btn-primary">
								Starting at{" "}
								<span className="text-2xl font-bold text-white drop-shadow-md">
									80% off
								</span>
							</button>
						</div>
					</div>
					<figure>
						<img
							src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
							alt="Album"
							className="scale-105 transition-transform duration-500 group-hover:scale-100"
						/>
					</figure>
				</div>
			</section>
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
	const page = +pageContext.urlParsed.search.page || 0;
	return {
		pageContext: {
			pageProps: {
				page,
			},
		},
	};
}
