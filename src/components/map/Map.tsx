import { useStoreContext } from '@/context/store';
import { useEnv } from '@/hooks/useEnv';
import { Typography } from '@material-tailwind/react';
import { Feature } from 'geojson';
import { useRef, useState } from 'react';
import Map, { NavigationControl, Marker, Popup, MapRef } from 'react-map-gl';
import Response from '../view-objects/response';

function CustomMap() {

  const store = useStoreContext();
  const [popupInfo, setPopupInfo] = useState<Feature | null>(null);
  const mymap = useRef<MapRef>() as any

  const onRenderMarkers = () => {

    return (

      store.response &&
      store.response.features.map((val, index) => {
        if (index == 0) mymap.current?.flyTo({
          animate: true,
          duration: 5000,
          center: [val.geometry.coordinates[0], val.geometry.coordinates[1]]
        })
        return (
          <Marker
            key={index}
            anchor="bottom"
            longitude={val.geometry.coordinates[0]}
            latitude={val.geometry.coordinates[1]}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(val);
            }}
          />
        )
      }
      )
    )
  }


  return (
    <Map
      ref={mymap}
      id="myMap"
      mapboxAccessToken={useEnv().mapKey}
      onMove={(event) => store.setViewState(event.viewState)}
      initialViewState={store.viewState}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"

    >
      {onRenderMarkers()}
      <NavigationControl />

      {popupInfo && (
        <Popup
          anchor='top'
          latitude={popupInfo.geometry.coordinates[1]}
          longitude={popupInfo.geometry.coordinates[0]}
          onClose={() => setPopupInfo(null)}
        >
          <Response 
            content1={<Typography>{popupInfo.properties?.country}</Typography>}
            content2={
              <div className='grid h-1/2'>
                    <Typography variant="small" >State: {popupInfo.properties?.state}</Typography>
                    <Typography variant="small">Address Formated: {popupInfo.properties?.formatted}</Typography>
              </div>
            }
          />
        </Popup>
      )}
    </Map>
  );
}

export { CustomMap };
