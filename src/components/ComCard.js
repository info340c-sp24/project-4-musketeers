import React from 'react';

const ComCard = ({ href, imgSrc, imgAlt }) => {
  return (
    <div className="card shadow-lg rounded-lg overflow-hidden">
      <a href={href}>
        <img src={imgSrc} className="card-img-top w-full h-64 object-cover" alt={imgAlt} />
      </a>
      <div className="save mt-2 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-bookmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
        </svg>
      </div>
    </div>
  );
};

const Gallery = () => {
  const cards = [
    {
      href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
      imgSrc: 'images/fred1.png',
      imgAlt: 'Fred Again.. 1',
    },
    {
      href: 'https://www.instagram.com/peggygou_?igsh=MXA0dXJhMDk2Y3UwMg==',
      imgSrc: 'images/peggy1.png',
      imgAlt: 'Peggy Gou 1',
    },
    {
      href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
      imgSrc: 'images/fred2.png',
      imgAlt: 'Fred Again.. 2',
    },
    {
      href: 'https://www.instagram.com/johnsummit?igsh=MXdiaXJ1NHliMXc0Zw==',
      imgSrc: 'images/john1.png',
      imgAlt: 'John Summit 1',
    },
    {
      href: 'https://www.instagram.com/peggygou_?igsh=MXA0dXJhMDk2Y3UwMg==',
      imgSrc: 'images/peggy2.png',
      imgAlt: 'Peggy Gou 2',
    },
    {
      href: 'https://www.instagram.com/johnsummit?igsh=MXdiaXJ1NHliMXc0Zw==',
      imgSrc: 'images/john2.png',
      imgAlt: 'John Summit 2',
    },
    {
      href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
      imgSrc: 'images/fred3.png',
      imgAlt: 'Fred Again.. 3',
    },
    {
      href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
      imgSrc: 'images/fred4.png',
      imgAlt: 'Fred Again.. 4',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="gallery flex flex-wrap justify-around items-start gap-4">
        {cards.map((card, index) => (
          <ComCard
            key={index}
            href={card.href}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Card = ({ href, imgSrc, imgAlt }) => {
//   return (
//     <div className="card">
//       <a href={href}>
//         <img src={imgSrc} className="card-img-top" alt={imgAlt} />
//       </a>
//       <div className="save">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="25"
//           height="25"
//           fill="currentColor"
//           className="bi bi-bookmark-fill"
//           viewBox="0 0 16 16"
//         >
//           <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// const Gallery = () => {
//   const cards = [
//     {
//       href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
//       imgSrc: 'images/fred1.png',
//       imgAlt: 'Fred Again.. 1',
//     },
//     {
//       href: 'https://www.instagram.com/peggygou_?igsh=MXA0dXJhMDk2Y3UwMg==',
//       imgSrc: 'images/peggy1.png',
//       imgAlt: 'Peggy Gou 1',
//     },
//     {
//       href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
//       imgSrc: 'images/fred2.png',
//       imgAlt: 'Fred Again.. 2',
//     },
//     {
//       href: 'https://www.instagram.com/johnsummit?igsh=MXdiaXJ1NHliMXc0Zw==',
//       imgSrc: 'images/john1.png',
//       imgAlt: 'John Summit 1',
//     },
//     {
//       href: 'https://www.instagram.com/peggygou_?igsh=MXA0dXJhMDk2Y3UwMg==',
//       imgSrc: 'images/peggy2.png',
//       imgAlt: 'Peggy Gou 2',
//     },
//     {
//       href: 'https://www.instagram.com/johnsummit?igsh=MXdiaXJ1NHliMXc0Zw==',
//       imgSrc: 'images/john2.png',
//       imgAlt: 'John Summit 2',
//     },
//     {
//       href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
//       imgSrc: 'images/fred3.png',
//       imgAlt: 'Fred Again.. 3',
//     },
//     {
//       href: 'https://www.instagram.com/fredagainagainagainagainagain?igsh=MWkxYjNsMnBrM3AyYQ==',
//       imgSrc: 'images/fred4.png',
//       imgAlt: 'Fred Again.. 4',
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="gallery">
//         {cards.map((card, index) => (
//           <Card
//             key={index}
//             href={card.href}
//             imgSrc={card.imgSrc}
//             imgAlt={card.imgAlt}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;