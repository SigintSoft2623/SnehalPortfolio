// import React from 'react'; // Corrected to single quotes
// import styled from 'styled-components'; // Corrected to single quotes
// import { Swiper, SwiperSlide } from 'swiper/react'; // Corrected to single quotes
// import { Navigation } from 'swiper'; // Corrected to single quotes
// import 'swiper/css'; // Corrected to single quotes
// import 'swiper/css/navigation'; // Corrected to single quotes
// import ProjectItem from './ProjectItem'; // Corrected to single quotes
// import SectionTitle from './SectionTitle'; // Corrected to single quotes
// import projects from '../assets/data/projects'; // Corrected to single quotes

// const ProjectSectionStyle = styled.div`
//   padding: 10rem 0;
//   .projects__allItems {
//     display: flex;
//     gap: 3rem;
//     margin-top: 5rem;
//   }
//   .swiper-container {
//     padding-top: 8rem;
//     max-width: 100%;
//   }
//   .swiper-button-prev,
//   .swiper-button-next {
//     position: absolute;
//     height: 50px;
//     width: 50px;
//     background: var(--deep-dark);
//     z-index: 10;
//     right: 60px;
//     left: auto;
//     top: 0;
//     transform: translateY(50%);
//     color: var(--gray-1);
//     border-radius: 8px;
//   }
//   .swiper-button-next {
//     right: 0;
//   }
//   .swiper-button-prev::after,
//   .swiper-button-next::after {
//     font-size: 2rem;
//   }
//   @media only screen and (max-width: 768px) {
//     .projects__allItems {
//       flex-direction: column;
//       max-width: 400px;
//       margin: 0 auto;
//       margin-top: 7rem;
//       gap: 5rem;
//       .projectItem__img {
//         width: 100%;
//       }
//     }
//   }
// `;

// export default function ProjectsSection() {
//   return (
//     <ProjectSectionStyle>
//       <div className="container">
//         <SectionTitle subheading="some of my recent works" heading="Projects" />
//         <div className="projects__allItems">
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             modules={[Navigation]} // Add Navigation module to Swiper
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1200: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//             {projects.map((project, index) => {
//               if (index >= 5) return;
//               return (
//                 <SwiperSlide key={project.id}>
//                   <ProjectItem
//                     title={project.name}
//                     img={project.img}
//                     desc={project.desc}
//                   />
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>
//       </div>
//     </ProjectSectionStyle>
//   );
// }
