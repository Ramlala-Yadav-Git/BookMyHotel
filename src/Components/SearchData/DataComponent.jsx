import React from "react";
import styles from "../SearchData/DataComponent.module.css";
import { Link } from "react-router-dom";



const DataComponent = ({ url, id, view, price, name, city, distance, bedSize, roomSize, cancelationPolicy, cancellation, reviews, rating, breakFast, availability, availableRooms, discountedPrice }) => {
  const lab = "See Availability >";
  const handleDelete = (id) => {
    let confirmation = window.confirm("Are you sure to delete this hotel " + id)
    if (confirmation) {

    }
  }
  return (
    <div className={styles.maindiv}>
      <div className={styles.imgdiv}>
        <img src={url} alt="imageofHotel" />
      </div>
      <div className={styles.datadiv}>
        <div className={styles.hotelName}>
          <h3 className={styles.h3}>{name}</h3>
          <div className={styles.adminActionIcons}>
            <Link to={`/edit/${id}`} title="edit hotel">
              <svg height="24" fill="green" viewBox="0 96 960 960" width="24"><path d="M209 857h40l335-336-40-40-335 336v40Zm567-393L601 290l28-29q37-38 88.5-38.5T807 259l21 21q31 29 29 67t-29 65l-52 52Zm-57 58L289 952H113V777l430-430 176 175Zm-154-21-21-20 40 40-19-20Z" /></svg>
            </Link>
            <span title="delete hotel" onClick={() => handleDelete(id)}>
              <svg height="24" cursor="pointer" fill="red" viewBox="0 96 960 960" width="24"><path d="M267 982q-57 0-96.5-39.5T131 846V345H68V209h268v-66h287v66h269v136h-63v501q0 57.125-39.438 96.562Q750.125 982 693 982H267Zm426-637H267v501h426V345ZM334 777h113V414H334v363Zm180 0h113V414H514v363ZM267 345v501-501Z" /></svg>
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "left"
          }}
        >
          <p
            style={{
              color: "#0071C2",
              textDecoration: "underline",
              cursor: "pointer",
              display: "inline-block"
            }}
          >
            {city}
          </p>
          <p style={{
            display: "inline-block"
          }}

          >{distance} km from center</p>
        </div>
        <h5 style={{ padding: "0", marginTop: "4px", marginBottom: "6px" }}>
          {roomSize}
        </h5>
        <p style={{ padding: "0", margin: "0", fontSize: "13px" }}>{bedSize}</p>
        <h5
          style={{
            color: "green",
            padding: "0",
            marginTop: "6px",
            marginBottom: "0",
          }}
        >
          Breakfast {breakFast}
        </h5>
        <h5
          style={{
            color: "green",
            padding: "0",
            marginTop: "3px",
            marginBottom: "0",
          }}
        >
          {cancellation} cancellation • {cancelationPolicy}
        </h5>
        <p
          style={{
            padding: "0",
            margin: "0",
            fontSize: "13px",
            color: "green",
            marginTop: "6px",
          }}
        >
          You can cancel later, so lock in this great price today!
        </p>
        <h5 style={{ color: "brown", padding: "0", marginTop: "2px" }}>
          Only {availableRooms} rooms left at this price on our site
        </h5>
      </div>
      <div>
        <div style={{ display: "flex", marginTop: "-35px" }}>
          <div style={{ marginRight: "3px" }}>
            <h5 style={{ padding: "0", margin: "0", marginTop: "5px", fontSize: "16px", textAlign: "right" }}>
              {view}
            </h5>
            <p
              style={{
                padding: "0",
                margin: "0",
                color: "gray",
                fontSize: "13px",
              }}
            >
              {reviews} Reviews
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#003580",
              color: "white",
              padding: "10px",
              marginLeft: "5px",
              // width: "30px",
              fontWeight: "bold",
              borderRadius: "5px 5px 5px 5px",
            }}
          >
            {rating}
          </div>
        </div>

        <div style={{ textAlign: "right", marginTop: "-115px" }}>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "gray",
              fontSize: "13px",
            }}
          >
            1 Night, 2 Adults
          </p>
          <p style={{ margin: "0", padding: "0" }}>
            <span
              style={{
                color: "red",
                textDecoration: "line-through",
                fontSize: "14px",
              }}
            >
              £ {price}
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>  £ {discountedPrice}</span>
          </p>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "gray",
              fontSize: "13px",
            }}
          >
            tax and all
          </p>
          <Link to={`/search/${id}`}>
            <button
              style={{
                backgroundColor: "#0071C2",
                color: "white",
                border: "none",
                borderRadius: "3px",
                padding: "15px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              {lab}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { DataComponent };
