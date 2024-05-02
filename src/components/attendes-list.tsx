import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale';
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';
import { ChangeEvent, useState } from 'react';
import { attendees } from '../data/attendees';

export function AttendeeList() {

  const [search, setSearch] = useState('');

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div className='flex flex-col gap-4'>

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participants!</h1>
        <div className="flex items-center gap-3 px-3 w-72 py-1.5 border border-white/25 rounded-lg">
          <Search className='size-4 text-emerald-300' /> 
          <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Search for participants" type="text" />
        </div>

        { search }
      </div>

      
      <Table>
        <thead>
          <tr className='border-b border-white/30'>
            <TableHeader style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
              <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
            </TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>Participant</TableHeader>
            <TableHeader>Registration date</TableHeader>
            <TableHeader>Check-in date</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody> 
          {attendees.map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-white'>{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{formatRelative(attendee.createdAt, new Date(), { locale: pt })}</TableCell>
                <TableCell>{formatRelative(attendee.checkedInAt, new Date(), { locale: pt })}</TableCell>
                <TableCell>
                  <IconButton transparent={true}>
                    <MoreHorizontal className='size-4' />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Showing 10 of 228 items</TableCell>
            <TableCell className='text-right' colSpan={3}>
              <div className='inline-flex gap-8'>
                <span>Page 1 of 11</span> 
                <div className='flex gap-1.5'>
                  <IconButton>
                      <ChevronsLeft className='size-4' />
                  </IconButton>
                  <IconButton>
                      <ChevronLeft className='size-4' />
                  </IconButton>
                  <IconButton>
                      <ChevronRight className='size-4' />
                  </IconButton>
                  <IconButton>
                      <ChevronsRight className='size-4' />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
      

    </div>
  )
}