// AnimalPage.jsx, BirdPage.jsx, InsectPage.jsx, FishPage.jsx


import { useParams } from 'react-router-dom';
import Card from './Card';
import animalList from './AnimalList';
import { birds } from '../AnimalList';

const AnimalPage = () => {
  const { category } = useParams();
  const animals = animalList[category] || [];

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Page</h2>
      {animals.map((animal) => (
        <Card key={animal} name={animal} likes={0} category={category} />
        <Card key={birds} name={birds} likes={0} category={category} />
        
      ))}
    </div>
  );
};

export default AnimalPage;
