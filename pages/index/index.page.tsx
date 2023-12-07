import Layout from "../layout";
import { faker } from "@faker-js/faker";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page() {
	return (
		<Layout>
			<div className="group relative mx-4 mt-10 aspect-[8/3] overflow-hidden rounded-3xl drop-shadow-md lg:mx-auto">
				<img
					src={faker.image.urlPicsumPhotos({
						width: 1200,
						height: 450,
					})}
					// src={`https://picsum.photos/id/1020/1200/450`}
					className="scale-105 transition-transform duration-500 group-hover:scale-100"
				/>
				<h1 className="absolute bottom-5 right-0 bg-secondary py-1 pl-4 pr-10 text-[1.5rem] font-bold text-base-content drop-shadow-sm transition-all duration-500 group-hover:pr-14 lg:text-[2rem]">
					新品上市
				</h1>
			</div>
			<section className="mx-4 mt-8 lg:mx-auto">
				<div className="prose-base md:prose-5xl prose w-full max-w-4xl flex-grow px-4 pt-10 text-3xl font-bold drop-shadow-md before:pr-2 before:text-neutral-content before:content-['#']">
					On Sale
				</div>
				<div className="grid grid-cols-2 items-center justify-items-stretch gap-4 py-4 md:grid-cols-4">
					{Array(8)
						.fill(null)
						.map(() => (
							<Card />
						))}
				</div>
			</section>
		</Layout>
	);
}

function Card() {
	return (
		<a
			href="#"
			className="group flex aspect-[2/3] flex-col overflow-hidden rounded-xl bg-base-100 drop-shadow-md"
		>
			<figure className="relative flex-[4] overflow-hidden transition-all duration-1000 group-hover:flex-1">
				<img
					// src={`https://picsum.photos/id/1028/400/600`}
					src={faker.image.urlPicsumPhotos({
						width: 400,
						height: 600,
					})}
					alt="Your Image"
				/>
			</figure>
			<div className="flex-1 overflow-hidden p-2 font-bold transition-all duration-500 group-hover:flex-[4]">
				<p className="prose-lg">Product Name</p>
				<p className="text-sm font-normal">
					In excepteur eu Lorem magna mollit. Enim magna enim esse
					nostrud nostrud eiusmod ullamco nulla anim non excepteur
					enim. Dolor officia sint dolore irure culpa qui occaecat
				</p>
			</div>
		</a>
	);
}
