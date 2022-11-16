import { Button } from 'devextreme-react';
import { useEffect, useState } from 'react';
import './RoomActionTemplate.scss';

export default function RoomActionTemplate() {
    
    const [buttons, setButtons] = useState([]);
    
    useEffect(() => {
        setButtons([
            {
                width: 90,
                text:"Trở về",
                type:"normal",
            },
            {
                width: 90,
                text:"Cập nhật",
                type:"normal",
                className:"btn-ok"
            },
            {
                width:90,
                text:"Xóa",
                type:"normal",
                className:"btn-cancel"
            },
        ]);
    }, []);


    return (
        <>
            <div className="room-action-template">
                {buttons.map((prop, index) => {
                    return <Button {...prop} key={index} />
                })}
            </div>
        </>
      );
}