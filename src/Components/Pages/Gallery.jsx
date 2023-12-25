import React from 'react'
import Gallery from "react-photo-gallery";
import { Naturephotos } from "./Natureimg";

const ImgGallery = () => {
    return (
        <div>
            <Gallery photos={Naturephotos}  />
        </div>
    )
}

export default ImgGallery
