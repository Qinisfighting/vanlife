import { useState } from "react"
//import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore"
import app from '../../api';
//import { getAuth } from "firebase/auth";

 
const db = getFirestore(app)
//const auth = getAuth();
/*const uid = () => {
    if(auth.currentUser !== null){
        return auth.currentUser.uid
    } 
} 
*/

  
export default function EditVan() {

    const[formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        imageUrl: "",
        type: "",
        hostId: ""
        //hostId: uid
    })


    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    
    async function handleSubmit(e) {
        e.preventDefault()
    const docRef = await addDoc(collection(db, "vans"), formData
    )
    console.log("Document written with ID: ", docRef.id);
    }
    
    
    return (
        <div className="v-form-container">
            <form className="v-form" onSubmit={handleSubmit}>
                <label className="label-form">Add new van</label>
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
                    placeholder="€"
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

                    <label className="label-upload" htmlFor="myUpload"> Choose the images: </label>
                    <input 
                        type="file" 
                        accept=".jpg, .jpeg, .png, .svg, .gif"
                        id="myUpload"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange} 
                        multiple        
                    />
                
                    
                
                    <button 
                        className="v-form--submit"
                    >
                        Upload online
                    </button>
            </form>
        </div>
    )

}
