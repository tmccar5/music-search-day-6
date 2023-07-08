import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>{props.item.trackCensoredName}</p>
        </div>
    )
}

export default GalleryItem
