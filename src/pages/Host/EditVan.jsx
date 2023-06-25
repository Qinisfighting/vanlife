import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function EditVan() {

 
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword:"",
        isNewsletter:false,
        name: "",
        price: "",
        description: "",
        imageUrl: "",
        type: "",
        hostId: "123" 
    })


    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value 
        }))
    }
    
    async function handleSubmit(e) {
        e.preventDefault()
        
    }
    
    
    return (
        <div className="v-form-container">
            <form className="v-form" onSubmit={handleSubmit}>
              
              
                <input 
                    type="text"
                    placeholder="Name"
                    className="form--input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                 
                 <select
                        value={formData.type}
                        onChange={handleChange}
                        name="type"
                        className="form--select"
                        
                    >
                        <option value="">-- Choose type --</option>
                        <option value="simple" id="simple">
                        Simple
                        </option>
                        <option value="rugged" id="rugged">
                        Rugged
                        </option>
                        <option value="luxury" id="luxury">
                        Luxury
                        </option>
                        
                    </select>
                <input 
                    type="number" 
                    min="0"
                    placeholder="Price in euro"
                    name="price"
                    className="form--input"
                    value={formData.price}
                    onChange={handleChange}
                    required
            />
                <textarea
                    placeholder="Description"  
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                    required
                />


                    <input 
                        type="file" 
                        id="myUpload"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange} 
                        multiple        
                    />
                
                    
                
                    <button 
                        className="v-form--submit"
                    >
                        Save Van
                    </button>
            </form>
        </div>
    )

}
