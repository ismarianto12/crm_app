import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'


function Authenticated(props) {
    const history = useHistory();
    const auth = useRecoilValue(authenticated);
    useEffect(() => {
        if (auth.check) {
            history.push('/');
        }
    }, [])
    return props.children;
}

return Authenticated();