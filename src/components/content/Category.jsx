import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {getProductos} from '../../utils/firebase';
import Carrusel from '../layouts/Carrusel';

const Category = () => {

    const [productos, setproductos] = useState([]);
    const {tipo} = useParams()
    useEffect(() => {
        getProductos().then(productos => {
        const productosCategory = productos.filter(producto => producto[1].tipo == tipo) 

        const cardProducto = productosCategory.map(producto =>
            <div className="col-lg-4 mb-3">
                <div className="card" key={producto[0]}>
                    <div className="img-container">
                        <img src={producto[1].img}
                            alt={producto[1].nombre} className="image card-img-top" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-tittle">{producto[1].nombre}</h5>
                        <h6 className="card-subtitle mb-2">${producto[1].precio}</h6>
                        <p className="card-text">{producto[1].desc}</p>
                        <button className='btn btn-black'><Link className='nav-link' to={`/item/${producto[0]}`}>Ver Producto</Link></button>
                    </div>
                </div>
            </div>)

        setproductos(cardProducto)
    })

}, [tipo]);
return (
    <>
    <Carrusel />
    <div className="row">
        {productos}
    </div>
    </>
);
}

export default Category;