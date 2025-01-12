import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import "../Style/Product.scss";
import Swatchone from '../Images/Swatch 01.png';
import Swatchtwo from '../Images/Swatch 02.png';
import Swatchthree from '../Images/Swatch 03.png';
import Swatchfour from '../Images/Swatch 04.png';
import { FiSearch } from "react-icons/fi";
import { GiSlicedBread } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { TbLeaf } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
const Product = (props) => {
    const { onAdd } = props;
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='container'>
                    <div class="aem-Grid aem-Grid--12">

                        <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 oneprice">
                        
                            <img src={product.image} alt={product.title} height="380px" width="380px" />
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 rating-one">
                            <p>Clothing / Women’s / Outerwear</p>
                            <h2>{product.title}</h2>
                            <p>  $ {product.price} </p>
                            <p className="lead fw-bolder">
                                <div className='star'>
                                    <ul>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FiStar /></i>


                                    </ul>
                                </div>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor labore et dolore magna</p>
                            <hr />
                            <div className="swatch">
                                <h5>Colors</h5>
                                <img src={Swatchone} className="swatchone" alt="image1" />
                                <img src={Swatchtwo} className="swatchtwo" alt="image2" />
                                <img src={Swatchthree} className="swatchthree" alt="image2" />
                                <img src={Swatchfour} className="swatchfour" alt="image2" />
                            </div>
                            <div className='size'>
                                <h5>Size</h5>
                                <span >XS</span>
                                <span >S</span>
                                <span >M</span>
                                <span >L</span>
                                <span >XL</span>
                            </div>
                            <br />
                            <div className='static'>
                                <h5 class="qty">Quantity</h5>
                                <div class="static1">
                                    <span className='start'>-</span>
                                    <span className='one'>1</span>
                                    <span className='end'>+</span>
                                </div>
                            </div><br />
                            <br />
                            <button className="addtocart"
                                onClick={() => onAdd(product)}
                            >Add to Cart</button>
                            <div className='icn'>

                                <a href="#">< AiOutlineHeart />save</a>
                                <a href="#"><BiShareAlt />share</a>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='Producttitle'>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 Sweat-wicking">
                            <h4>{product.title}</h4>
                            <h5>Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur. Duis tristique sollicitudin nibh sit amet. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.</p>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='line'>
                    <hr />
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default Product