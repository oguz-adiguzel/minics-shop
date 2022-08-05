import BasketCard from "../components/basketCard";
import Header from "../components/header";
import { useBasket } from "../context/basketContext";

function  Basket() {

    const {basket} = useBasket();

    return ( <>
        <Header />
        <div className="container mt-5 py-5">
            <h5 className="basket-title mt-5">Sepetim</h5>
        </div>

        <div className="container">
            <BasketCard />
        </div>

    </> );
}

export default  Basket;