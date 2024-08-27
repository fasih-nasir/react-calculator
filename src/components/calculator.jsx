import { useState } from 'react'
function Calculator(){
    let [num,setNum] = useState(" ")
    let [ans,setAns] = useState(" ")
    
    function playSound() {
      const audio = new Audio('../assets/audio.mp3'); 
       audio.play();

       
    }
    function fn(num){
   
      playSound()
   setNum(prev => prev + num)


  
  
  }
   function eq(){
     let ans= eval(num);
     


     setNum(num)
     setAns(ans)

    //  console.log(ans);
   
   
     
   }
   function clearOnce(){
     let clearonce=num.slice(0,-1);
    
 
     
     setNum(clearonce)

   }
   function clearAll(){
     // let clearonce=num.slice(0,-1);
     setNum("")
     setAns("")
   }
    return(
    <>
       <div className='flex flex-col   h-[90vh] m-auto w-[50vh] div1'>
      <div className='divinp'>
<input type="text" className='' value={num} readOnly/>
<input type="text" className='inp2'  value={ans} readOnly/>
</div>

<div className='flex flex-col m-auto'>
 <div>
<button className='border bg-white text-black  col-span-2' onClick={clearAll}>AC</button>
<button className='border bg-white text-black ' onClick={clearOnce}>CE</button>
<button className='border bg-white text-black ' onClick={() => fn('+')}>+</button>
          <button className='border bg-white text-black ' onClick={() => fn('%')}>%</button>
          </div>
  <div>
          <button className='border bg-white text-black ' onClick={() => fn('7')}>7</button>
          <button className='border bg-white text-black ' onClick={() => fn('8')}>8</button>
          <button className='border bg-white text-black ' onClick={() => fn('9')}>9</button>
          <button className='border bg-white text-black ' onClick={() => fn('/')}>/</button>
          </div>
          <div>   
          <button className='border bg-white text-black ' onClick={() => fn('4')}>4</button>
          <button className='border bg-white text-black ' onClick={() => fn('5')}>5</button>
          <button className='border bg-white text-black ' onClick={() => fn('6')}>6</button>
          <button className='border bg-white text-black ' onClick={() => fn('*')}>X</button>
          </div>
          <div>
          <button className='border bg-white text-black ' onClick={() => fn('1')}>1</button>
          <button className='border bg-white text-black ' onClick={() => fn('2')}>2</button>
          <button className='border bg-white text-black ' onClick={() => fn('3')}>3</button>
          <button className='border bg-white text-black ' onClick={() => fn('-')}>-</button>
          </div>
          <div>
          <button className='border bg-white text-black' onClick={() => fn('0')}>0</button>
          <button className='border bg-white text-black' onClick={() => fn('.')}>.</button>
          <button className='border bg-white text-black w-[130px]' onClick={eq}>=</button>

          </div>
 
   
        </div>



</div>
    </>
    )
}
export default Calculator;
