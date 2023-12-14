function Square({children}) {
  return (
    <div className="square">
      {children}
    </div>
  )
}

export default function Holder() {
  return (
    <Square>
     <p>Hello React</p>
    </Square>
  )
}
