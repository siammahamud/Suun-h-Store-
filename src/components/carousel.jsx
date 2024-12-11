import { Carousel } from "@material-tailwind/react";

 
export function CarouselDefault() {
  return (
    <Carousel autoplay autoplayDelay={5000} loop className="rounded-b-xl h-96 w-[90%] mx-auto">
      <img
        src="https://img.lazcdn.com/us/domino/da8f3075-ab7c-4a2e-a056-b58395218bff_BD-1976-688.jpg_2200x2200q80.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.lazcdn.com/us/domino/35953232-5e30-484d-a900-2e057d862d4a_BD-1976-688.jpg_2200x2200q80.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://ghorerbazar.com/cdn/shop/files/family.png?v=1719135031"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.khaasfood.com/wp-content/uploads/2024/11/1900x570-copy1.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.lazcdn.com/us/domino/e7a3f3ee-0fe4-4a2b-acd5-6382d52c1abf_BD-1976-688.jpg_2200x2200q80.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
