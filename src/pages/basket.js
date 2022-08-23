import BasketCard from "../components/basketCard";
import Header from "../components/header";
import { useBasket } from "../context/basketContext";
import { useNavigate } from "react-router-dom";

function Basket() {

    const recommendedProducts = [
        {
            id: 1,
            name: 'Canon EOS 550D',
            imgUrl: 'https://html.design/demo/minics/images/p1.png',
            price: 7849,
            point: '9',
            seller: 'Minics'
        },
        {
            id: 3,
            name: 'Corby Cx015 Wifi Kameralı Drone',
            imgUrl: 'https://html.design/demo/minics/images/p3.png',
            price: 1798,
            point: '7.8',
            seller: 'TekNo'
        },
        {
            id: 9,
            name: 'Trust 17003 Exıs Full Hd',
            imgUrl: 'https://html.design/demo/minics/images/p9.png',
            price: 135,
            point: '7.8',
            seller: 'Hepsi Burada'

        }
    ]
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
        let newTotal = (total * 5) / 100;
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
                {basket.length === 0 && <div className="col-sm-12 d-flex flex-column align-items-center py-5">
                    <p className="text-center  fs-3">Sepetin şuan boş</p>
                    <p className="text-center w-50">Sepetini Minics'in fırsatlarla dolu dünyasından doldurmak için
                        aşağıdaki ürünleri incelemeye başlayabilirsin.</p>
                </div>}
                <div className="col-sm-10">
                    <BasketCard />

                </div>
                {basket.length > 0 && <div className="col-sm-2 border border-2 rounded-4 py-3 h-75 ">
                    <p className="basket-total-title ">SEÇİLEN ÜRÜNLER ({basket.reduce((acc, item) => acc + (item.count), 0)})</p>
                    <p className="basket-total ">{total} TL</p>
                    {
                        discount1 && <p className="text-success">%5 indirim uygulandı</p>
                    }
                    <button onClick={complete} className="basket-button mb-5">Alışverişi Tamamla</button>
                    {
                        basket.map((item, index) => (
                            <p key={index}>{item.name}</p>
                        ))
                    }
                </div>
                }
            </div>
        </div>

        <div className="row d-flex justify-content-center">
            {basket.length === 0 && <h5 className="text-center fw-bold fs-2 my-5">Sizin İçin Seçtiklerimiz</h5>}
            {basket.length === 0 && recommendedProducts.map((item, index) => (
                <div key={index} className="col-sm-2 border-0 card mt-3 mb-5">
                    <div className="overlay ">
                        <button type="button" className="overlay-button me-1">Sepete Ekle</button>
                    </div>
                    <div className="card-img d-flex justify-content-center align-items-center">
                        <img className="product-img" src={item.imgUrl} />
                    </div>
                    <p className="cart-title fw-bold mt-2">{item.name}</p>
                    <div className="d-flex justify-content-between">
                        <p className="card-price">{item.price} TL</p>
                        <p className="card-point">{item.point}/10</p>
                    </div>
                </div>

            ))}
        </div>

    </>);
}

export default Basket;