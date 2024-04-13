import { AttendeeList } from "./components/attendes-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex gap-2">
      <Header />
      <AttendeeList />
    </div>
  )
}