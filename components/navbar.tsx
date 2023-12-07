import { Bell, Menu, Search } from "lucide-react";
export const Navbar = () => {
	return (
		<div className="w-full px-4 lg:px-0">
			<nav className="navbar mx-auto mt-4 max-w-5xl rounded-xl bg-base-200 drop-shadow-md md:mt-10">
				<div className="navbar-start">
					<label
						htmlFor="sidedrawer"
						className="btn btn-ghost drawer-button"
					>
						<Menu />
					</label>
				</div>
				<div className="navbar-center">
					<a className="btn btn-ghost text-2xl">MacHouse</a>
				</div>
				<div className="navbar-end">
					<button className="btn btn-circle btn-ghost">
						<Search />
					</button>
					<button className="btn btn-circle btn-ghost">
						<div className="indicator">
							<Bell />
							<span className="badge indicator-item badge-primary badge-xs"></span>
						</div>
					</button>
				</div>
			</nav>
		</div>
	);
};
