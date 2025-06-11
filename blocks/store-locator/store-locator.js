/* eslint-disable */
export async function initMap() {
// eslint-disable-next-line no-undef
  const { Map } = await google.maps.importLibrary('maps');

  const map = new Map(document.getElementById('locator-map'), {
    center: { lat: 36.121, lng: -115.170 },
    zoom: 17,
    disableDefaultUI: true,
    keyboardShortcuts: false,
    styles: [
      {
        featureType: 'all',
        stylers: [
          { lightness: -5 },
          { saturation: -100 },
          { visibility: 'simplified' },
        ],
      },
    ],
  });
  // eslint-disable-next-line no-undef
  const infoWindow = new google.maps.InfoWindow({
    map,
  });
}

export default function decorate(block) {
  //const pText = block.querySelector('p').textContent;
  block.textContent = '';  
  window.initMap = async () => {
    initMap();
  };

  const locatorDOM = document.createRange().createContextualFragment(`
  <div class="shopfinder">
    <div class="sidepanel">
      <h3 class="sidepanel__title">Try a new roast at a Fréscopa near you!</h3>
    <div class="search">
      <p class="search__title">Find another location</p>
      <div class="search__box">
        <input class="search__input" type="text" placeholder="Zip Code" name="search"></input>
        <button class="search__button">Search</button>
      </div>
    </div>
    </div>
      <div class="map" id="locator-map">
    </div>
  </div>
  `);

  block.append(locatorDOM);
}
