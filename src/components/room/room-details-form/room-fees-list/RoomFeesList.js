import { DataGrid } from "devextreme-react";
import { Column, FilterRow, Pager, Paging } from "devextreme-react/data-grid";
import { memo } from "react";

function RoomFeesList() {

  return (
    <>
      <div className="room-fees-list">
      <DataGrid
						className={"dx-card wide-card"}
						dataSource={source}
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

						<Column dataField={"nameFee"} caption={"Tên phí"} />
						<Column dataField={"quantity"} caption={"Số lượng"} hidingPriority={0} />
            <Column dataField={"unit"} caption={"Đơn vị"} hidingPriority={1} />
            <Column dataField={"total"} caption={"Thành tiền"} />
            <Column dataField={"description"} caption={"Ghi chú"} />
					</DataGrid>
      </div>
    </>
  );
}

export default memo(RoomFeesList);

const source = [
  {id: 0, nameFee: 'Tiền nước', total: 100000},
  {id: 1, nameFee: 'Tiền nước', total: 100000},
  {id: 2, nameFee: 'Tiền nước', total: 100000},
]