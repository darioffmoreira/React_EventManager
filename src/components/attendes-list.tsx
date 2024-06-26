import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import relativeTime from 'dayjs/plugin/relativeTime';
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';
import { ChangeEvent, useState } from 'react';
import { attendees } from '../data/attendees';

dayjs.extend(relativeTime);
dayjs.locale('en');

export function AttendeeList() {

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length / 10);

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function goToFisrtPage() {
    setPage(1);
  }
  
  function goToNextPage() {
    setPage(page + 1);
  }

  function goToPreviousPage() {
    setPage(page - 1);
  }

  function goToLastPage() {
    setPage(totalPages);
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
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
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
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
            <TableCell colSpan={3}>Showing 10 of {attendees.length} items</TableCell>
            <TableCell className='text-right' colSpan={3}>
              <div className='inline-flex gap-8'>
                <span>Page {page} of {totalPages}</span> 
                <div className='flex gap-1.5'>
                  <IconButton onClick={goToFisrtPage} disabled={page === 1}>
                      <ChevronsLeft className='size-4' />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                      <ChevronLeft className='size-4' />
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                      <ChevronRight className='size-4' />
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={page === totalPages}>
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