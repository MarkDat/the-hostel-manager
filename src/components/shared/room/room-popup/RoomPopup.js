import { Popup } from "devextreme-react";
import { memo } from "react";

function RoomPopup({visible, onHiding}) {

  return (
    <>
        <Popup
          visible={visible}
          onHiding={onHiding}
          dragEnabled={false}
          hideOnOutsideClick={true}
          showCloseButton={false}
          showTitle={true}
          title="Chi tiết phòng"
          width={300}
          height={280}
        >
          gg
        </Popup>
    </>
  );
}

export default memo(RoomPopup);


