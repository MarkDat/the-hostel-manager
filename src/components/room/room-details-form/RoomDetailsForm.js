import { Form, TextBox } from "devextreme-react";
import { GroupItem, SimpleItem, Tab, TabbedItem, TabPanelOptions } from "devextreme-react/form";
import { memo, useEffect, useRef, useState } from "react";
import { RoomFeesList } from "@app-components";
import './RoomDetailsForm.scss';

function RoomDetailsForm() {
	const [roomDetails, setRoomDetails] = useState({});
	const [statusRoomOptions, setStatusRoomOptions] = useState({});
	const formRef = useRef();

	useEffect(() => {
		setStatusRoomOptions({
			dataSource: [
				{ id: 0, name: 'Còn trống' },
				{ id: 1, name: 'Đang thuê' },
				{ id: 2, name: 'Đang được đặt cọc' },
			],
			displayExpr: 'name',
			valueExpr: 'id',
			placeholder: "Chọn trạng thái..."
		});
	}, []);


	console.log('Room details form rendered');

	const tabTemplate = (a, e, i) => {
		console.group('OKe');
		console.log(a);
		console.log(e);
		console.log(i);
		console.groupEnd();
	}

	return (
		<>
			<div className="room-details-form">
			<Form
				formData={roomDetails}
				ref={formRef}
				colCount={2}
			>

				<GroupItem colSpan={2}>
					<TabbedItem>
						<TabPanelOptions deferRendering={false} width="100%" height="100%" focusStateEnabled={false} helpText="Click vào ô để chỉnh sửa" />
						<Tab title="Thông tin chung" colCount={2}>
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
								<SimpleItem
									dataField="firstName"
									editorType="dxTextArea"
									label={{ text: "Ghi chú" }}
									colSpan={2}
									editorOptions={{ maxLength: 200 }}
								/>
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
						</Tab>
						<Tab title="Các loại phí">
							<RoomFeesList />
						</Tab>
						<Tab title="Người thuê">
							<SimpleItem dataField="Skype" />
						</Tab>
						<Tab title="Lịch sử thanh toán">
							<SimpleItem dataField="Email" />
						</Tab>
					</TabbedItem>
				</GroupItem>
			</Form>
			</div>
		</>
	);
}

export default memo(RoomDetailsForm);
