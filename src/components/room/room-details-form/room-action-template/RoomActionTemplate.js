import { ActionTemplate } from '@app-components';
import { memo, useEffect, useState } from 'react';
import './RoomActionTemplate.scss';

function RoomActionTemplate({onReturnClicked}) {
    
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        setButtons([
            {
                width: 90,
                text:"Trở về",
                type:"normal",
                icon: "fa-regular fa-rotate-left",
                onClick: onReturnClicked
            },
            {
                width: 110,
                text:"Cập nhật",
                type:"normal",
                icon: "fa-solid fa-floppy-disk i-color--white",
                className:"btn-ok"
            },
            {
                width:90,
                text:"Xóa",
                type:"normal",
                icon: "fa-regular fa-trash i-color--red",
                className:"btn-delete"
            },
        ]);
  }, []);

    return (
        <>
           <div className='room-action-template'>
             <ActionTemplate toolbars={buttons} cssClass={'action-center'} />
           </div>
        </>
      );
};

export default memo(RoomActionTemplate);