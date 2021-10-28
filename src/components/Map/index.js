import GoogleMapReact from "google-map-react";
import { LocationOn } from "@material-ui/icons";
import styles from "./Map.module.css";
const Map = ({ coords, reviews }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultZoom={7}
      defaultCenter={reviews?.length >0 ? {lat:reviews[0].location.latitude, lng:reviews[0].location.longitude} : coords}
      center={reviews?.length >0 ? {lat:reviews[0].location.latitude, lng:reviews[0].location.longitude} : coords}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true }}
      // onChange={(e) => {console.log('HELLO')}}
      // onChildClick={(child) => setChildClicked(child)}
    >
      {reviews &&
        reviews.map((review, index) => (
          <div
            key={index}
            lat={Number(review.location.latitude)}
            lng={Number(review.location.longitude)}
          >
            <LocationOn className={styles.location} />
          </div>
        ))}
    </GoogleMapReact>
  );
};

export default Map;
