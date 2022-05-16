import React from 'react'

 const Mainnavlogo = () => {
  return (
    <div>
    <h3>LOGOBAKERY</h3>

    </div>
  )
}

const Mainnavbutton = () => {
    return (
      <div className='butoon'>
      <button>Contact</button>
      </div>
    )
  }


  const arr = ["Services","Projects","About"];

  const Linkarr = () =>{
      return (
          <div  className="arrlinks">
          <div>{arr[0]}</div>
          <div>{arr[1]}</div>
          <div>{arr[2]}</div>
          </div>
        )

  }


export  {Mainnavlogo,Mainnavbutton,Linkarr};