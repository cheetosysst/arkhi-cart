import { Cpu, Facebook, Menu, Twitter, Youtube } from "lucide-react";
export const Footer = () => {
	return (
		<footer className="footer footer-center mx-auto mt-8 max-w-5xl rounded-t-3xl bg-primary p-10 text-primary-content shadow-lg">
			<aside>
				<Cpu />
				<p className="font-bold">
					MacHouse Commerce Ltd. <br />
					Providing subpar e-commerce service since 2007
				</p>
				<p>Copyright © 2023 - All right reserved</p>
			</aside>
			<nav>
				<div className="grid grid-flow-col gap-4">
					<a>
						<Twitter />
					</a>
					<a>
						<Youtube />
					</a>
					<a>
						<Facebook />
					</a>
				</div>
			</nav>
		</footer>
	);
};
