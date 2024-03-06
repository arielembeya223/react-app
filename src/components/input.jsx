export function Input({placeholder,value,onchange})
{
    return <div>
            <input 
            className="form-control" 
            value={value} 
            placeholder={placeholder} 
            onChange={(e)=>onchange(e.target.value)}></input>
           </div>
}