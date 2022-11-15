import './ActionCellTemplate.scss'

export default function ActionCellTemplate({event, onEditClicked, onDeleteClicked}) {

    const handleEditClicked = (e) => {
        onEditClicked(e, event.data);
    }

    const handleDeleteClicked = (e) => {
        onDeleteClicked(e, event.data);
    }
    
    return (
        <>
            <div className="action-cell">
                <i onClick={handleEditClicked} className="action-cell--edit fa-regular fa-pen-to-square"></i>
                <i onClick={handleDeleteClicked} className="action-cell--delete fa-regular fa-trash"></i>
            </div>
        </>
      );
}