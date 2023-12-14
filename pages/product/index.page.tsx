import Layout from "../layout";
import { getProduct } from "#/components/product";
import type { PageContextBuiltInServer } from "vike/types";
import type { Product } from "#/productType";
import { Island } from "arkhi/client";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page({
	name,
	product,
}: {
	name: string;
	product: Product | undefined;
}) {
	return (
		<Layout>
			<div className="breadcrumbs mt-4 px-2 text-sm">
				<ul>
					<li>
						<a>{product?.manufacturer ?? "unknown"}</a>
					</li>
					<li>
						<a>{product?.department ?? "unknown"}</a>
					</li>
					<li>{name ?? "unknown"}</li>
				</ul>
			</div>
			<section className="">
				<div className="group card border-[1px] shadow-md lg:card-side">
					<figure>
						<img
							src={product?.image}
							alt={`product image for ${product?.name}`}
							className="aspect-square scale-105 transition-transform duration-500 group-hover:scale-100"
						/>
					</figure>
					<div className="card-body">
						<h2 className="to card-title text-3xl font-extrabold text-secondary">
							{product?.name ?? "unknown product"}
						</h2>
						<h3 className="text-xl">
							{product?.manufacturer ?? "unknow manufacturer"}
						</h3>
						<p>{product?.description}</p>
						<div className="card-actions justify-end">
							<button className=" btn btn-primary capitalize hover:scale-105">
								buy directly
							</button>
							<AddCartIsland name={product?.name} />
							{/* <button className="btn btn-secondary capitalize hover:scale-105">
								add to cart
							</button> */}
						</div>
					</div>
				</div>
			</section>
			<section className="mt-8">
				<div role="tablist" className="tabs tabs-lifted drop-shadow-sm">
					<input
						type="radio"
						name="my_tabs_2"
						role="tab"
						className="tab"
						aria-label="Description"
						defaultChecked
					/>
					<div
						role="tabpanel"
						className="tab-content prose-lg w-full rounded-box border-base-300 bg-base-100 p-6"
					>
						<h2 className="prose-h2 card-title font-bold capitalize text-accent">
							description
						</h2>
						{product?.detail
							.split("\n")
							.map((item, index) => (
								<p key={`detail${index}`}>{item}</p>
							))}
					</div>

					<input
						type="radio"
						name="my_tabs_2"
						role="tab"
						className="tab"
						aria-label="Payment"
					/>
					<div
						role="tabpanel"
						className="tab-content rounded-box border-base-300 bg-base-100 p-6"
					>
						Tab content 2
					</div>

					<input
						type="radio"
						name="my_tabs_2"
						role="tab"
						className="tab"
						aria-label="Feedback"
					/>
					<div
						role="tabpanel"
						className="tab-content rounded-box border-base-300 bg-base-100 p-6"
					>
						Tab content 3
					</div>
				</div>
			</section>
			<section className="mt-8">
				<div className="group card border-[1px] shadow-md">
					<div className="prose-md card-body"></div>
				</div>
			</section>
		</Layout>
	);
}

export function onBeforeRender(pageContext: PageContextBuiltInServer) {
	const name = pageContext.urlParsed.search.name;
	const product = getProduct(name);
	return {
		pageContext: {
			pageProps: {
				name,
				product,
			},
		},
	};
}

function AddCart({ name, ...props }: { name: string | undefined }) {
	const cartHandler = () => {
		if (!name) return;
		const oldData = localStorage.getItem("cart");
		const newData: Array<string> =
			typeof oldData === "string"
				? (JSON.parse(oldData) as Array<string>)
				: [];
		if (!(newData instanceof Array)) {
			localStorage.setItem("cart", JSON.stringify([newData]));
			return;
		}
		newData.push(name);
		localStorage.setItem("cart", JSON.stringify(newData));
		dispatchEvent(new Event("cartMutate"));
	};
	return (
		<button
			{...props}
			className="btn btn-secondary capitalize hover:scale-105"
			onClick={cartHandler}
		>
			add to cart
		</button>
	);
}

const AddCartIsland = Island(AddCart);
