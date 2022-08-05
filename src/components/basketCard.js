import { useBasket } from "../context/basketContext";

function BasketCard() {

    const { basket } = useBasket();


    return (<>

        {
            basket.map((item, index) => (
                <div key={index} className="container">
                    <div className="row py-2 mb-5 border border-2">
                        <div className="col-sm d-flex justify-content-center">
                            <img className="w-25 basket-card-img" src={item.imgUrl} />
                        </div>
                        <div className="col-sm">
                            <p className="card-product-name">{item.name}</p>
                            <p className="card-product-name">{item.price} TL</p>
                        </div>
                        <div className="col-sm">
                            <button className="bg-warning rounded-circle border border-0 text-light">+</button>
                            <p>{item.count}</p>
                        </div>
                    </div>
                </div>
            ))
        }


    </>);
}

export default BasketCard;