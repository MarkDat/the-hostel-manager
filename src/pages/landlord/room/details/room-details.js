import { RoomDetailsForm, ActionTemplate } from "@app-components";
import { ScrollView } from "devextreme-react";
import { useCallback } from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import './room-details.scss';

export default function RoomDetailsPage() {
  const navigate = useNavigate();

  const onReturnClicked = useCallback(() => {
    navigate('../list');
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <div className="room-details-page">
        <div className="room-title">Chi tiết phòng</div>
        <div className={`room-container ${!isMobile ? 'room-resize-pc':''}`}>
          <div className="room-content">
            <ScrollView>
              <RoomDetailsForm />
            </ScrollView>
          </div>
          <div className="room-action">
            <ActionTemplate onReturnClicked={onReturnClicked} />
          </div> 
        </div>
      </div>
    </>
  );
}
