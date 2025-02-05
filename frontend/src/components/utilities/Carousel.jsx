// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';

// const images = [
//   "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/6a0b08a518b223cc.png?q=90",
//   "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/b534ac69003a5693.jpg?q=90",
//   "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/21c72584989b09a9.jpg?q=90",
// ];
// // import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported



// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/6a0b08a518b223cc.png?q=90"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           {/* <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/b534ac69003a5693.jpg?q=90"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           {/* <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/21c72584989b09a9.jpg?q=90"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           {/* <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/a19748ac5ccc2021.jpg?q=90"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           {/* <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/c928b14a5cddaf18.jpg?q=90"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           {/* <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;



















// // const images = [
// //     "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/6a0b08a518b223cc.png?q=90",
// //     "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/b534ac69003a5693.jpg?q=90",
// //     "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/21c72584989b09a9.jpg?q=90",
// //     "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/a19748ac5ccc2021.jpg?q=90",
// //     "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/c928b14a5cddaf18.jpg?q=90",
// //   ];