import React from 'react';
import {AiOutlineRightCircle} from 'react-icons/ai';


export default function Bar({list:{value,level}}) {
    return (
        <div>
            <div className="bar__wrapper">
                <div className="bar__insider">
                    <p>
                     <AiOutlineRightCircle/>
                     {value}
                     </p>
                </div>
            </div>
        </div>
    )
}
