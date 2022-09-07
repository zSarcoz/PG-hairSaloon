import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers, currentUser } from "../../redux/actions";
 
export default function Home () {
    const current = useSelector((state) => state.currentUser)
    let currentUserrr = current.map((user) => user.name)
    console.log(currentUserrr)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
        // dispatch(currentUser())
    }, [])

    return (
        <>
        {/* <div>{current.name}</div> */}
        <h1>HOMEEEEEEEEE</h1>
        <h3>Hello</h3>
        {currentUserrr ? <h5>{currentUserrr}</h5> : <h5>No Name</h5>}
        {/* <h5>{currentUserrr}</h5> */}
        </>
        
    )
}