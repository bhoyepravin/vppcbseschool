// data/infrastructureData.js

import {
  building_01,
  building_02,
  gallaryimg1,
  gallaryimg2,
  gallaryimg3,
  gallaryimg4,
  gallaryimg5,
  gallaryimg6,
  gallaryimg7,
  infrastructure_1,
  infrastructure_10,
  infrastructure_11,
  infrastructure_12,
  infrastructure_13,
  infrastructure_14,
  infrastructure_2,
  infrastructure_3,
  infrastructure_4,
  infrastructure_5,
  infrastructure_6,
  infrastructure_7,
  infrastructure_8,
  infrastructure_9,
} from "../../assets";

// Import all infrastructure images (assuming you have infrastructure_1.jpg to infrastructure_14.jpg)

const infrastructureData = {
  sections: [
    {
      id: "kg-infrastructure",
      title: "KG Infrastructure",
      subtitle: "Explore Our Campus Virtually",
      description:
        "Take a 360° virtual tour of our state-of-the-art infrastructure, modern classrooms, and extensive facilities.",
      type: "gallery",
      // Using imported images for the first section with alt text
      images: [
        {
          id: 1,
          image: infrastructure_1,
          caption: "Main Campus Building",
          alt: "KG School Main Building Front View with modern architecture",
        },
        {
          id: 2,
          image: infrastructure_2,
          caption: "School Entrance",
          alt: "KG School main entrance with welcoming gate",
        },
        {
          id: 3,
          image: infrastructure_3,
          caption: "Playground Area",
          alt: "KG School playground with children's play equipment",
        },
        {
          id: 4,
          image: infrastructure_4,
          caption: "Classroom Interior",
          alt: "KG School bright and colorful kindergarten classroom",
        },
        {
          id: 5,
          image: infrastructure_5,
          caption: "Library",
          alt: "KG School library with children's books and reading area",
        },
        {
          id: 6,
          image: infrastructure_6,
          caption: "Science Lab",
          alt: "KG School science laboratory for young learners",
        },
        {
          id: 7,
          image: infrastructure_7,
          caption: "Computer Lab",
          alt: "KG School computer lab with child-friendly computers",
        },
        {
          id: 8,
          image: infrastructure_8,
          caption: "Art Room",
          alt: "KG School art and craft room with creative displays",
        },
        {
          id: 9,
          image: infrastructure_9,
          caption: "Music Room",
          alt: "KG School music room with instruments for children",
        },
        {
          id: 10,
          image: infrastructure_10,
          caption: "Sports Facility",
          alt: "KG School indoor sports area for physical activities",
        },
        {
          id: 11,
          image: infrastructure_11,
          caption: "Auditorium",
          alt: "KG School auditorium for performances and assemblies",
        },
        {
          id: 12,
          image: infrastructure_12,
          caption: "Cafeteria",
          alt: "KG School cafeteria with child-sized furniture",
        },
        {
          id: 13,
          image: infrastructure_13,
          caption: "Administration Block",
          alt: "KG School administration office area",
        },
        {
          id: 14,
          image: infrastructure_14,
          caption: "Garden Area",
          alt: "KG School outdoor garden and nature learning area",
        },
      ],
    },
    {
      id: "school-building",
      title: "School Building",
      subtitle: "Modern Architecture & Design",
      description:
        "Our school building features contemporary design with spacious classrooms and excellent facilities.",
      type: "gallery",
      images: [
        {
          id: 1,
          image: gallaryimg1,
          caption: "Main Building Front View",
          alt: "School building exterior with modern architecture and green surroundings",
        },
        {
          id: 2,
          image: gallaryimg2,
          caption: "Spacious Corridors",
          alt: "School corridors with bright lighting and student artwork displays",
        },
        {
          id: 3,
          image: gallaryimg3,
          caption: "Modern Classroom",
          alt: "Modern classroom with smart board and comfortable seating",
        },
        {
          id: 4,
          image: gallaryimg4,
          caption: "Modern Classroom",
          alt: "Modern classroom with smart board and comfortable seating",
        },
        {
          id: 5,
          image: gallaryimg5,
          caption: "Modern Classroom",
          alt: "Modern classroom with smart board and comfortable seating",
        },
        {
          id: 6,
          image: gallaryimg6,
          caption: "Modern Classroom",
          alt: "Modern classroom with smart board and comfortable seating",
        },
        {
          id: 7,
          image: gallaryimg7,
          caption: "Modern Classroom",
          alt: "Modern classroom with smart board and comfortable seating",
        },
        {
          id: 8,
          image: building_01,
          caption: "Modern Classroom",
          alt: "Modern classroom with smart board and comfortable seating",
        },
        {
          id: 9,
          image: building_02,
          caption: "Modern Classroom",
          alt: "Modern classroom with smart board and comfortable seating",
        },
      ],
    },
    // {
    //   id: "science-labs",
    //   title: "Science Laboratories",
    //   subtitle: "Hands-On Learning Experience",
    //   description:
    //     "Equipped with latest technology and safety standards for practical learning.",
    //   type: "gallery",
    //   images: [
    //     {
    //       id: 1,
    //       image:
    //         "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //       caption: "Computer Lab",
    //       alt: "School computer laboratory with latest computers and equipment",
    //     },
    //     {
    //       id: 2,
    //       image:
    //         "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //       caption: "Physics Lab",
    //       alt: "Physics laboratory with modern experiment equipment and apparatus",
    //     },
    //     {
    //       id: 3,
    //       image:
    //         "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //       caption: "Chemistry Lab",
    //       alt: "Chemistry laboratory with safety equipment and experiment stations",
    //     },
    //     {
    //       id: 4,
    //       image:
    //         "https://images.unsplash.com/photo-1530026405189-21e2c5f6f5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //       caption: "Biology Lab",
    //       alt: "Biology laboratory with microscopes and specimen collections",
    //     },
    //   ],
    // },
    // {
    //   id: "sports-facilities",
    //   title: "Sports Facilities",
    //   subtitle: "Physical Development & Team Spirit",
    //   description:
    //     "State-of-the-art sports infrastructure for physical fitness and competitive sports.",
    //   type: "gallery",
    //   images: [
    //     {
    //       id: 1,
    //       image:
    //         "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //       caption: "Indoor Sports Complex",
    //       alt: "Indoor sports complex with basketball court and multi-purpose area",
    //     },
    //     {
    //       id: 2,
    //       image:
    //         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //       caption: "Swimming Pool",
    //       alt: "School swimming pool with safety features and trained instructors",
    //     },
    //     {
    //       id: 3,
    //       image:
    //         "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //       caption: "Athletics Track",
    //       alt: "Professional running track for athletics and sports training",
    //     },
    //   ],
    // },
  ],
};

export default infrastructureData;
