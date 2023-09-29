import React from "react";
import Skeleton from "./Skeleton";
import User from "./User";
import "./Users.css";
import Success from "./Success";

function Users() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((error) => {
        console.warn(error);
        alert("Ошибка при получении пользователей");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <section className="users">
      <div className="users__container">
        {success ? (
          <Success count={invites.length} />
        ) : (
          <>
            <div className="users__search">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                value={searchValue}
                onChange={onChangeSearch}
                className="users__search-input"
                type="text"
                placeholder="Найти пользователя..."
              />
            </div>
            {isLoading ? (
              <div className="users__skeleton-list">
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            ) : (
              <ul className="users__users-list">
                {users
                  .filter((obj) => {
                    const fullName = (
                      obj.first_name +
                      " " +
                      obj.last_name
                    ).toLowerCase();
                    if (
                      fullName.includes(searchValue.toLowerCase()) ||
                      obj.email
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ) {
                      return true;
                    }
                  })
                  .map((obj) => (
                    <User
                      isInvited={invites.includes(obj.id)}
                      onClickInvite={onClickInvite}
                      key={obj.id}
                      {...obj}
                    />
                  ))}
              </ul>
            )}
            {invites.length > 0 && (
             <button
              className="users__send-invite-btn"
              onClick={onClickSendInvites}
            >
              Отправить приглашение
            </button> 
            )}
            
          </>
        )}
      </div>
    </section>
  );
}

export default Users;
