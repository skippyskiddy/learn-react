import Profile from './profile_props.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name="Maria Skłodowska-Curie" 
        img='https://i.imgur.com/szV5sdGs.jpg'
        width={70}
        height={70}
        profession='physicist and chemist'
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
        discovered='polonium (element)' />
      <Profile 
        name="Katsuko Saruhashi" 
        img='https://i.imgur.com/YfeOqp2s.jpg'
        width={70}
        height={70}
        profession='geochemist'
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered='a method for measuring carbon dioxide in seawater' />
    </div>
  );
}
