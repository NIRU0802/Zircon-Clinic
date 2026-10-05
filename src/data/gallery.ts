export interface GalleryImage {
    id: number;
    src: string;
    category: string;
    title: string;
  }
  
  export const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=90&w=2000",
      category: "Clinic",
      title: "Reception Area",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=85&w=1200",
      category: "Treatment Rooms",
      title: "Treatment Room",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=85&w=1200",
      category: "Technology",
      title: "Advanced Dental Technology",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=85&w=1200",
      category: "Team",
      title: "Our Dental Team",
    },
  ];
  
  export const galleryCategories = [
    "All",
    "Clinic",
    "Treatment Rooms",
    "Technology",
    "Team",
  ];