import { Footer } from "#/components/footer";
import { Navbar } from "#/components/navbar";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="drawer min-h-[100dvh] w-full">
			<input id="sidedrawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<Navbar />
				<div className="mx-auto min-h-[90dvh] max-w-5xl">
					{children}
				</div>
				<Footer />
			</div>
			<div className="drawer-side">
				<label
					htmlFor="sidedrawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
