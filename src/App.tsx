import { Contacts } from './sections/contacts';
import { FellasPrimaryPage } from './sections/firstpage';
import { MapFellas } from './sections/map';
import { Team } from './sections/team';

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-neutral-900'>
      <FellasPrimaryPage />
      <Team />
      <Contacts />
      <MapFellas />
    </div>
  )
}