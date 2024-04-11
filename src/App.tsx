interface myBottonProps {
  title: string
  alt: string
}

function MyButton(props:myBottonProps) {
  // console.log(props); 
  return <button className="bg-orange-400 h-10 px-3 rounded font-medium">{props.title}</button>
}

export function App() {
  return (
    <div className="flex gap-2">
      <MyButton title="Click here!" alt="text" />
      <MyButton title="text1" alt="text" />
      <MyButton title="text2" alt="text" />
      <MyButton title="oi" alt="text" />
    </div>
  )
}