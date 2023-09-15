import Images from './Images';

const carouselContent = [
  {
    image: 'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    alt: 'Watefall',
  },
  {
    image: 'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    alt: 'Night Desert',
  },
  {
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    alt: 'Field with flowers',
  },
  {
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    alt: 'Parrot',
  },
  {
    image:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    alt: 'Kitten',
  },
];

function App() {
  return <Images content={carouselContent} />;
}

export default App;
