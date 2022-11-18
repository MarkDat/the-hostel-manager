import { Form, TextBox } from "devextreme-react";
import { GroupItem, SimpleItem } from "devextreme-react/form";
import { memo, useRef, useState } from "react";

function RoomDetailsForm() {
	const [roomDetails, setRoomDetails] = useState({});
	const formRef = useRef();


	console.log('Room details form rendered');

	return (
		<>
		<TextBox labelMode={"floating"} label={"hihu"}></TextBox>
			<Form
				formData={roomDetails}
				ref={formRef}
			>
				<GroupItem colCount={2}>
					<SimpleItem
						dataField="firstName"
						editorType="dxTextBox"
						label={{text: "Tên"}}
						editorOptions={{ maxLength: 50 }}
					/>
					<SimpleItem
						dataField="rentDate"
						editorType="dxDateBox"
						label={{text: "Ngày thuê"}}
						editorOptions={{ maxLength: 50 }}
					/>
				</GroupItem>
			</Form>
		</>
	);
}

export default memo(RoomDetailsForm);