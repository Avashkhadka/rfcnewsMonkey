import React from 'react'
export default function Newsitem(props) {
  return (
    <div>
            <div className="card my-2" style={{width: '18rem'}}>
        <img src="https://readwrite.com/wp-content/uploads/2024/07/6f232dbd-27a0-45f2-87c6-639075c6ef40.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.discription||"No discription"}</p>
          <a  rel="noreferrer" href={props.src} target='_blank' className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}
