import React, { useState } from 'react'


type FormData = {
    fullName:string;
    email:string;
    phoneNumber:string;
    address:string;
    bio:string;

};

const UserProfile = () => {

    const [formData, setFormData] = useState<FormData>({
        fullName:"",
        email:"",
        phoneNumber:"",
        address:"",
        bio:"",

    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();

        const res = await fetch ("http://localhost:3000/api/users/profile",{
            method:"POST",
            headers:{"Content-Type": "applicaton/json"},
            body:JSON.stringify(formData),
        });

        if (res.ok){
            alert("Profile saved successfully");
            setFormData({fullName:"", email:"", phoneNumber:"", address:"",bio:""})
            
        }else{
                alert("failed to save")
            }


    }

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md'>
        <h2 className='text-xl font-bold mb-4 text-center'>User Profile</h2>
        <form action="" onSubmit={handleSubmit} className='space-y-3'>
            <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder='FullName'
            className='w-full p-2 border rounded'
            required
            />
             <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className='w-full p-2 border rounded'
            required
            />
             <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='PhoneNumber'
            className='w-full p-2 border rounded'
            required
            />
             <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder='Address'
            className='w-full p-2 border rounded'
            required
            />
             <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder='Short Bio'
            className='w-full p-2 border rounded'
            required
            />
            <button
            type="submit"
            className='w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-500 '
            >
                Save Profile
            </button>

        </form>
    </div>
  )
}

export default UserProfile