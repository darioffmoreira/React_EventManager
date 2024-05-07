import { AttendeeList } from "./components/attendes-list";
import { Header } from "./components/header";

export const App = () => (
  <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5 p-8">
    <Header />

    <AttendeeList />
  </div>
);