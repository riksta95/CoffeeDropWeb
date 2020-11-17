<template>
  <div style="height: 500px; width: 100%">
    <l-map
      v-if="loaded"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      :bounds="bounds"
      :max-bounds="maxBounds"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <div v-for="(location, key) in locations" :key="key">
        <l-marker :icon="icon" :lat-lng="getMarkerCoords(location.coordinates)">
          <l-popup>
            <h6 class="mb-0 font-weight-bold text">
              <u>{{ location.location }}</u>
            </h6>
            <p v-html="getFullAddress(location.address)" />
            <p
              class="my-0"
              v-for="(opening, key) in location.openings"
              :key="key"
            >
              <span
                v-if="
                  opening.open === '00:00:00' && opening.closed === '00:00:00'
                "
              >
                <strong class="text-capitalize">{{ opening.day }}</strong
                >: CLOSED
              </span>
              <span v-else>
                <strong class="text-capitalize">{{ opening.day }}</strong
                >: {{ opening.open }} - {{ opening.closed }}
              </span>
            </p>
          </l-popup>
        </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { latLng, latLngBounds } from "leaflet";
import L from "leaflet";
import { LMap, LMarker, LPopup, LTileLayer } from "vue2-leaflet";

export default {
  name: "MapLocations",
  components: {
    LMap,
    LMarker,
    LPopup,
    LTileLayer
  },
  data() {
    return {
      zoom: 13,
      currentZoom: 13,
      loaded: false,
      center: [0, 0],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentCenter: [0, 0],
      mapOptions: {
        zoomSnap: 0.5
      },
      locations: {},
      icon: L.icon({
        iconUrl: require("@/assets/images/map-pin-transparent.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      bounds: [],
      maxBounds: []
    };
  },
  mounted() {
    this.axios
      .get("http://coffeedrop.staging2.image-plus.co.uk/api/locations")
      .then(response => {
        this.locations = response.data.data;
        this.getBounds();
        this.getMaxBounds();
      })
      .then(() => {
        this.loaded = true;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    getMarkerCoords(coords) {
      return latLng(coords.latitude, coords.longitude);
    },
    getFullAddress(address) {
      let fullAddress = "";

      fullAddress += address.line1 + "<br>";
      fullAddress += address.line2 + "<br>";
      fullAddress += address.city + "<br>";
      fullAddress += address.postcode;

      return fullAddress;
    },
    getBounds() {
      let bounds = [];
      this.locations.forEach(element => {
        bounds.push([
          element.coordinates.latitude,
          element.coordinates.longitude
        ]);
      });
      this.bounds = latLngBounds([bounds]);
    },
    getMaxBounds() {
      let bounds = [];
      this.locations.forEach(element => {
        bounds.push([
          element.coordinates.latitude,
          element.coordinates.longitude
        ]);
      });
      this.bounds = latLngBounds([bounds]);
    }
  }
};
</script>
