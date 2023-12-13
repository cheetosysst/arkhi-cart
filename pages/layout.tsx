import { Footer } from "#/components/footer";
import { Navbar } from "#/components/navbar";
import type { PropsWithChildren } from "react";
import {
	Beef,
	Bike,
	Book,
	Camera,
	HeartPulse,
	Monitor,
	Moon,
	Plug,
	Shell,
	Sun,
	User,
} from "lucide-react";

const mockData = [
	{ title: "Computer", icon: <Monitor /> },
	{ title: "Life", icon: <User /> },
	{ title: "Fashion", icon: <User /> },
	{ title: "Health", icon: <HeartPulse /> },
	{ title: "Sport", icon: <Bike /> },
	{ title: "Book", icon: <Book /> },
	{ title: "Eletronic", icon: <Plug /> },
	{ title: "Photography", icon: <Camera /> },
	{ title: "Food", icon: <Beef /> },
	{ title: "Anime", icon: <Shell /> },
];

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
				<ul className="menu flex min-h-full w-60 flex-col gap-2 bg-neutral p-4 py-8 text-xl text-base-content">
					<h1 className="prose mb-4 pl-4 text-2xl font-extrabold text-primary">
						MacHouse
					</h1>
					<label className="ml-4 flex cursor-pointer gap-2 text-neutral-content">
						<Moon />
						<input
							type="checkbox"
							value="dim"
							className="theme-controller toggle"
						/>
						<Sun />
					</label>
					{mockData.map((item, index) => (
						<li key={`sidelink${index}`}>
							<a
								href="#"
								className="btn btn-neutral flex justify-start gap-2"
							>
								{item.icon}
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
