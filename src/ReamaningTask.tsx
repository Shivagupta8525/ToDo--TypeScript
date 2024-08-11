import {FC} from 'react'
type thingsToDoProps={
  toDoVal:string[],
  onDone:(value:number)=>void
}
const ReamaningTask:FC<thingsToDoProps>=({toDoVal,onDone}) =>{
   
  return (
    <>
    
      <h1 className='text-xl p-4 font-bold'>Things to Do</h1>
      <div className='ml-4 w-96'>
      {toDoVal.map((p,index)=>{

           return (
            <>
            <div key={index} className='flex ml-2 gap-4'>
        <input type="checkbox" name="inptCheckbox" value="" onChange={()=> onDone(index)}></input>
           <p className=''>{p}</p>
           </div>
           </>
           )
      })

      
    }
    </div>
    </>
  )
}

export default ReamaningTask;
