import { AttendeeList } from "./components/attendes-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="flex gap-2">
      <Header />
      <AttendeeList />
    </div>
  )
}