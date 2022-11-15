import { Popup } from "devextreme-react";
import { memo } from "react";
import { RoomDetailsForm } from "@app-components";

function RoomPopup({ visible, onHiding }) {

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
				<RoomDetailsForm />
			</Popup>
		</>
	);
}

export default memo(RoomPopup);


