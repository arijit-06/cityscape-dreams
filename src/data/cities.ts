import chennaiImage from '@/assets/chennai.jpg';
import delhiImage from '@/assets/delhi.jpg';
import kolkataImage from '@/assets/kolkata.jpg';
import bengaluruImage from '@/assets/bengaluru.jpg';
import mumbaiImage from '@/assets/mumbai.jpg';

export interface City {
  id: string;
  name: string;
  tagline: string;
  imageUrl: string;
}

export const cities: City[] = [
  {
    id: 'chennai',
    name: 'Chennai',
    tagline: 'Gateway to South India',
    imageUrl: chennaiImage,
  },
  {
    id: 'delhi',
    name: 'Delhi',
    tagline: 'Heart of India',
    imageUrl: delhiImage,
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    tagline: 'The Cultural Capital of India',
    imageUrl: kolkataImage,
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    tagline: 'India\'s Silicon Valley',
    imageUrl: bengaluruImage,
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    tagline: 'City of Dreams',
    imageUrl: mumbaiImage,
  },
];