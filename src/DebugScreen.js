import React from 'react'
import useViewportWidth from './utils/useViewportWidth'

export default function DebugScreen() {
    const size = useViewportWidth();

    return (
        <div>
            {size.width}px / {size.height} px        
        </div>
    )
}
