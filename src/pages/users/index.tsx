import {useEffect, useState} from "react";
import type {IUser} from "../../types/user.interface";
import {UserService} from "../../services/user.service";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true)
    const data = await UserService.getUsers()

    if (data) {
      setUsers(data)
    } else {
      setIsError(true)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getUsers()

    return () => setUsers([])
  }, []);

  return (
    <div className="page">
      <h3 className='page-title'>Users List</h3>
      {isError && <div data-testid="error-block" className="error-block">Error</div>}
      {isLoading && <div data-testid="loading-block" className="loading-block">Loading...</div>}

      <div className='users-list'>
        {
          users.map((user: IUser) => (
            <div key={user.id} className='user-card'>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.city}</div>
              <div>{user.age}</div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export {UsersPage}