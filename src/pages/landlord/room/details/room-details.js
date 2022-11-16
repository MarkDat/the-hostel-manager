import { RoomDetails } from "@app-components";
import './room-details.scss';

export default function RoomDetailsPage() {
  return (
    <>
      <div className="room-details-page">
        <div className="room-title">Chi tiết phòng</div>
        <div className="room-content">
          <RoomDetails></RoomDetails>
        </div>
      </div>
    </>
  );
}
