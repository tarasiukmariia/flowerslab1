import FlowerItem from "./FlowerItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig = {};
export default function Flowers() {
  const {
    data: loadedFlowers,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/flowers", requestConfig, []);

  if (isLoading) {
    return <p className="center">loading...</p>;
  }
  if (error) {
    return <Error title="error" message={error} />;
  }

  return (
      <ul id="flowers">
        {loadedFlowers.map((flower) => (
            <FlowerItem key={flower.id} flower={flower} />
        ))}
      </ul>
  );
}
