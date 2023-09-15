import  PropTypes from 'prop-types';

export const SingleUser = ({ singleUser }) => {
    return (
        <div className='single-user-div'>
            <h1>Single User</h1>
            <div className='inner-single-user-div'>
                <div>
                    <h1>{singleUser?.name}</h1>
                    <p>{singleUser?.username}</p>
                    <p>{singleUser?.email}</p>
                </div>
                <div>
                    <h2>Address</h2>
                    <p>{singleUser?.address?.street} {singleUser?.address?.suite}</p>
                    <p>{singleUser?.address?.city} {singleUser?.address?.zipcode}</p>
                    <p>{singleUser?.address?.phone}</p>
                    <p>{singleUser?.address?.website}</p>
                </div>

            </div>
        </div>
    )
}

SingleUser.propTypes = {
    singleUser: PropTypes.object
}