export function getCart(): Array<string> {
	if (typeof localStorage === "undefined") return [];

	const dataRaw = localStorage.getItem("cart");
	if (typeof dataRaw !== "string") {
		return initCart();
	}

	const data = JSON.parse(dataRaw);
	if (!(data instanceof Array)) {
		return initCart();
	}

	return data; // not fully typesafe here but good enough
}

function initCart() {
	const newArr: Array<string> = [];
	localStorage.setItem("cart", JSON.stringify(newArr));
	return newArr;
}

export function getCartCount() {
	const data = getCart();
	return data?.length ?? 0;
}

export function removeCart(name: string) {
	const data = getCart();
	if (!data) return data;

	const index = data.indexOf(name);

	if (index !== -1) data.splice(index, 1);

	return data;
}
