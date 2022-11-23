import { Button } from 'devextreme-react';
import { memo, useEffect, useState } from 'react';
import './ActionTemplate.scss';

function ActionTemplate({toolbars, cssClass}) {

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