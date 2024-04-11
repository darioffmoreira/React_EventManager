interface myBottonProps {
  title: string
  alt: string
}

function MyButton(props:myBottonProps) {
  console.log(props); 
  return <button className="button">{props.title}</button>
}

export function App() {
  return (
    <div>
      <MyButton title="Click here!" alt="text" />
      <MyButton title="text1" alt="text" />
      <MyButton title="text2" alt="text" />
      <MyButton title="text3" alt="text" />
      <p>oi</p>
    </div>
  )
}