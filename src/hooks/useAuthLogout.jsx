/* eslint-disable no-unused-vars */
import { useAtom } from 'jotai';
import { removeFromLocalStorage } from './helpers';
import { atomIsAuthenticate, atomToken, atomUser } from './atomState';

const useAuthLogout = () => {

    const [token, setToken] = useAtom(atomToken);
    const [isAuthenticate, setIsAuthenticate] = useAtom(atomIsAuthenticate);
    const [user, setUser] = useAtom(atomUser);

    const logout = () => {
        // atom sates
        setToken('');
        setIsAuthenticate(false);
        setUser(null);

        // remove from storage
        removeFromLocalStorage('token');
    };

    return { logout };
};

export default useAuthLogout;
