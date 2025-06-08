import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-30 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-light">
                    <Link href="/">
                        <span className="cursor-pointer">LOGO</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-10 text-lg text-gray-700">
                        <li>
                            <Link href="/">
                                <span className="hover:text-blue-600 transition-colors duration-200">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="hover:text-blue-600 transition-colors duration-200">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="hover:text-blue-600 transition-colors duration-200">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="hover:text-blue-600 transition-colors duration-200">Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}