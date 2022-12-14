import { ActionCellTemplate, RoomPopup } from "@app-components";
import { DataGrid } from "devextreme-react";
import { Column, FilterRow, Pager, Paging } from "devextreme-react/data-grid";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RoomList() {
	const [dataSource, setDataSource] = useState([]);
	const [isShowDetails, setShowDetails] = useState(false);
	let navigate = useNavigate();

	useEffect(() => {
		setDataSource([
			{
				id: 1,
				roomCode: "PT1",
				roomName: "Vợ Chồng Hoà",
				electricityNumber: 4952,
				waterNumber: 2651,
			},
			{
				id: 2,
				roomCode: "PT2",
				roomName: "Vợ Chồng Thuỷ",
				electricityNumber: 4952,
				waterNumber: 2651,
			},
			{
				id: 3,
				roomCode: "PT3",
				roomName: "Bon - Sinh viên",
				electricityNumber: 4952,
				waterNumber: 2651,
			},
			{
				id: 4,
				roomCode: "PT4",
				roomName: "Thằng ku cháu",
				electricityNumber: 4952,
				waterNumber: 2651,
			},
		]);
	}, []);

	const onEditClicked = (event, data) => {
		// console.log('edit clicked: ', data);
		 navigate(`../${data.id}`);
		//setShowDetails(true);
	}

	const onDeleteClicked = (event, data) => {
		console.log('delete clicked: ', data);
	}

	const onPopupHiding = useCallback((e) => {
		setShowDetails(false);
	}, []);

	console.log('Room list render');

	return (
		<>
			<div className="room-list content-block">
				<div className="room-list__title page-title">Danh sách phòng</div>
				<div className="room-list__content">
					<DataGrid
						className={"dx-card wide-card"}
						dataSource={dataSource}
						keyExpr="id"
						showBorders={false}
						showRowLines={false}
						focusedRowEnabled={true}
						columnAutoWidth={true}
						columnHidingEnabled={true}
						height="100%"
					>
						<Paging defaultPageSize={3} />
						<Pager showPageSizeSelector={true} showInfo={true} />
						<FilterRow visible={true} />

						<Column dataField={"roomCode"} caption={"Mã Phòng"}  />
						<Column dataField={"roomName"} caption={"Tên Phòng"} />
						<Column
							dataField={"electricityNumber"}
							alignment="left"
							caption={"Số Điện"}
						/>
						<Column
							dataField={"waterNumber"}
							alignment="left"
							caption={"Số Nước"}
						/>
						<Column
							width={60}
							fixed={true}
							fixedPosition="right"
							cellRender={(e) => <ActionCellTemplate event={e} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked} />}
						/>
					</DataGrid>
				</div>
			</div>

			{/* <RoomPopup visible={isShowDetails} onHiding={onPopupHiding} /> */}
		</>
	);
}
