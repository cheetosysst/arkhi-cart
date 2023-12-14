import Layout from "../layout";
import { Island } from "arkhi/client";
import { getCart, removeCart } from "#/components/cart";
import { useState } from "react";
import { CreditCard, DollarSign } from "lucide-react";

export { Page };
export const PrefetchSetting = { mode: "hover" };

function Page({}: {}) {
	return (
		<Layout>
			<section className="my-8 h-fit rounded-box bg-base-200 p-4 drop-shadow-md">
				<h2 className="p-4 text-3xl font-bold text-neutral drop-shadow-sm">
					Cart
				</h2>
				<CartIsland />
			</section>
			<section className="my-8 mb-16 h-fit rounded-box bg-accent p-4 pb-8 drop-shadow-md">
				<h2 className="p-4 pb-0 text-3xl font-bold text-accent-content drop-shadow-sm">
					Checkout
				</h2>
				<p className="p-4">
					<span className="flex w-full flex-col justify-center gap-2 md:flex-row md:justify-between">
						<label className="form-control w-full max-w-md">
							<span className="label">
								<span className="label-text">
									Credit Card Number
								</span>
								<span className="label-text-alt">
									Vasi, MaesterCord
								</span>
							</span>
							<input
								type="text"
								placeholder="XXXX - XXXX - XXXX - XXXX"
								className="input input-bordered w-full max-w-md"
							/>
						</label>
						<label className="form-control w-full max-w-md">
							<span className="label">
								<span className="label-text">Security PIN</span>
								<span className="label-text-alt">
									Check the back of your card
								</span>
							</span>
							<input
								type="text"
								placeholder="XXX"
								className="input input-bordered w-full max-w-md"
							/>
						</label>
					</span>
					<span className="flex w-full flex-col justify-center gap-2 md:flex-row md:justify-between">
						<label className="form-control w-full max-w-md">
							<span className="label">
								<span className="label-text">Address</span>
								<span className="label-text-alt"></span>
							</span>
							<input
								type="text"
								placeholder="XXX road, XXX City, XXX"
								className="input input-bordered w-full max-w-md"
							/>
						</label>
						<label className="form-control w-full max-w-md">
							<span className="label">
								<span className="label-text">Recipient</span>
								<span className="label-text-alt"></span>
							</span>
							<input
								type="text"
								placeholder="Rick Astely"
								className="input input-bordered w-full max-w-md"
							/>
						</label>
					</span>
				</p>
				<div className="float-right flex gap-4">
					<CreditCardIsland />
					<CashIsland />
				</div>
			</section>
		</Layout>
	);
}

const paymentHandler = () => {
	localStorage.setItem("cart", "[]");
	location.assign("/");
};

function CreditCardButton({ ...props }) {
	return (
		<button onClick={paymentHandler} className="btn btn-info" {...props}>
			<CreditCard />
			Checkout with card
		</button>
	);
}
function CashButton({ ...props }) {
	return (
		<button onClick={paymentHandler} className="btn btn-success" {...props}>
			<DollarSign />
			Cash on Delivery
		</button>
	);
}

function CartDetail({ ...props }: {}) {
	const [cart, setCart] = useState(getCart());

	const removeHandler = (name: string) => {
		const newData = removeCart(name);
		setCart(newData);
		localStorage.setItem("cart", JSON.stringify(newData));
		dispatchEvent(new Event("cartMutate"));
	};

	return (
		<table className="table w-full" {...props}>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>
				{cart?.map((item, idx) => (
					<tr key={`cartContent${idx}`}>
						<th>{idx}</th>
						<td>
							<a
								className="btn btn-ghost text-lg"
								href={`/product?name=${encodeURI(item)}`}
							>
								{item}
							</a>
						</td>

						<td>
							<button
								className="btn btn-error btn-sm"
								onClick={() => removeHandler(item)}
							>
								X
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

const CreditCardIsland = Island(CreditCardButton);
const CashIsland = Island(CashButton);
const CartIsland = Island(CartDetail);
