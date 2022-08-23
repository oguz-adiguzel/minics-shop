import Header from "../components/header";
import ProductCard from "../components/productCard";
import { useBasket } from "../context/basketContext";
import fastDelivery from '../fast-delivery.svg';
import shipping from '../shipping.svg';
import quality from '../quality.svg';
import location from '../location.svg';
import phone from '../phone.svg';
import mail from '../mail.svg';

function Home() {

    const { basket, setBasket } = useBasket;

    const product = [
        {
            id: 1,
            name: 'Canon EOS 550D',
            imgUrl: 'https://html.design/demo/minics/images/p1.png',
            price: 7849,
            point: '9',
            seller: 'Minics'
        },
        {
            id: 2,
            name: 'Rampage Sg-R707',
            imgUrl: 'https://html.design/demo/minics/images/p2.png',
            price: 325,
            point: '8',
            seller: 'TeknoStore'
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
            id: 4,
            name: 'Canon EF 50mm f/1.8 II Objektif',
            imgUrl: 'https://html.design/demo/minics/images/p4.png',
            price: 2115,
            point: '9.2',
            seller: 'Bimeks'

        },
        {
            id: 5,
            name: 'Focal Shape 65 Stüdyo Monitörü',
            imgUrl: 'https://www.zuhalmuzik.com/images/product/ALPHA%2080_1.png',
            price: 14757,
            point: '9.5',
            seller: 'Teknosa'

        },
        {
            id: 6,
            name: 'Philips SPL9405 USB PS3/PC',
            imgUrl: 'https://html.design/demo/minics/images/p6.png',
            price: 139,
            point: '8',
            seller: 'Media Markt'

        },
        {
            id: 7,
            name: 'Dji Phantom 4 Pro V2.0',
            imgUrl: 'https://html.design/demo/minics/images/p7.png',
            price: 107959,
            point: '8',
            seller: 'EasyCep'

        },
        {
            id: 8,
            name: 'Nikon D3200 18-55mm KİT',
            imgUrl: 'https://html.design/demo/minics/images/p8.png',
            price: 4507,
            point: '8.3',
            seller: 'Migros'

        },
        {
            id: 9,
            name: 'Trust 17003 Exıs Full Hd',
            imgUrl: 'https://html.design/demo/minics/images/p9.png',
            price: 135,
            point: '7.8',
            seller: 'Hepsiburada'

        }
    ]
    return (<>

        <Header />
        <div className="container carousel mt-5 py-5">
            <div className="row">
                <div className="col-12">
                    <p className="text-center text-danger blink-1">10000 TL ve Üzeri Alışverişinize %5 İndirim</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm d-flex flex-column justify-content-center carousel">
                    <h4 className="carousel-title">Mağazamıza hoş geldiniz</h4>
                    <p className="carousel-info text-secondary mt-3">Türkiye'nin en uygun fiyat garantisi sunan ve en iyi kargo hizmeti veren sanal mağazasına hoşgeldiniz</p>
                    <button type="button" className="btn btn-warning p-2 read-more-button text-light mt-3">Read More</button>
                </div>
                <div className="col-sm d-flex justify-content-end">
                    <img className="w-100" src="https://html.design/demo/minics/images/slider-img.png" />
                </div>
            </div>
        </div>
        <div className="container mt-5 product">
            <h4 className="text-center fw-bold product-title mt-5">Ürünlerimiz</h4>
            <div className="row py-5 d-flex justify-content-between">
                {
                    product.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))
                }
            </div>
        </div>

        <div className="container-fluid article mt-5 h-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-sm article-left text-light d-flex flex-column justify-content-center align-items-center">
                    <p className="article-left-title align-self-start">Sizin İçin En İyisini Sunuyoruz</p>
                    <p className="article-left-info">Totam architecto rem beatae veniam, cum officiis adipisci soluta perspiciatis ipsa, expedita maiores quae accusantium. Animi veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis sit labore officia! Repellat expedita, deserunt eum soluta rem culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae aperiam animi sint earum, ex unde cupiditate, molestias dolore quos quas possimus eveniet facilis magnam? Vero, dicta.</p>
                </div>
                <div className="col-sm article-right">
                    <img className="article-right-img" src="https://html.design/demo/minics/images/about-img.jpg" />
                </div>
            </div>
        </div>

        <div className="container mt-5 mb-5">
            <div className="row py-5">
                <div className="col-12">
                    <h5 className="text-center display-6 fw-bold">Neden Bizi Seçmelisiniz</h5>
                </div>
            </div>
            <div className="row media-article-card">
                <div className="col-sm border border-2 d-flex flex-column align-items-center p-4 me-4 article-card">
                    <img className="fast-delivery" src={fastDelivery} />
                    <p className="fw-bold fs-5 mt-2">HIZLI TESLİMAT</p>
                    <p className="fs-5 text-center">Türkiye'nin her yerine 2 gün içinde teslimat</p>
                </div>
                <div className="col-sm border border-2 d-flex flex-column align-items-center p-4 me-4 article-card">
                    <img className="fast-delivery" src={shipping} />
                    <p className="fw-bold fs-5 mt-2">ÜCRETSİZ KARGO</p>
                    <p className="fs-5 text-center">Türkiye'nin her yerine ücretsiz ve hızlı kargo</p>
                </div>
                <div className="col-sm border border-2 d-flex flex-column align-items-center p-4 article-card">
                    <img className="fast-delivery" src={quality} />
                    <p className="fw-bold fs-5 mt-2">EN İYİ KALİTE</p>
                    <p className="fs-5 text-center">Tamamen orijinal ürün ve en iyi hizmet kalitesi</p>
                </div>
            </div>
        </div>

        <div className="container-fluid footer text-light d-flex justify-content-center px-5">
            <div className="row">
                <div className="col-sm p-4 me-5 d-flex justify-content-start media-footer-1">
                    <ul className="footer-ul">
                        <li>
                            <span className="footer-logo">Minics</span>
                        </li>
                        <li className="mt-2">
                            <span className="me-2"><img className="footer-icon" src={location} /></span><span>Address</span>
                        </li>
                        <li className="mt-2">
                            <span className="me-2"><img className="footer-icon" src={phone} /></span><span>+01 1234567890</span>
                        </li>
                        <li className="mt-2">
                            <span className="me-2"><img className="footer-icon" src={mail} /></span><span>demo@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div className="col-sm p-4 me-5 d-flex align-items-start flex-column media-footer-2">
                    <p className="fs-4">Information</p>
                    <p>Eligendi sunt, provident, debitis nemo, facilis cupiditate velit libero dolorum aperiam enim nulla iste maxime corrupti ad illo libero minus.</p>
                </div>
                <div className="col-sm p-4 me-5 d-flex justify-content-start">
                    <ul className="footer-ul">
                        <li className="fs-4">Useful Link</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Why Us</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div className="col-sm py-4 px-3 d-flex flex-column align-items-start media-footer-4">
                    <p className="fs-4">Newsletter</p>
                    <input className="footer-input" placeholder="Enter your email" />
                    <div>
                        <button className="footer-button">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Home;