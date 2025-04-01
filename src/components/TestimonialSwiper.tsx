// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles (Ensure Navigation styles come last)
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1408007895/photo/neon-light-banner-night-life-stylish-retrowave-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=FuuY_F9xZcva_nC0JBzwiYZfAdb-uymDFc62MV9jc8k=",
    quote:
      "An unforgettable experience! The Metaverse Expo opened my eyes to the potential of AI and Web3. Can't wait for the next one!",
    author: "John D.",
    role: "Developer"
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1369156549/photo/portrait-of-young-woman-illuminated-neon-light-and-laser.webp?a=1&b=1&s=612x612&w=0&k=20&c=qkpDAXyYnIYoCks4gzG2jnWWSs-_wKU9IMNmNR1JnSI=",
    quote:
      "The virtual reality experiences were next-level. I felt like I was really there! Highly recommend to anyone in tech.",
    author: "Sarah W.",
    role: "UX Designer"
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1410177462/photo/neon-light-banner-millennial-nightlife-eyewear-man.jpg?s=612x612&w=0&k=20&c=AWMMxn1VjeZFiCwpd99lOEPrpyY-g0nM20yEswoHXag=",
    quote:
      "The networking opportunities were incredible. I made connections with industry leaders and learned so much about the future of the Metaverse.",
    author: "Michael S.",
    role: "Investor"
  }
];

export const TestimonialSwiper = () => {
  return (
    <div className="testimonial mt-12  relative w-full  mx-auto">
      {/* Testimonials Section */}
      <div className="md:max-w-6xl mb-12 md:text-center">
        <h2 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
          What Attendees Are Saying
        </h2>
        <p className="text-gray-300 mt-4 md:text-lg md:max-w-2xl mx-auto">
          Here’s what some of our past attendees had to say about the Metaverse
          Expo. From cutting-edge technology to real-time collaboration, we’re
          shaping the future, together.
        </p>
      </div>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={2}
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gradient-to-br h-[150px] from-purple-500 via-pink-500 overflow-hidden to-yellow-500 p-[1px] rounded-3xl text-white shadow-lg">
                <div className="bg-gradient-to-br  px-2 h-full rounded-3xl from-black to-[#270427]">
                  <div className="flex items-center gap-2">
                    <img
                      src={testimonial.image}
                      alt="testimonial"
                      className="rounded-full w-20 h-20 object-cover object-top border-2 border-white shadow-lg"
                    />
                    <div className="flex flex-col text-left ">
                      <blockquote className="mt-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="mt-4 text-sm">
                        <span className="font-bold ">{testimonial.author}</span>{" "}
                        -{" "}
                        <span className="text-purple-400">
                          {testimonial.role}
                        </span>
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gradient-to-br h-full  from-purple-500 via-pink-500 overflow-hidden to-yellow-500 p-[1px] rounded-3xl text-white shadow-lg">
                <div className="bg-gradient-to-br pb-2  px-2 h-full rounded-3xl from-black to-[#270427]">
                  <div className="flex pt-2 gap-4">
                    <img
                      src={testimonial.image}
                      alt="testimonial"
                      className="rounded-full w-15 h-15 object-cover object-top border-2 border-white shadow-lg"
                    />
                    <div className="flex flex-col text-left ">
                      <blockquote className=" h-[80px] text-sm">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="mt-4 text-sm">
                        <span className="font-bold ">{testimonial.author}</span>{" "}
                        -{" "}
                        <span className="text-purple-400">
                          {testimonial.role}
                        </span>
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
