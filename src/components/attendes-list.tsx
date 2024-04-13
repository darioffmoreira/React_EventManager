import {Search} from 'lucide-react'
export function AttendeeList() {
  return (
    <div>

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participants!</h1>
        <div className="flex items-center gap-3 px-3 w-[280px] py-1.5 border border-white/25 rounded-lg text-sm">
          <Search className='size-4 text-emerald-300' /> 
          <input className="bg-transparent flex-1 outline-none" placeholder="Search for participants" type="text" />
        </div>
      </div>

      <div className='border border-white-10 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white-10'>
              <th className="py-3 px-3 text-sm font-semibold "><input type="checkbox" name="" id="" /></th>
              <th className="py-3 px-3 text-sm font-semibold">Code</th>
              <th className="py-3 px-3 text-sm font-semibold">Participant</th>
              <th className="py-3 px-3 text-sm font-semibold">Registration date</th>
              <th className="py-3 px-3 text-sm font-semibold">Check-in date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" name="" id="" /></td>
              <td>12383</td>
              <td>
                <div>
                  <span>Alice Johnson</span>
                  <span>alice.johnson@gmail.com</span>
                </div>
              </td>
              <td>7 days ago</td>
              <td>17 days ago</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Showing 10 of 228 items</td>
              <td colSpan={3}>Page 1 of 11</td>
            </tr>
          </tfoot>
        </table>
      </div>
      

    </div>
  )
}