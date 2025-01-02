import React from 'react'

function NotificationCount(props) {

    return (
        <>
            <div className="bg-zinc-900 h-4 w-4 text-white rounded-sm flex items-center justify-center relative">
                <span className="text-xs">{props.number}</span>
            </div>

        </>
    )
}

export default NotificationCount
