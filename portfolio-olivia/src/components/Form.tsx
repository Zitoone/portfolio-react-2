import { useState } from "react"

type FormData = {
  name: string;
  email: string;
  message: string;
  isAgree: boolean;
};

function Form(){
    const[formData, setFormData]= useState<FormData>({
        name:"",
        email:"",
        message:"",
        isAgree: false
    })
    const handleChange = (e)=>{
        const {name, type, value, checked}=e.target
        setFormData((prevState)=>({
            ...prevState, [name]: type === "checkbox" ? checked : value,
        }))
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)

        setFormData({
            name:"",
            email:"",
            message:"",
            isAgree: false
        })
    }

return(
    <section id="page-contact">
            <p>Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter, je
                vous répondrai dans les plus brefs délais.</p>
            
            <form onSubmit={formSubmit}>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}required/>
                    </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" value={formData.message} onChange={handleChange}required></textarea>
                </div>
                <div className="rgpd">
                    <input type="checkbox" name="isAgree" id="rgpd" checked={formData.isAgree} onChange={(handleChange)} required/>
                    <label htmlFor="rgpd">J'accepte que mes informations soient traitées conformément à la politique de confidentialité. </label>
                </div>
                <button type="submit" className="btn">Envoyer le message</button>
            </form>
        
        </section>
)
}
export default Form
