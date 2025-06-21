import React from "react";
import LightGallery from "lightgallery/react";
import jsimples from "/public/jsimples.png";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = ({ images }) => {
  return (
    <>
      <style>{`
        .custom-gallery-grid {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem !important;
        }
        .custom-gallery-grid .gallery-item {
          display: block !important;
        }
      `}</style>
      
      <LightGallery 
        plugins={[lgThumbnail, lgZoom]}
        speed={500}
        elementClassNames="custom-gallery-grid"
      >
        {images?.map((img, index) => (
          <div
            key={index}
            data-src={img}
            className="gallery-item"
          >
            <img
              src={img}
              className="rounded cursor-pointer object-cover w-full h-48"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default Gallery;