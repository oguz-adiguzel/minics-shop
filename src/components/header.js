import { useBasket } from '../context/basketContext';
import logo from '../minics-logo.png';
function Header() {

    const { basket,setBasket } = useBasket();

    const deleteBasket = (ix) => {
        let newBasket = basket;
        if (newBasket[ix].count === 1) {
            newBasket.splice(ix,1);
        }else{
            newBasket[ix].count = (newBasket[ix].count) - 1
        }

        setBasket([...newBasket]);
    }

    return (<>

        <div className="container-fluid nav position-fixed top-0 ">
            <img className='logo' src={logo} />
            <ul className="nav-ul">
                <li className="nav-item"><a className="nav-link" href="#/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">Product</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">Why Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#/">Testimonial</a></li>
                <li className="nav-item"><div className="dropdown">
                    <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sepetim - {basket.reduce((acc, item) => acc + (item.count), 0)}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            basket.map((item, index) => (
                                <li key={index} className='d-flex mt-2 align-items-center'><a className="dropdown-item" href="#/"><img className='basket-img me-2' src={item.imgUrl} />{item.name} - {item.price} TL - {item.count} Adet</a><button onClick={() => deleteBasket(index)} className='btn btn-sm btn-danger ms-5'>X</button></li>
                            ))
                        }
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#/">Toplam - {basket.reduce((acc, product) => acc + (product.price * product.count), 0)} TL</a></li>
                        <li><button className='btn btn-warning w-100'>Sepete Git</button></li>
                    </ul>
                </div></li>
            </ul>
        </div>

    </>);
}

export default Header;