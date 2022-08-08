import { useBasket } from "../context/basketContext";

function BasketCard() {

    const { basket, setBasket } = useBasket();

    const count = (id) => {
        let someProduct = basket.find(item => {
            return item.id === id
        })

        if (someProduct) {
            let newBasket = basket.map(item => {
                return item.id === someProduct.id ? { ...item, count: item.count + 1 } : item
            })
            setBasket([...newBasket]);
        }
    }

    const deleteCount = (ix) => {
        let newBasket = basket;
        if (newBasket[ix].count === 1) {
            newBasket.splice(ix, 1);
        } else {
            newBasket[ix].count = (newBasket[ix].count) - 1
        }

        setBasket([...newBasket]);
    }

    return (<>

        {
            basket.map((item, index) => (
                <div key={index} className="container">

                    <div className="row py-5 mb-5 border border-2 rounded-4">
                        <div className="col-sm d-flex justify-content-center">
                            <img className="w-25 basket-card-img" src={item.imgUrl} />
                        </div>
                        <div className="col-sm">
                            <p className="card-product-name">{item.name}</p>
                            <p className="card-product-name text-danger">{item.price} TL</p>
                        </div>
                        <div className="col-sm d-flex align-items-center">
                            <button onClick={() => count(item.id)} className="bg-warning rounded-circle border border-0 text-light">+</button>
                            <p className="mt-3 ms-2 me-2">{item.count}</p>
                            <button onClick={() => deleteCount(index)} className="bg-danger rounded-circle border border-0 text-light">-</button>
                        </div>
                    </div>
                </div>

            ))
        }



    </>);
}

export default BasketCard;