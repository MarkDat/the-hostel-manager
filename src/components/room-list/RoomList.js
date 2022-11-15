import { ActionCellTemplate } from "components";
import { DataGrid, Lookup } from "devextreme-react";
import { Column, FilterRow, Pager, Paging } from "devextreme-react/data-grid";
import React, { useEffect } from "react";
import { useState } from "react";

export default function RoomList() {
  const [dataSource, setDataSource] = useState([]);

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
    console.log('edit clicked: ',data);
  }

  const onDeleteClicked = (event, data) => {
    console.log('delete clicked: ',data);
  }

  return (
    <>
      <h2 className={"content-block"}>Room List</h2>
      <div className={"content-block"}>
        <DataGrid
          className={"dx-card wide-card"}
          dataSource={dataSource}
          keyExpr="id"
          showBorders={false}
          showRowLines={false}
          focusedRowEnabled={true}
          columnAutoWidth={true}
          columnHidingEnabled={true}
        >
          <Paging defaultPageSize={3} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />

          <Column dataField={"roomCode"} caption={"Mã Phòng"} />
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
    </>
  );
}