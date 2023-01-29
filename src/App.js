import "./styles.css";
export const tenHighestPopulation = [
  { country: "World", population: 7693165599, emoji: "🌎" },
  { country: "China", population: 1377422166, emoji: "🇨🇳" },
  { country: "India", population: 1295210000, emoji: "🇮🇳" },
  { country: "USA", population: 323947000, emoji: "🇺🇸" },
  { country: "Indonesia", population: 258705000, emoji: "🇮🇩" },
  { country: "Brazil", population: 206135893, emoji: "🇧🇷" },
  { country: "Pakistan", population: 194125062, emoji: "🇵🇰" },
  { country: "Nigeria", population: 186988000, emoji: "🇳🇬" },
  { country: "Bangladesh", population: 161006790, emoji: "🇧🇩" },
  { country: "Russia", population: 146599183, emoji: "🇷🇺" },
  { country: "Japan", population: 126960000, emoji: "🇯🇵" }
];
function percent(num) {
  return (num / tenHighestPopulation[0].population) * 100;
}
const Table = ({ obj }) => {
  const grid = obj.map((data) => {
    let styles = {
      background: "#ffa500",
      width: percent(data.population) + "%",
      height: "100%"
    };
    return (
      <tr className="row">
        <td className="Country">
          {data.country} {data.emoji}
        </td>
        <td className="max">
          <div className="bar" style={styles}>
            {" "}
          </div>
        </td>
        <td className="numbers">{data.population}</td>
      </tr>
    );
  });
  return grid;
};
export default function App() {
  return (
    <>
      <div className="App">
        <h1>World Population</h1>
        <h2>React Based</h2>
        <p>
          <small>Ten most populated Countries</small>
        </p>
        <table className="graph">
          <Table obj={tenHighestPopulation} />
        </table>
      </div>
    </>
  );
}
