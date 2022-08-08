import BasketCard from "../components/basketCard";
import Header from "../components/header";
import { useBasket } from "../context/basketContext";
import { useNavigate } from "react-router-dom";

function Basket() {

    const { basket, setBasket } = useBasket();

    const navigate = useNavigate();

    let discount1 = false;


    const complete = () => {
        alert('Siparişiniz Alınmıştır');
        navigate('/')

        setBasket([]);
    }

    let total = basket.reduce((acc, product) => acc + (product.price * product.count), 0)


    
        if (total > 10000) {
            let newTotal = (total * 10) / 100;
            total = total - newTotal;
            discount1 = true;
            
        }
        else {
            discount1 = false;
          
        }
    






    return (<>
        <Header />
        <div className="container mt-5 py-5">
            <h5 className="basket-title mt-5">Sepetim ({basket.length} Ürün)</h5>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-10">
                    <BasketCard />

                </div>
                <div className="col-2 border border-2 rounded-4 p-3 h-75">
                    <p className="basket-total-title">SEÇİLEN ÜRÜNLER ({basket.reduce((acc, item) => acc + (item.count), 0)})</p>
                    <p className="basket-total">{total} TL</p>
                    {
                        discount1 && <p className="text-success">%10 indirim uygulandı</p>
                    }
                    <button onClick={complete} className="basket-button mb-5">Alışverişi Tamamla</button>
                    {
                        basket.map((item, index) => (
                            <p key={index}>{item.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>

    </>);
}

export default Basket;