const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList(name) {
  return (
    <div style={person.theme}>
      <h1>{name}'s' Todos</h1>
      <img className="avatar"
      src="URL"
      alt={name}
      />
    </div>
  );
}
