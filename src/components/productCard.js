import { useBasket } from "../context/basketContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({ product }) {
    const { id, name, imgUrl, price, point } = product;
    const { basket, setBasket } = useBasket();

    const addBasket = () => {
        let someProduct = basket.find(item => {
            return item.id === id
        })

        if (someProduct) {
            let newBasket = basket.map(item => {
                return item.id === someProduct.id ? { ...item, count: item.count + 1 } : item
            })
            setBasket([...newBasket]);
        } else {
            setBasket([...basket, { ...product, count: 1 }])
        }
        toast.success('Ürün Sepete Eklendi', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (<>
        <div className="col-sm-4 border-0 card mt-3">
            <div className="overlay ">
                <button onClick={addBasket} type="button" className="overlay-button me-1">Sepete Ekle</button>
            </div>
            <div className="card-img d-flex justify-content-center align-items-center">
                <img className="product-img" src={imgUrl} />
                <ToastContainer />
            </div>
            <p className="cart-title fw-bold mt-2">{name}</p>
            <div className="d-flex justify-content-between">
                <p className="card-price">{price} TL</p>
                <p className="card-point">{point}/10</p>
            </div>
        </div>
    </>);
}

export default ProductCard;