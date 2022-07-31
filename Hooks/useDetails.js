import { useState } from "react";

const useDetails = () => {
  const [detailsState, setDetailsState] = useState(false);
  function ManageDetailsWindow() {
    setDetailsState(!detailsState);
  }
  return { detailsState, setDetailsState: ManageDetailsWindow };
};
export default useDetails;
