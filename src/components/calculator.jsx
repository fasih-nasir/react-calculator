import { useState } from 'react'
function Calculator(){
    let [num,setNum] = useState(" ")
    function fn(num){
   
     
   setNum(prev => prev + num)}
   function eq(){
     let ans= eval(num);
     
     setNum(ans)
     console.log(ans);
   
   
     
   }
   function clearOnce(){
     let clearonce=num.slice(0,-1);
     setNum(clearonce)
   }
   function clearAll(){
     // let clearonce=num.slice(0,-1);
     setNum("")
   }
    return(
    <>
       <div className='flex flex-col   h-[100vh]'>
      <div className='m-auto'>
<input type="text" className='p-5' value={num} readOnly/>
</div>

<div className='flex flex-col m-auto'>
 <div>
<button className='border bg-white text-black p-2 col-span-2' onClick={clearAll}>AC</button>
<button className='border bg-white text-black p-2' onClick={clearOnce}>CE</button>
<button className='border bg-white text-black p-2' onClick={() => fn('+')}>+</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('%')}>%</button>
          </div>
  <div>
          <button className='border bg-white text-black p-2' onClick={() => fn('7')}>7</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('8')}>8</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('9')}>9</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('/')}>/</button>
          </div>
          <div>   
          <button className='border bg-white text-black p-2' onClick={() => fn('4')}>4</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('5')}>5</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('6')}>6</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('*')}>X</button>
          </div>
          <div>
          <button className='border bg-white text-black p-2' onClick={() => fn('1')}>1</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('2')}>2</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('3')}>3</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('-')}>-</button>
          </div>
          <div>
          <button className='border bg-white text-black p-2' onClick={() => fn('0')}>0</button>
          <button className='border bg-white text-black p-2' onClick={() => fn('.')}>.</button>
          <button className='border bg-white text-black p-2 w-[130px]' onClick={eq}>=</button>

          </div>
 
   
        </div>



</div>
    </>
    )
}
export default Calculator;