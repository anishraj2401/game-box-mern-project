// import img1 from '../../image/240_F_698675694_NZfk279cPnpKJRqTyBFvakswoSkY81Dw.jpg';
// import { useContext, useState } from 'react'
// import { userLoginContextObj } from '../../context/user/userLoginContext'
// import { useForm } from './useForm';

// export default function PlayersCopy() {
//     const [currentUser, , loginStatus, , ,] = useContext(userLoginContextObj);
//     const { register, handleSubmit } = useForm();
//     const [isEditing, setEditing] = useState(false);

//     return (
//         <div>
//             <h1 className='text-right banner-box' id=''>PLAYER DETAIL</h1>
//             <div className='playerContainer '>
//                 <div className="imgPlayer d-flex justify-content-between">
//                     <img src={img1} alt="Player Avatar" className="playerImg" />
//                     <h6 className="card-title display-6 my-5"><b>Character ID : {currentUser.id}</b></h6>
//                 </div>
//                 <div className="playerDetail ">
//                     <span className='d-flex justify-content-between my-5'>
//                         <h1 className="card-title display-5">{currentUser.name} </h1>
//                         <div className="badge">
//                             <h6><span className="badge badge-dark">Jungler 🎗️</span>  <span class="badge badge-dark">Support 🪢</span></h6>
//                         </div>
//                     </span>
//                     {isEditing ? (
//                         <>
//                             <form className='formPlayers'>
//                                 <div className="form-group text-left text-dark">
//                                     <label htmlFor="name" >Name:</label>
//                                     <input type="text" className="form-control" name="name" value={editedUser.name} {...register('name')} />
//                                     <div class="row">
//                                         <div class="col">
//                                             <label htmlFor="name">Email:</label>
//                                             <input type="email" className="form-control" name="email" value={editedUser.email} {...register('email')} />
//                                         </div>
//                                         <div class="col">
//                                             <label htmlFor="name">Character Name:</label>
//                                             <input type="text" className="form-control" name="gameName" value={editedUser.gameName} {...register('gameName')} />
//                                         </div>
//                                     </div>
//                                     <div class="row">
//                                         <div class="col">
//                                             <label htmlFor="name">Age:</label>
//                                             <input type="number" className="form-control" name="age" value={editedUser.age} {...register('age')} />
//                                         </div>
//                                         <div class="col">
//                                             <label htmlFor="name">Nationality:</label>
//                                             <input type="text" className="form-control" name="nationality" value={editedUser.nationality} {...register('nationality')} />
//                                         </div>
//                                     </div>
//                                     <label htmlFor="name">Description:</label>
//                                     <textarea type="text" className="form-control" name="desc" rows={4} value={editedUser.desc} {...register('desc')} ></textarea>
//                                 </div>
//                             </form>
//                         </>
//                     ) : (<>
//                         <h6 className="card-title  mb-5 d-flex justify-content-between">
//                             <span><b>Email : {currentUser.email}</b></span><span><b>Character Name: {editedUser.gameName}</b></span>
//                         </h6>
//                         <h6 className="card-title d-flex justify-content-between mb-5"><span><b>Age:{editedUser.age}</b></span><span><b>Nationality: {editedUser.nationality}</b></span> </h6>
//                         <h4 className='text-center py-3 my-3 border-dark border'><b>Your Summary</b></h4>
//                         <hr />
//                         <span className='d-flex justify-content-between'><h6 className="card-title display-5"><b>Matches: {editedUser.matches} </b></h6>
//                             <h6 className="card-title display-5"><b>Wins: {editedUser.wins}</b> </h6>
//                             <h6 className="card-title display-5"><b>Loses: {editedUser.loses}</b> </h6>
//                         </span>
//                         <h6 className="card-title my-5">
//                             <b>Bio: {editedUser.desc}</b>
//                         </h6>
//                     </>)}

//                     <div className="buttons-container">
//                         {isEditing ? (
//                             <div className='d-flex justify-content-around'>
//                                 <button className='buttonProfile' onClick={handleSaveEdit}> Save </button>
//                                 <button className='buttonProfile' onClick={handleCancelEdit}> Cancel </button>
//                             </div>
//                         ) : (
//                             <button className='buttonProfile' onClick={handleEditProfile}>
//                                 Edit Profile
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }