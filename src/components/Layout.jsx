import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
const Layout = () => {
    const location = useLocation();

    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-bold text-center text-white">CRM Customer</h2>
                <nav className="mt-10">
                    <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/">Customers</Link>
                    <Link className={`${location.pathname === '/new-customer' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/new-customer">New Customer</Link>

                    {
                    // Equal actions

                    /* <NavLink
                        className={({ isActive }) => isActive ? 'text-blue-300 text-2xl block mt-2' : 'text-white text-2xl block mt-2'}
                        to={'/'}
                    >
                        Customer
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? 'text-blue-300 text-2xl block mt-2' : 'text-white text-2xl block mt-2'}
                        to={'/new-customer'}
                    >
                        Otro New Customer
                    </NavLink> */}
                </nav>
            </aside>

            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>

        </div>
    )
}

export default Layout;