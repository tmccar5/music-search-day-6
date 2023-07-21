import { useContext } from 'react'
import GalleryItem from './GalleryItem'
import { DataContext } from '../context/DataContext'

const Gallery = () => {
    const data = useContext(DataContext)
    console.log('Data in gallery!!', data)

   if(data){
     const display = data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div style={{'display':'flex','flexFlow':'wrap','gap':'15px','padding':'20px'}}>
            {display}
        </div>
    )
   }
}

export default Gallery
