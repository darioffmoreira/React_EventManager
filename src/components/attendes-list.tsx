import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'
export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participants!</h1>
        <div className="flex items-center gap-3 px-3 w-72 py-1.5 border border-white/25 rounded-lg">
          <Search className='size-4 text-emerald-300' /> 
          <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Search for participants" type="text" />
        </div>
      </div>

      <div className='border border-white/30 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/30'>
              <th style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Code</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participant</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Registration date</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Check-in date</th>
              <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr key={i} className='border-b border-white/30 hover:bg-white/5'>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">12383</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-white'>Alice Johnson</span>
                      <span>alice.johnson@gmail.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">17 days ago</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <MoreHorizontal className='size-4' />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>Showing 10 of 228 items</td>
              <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                <div className='inline-flex gap-8'>
                  <span>Page 1 of 11</span>
                  <div className='flex gap-1.5'>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                        <ChevronsLeft className='size-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                        <ChevronLeft className='size-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                        <ChevronRight className='size-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                        <ChevronsRight className='size-4' />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      

    </div>
  )
}