import { Form, TextBox } from "devextreme-react";
import { GroupItem, SimpleItem } from "devextreme-react/form";
import { useRef, useState } from "react";

export default function RoomDetails() {
	const [roomDetails, setRoomDetails] = useState({});
	const formRef = useRef();

	// const test = () => {
	// 	if(!formRef.current) {
	// 		return;
	// 	}
	// 	console.log(formRef.current);
	// 	// var form = formRef.current.instance;  
	// 	// form.itemOption("ID", "editorOptions", { placeholder: "Test"});  
	// 	// form.itemOption("ID", "label", { text: "Test"});  
	// }

	// test();
	console.log(formRef);

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
