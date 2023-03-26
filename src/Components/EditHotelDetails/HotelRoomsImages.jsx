import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import styles from "./HotelRoomsImages.module.css"

export const HotelRoomsImages = ({multipleImages}) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 8;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    
      setImages(imageList);
  };

  return (
    <div className={styles.roomsImage}>
      <ImageUploading
        multiple={multipleImages}
        value={images}
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
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
            <div>
            <div className={styles.uploadButtons}>
              {
                multipleImages || imageList.length != 1 ? <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click here to upload
              </button> :""
              }
              &nbsp;
              {imageList.length > 1 ? <button onClick={onImageRemoveAll}>Remove all images</button> : ""}
              </div>
            </div>
          </div>
        
        )}
      </ImageUploading>
    </div>
  );
}

