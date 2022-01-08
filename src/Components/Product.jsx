import Layout from "./Layout/Layout";
import {productsData} from './data.js';
import { Row, Container, Col} from 'react-bootstrap'
import { Link } from "@reach/router";
import { useState } from "react";



function Product() {
    const [catagores, setCatagores] = useState('All');
    const [minprice, setMinPrice] = useState(0);
    const [maxprice, setMaxPrice] = useState(200);

    
    function filter() {
        const productData = productsData.filter(product => product.price.sell >= minprice && product.price.sell <= maxprice)

        if(catagores === 'Men' || catagores === 'T-shirt'){
            const men = productData.filter(product => product.catagores[0].text === 'Men')

            if(catagores === 'T-shirt'){
                return men.filter(product => product.catagores[1].text === 'T-shirt');
            }else{
                return men
            }    
        }else if(catagores === 'Women' || catagores === 'Jeans' || catagores === 'Sweaters' || catagores === 'Tops'){
            const women = productData.filter(product => product.catagores[0].text === 'Women')

            if(catagores === 'Jeans'){
                return women.filter(product => product.catagores[1].text === 'Jeans')
            }else if(catagores === 'Sweaters'){
                return women.filter(product => product.catagores[1].text === 'Sweaters')
            }else if(catagores === 'Tops'){
                return women.filter(product => product.catagores[1].text === 'Tops')
            }else{
                return women
            }

        }
        
        return productData
    };

    return(
       <Layout>
            <Container>
                {/* <div className="bredcrumbs py-3" >
                    <span>Shop /</span>
                </div> */}
                <div className="filter">
                    <h3>Filter:</h3>
                    <ul>
                       <li>
                           <span onClick={() => setCatagores('All')}style={catagores === 'All' ? {color: 'red'} : null}>All</span>
                        </li>
                       <li>
                           <span onClick={() => setCatagores('Men')} style={catagores === 'Men' ? {color: 'red'} : null}>Men</span>
                        <ul>
                            <li>
                                <span onClick={() => setCatagores('T-shirt')} style={catagores === 'T-shirt' ? {color: 'red'} : null}>T-Shirt</span>
                            </li>
                        </ul>
                       </li>
                       <li>
                           <span  onClick={() => setCatagores('Women')} style={catagores === 'Women' ? {color: 'red'} : null}>Women</span>
                           <ul>
                               <li>
                                   <span onClick={() => setCatagores('Jeans')} style={catagores === 'Jeans' ? {color: 'red'} : null}>Jeans</span>
                                   </li>
                               <li>
                                   <span onClick={() => setCatagores('Sweaters')} style={catagores === 'Sweaters' ? {color: 'red'} : null}>Sweaters</span>
                                   </li>
                               <li>
                                   <span onClick={() => setCatagores('Tops')} style={catagores === 'Tops' ? {color: 'red'} : null}>Tops</span>
                                </li>
                           </ul>
                       </li>
                       <li><span>Shoes</span></li>
                       <li><span>Clothing</span>
                        <ul>
                            <li><span>Hoodies</span></li>
                        </ul>
                       </li>
                       <li><span>Bags</span></li>
                    </ul>
                    <div className="price-filter">
                        <h5>Filter by Price:</h5>
                        <div className="from-group" style={{display: 'flex', justifyContent: 'left', gap: '1rem'}}>
                            <div className="min">
                                <label htmlFor="min">Min $</label>
                                <input type="number" id="from" value={minprice} onChange={(e) => setMinPrice(e.target.value)}/>
                            </div>
                            <div className="max">
                                <label htmlFor="max">Max $</label>
                                <input type="number" id="to" value={maxprice} onChange={(e) => setMaxPrice(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <Row className="my-5">

                {filter().map(item => (
                    <Col lg='3' md='4' sm='6'>
                        <div className="item-container">

                            <div className="image">
                               {item.images.map(imgItem => (
                                   <Link to={item.link}> <img src={imgItem.original} alt={imgItem.alt} width="100%" height="100%" className="img-fluid"/></Link>
                               ))}
                                <div className="cart">
                                   <button> Add to cart </button>
                               </div>
                               <div className="quick-view">
                                   <Link to=''>Quick View</Link>
                               </div>
                            </div>

                            <div className="text">
                                <div className="catagorey-title">
                                    {item.catagores[0].text}
                                </div>

                                <div className="product-title">
                                    <p><Link to={item.link}>{item.title}</Link></p>
                                </div>

                                <div className="price">
                                    <span>Price:</span>
                                    {item.price.regular &&  <span className={item.price.regular ? 'line-through' : "regular-price"}>
                                    {item.price.regular}$</span>}

                                    <span style={{marginLeft: '5px'}}>{item.price.sell}$</span>
                                </div>
                            </div>

                        </div>
                    </Col>
                    ))}

                </Row>

            </Container>
       </Layout>
    )
}

export default Product;