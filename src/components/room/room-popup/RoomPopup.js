import { Popup } from 'devextreme-react';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { RoomDetailsForm } from '@app-components';

function RoomPopup({ visible, onHiding, width = 750, height = 'auto', title = 'Chi tiết phòng' }) {

    const [toolbarItems, setToolbarItems] = useState([]);

    useEffect(() => {
        setToolbarItems([
            {
                widget: "dxButton",
                toolbar: "bottom",
                location: "after",
                options: {
                    text: 'OK',
                    width: 60,
                    elementAttr: {
                        class: "btn-ok"
                    },
                    onClick: onOkClicked
                }
            },
            {
                widget: "dxButton",
                toolbar: "bottom",
                location: "after",
                options: {
                    text: 'Trở về',
                    width: 70,
                    elementAttr: {
                        class: "btn-cancel"
                    },
                    onClick: onHiding
                }
            }
        ]);
    }, []);

    const onOkClicked = () => {
        console.log('ok clicked');
    }
    

    return (
        <>
            <>
                <Popup
                    visible={visible}
                    onHiding={onHiding}
                    fullScreen={isMobile}
                    dragEnabled={false}
                    hideOnOutsideClick={true}
                    showCloseButton={false}
                    showTitle={true}
                    title={title}
                    width={width}
                    height={height}
                    toolbarItems={toolbarItems}
                >
                    <RoomDetailsForm />
                </Popup>
            </>
        </>
    );
};

export default memo(RoomPopup);