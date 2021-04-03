import React, { useState } from "react";
import "./locationSearch.css";

// npm install --save react-google-map-picker latest
import MapPicker from "react-google-map-picker";
// npm install react-mapbox-autocomplete
import MapboxAutocomplete from "react-mapbox-autocomplete";

const DefaultLocation = { lat: 13.232822892278222, lng: 80.27585158292754 };
const DefaultZoom = 18;

const LocationSearch = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setLocation({ ...DefaultLocation });
    setZoom(18);
  }

  function _suggestionSelect(result, lat, lng, text) {
    console.log(result, lat, lng, text);
    lat = Number(lat);
    lng = Number(lng);
    setDefaultLocation({ lat, lng });
    setLocation({ lat: lat, lng: lng });
    setZoom(18);
    console.log({ lat, lng });
    // setDefaultLocation({ ...DefaultLocation });
    // console.log({ ...DefaultLocation });
  }

  return (
    <React.Fragment>
      <MapboxAutocomplete
        publicKey="pk.eyJ1IjoiaGFzYW4tMjEiLCJhIjoiY2ttZXBxa251MHk0aTJwa2hueTgwb2lhbyJ9.BK84XuIxZf0eGfHnlSOWKA"
        inputClass="form-control search"
        onSuggestionSelect={_suggestionSelect}
        country="in"
        resetSearch={false}
      />

      <button onClick={handleResetLocation}>Reset Location</button>
      <label>Latitute:</label>
      <input type="text" value={location.lat} disabled />
      <label>Longitute:</label>
      <input type="text" value={location.lng} disabled />
      <label>Zoom:</label>
      <input type="text" value={zoom} disabled />

      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        style={{ height: "700px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
    </React.Fragment>
  );
};

export default LocationSearch;
