import { FC } from "react";
import ProductCard from "../components/ProductCard";
import { Header } from "../components/Header";
interface Props {
  toggle: any;
}
export const Home: FC<Props> = ({ toggle }) => {
  return (
    <div>
      <Header toggle={toggle} />

      <ProductCard />
    </div>
  );
};

export default Home;
