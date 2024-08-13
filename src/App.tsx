import { Contacts } from './sections/contacts';
import { FellasPrimaryPage } from './sections/firstpage';
import { Team } from './sections/team';

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <FellasPrimaryPage />
      <Team />
      <Contacts />
    </div>
  )
}