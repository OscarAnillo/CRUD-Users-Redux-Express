import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserPayload, getUsersPayload } from '../Redux/Features/users-slice';

export const CreateUser = () => {
    const [userIput, setUserInput] = useState({
        name:"",
        username:"",
        email:"",
        street:"",
        suite:"",
        city:"",
        zipcode:"",
        phone:"",
        website:""
    });
    const dispatch = useDispatch();

    const changeHandler =  e => {
        const { name, value } = e.target;
        setUserInput({
            ...userIput,
            [name]: value
        })
    }

    const {name, username, email, street, suite, city, zipcode, phone, website} = userIput;

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(addUserPayload({ 
            name, 
            username, 
            email, 
            address: {
                street, 
                suite, 
                city, 
                zipcode, 
                phone, 
                website
            } 
        }))
        dispatch(getUsersPayload())
        setUserInput({
            name:"",
            username:"",
            email:"",
            street:"",
            suite:"",
            city:"",
            zipcode:"",
            phone:"",
            website:""
        })
    }

    return (
        <div className="create-div">
            <h1>Create User</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Name" name='name' value={name} onChange={changeHandler} />
                <input type="text" placeholder="Username" name='username' value={username} onChange={changeHandler}/>
                <input type="text" placeholder="Email" name='email' value={email} onChange={changeHandler}/>
                <input type="text" placeholder="Street" name='street' value={street} onChange={changeHandler}/>
                <input type="text" placeholder="Suite" name='suite' value={suite} onChange={changeHandler}/>
                <input type="text" placeholder="City" name='city' value={city} onChange={changeHandler}/>
                <input type="text" placeholder="Zipcode" name='zipcode' value={zipcode} onChange={changeHandler}/>
                <input type="text" placeholder="Phone" name='phone' value={phone} onChange={changeHandler}/>
                <input type="text" placeholder="Website" name='website' value={website} onChange={changeHandler}/>
                <button>Send</button>
            </form>
        </div>
    )
}