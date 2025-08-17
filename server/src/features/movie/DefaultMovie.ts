import type Type = require("../../Type");

   const defaultMovie: Type.Movie[] = [
  {
    movieId: "12",
    movieName: "Inside Out",
    plot: "i am from the server ",
    movieLength: "2 h 12 m",
    publicationDate: "2.4.2025",
    rating: 8,
    Image: [
      {
        imagerId:"13",
        url: "/images/InsideOutMain.jpeg",
        type: "main",
      },
      {
        imagerId: "14",
        url: "/images/InsideOutSec.jpg",
        type: "second ",
      },
    ],
    genre: ["Comedy", "Action", "Horror"],
    review: [
      {
        contect:
          "During development, Vite assumes thattr so root as base, so you can write code as if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file s  This means the browser supports most of the latest JavaScript and CSS features. For that",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
    ],
  },
  {
    movieId: "15",
    movieName: "Mission Impossible",
    plot: "aaa aaaa aaa aaaaa",
    movieLength: "2 h 12 m",
    publicationDate: "4.5.2025",
    rating: 8,
    genre: ["Comedy", "Action", "Horror"],
    Image: [
      {
        imagerId: "16",
        url: "/images/MissionImpossibleMain.jpg",
        type: "main",
      },
      {
        imagerId: "17",
        url: "/images/MissionImpossibleSec.jpg",
        type: "second ",
      },
    ],
    review: [
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
    ],
  },
  {
    movieId: "18",
    movieName: "free soli",
    plot: "aaa aaaaaa aa aaaa",
    genre: ["Comedy", "Action", "Horror"],
    review: [
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilihi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
    ],
    rating: 8,
    movieLength: "2",
    publicationDate: "9.5.2025",
    Image: [
      {
        imagerId: "19",
        url: "/images/freeSolimain.jpg",
        type: "main",
      },
      {
        imagerId: "20",
        url: "/images/freeSolisecond.jpg",
        type: "second ",
      },
    ],
  },
];

module.exports ={
  defaultMovie,
};