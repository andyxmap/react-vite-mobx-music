import Mapform from '@/components/forms/mapform';
import { CustomMap } from '@/components/map/Map';
import { useStoreContext } from '@/context/store';
import { observer } from 'mobx-react-lite';
import { MapProvider } from 'react-map-gl';

const Map = () => {
  const store = useStoreContext();

  return (
    <div className="flex flex-col place-items-center w-full min-h-screen bg-indigo-200 text-white">
      <Mapform
        handler={(data) => {
          store.useGeocode(data.firststreet, data.secondstreet, data.mainstreet);
        }}
        load={store.isfetching}
      ></Mapform>
      <div className="w-full h-full p-10">
        <MapProvider>
          <CustomMap></CustomMap>
        </MapProvider>
        
      </div>
    </div>
  );
};

export default observer(Map);
