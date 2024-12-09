import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const projects = [
    {
      title: "Amazing Image Gallery",
      description:
        "This project is a dynamic and interactive image gallery built using HTML, JavaScript, and React. It offers a visually appealing interface with exciting features, including:",
      details: [
        "Animated hover effects to enhance user engagement.",
        "Lightbox functionality with captions and navigation for an immersive viewing experience.",
        "Dynamic image loading to optimize performance.",
        "Masonry layout for a modern, aesthetic design.",
        "Modal with image details to provide additional context for each image.",
        "Filterable gallery for easy navigation and categorization.",
        "3D effects for added depth and creativity.",
        "Carousel format with smooth transitions, allowing users to view images sequentially.",
        "Zoom-in feature for detailed image exploration.",
      ],
      link: "https://comforting-madeleine-e0a5fa.netlify.app",
      backgroundImage: "https://i.ibb.co/4KFYhrd/chrome-MVGOgd8u-Nx.png",
    },
    {
      title: "Exciting Music Player", 
      description: "An engaging and interactive music gallery built using HTML, JavaScript, and React, designed to provide users with an immersive music exploration experience.",
      details:
      [
        "Dynamic and visually appealing user interface.",
        "Seamless audio integration with custom playlists.",
        "Interactive album cover display with animated hover effects.",
        "Lightbox view for viewing album details and track lists.",
        "Dynamic track loading for smooth performance.",
        "Responsive design, optimized for various screen sizes.",
        "Filterable gallery to explore music by genre, artist, or mood.",
        "Audio visualizations synced with playback for an engaging experience.",
        "Carousel-style navigation for browsing albums easily.",
        "Supports autoplay of the next track with manual controls."
      ],      link: "https://benevolent-pixie-e4a0bc.netlify.app",
      backgroundImage: "https://i.ibb.co/QbS54cb/chrome-fut-CUKFLgb.png",
    },
    {
      title: "Cool Calculator",
      description:
      "A sleek and user-friendly calculator application built using HTML, JavaScript, and Tailwind CSS, designed to perform basic arithmetic operations with style and efficiency.",
      details:
      [
        "Modern and responsive design inspired by Android-style calculators.",
        "Performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
        "Clear button to reset calculations instantly.",
        "Dynamic display to show real-time input and output.",
        "Keyboard and button input support for enhanced accessibility.",
        "Customizable theme options for a personalized look.",
        "Interactive animations for a smooth and engaging user experience.",
        "Error handling for invalid inputs to ensure reliability.",
        "Optimized for performance and cross-browser compatibility.",
        "Built with Tailwind CSS for fast and efficient styling."
      ],      link: "https://effortless-mousse-95f705.netlify.app",
      backgroundImage:
        "https://i.ibb.co.com/dGRtYNB/chrome-warew-EEpte.png",
    },
    {
      title: "E-Commerce Website",
      description:
      "A modern and visually appealing e-commerce platform designed to offer users a seamless shopping experience with a focus on eco-friendly products and responsive design.",
      details:
      [
        "Dynamic product catalog showcasing eco-friendly products with detailed descriptions and pricing.",
        "User-friendly navigation with an intuitive interface for browsing products.",
        "Interactive cart management system for adding, removing, and updating items in real-time.",
        "Secure and seamless checkout process with optimized performance.",
        "Responsive design to ensure compatibility with devices of all screen sizes.",
        "Filter and search functionality for easy product discovery.",
        "Modern design with Tailwind CSS for an aesthetic and consistent layout.",
        "Fast-loading pages and optimized performance for smooth user experience.",
        "Integrated links to product details for informed shopping decisions.",
        "Environmentally conscious theme to promote sustainable practices."
      ],      link: "https://shiny-marzipan-170c14.netlify.app",
      backgroundImage:
        "https://i.ibb.co.com/zrhqXyk/chrome-h-Uqs-WNQo-Nz.png",
    },
    {
      title: "Summer SALE",
      description:
      "A vibrant and interactive website designed to promote and showcase the best deals during the summer sale season, ensuring an engaging and smooth shopping experience for users.",
      details:
      [
        "Dynamic display of discounted products with striking visuals.",
        "Seasonal theme with bright and appealing summer colors.",
        "Interactive banners and call-to-action buttons to boost conversions.",
        "User-friendly navigation to browse products and deals easily.",
        "Responsive design to ensure compatibility across all devices.",
        "Countdown timers for limited-time offers to create urgency.",
        "Search and filter options to find the best deals quickly.",
        "Smooth animations and hover effects for a modern touch.",
        "Fast loading times for an optimal user experience.",
        "Secure checkout process with an intuitive cart system."
      ],      link: "https://roaring-chimera-3b4f39.netlify.app",
      backgroundImage: "https://i.ibb.co.com/k1JXcKq/chrome-D2jz1-DXB2-F.png",
    },
    {
      title: "PH Tube",
      description:
      "A sleek and user-centric platform designed for streaming and sharing high-quality video content, delivering an engaging and seamless viewing experience for users.",
      details:
      [
        "Modern and intuitive user interface with easy navigation.",
        "High-definition video streaming with adaptive quality control.",
        "Category-based video browsing for easy content discovery.",
        "Responsive design ensuring compatibility across devices.",
        "Interactive video player with controls for playback, volume, and captions.",
        "Search functionality to find videos quickly and efficiently.",
        "Customizable playlists for users to organize their favorite content.",
        "Secure and scalable backend for video uploads and streaming.",
        "Engaging animations and hover effects for a dynamic experience.",
        "Fast loading times to enhance user satisfaction."
      ],      link: "https://amazing-panda-ed0dcb.netlify.app",
      backgroundImage: "https://i.ibb.co.com/cgkCY2t/chrome-ehsl7-Vif2-A.png",
    },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default setting for larger devices
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    dots: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 768, // For medium devices (like tablets)
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 640, // For small devices (like phones)
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};


  return (
    <div className="p-10 rounded-lg bg-white/10 backdrop-blur-lg text-white ">
      <h1 className="text-4xl font-bold font-serif mb-8 text-center">Portfolio</h1>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Left: Project Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                {project.title}
              </h2>
              <p className="text-gray-300 font-light mb-4">
                {project.description}
              </p>

              {expandedProjectIndex === index ? (
                <>
                  <ul className="text-gray-300 font-light mb-4">
                    {Array.isArray(project.details) ? (
                      project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="list-disc ml-5">
                          {detail}
                        </li>
                      ))
                    ) : (
                      <p>{project.details}</p>
                    )}
                  </ul>
                  <button
                    onClick={() => setExpandedProjectIndex(null)}
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300 underline"
                  >
                    Less
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setExpandedProjectIndex(index)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300 underline"
                >
                  More . . .
                </button>
              )}
            </div>

            {/* Right: Image Section */}
            <div
              className="relative bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center group"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.backgroundImage})`,
                height: "300px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bg-white/30 backdrop-blur-md text-white py-2 px-4 rounded-lg hover:bg-white/50 transition-all duration-300 ease-in-out shadow-lg border border-white/20"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
const projects = [
  {
    title: "Amazing Image Gallery",
    description:
      "This project is a dynamic and interactive image gallery built using HTML, JavaScript, and React. It offers a visually appealing interface with exciting features, including:",
    details: [
      "Animated hover effects to enhance user engagement.",
      "Lightbox functionality with captions and navigation for an immersive viewing experience.",
      "Dynamic image loading to optimize performance.",
      "Masonry layout for a modern, aesthetic design.",
      "Modal with image details to provide additional context for each image.",
      "Filterable gallery for easy navigation and categorization.",
      "3D effects for added depth and creativity.",
      "Carousel format with smooth transitions, allowing users to view images sequentially.",
      "Zoom-in feature for detailed image exploration.",
    ],
    link: "https://comforting-madeleine-e0a5fa.netlify.app",
    backgroundImage:
      "https://i.ibb.co.com/4KFYhrd/chrome-MVGOgd8u-Nx.png",
  },
  {
    title: "Exciting Music Player",
    description:
      "A fully interactive music player with a visually engaging interface, allowing users to play, pause, and skip through tracks.",
    details:
      "Developed using JavaScript, this project incorporates custom playlists, dynamic audio controls, and modern styling with Tailwind CSS.",
    link: "https://benevolent-pixie-e4a0bc.netlify.app",
    backgroundImage:
      "https://i.ibb.co.com/QbS54cb/chrome-fut-CUKFLgb.png",
  },
  {
    title: "Cool Calculator",
    description:
      "A beautifully designed calculator with basic arithmetic functions, crafted using Tailwind CSS for a modern UI.",
    details:
      "The calculator supports addition, subtraction, multiplication, and division with responsive design and keyboard inputs.",
    link: "https://effortless-mousse-95f705.netlify.app",
    backgroundImage:
      "https://i.ibb.co.com/dGRtYNB/chrome-warew-EEpte.png",
  },
  {
    title: "E-Commerce Website",
    description:
      "Shop sustainably with our eco-friendly products, designed to minimize your environmental impact without compromising on quality.",
    details:
      "This project includes features like a dynamic product catalog, cart management, and seamless checkout using React and Tailwind CSS.",
    link: "https://shiny-marzipan-170c14.netlify.app",
    backgroundImage:
      "https://i.ibb.co.com/zrhqXyk/chrome-h-Uqs-WNQo-Nz.png",
  },
  {
    title: "Summer SALE",
    description:
      "A vibrant and interactive web interface that captures the excitement of a seasonal sale!",
    details:
      "Developed using JavaScript, this project incorporates custom playlists, dynamic audio controls, and modern styling with Tailwind CSS.",
    link: "https://roaring-chimera-3b4f39.netlify.app",
    backgroundImage: "https://i.ibb.co.com/k1JXcKq/chrome-D2jz1-DXB2-F.png",
  },
  {
    title: "PH Tube",
    description:
      "A photo-sharing platform with unique features like seamless navigation, image filters, and smooth user experience.",
    details:
      "Developed using JavaScript, this project incorporates custom playlists, dynamic audio controls, and modern styling with Tailwind CSS.",
    link: "https://amazing-panda-ed0dcb.netlify.app",
    backgroundImage: "https://i.ibb.co.com/cgkCY2t/chrome-ehsl7-Vif2-A.png",
  },
];