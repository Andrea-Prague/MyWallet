import React from "react";

const EditButton = ({ handleEditAction }) => {
	// handleEditAction bude jina pro novou komponentu a pro edit nebo pridam jiny button do single modalu
	// a budu delat conditional rendering podle props, jaky button tam bude
	return <button onClick={handleEditAction}>Save</button>;
};

export default EditButton;
