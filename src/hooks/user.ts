import { UserCurrent } from '@/models';
import { useState } from 'react';

const key = "your-custom-key"

export function useUserSession() {
      const [user,setUser] = useState<UserCurrent|null>(null)
      
      const getUserSession = ()=> {

        const currentuser = sessionStorage.getItem(key)
        return currentuser == null ? null: JSON.parse(currentuser)

      }

      const setUserSession = (userSession:UserCurrent) => {

        const toStringUser = JSON.stringify(userSession)
        sessionStorage.setItem(key,toStringUser)
        setUser(userSession)
        
      }

      const removeUserSession = ()=> {
        sessionStorage.removeItem(key)
        setUser(null)
      }

      return {user,setUserSession,getUserSession,removeUserSession}
}

