import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import styles from "./HotelRoomsImages.module.css"

export const HotelRoomsImages = ({multipleImages, imageLists}) => {
  const [images, setImages] = React.useState([]);
  const[remove, setRemove] = React.useState(false);
  const maxNumber = 20;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
      setImages(imageList);
      setRemove(false);
  };
  const handleRemove = ()=>{
    setRemove(true);
  }
  useEffect(() => {
}, [])
  return (
    <div className={styles.roomsImage}>
      <ImageUploading
        multiple={multipleImages}
        value={images.length <= 0 && !remove ? imageLists : images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className={styles.uploadImageWrapper}>
            {imageList.map((image, index) => (
              <div key={index} className={styles.imageItem}>
                <img src={image.data_url} alt="" width="100" />
                <div className={styles.imageItemBtnWrapper}>
                  <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
                  <button type="button" onClick={() => onImageRemove(index)}>Reset</button>
                </div>
              </div>
            ))}
            <div>
            <div className={styles.uploadButtons}>
              {
                multipleImages || imageList.length != 1 ? <button type="button"
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click here to upload
              </button> :""
              }
              &nbsp;
              {imageList.length > 1 ? <button type="button" onClick={onImageRemoveAll}>Reset all images</button> : ""}
              </div>
            </div>
          </div>
        
        )}
      </ImageUploading>
    </div>
  );
}

