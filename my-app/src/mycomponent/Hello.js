import React from 'react';
function click(a)
{
    alert(a);
}
function Hello(props)
{
   
return( <div>
    <button onClick={click.bind(this,"I Am Function Aleart Click")}>Click Function</button>
    <h1>Name:{props.name},Age:{props.age}</h1>
</div>
);
}
export default  Hello;