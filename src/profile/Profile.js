import PropTypes from 'prop-types'; 
import './Profile.css';
const Profile=(props)=>{
    return <div className='profil'>
             <div className='image'>{props.children}</div>
             <div className='fullName' onClick={()=>props.handleName(props.fullName)}>{props.fullName}</div>
             <div className='bio'>{props.bio}</div>
             <div className='profession'>{props.profession}</div>
           </div>
}

Profile.defaultProps = {
    children:"No Image",
    fullName: "Ngadi",
    bio: "deepblue",
    profession: "Dev"
  }

  Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  };

export default Profile;