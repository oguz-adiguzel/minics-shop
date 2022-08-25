import { useBasket } from '../context/basketContext';
import logo from '../minics-logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

    const navigate = useNavigate();

    const { basket, setBasket } = useBasket();

    const deleteBasket = (ix) => {
        let newBasket = basket;
        if (newBasket[ix].count === 1) {
            newBasket.splice(ix, 1);
        } else {
            newBasket[ix].count = (newBasket[ix].count) - 1
        }

        setBasket([...newBasket]);
        toast.error('Ürün silindi', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const deleteAllBasket = () => {
        setBasket([]);
        toast.error('Sepet temizlendi', {
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

        <ToastContainer />
        <div className="container-fluid nav position-fixed top-0">
            <img onClick={() => navigate("/")} className='logo' src={logo} />
            <ul className="nav-ul">
                {/* <li className="nav-item"><a className="nav-link" href="#/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">Product</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">Why Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">Testimonial</a></li> */}
                <li className="nav-item">
                    <div className="dropdown drop-position">
                        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sepetim - {basket.reduce((acc, item) => acc + (item.count), 0)}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {
                                basket.map((item, index) => (
                                    <li key={index} className='d-flex mt-2 align-items-center basket-drop-media'><a className="dropdown-item basket-drop-media" href="#/"><img className='basket-img me-2' src={item.imgUrl} />{item.name} - {item.price} TL - {item.count} Adet</a><button onClick={() => deleteBasket(index)} className='btn btn-sm btn-danger ms-5 me-3'>X</button></li>
                                ))
                            }
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#/">Toplam - {basket.reduce((acc, product) => acc + (product.price * product.count), 0)} TL</a></li>
                            <li className='d-flex justify-content-center'><button onClick={() => navigate('/basket')} className='btn btn-warning me-1'>Sepete Git</button><button onClick={deleteAllBasket} className='btn btn-danger ms-1'>Sepeti Boşalt</button></li>
                        </ul>
                    </div></li>
            </ul>
        </div>

    </>);
}

export default Header;