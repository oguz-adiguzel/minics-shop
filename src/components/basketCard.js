import { useBasket } from "../context/basketContext";
import cargo from '../cargo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BasketCard() {
    const { basket, setBasket } = useBasket();
    const count = (id) => {
        setTimeout(() => {
            let someProduct = basket.find(item => {
                return item.id === id
            })

            if (someProduct) {
                let newBasket = basket.map(item => {
                    return item.id === someProduct.id ? { ...item, count: item.count + 1 } : item
                })
                setBasket([...newBasket]);
                toast.success('Ürün eklendi', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }, 350);

    }
    const deleteCount = (ix) => {
        setTimeout(() => {
            let newBasket = basket;
            if (newBasket[ix].count === 1) {
                newBasket.splice(ix, 1);
                toast.error('Ürün kaldırıldı', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                newBasket[ix].count = (newBasket[ix].count) - 1;
                toast.warning('Ürün çıkarıldı', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                if (!newBasket[ix].count) {
                    toast.error('Ürün kaldırıldı', {
                        position: "top-right",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }

            setBasket([...newBasket]);
        }, 350);

    }
    const deleteBasket = (ix) => {
        let newBasket = basket;
        newBasket.splice(ix, 1);
        setBasket([...newBasket]);
        toast.error('Ürün kaldırıldı', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (<>
        {
            basket.map((item, index) => (
                <div key={index} className="container">
                    <div className="row mb-5 border border-2 rounded-4">
                        <div className="col-12 border-bottom py-2">
                            <span>Satıcı :</span> <span className="fw-bold">{item.seller}</span>
                            <div className="d-flex align-items-center">
                                <img className="cargo-svg" src={cargo} />
                                <span className="cargo-p">Kargo Bedava</span>
                            </div>
                        </div>
                        <div className="col-sm d-flex justify-content-center mt-4 mb-4">
                            <img className=" basket-card-img" src={item.imgUrl} />
                        </div>
                        <div className="col-sm mt-4 mb-4">
                            <p className="card-product-name">{item.name}</p>
                            <p className="card-product-name text-danger">{item.price} TL</p>
                        </div>
                        <div className="col-sm d-flex align-items-center mt-4 mb-4 justify-content-start">
                            <button onClick={() => count(item.id)} className="bg-warning circle-button text-light">+</button>
                            <p className="mt-3 ms-2 me-2">{item.count}</p>
                            <button onClick={() => deleteCount(index)} className="bg-danger circle-button text-light">-</button>
                            <button onClick={() => deleteBasket(index)} className="bg-danger border border-0 rounded-2 ms-2 text-light">Kaldır</button>

                        </div>
                    </div>
                </div>
            ))
        }
    </>);
}

export default BasketCard;