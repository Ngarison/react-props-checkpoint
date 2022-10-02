


const Profile=(props)=>{
    return <>
             {props.children}
             <div onClick={()=>props.handleName(props.fullName)}>{props.fullName}</div>
             <div>{props.bio}</div>
             <div>{props.profession}</div>
           </>
}

export default Profile;