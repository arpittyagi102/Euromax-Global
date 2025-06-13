import Link from "next/link";

export default function Page() {

    return (
        <div className="w-screen py-2 md:py-4 px-4 md:px-10 flex md:flex-row flex-col gap-4 md:gap-10">
            <div className="left grow order-2 md:order-1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7003.624108396713!2d77.30860809521486!3d28.63539449938101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba048aaa4c5%3A0xe057a6cd6e55119a!2sEuromax%20International%20(P)%20Limited!5e0!3m2!1sen!2sin!4v1749831465887!5m2!1sen!2sin"
                    className="h-56 w-full rounded-xl hidden md:block"
                    style={{ border: 0 }}
                    loading="lazy"  
                />
                <div className="md:mt-10 bg-neutral-100 p-4 md:p-10 md:text-xl w-full rounded-xl">
                    <h2 className="text-3xl mb-2">Euromax International</h2>
                    <p className="text-sm text-neutral-700">52C, Ground Floor, Krishna Complex, Hasanpur, Delhi - 110092, India</p>
                    <p className="text-sm text-neutral-700"><span className="font-bold">Phone No.</span> +91-11-49046567, +91-9711139301</p>
                    <p className="text-sm text-neutral-700"><span className="font-bold">Fax No.</span> +91-11-49046567</p>
                    <p className="text-sm text-neutral-700"><span className="font-bold">Email Address </span> <Link href="mailto:info@euromaxglobal.com">info@euromaxglobal.com</Link></p>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.859710137811!2d77.49795689999999!3d28.783443899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf575e12ff84f%3A0x239f381b97bfaef0!2sSachin%20textiles!5e0!3m2!1sen!2sin!4v1742885780189!5m2!1sen!2sin"
                className="h-48 w-full rounded-xl md:hidden order-1"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            <form className="right bg-neutral-100 border border-neutral-400 rounded-xl grow p-3 md:p-10 flex flex-col justify-end order-1 md:order-2">
                <input type="text" name="name" placeholder="Your Name" className="text-lg w-full p-2 md:p-4 mb-4 bg-white border border-neutral-300 rounded focus:outline-none" required />
                <input type="text" name="email" placeholder="Your Email" className="text-lg w-full p-2 md:p-4 mb-4 bg-white border border-neutral-300 rounded focus:outline-none" required />
                <textarea name="message" className="text-lg w-full p-2 md:p-4 mb-4 bg-white border border-neutral-300 rounded focus:outline-none resize-none" rows={5} placeholder="Your Message to us" required></textarea>
                <div className="flex justify-center">
                    <button type="submit" className="bg-primary hover:opacity-80 cursor-pointer duratio text-white px-6 py-2 mt-4 rounded">Enquire Now</button>
                </div>
            </form>

        </div>
    );
}