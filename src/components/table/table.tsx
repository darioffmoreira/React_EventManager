import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'> {}

export function Table(props: TableProps) {
  return (
    <div className='overflow-x-auto border border-white/30 rounded-lg'>
        <table className='min-w-max w-full table-auto' {...props}>
        </table>
    </div>
  )
}