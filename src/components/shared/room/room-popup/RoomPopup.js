import { Popup } from "devextreme-react";
import { memo, useEffect, useState } from "react";
import { RoomDetailsForm } from "@app-components";
import { isMobile } from "react-device-detect";

function RoomPopup({ visible, onHiding }) {
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
						class : "btn-ok"  
					}
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
						class : "btn-cancel"  
					}
				}
			}
		]);
	}, []);

	return (
		<>
			<Popup
				visible={visible}
				onHiding={onHiding}
				fullScreen={isMobile}
				dragEnabled={false}
				hideOnOutsideClick={true}
				showCloseButton={false}
				showTitle={true}
				title="Chi tiết phòng"
				width={500}
				height={280}
				toolbarItems={toolbarItems}
			>
				<RoomDetailsForm />
			</Popup>
		</>
	);
}

export default memo(RoomPopup);


