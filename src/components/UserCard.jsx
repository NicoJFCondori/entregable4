const UserCard = ({ user,deleteUserById,setUpdateInfo, setIsCloseForm }) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
      setUpdateInfo(user)
      setIsCloseForm(false)
    }


  return (
    <article className="article_container">
      <h3>👤{`${user.first_name} ${user.last_name}`}</h3>
      <ul className="ul_style">
        <li className="li_style">
          <span>📧Email: </span>
          <span>{user.email}</span>
        </li>
        <li>
          <span>🎂Birthday: </span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <button className='trash'onClick={handleDelete}><i className='bx bx-trash'></i></button>
      <button className='edit'onClick={handleUpdate}><i className='bx bxs-edit'></i></button>
    </article>
  );
};
export default UserCard;
