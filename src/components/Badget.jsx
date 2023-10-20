import React from 'react'

const Badget = ({barTitle,badgetTitle}) => {
  return (
    <div className="d-flex gap-3 flex-wrap ">
              {barTitle}:
              {badgetTitle.map((item)=>(
                <p className={`rounded px-3 py-1 ${barTitle==='Kategoriler' ? "bg-primary" :
                     barTitle==='Diller' ? 'bg-danger' : 'bg-warning'}`}>
                    {item.name}
                </p>
              ))}
            </div>
  )
}

export default Badget