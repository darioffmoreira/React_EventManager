import {Search} from 'lucide-react'
export function AttendeeList() {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold">Participants!</h1>

      <div className="flex items-center gap-3 px-3 w-[280px] py-1.5 border border-white/25 rounded-lg text-sm">
        <Search className='size-4 text-emerald-300' /> 
        <input className="bg-transparent flex-1 outline-none" placeholder="Search for participants" type="text" />
      </div>
      
    </div>
  )
}