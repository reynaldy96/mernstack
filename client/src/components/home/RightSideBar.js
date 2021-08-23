import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'

const RightSideBar = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

        </div>
    )
}

export default RightSideBar
