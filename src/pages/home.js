import Header from "../components/header";
import ProductCard from "../components/productCard";
import { useBasket } from "../context/basketContext";

function Home() {

    const { basket, setBasket } = useBasket;

    const product = [
        {
            id: 1,
            name: 'Canon EOS 550D',
            imgUrl: 'https://html.design/demo/minics/images/p1.png',
            price: 7849,
            point: '9'
        },
        {
            id: 2,
            name: 'Rampage Sg-R707',
            imgUrl: 'https://html.design/demo/minics/images/p2.png',
            price: 325,
            point: '8'
        },
        {
            id: 3,
            name: 'Corby Cx015 Wifi Kameralı Drone',
            imgUrl: 'https://html.design/demo/minics/images/p3.png',
            price: 1798,
            point: '7.8'
        },
        {
            id: 4,
            name: 'Canon EF 50mm f/1.8 II Objektif',
            imgUrl: 'https://html.design/demo/minics/images/p4.png',
            price: 2100,
            point: '9.2'
        },
        {
            id: 5,
            name: 'Focal Shape 65 Stüdyo Monitörü',
            imgUrl: 'https://www.zuhalmuzik.com/images/product/ALPHA%2080_1.png',
            price: 14757,
            point: '9.5'
        },
        {
            id: 6,
            name: 'Philips SPL9405 USB PS3/PC',
            imgUrl: 'https://html.design/demo/minics/images/p6.png',
            price: 139,
            point: '8'
        },
        {
            id: 7,
            name: 'Dji Phantom 4 Pro V2.0',
            imgUrl: 'https://html.design/demo/minics/images/p7.png',
            price: 107959,
            point: '8'
        },
        {
            id: 8,
            name: 'Nikon D3200 18-55mm KİT',
            imgUrl: 'https://html.design/demo/minics/images/p8.png',
            price: 4507,
            point: '8.3'
        },
        {
            id: 9,
            name: 'Trust 17003 Exıs Full Hd',
            imgUrl: 'https://html.design/demo/minics/images/p9.png',
            price: 135,
            point: '7.8'
        }
    ]



    return (<>
        <Header />
        
        <div className="container carousel mt-5 py-5">
            <div className="row mt-5">
                <div className="col-sm d-flex flex-column justify-content-center carousel">
                    <h4 className="carousel-title">Welcome to our shop</h4>
                    <p className="carousel-info text-secondary mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.</p>
                    <button type="button" className="btn btn-warning p-2 read-more-button text-light mt-3">Read More</button>
                </div>
                <div className="col-sm d-flex justify-content-end">
                    <img className="w-100" src="https://html.design/demo/minics/images/slider-img.png" />
                </div>
            </div>
        </div>
        <div className="container mt-5 product">
            <h4 className="text-center fw-bold product-title mt-5">Our Products</h4>
            <div className="row py-5 d-flex justify-content-between">
                {
                    product.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))
                }
            </div>
        </div>
    </>);
}

export default Home;