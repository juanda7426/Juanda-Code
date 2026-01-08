export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  year: string;
}

export interface UserProfile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  skills: string[];
  email: string;
  socials: {
    platform: string;
    url: string;
  }[];
}