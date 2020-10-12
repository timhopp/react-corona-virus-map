// import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import React from "react";
import L from "leaflet";
// import { Marker } from "react-leaflet";

// import { promiseToFlyTo, getCurrentLocation } from "lib/map";

import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";
// import Snippet from "components/Snippet";

// import gatsby_astronaut from "assets/images/gatsby-astronaut.jpg";
import axios from "axios";

const LOCATION = {
  lat: 38.9072,
  lng: -77.0369,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;
// const ZOOM = 10;

// const timeToZoom = 2000;
// const timeToOpenPopupAfterZoom = 4000;
// const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000;

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    let response;

    try {
      response = await axios.get("https://corona.lmao.ninja/v2/countries");
    } catch (e) {
      console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }

    const { data = [] } = response;
  }

  // const { data = [] } = response;
  //   if ( !leafletElement ) return;
  //   const popup = L.popup({
  //     maxWidth: 800,
  //   });
  //   const location = await getCurrentLocation().catch(() => LOCATION );
  //   const { current = {} } = markerRef || {};
  //   const { leafletElement: marker } = current;
  //   marker.setLatLng( location );
  //   popup.setLatLng( location );
  //   popup.setContent( popupContentHello );
  //   setTimeout( async () => {
  //     await promiseToFlyTo( leafletElement, {
  //       zoom: ZOOM,
  //       center: location,
  //     });
  //     marker.bindPopup( popup );
  //     setTimeout(() => marker.openPopup(), timeToOpenPopupAfterZoom );
  //     setTimeout(() => marker.setPopupContent( popupContentGatsby ), timeToUpdatePopupAfterZoom );
  //   }, timeToZoom );
  // }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings}></Map>

      <Container type="content" className="text-center home-start"></Container>
    </Layout>
  );
};

export default IndexPage;
