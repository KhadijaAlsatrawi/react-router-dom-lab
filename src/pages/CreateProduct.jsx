import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"

function CreateProduct() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        quantity: ''
    })

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products`, formData)

        navigate(`/products/${response.data._id}`)
    }

    return (
        <>
            <h1>Create Product</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    value={formData.title}
                    id="title"
                    name="title"
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    value={formData.description}
                    id="description"
                    name="description"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="category">Category: </label>
                <input
                    type="text"
                    value={formData.category}
                    id="category"
                    name="category"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="price">Price: </label>
                <input
                    type="number"
                    value={formData.price}
                    id="price"
                    name="price"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="quantity">Quantity: </label>
                <input
                    type="text"
                    value={formData.quantity}
                    id="quantity"
                    name="quantity"
                    onChange={handleChange}
                />
                <br />
                <button>Create Product</button>
            </form>
        </>
    )
}

export default CreateProduct