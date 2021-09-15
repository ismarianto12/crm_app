import { useHistory } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { athenticated } from '../store/';
import { useEffect } from 'react';

function Guest(props) {
    const history = useHistory();
    const auth = useRecoilValue(athenticated);
    useEffect(() => {
        if (auth.check) {
            history.push('/dashboard');
        }
    }, []);
    return props.children



}
export default Guest;