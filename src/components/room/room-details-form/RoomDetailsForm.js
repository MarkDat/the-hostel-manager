import { Form, TextBox } from "devextreme-react";
import { GroupItem, SimpleItem } from "devextreme-react/form";
import { memo, useEffect, useRef, useState } from "react";

function RoomDetailsForm() {
	const [roomDetails, setRoomDetails] = useState({});
	const [statusRoomOptions, setStatusRoomOptions] = useState({});
	const formRef = useRef();

	useEffect(() => {
		setStatusRoomOptions({
			dataSource: [
				{id: 0, name: 'Còn trống'},
				{id: 1, name: 'Đang thuê'},
				{id: 2, name: 'Đang được đặt cọc'},
			],
			displayExpr: 'name',
			valueExpr: 'id',
			placeholder: "Chọn trạng thái..."
		});
	}, []);


	console.log('Room details form rendered');

	return (
		<>
			<Form
				formData={roomDetails}
				ref={formRef}
				colCount={2}
			>
				<GroupItem caption="Thông tin chung" colCount={2}>
					<SimpleItem
						dataField="firstName"
						editorType="dxTextBox"
						label={{ text: "Tên phòng" }}
						colSpan={2}
						editorOptions={{ maxLength: 50 }}
					/>
					<GroupItem colSpan={2} colCount={2}>
						<SimpleItem
							dataField="rentDate"
							editorType="dxDateBox"
							label={{ text: "Ngày gia hạn" }}
							editorOptions={{ maxLength: 50 }}
						/>
						<SimpleItem
							dataField="rentDate"
							editorType="dxDateBox"
							label={{ text: "Ngày gia hạn kế" }}
							editorOptions={{ maxLength: 50 }}
						/>
					</GroupItem>
				</GroupItem>
				<GroupItem caption="Trạng thái phòng" colCount={2}>
					<SimpleItem
						dataField="status"
						editorType="dxSelectBox"
						label={{ text: "Trạng thái" }}
						colSpan={2}
						editorOptions={statusRoomOptions}
					/>
					<GroupItem colSpan={2} colCount={2}>
						<SimpleItem
							dataField="rentDate"
							editorType="dxDateBox"
							label={{ text: "Ngày nhập phòng" }}
							editorOptions={{ maxLength: 50, readOnly: true }}
						/>
						<SimpleItem
							dataField="peopleCurrentQuantity"
							editorType="dxNumberBox"
							label={{ text: "Số người đang ở" }}
							editorOptions={{ maxLength: 50, readOnly: true }}
							helpText="Tối đa 15 người"
						/>
					</GroupItem>
				</GroupItem>
			</Form>
		</>
	);
}

export default memo(RoomDetailsForm);