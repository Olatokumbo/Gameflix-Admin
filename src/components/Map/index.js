import GoogleMapReact from "google-map-react";
const Map = ({ coords }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultZoom={14}
      defaultCenter={coords}
      center={coords}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true }}
      // onChange={(e) => {console.log('HELLO')}}
      // onChildClick={(child) => setChildClicked(child)}
    ></GoogleMapReact>
  );
};

export default Map;
