import { ActionCellTemplate } from "@app-components";
import { DataGrid } from "devextreme-react";
import { Column, Pager, Paging } from "devextreme-react/data-grid";
import { memo } from "react";

function RoomRenterList() {
  return (
    <>
      <div className="room-renter-list">
        <DataGrid
          className={"dx-card wide-card"}
          dataSource={source}
          keyExpr="id"
          showBorders={false}
          showRowLines={false}
          focusedRowEnabled={true}
          columnAutoWidth={true}
          columnHidingEnabled={true}
          height="200"
        >
          <Paging defaultPageSize={3} />
          <Pager showPageSizeSelector={true} showInfo={true} />

          <Column dataField={"nameFee"} caption={"Tên phí"} />
          <Column
            dataField={"quantity"}
            caption={"Số lượng"}
            hidingPriority={0}
          />
          <Column dataField={"unit"} caption={"Đơn vị"} hidingPriority={1} />
          <Column dataField={"total"} caption={"Thành tiền"} />
          <Column dataField={"description"} caption={"Ghi chú"} />
          <Column
            width={60}
            fixed={true}
            fixedPosition="right"
            cellRender={(e) => <ActionCellTemplate event={e} />}
          />
        </DataGrid>
      </div>
    </>
  );
}

export default memo(RoomRenterList);

const source = [
  { id: 0, nameFee: "Tiền nước", total: 100000 },
  { id: 1, nameFee: "Tiền nước", total: 100000 },
  { id: 2, nameFee: "Tiền nước", total: 100000 },
  { id: 3, nameFee: "Tiền nước", total: 100000 },
  { id: 4, nameFee: "Tiền nước", total: 100000 },
  { id: 5, nameFee: "Tiền nước", total: 100000 },
];
