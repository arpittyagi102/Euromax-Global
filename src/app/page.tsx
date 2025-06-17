import Carousel from "@/components/home/Carousel";
//import Gallery from "@/components/home/Gallery"
import Products from "@/components/home/Products"
import ExploreScroll from "@/components/home/ExploreScroll";

export default function Home() {
    return (
        <>
            <Carousel items={['test.jpg','test.jpg','test.jpg']}/>
            <AboutUs />
            {/* <Gallery /> */}
            <Products />
            <Services />
            <Partners />
        </>
    );
}

function AboutUs() {
    return (
        <section className="px-30 flex mb-20">
            <div className="left-half p-10 flex-1/2">
                <img src='test.jpg' alt='about-us-image'/>
            </div>
            <div className="right-half p-10 flex-1/2">
                <h2 className="text-4xl mb-4">About Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dicta eos voluptate natus, incidunt tenetur a beatae neque voluptatibus tempora cupiditate nesciunt magnam quam dolorem aut. Voluptatum necessitatibus hic placeat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nulla odio. Quos, voluptatum rerum nobis eos sunt rem amet. Perspiciatis earum soluta velit possimus placeat ab laboriosam doloremque unde </p>
            </div>
        </section>
    )
}

function Services() {
    return (
        <section className="px-30 flex mb-20">
            <div className="right-half p-10 flex-1/2">
                <h2 className="text-4xl mb-4">Our Services</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dicta eos voluptate natus, incidunt tenetur a beatae neque voluptatibus tempora cupiditate nesciunt magnam quam dolorem aut. Voluptatum necessitatibus hic placeat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nulla odio. Quos, voluptatum rerum nobis eos sunt rem amet. Perspiciatis earum soluta velit possimus placeat ab laboriosam doloremque unde </p>
            </div>
            <div className="left-half p-10 flex-1/2">
                <img src='test.jpg' alt='about-us-image'/>
            </div>
        </section>
    )
}

function Partners(){
    return (
        <>
            <h1 className="text-center text-4xl mb-20 font-bold text-primary">Our Partners</h1>
            <ExploreScroll />
        </>
    )
}