import { counter_plus, counter_minus, counter_reset } from "../store/action/action";
import { useDispatch, useSelector } from "react-redux"
import { FiRefreshCw } from "react-icons/fi"
import "./component.css"

const Component = () => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store.reducer);
    const subract = () => {
        if (state != 0) {
            dispatch(counter_minus());
        }
    }
    const reset = () => {
        dispatch(counter_reset());
    }
    const add = () => {
        dispatch(counter_plus());
    }
    return (
        <div className='main-div'>
            <div className="container">
                <h1>Counter</h1>
                <div className='Number'>
                    {state}
                </div>
                <div className='btn-div'>
                    <button className='sub' onClick={subract}>-</button>
                    <button onClick={reset}><FiRefreshCw /></button>
                    <button onClick={add}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Component
