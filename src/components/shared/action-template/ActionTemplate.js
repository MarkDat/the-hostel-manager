import { Button } from 'devextreme-react';
import { memo, useEffect, useState } from 'react';
import './ActionTemplate.scss';

function ActionTemplate({toolbars, cssClass}) {
    
    // const [buttons, setButtons] = useState([]);
    
    // useEffect(() => {
    //     setButtons([
    //         {
    //             width: 90,
    //             text:"Trở về",
    //             type:"normal",
    //             onClick: onReturnClicked
    //         },
    //         {
    //             width: 90,
    //             text:"Cập nhật",
    //             type:"normal",
    //             className:"btn-ok"
    //         },
    //         {
    //             width:90,
    //             text:"Xóa",
    //             type:"normal",
    //             className:"btn-cancel"
    //         },
    //     ]);
    // }, []);


    return (
        <>
            <div className={`action-template ${cssClass}`} >
                {toolbars.map((prop, index) => {
                    return <Button {...prop} key={index} />
                })}
            </div>
        </>
      );
};

export default memo(ActionTemplate);