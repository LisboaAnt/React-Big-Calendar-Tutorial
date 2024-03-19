import React, { useState } from 'react';
const CustomTollbar = ({label, onView, onNavigate, views}) =>{
    const [itemText, setItemText] = useState('month');
    return(
        <div className="toolbar-container">
            <h1 className='mesAno'>{label}</h1>
        
            <div className="dirtop">
                <div className="dropdown">
                    <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-bs-toggle="dropdown" aria-expanded="false">
                        {itemText}
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        {views.map((view,index) =>(
                            <div kay={index}>
                                <li>
                                    <button className='dropdown-item' onClick={()=>onView(view)+ setItemText(view)}>{view}</button>
                                </li>
                                {index === 2 &&<hr className='dropdown-divider'></hr>}
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="toolbar-navegation" style={{marginLeft: '15px'}}>
                    <button className='btn btn-secondary btn-ls mr-2 border-0' onClick={() =>onNavigate('TODAY')}>Hoje</button>
                    <button className='btn btn-sm mr-2 text-secondary' onClick={()=>onNavigate('PREV')} style={{ marginLeft: '15px'}}><i class="bi bi-caret-left"></i></button>
                    <button className='btn btn-sm mr-2 text-secondary' onClick={()=>onNavigate('NEXT')}><i class="bi bi-caret-right"></i></button>
                </div>
            </div>

        </div>
    )
}

export default CustomTollbar;
