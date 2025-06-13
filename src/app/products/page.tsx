import Image from "next/image";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-primary font-bold text-center mt-10">Our Products Catalogue</h1>
            <section className="container mx-auto px-20 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
            <h1 className="text-3xl text-primary font-bold text-center mt-10">More of Our Products</h1>
            <section className="container mx-auto px-20 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </div>
    );
}

function ProductCard() {
    return (
        <div className="bg-white shadow-m border-1 border-neutral-300 hover:shadow-2xl shadow-neutral-400 rounded-lg p-4 mx-6 cursor-pointer transition-shadow duration-300">
            <Image src="/test.jpg" alt="Product Image" className="mx-auto rounded-xl object-cover mb-4" height={200} width={250}/>
            <h2 className="text-xl text-primary font-semibold mb-1 text-center">Product name</h2>
            <p className="text-gray-700 text-center">Short description of this product</p>
        </div>
    );
}