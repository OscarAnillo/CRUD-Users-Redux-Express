import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUserPayload, getUsersPayload } from '../Redux/Features/users-slice';
import PropTypes from 'prop-types';


export const AllUsers = ({ users, clickHandler }) => {
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteUserPayload(id));
        dispatch(getUsersPayload())
    }
    
    return (
        <div className='all-div'>
            <h1>All Users</h1>
            {
                users.map((user) => (
                    <div key={user._id} className='all-users-map-div' onClick={()=> clickHandler(user._id)}>
                        <div>
                            <h1><Link to={`/${user._id}`}>{user.name}</Link></h1>
                            <p>{user?.username}</p>
                            <p>{user?.email}</p>
                        </div>
                        <div>
                            <h2>Address</h2>
                            <p>{user.address?.street} {user.address?.suite}</p>
                            <p>{user.address?.city} {user.address?.zipcode}</p>
                            <p>{user.address?.phone}</p>
                            <p>{user.address?.website}</p>
                        </div>
                        <button className='map-div-btn' onClick={() => deleteHandler(user._id)}>X</button>
                    </div>
                ))
            }

        </div>
    )
}

AllUsers.propTypes = {
    users: PropTypes.array,
    clickHandler: PropTypes.func
}
