import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

function ProductDetails() {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    async function getProduct() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProduct(response.data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div>
            <h1>Product Details</h1>
            {product ?
                <>
                <h2>Title: {product.title}</h2>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                </>
                : null}
        </div>
    )
}

export default ProductDetails