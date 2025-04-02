// import React, { useEffect, useState } from 'react'; // Corrected to single quotes
// import styled from 'styled-components'; // Corrected to single quotes
// import { MdSearch } from 'react-icons/md'; // Corrected to single quotes
// import SectionTitle from '../components/SectionTitle'; // Corrected to single quotes
// import ProjectsInfo from '../assets/data/projects'; // Corrected to single quotes
// import ProjectItem from '../components/ProjectItem'; // Corrected to single quotes

// const ProjectStyle = styled.div`
//   padding: 10rem 0;
//   .projects__allItems {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 5rem;
//     margin-top: 5rem;
//   }
//   .projects__searchBar {
//     position: relative;
//     width: 300px;
//     margin-top: 5rem;
//   }
//   .projects__searchBar input {
//     width: 100%;
//     font-size: 2rem;
//     padding: 0.8rem;
//     color: var(--black);
//     border-radius: 6px;
//     outline: none;
//     border: none;
//   }
//   .projects__searchBar .searchIcon {
//     position: absolute;
//     width: 2rem;
//     right: 1rem;
//   }
//   .projects__searchBar .searchIcon path {
//     color: var(--deep-dark);
//   }
//   @media only screen and (max-width: 768px) {
//     .projects__searchBar,
//     .projects__searchBar form,
//     .projects__searchBar input {
//       width: 100%;
//     }
//   }
// `;

// export default function Projects() {
//   const [searchText, setSearchText] = useState('');
//   const [projectsData, setProjectsData] = useState(ProjectsInfo);

//   useEffect(() => {
//     if (searchText === '') return;
//     setProjectsData(() =>
//       ProjectsInfo.filter((item) =>
//         item.name.toLowerCase().match(searchText.toLowerCase())
//       )
//     );
//   }, [searchText]);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearchText(e.target.value);
//     if (!e.target.value.length > 0) {
//       setProjectsData(ProjectsInfo);
//     }
//   };

//   return (
//     <ProjectStyle>
//       <div className="container">
//         <SectionTitle heading="Projects" subheading="some of my recent works" />
//         <div className="projects__searchBar">
//           <form>
//             <input
//               type="text"
//               value={searchText}
//               onChange={handleChange}
//               placeholder="Project Name"
//             />
//             <MdSearch className="searchIcon" />
//           </form>
//         </div>
//         <div className="projects__allItems">
//           {projectsData.map((item) => (
//             <ProjectItem
//               key={item.id}
//               title={item.name}
//               desc={item.desc}
//               img={item.img} // Ensure there is a comma at the end here if needed
//             />
//           ))}
//         </div>
//       </div>
//     </ProjectStyle>
//   );
// }
