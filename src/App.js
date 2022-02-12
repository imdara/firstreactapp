import logo from './logo.svg';
import './App.css';
import Card from './Card';

const cardData = [
  {id:1, name: "Chrome", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1024px-Google_Chrome_icon_%28February_2022%29.svg.png"},
  {id:2, name: "Firefox", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1024px-Firefox_logo%2C_2019.svg.png"},
  {id:3, name: "Safari", imgUrl:"https://upload.wikimedia.org/wikipedia/en/7/71/Safari_14_icon.png"},
  {id:4, name: "Opera", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/1024px-Opera_2015_icon.svg.png"},
  {id:5, name: "Edge", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png"}
];

function App() {
  return (
    <div className="App">
    <h2>Browsers</h2>
    <ul>
      {
        cardData.map((card) => {return <Card key={card.id} id={card.id} name={card.name} imgUrl={card.imgUrl} />})
      }
    </ul>
    </div>
  );
}

export default App;
