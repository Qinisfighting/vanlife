import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {
    collection,
    addDoc,
  } from "firebase/firestore"
import { storage, db } from "../../api";
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from "uuid";

export default function EditVan() {
    const navigate = useNavigate();
    const testURL = "https://firebasestorage.googleapis.com/v0/b/qinsvanlife.appspot.com/o/images%2Fbackground.png05ec320b-5deb-4f20-b3a6-5b809704f086?alt=media&token=88197859-fb5b-4843-8696-24d0a77c9761"
    const [imageUpload, setImageUpload] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        imageUrl: testURL,
        type: "",
        hostId: ""
       //hostId: user.uid
       
    })
  
    const uploadFile = () => {
        if (imageUpload === null) return;
         const imageRef = ref(storage, `images/${imageUpload.name + v4()}`); //name the image random and unique 
         uploadBytes(imageRef, imageUpload)
                 }


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
      uploadFile()
      navigate("/vans")
      alert("Your van is online!")    
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
                        onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                      }} 
                        multiple        
                    />
                
                    
                
                    <button 
                        className="v-form--submit"
                    >
                        Make public
                    </button>
            </form>
        </div>
    )

}
