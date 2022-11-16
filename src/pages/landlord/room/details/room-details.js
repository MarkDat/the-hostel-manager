import { RoomDetails, RoomActionTemplate } from "@app-components";
import { ScrollView } from "devextreme-react";
import './room-details.scss';

export default function RoomDetailsPage() {
  return (
    <>
      <div className="room-details-page">
        <div className="room-title">Chi tiết phòng</div>
        <div className="room-container">
          <div className="room-content">
            <ScrollView>
              <RoomDetails />
            </ScrollView>
          </div>
          <div className="room-action">
            <RoomActionTemplate />
          </div>
        </div>
      </div>
    </>
  );
}
