import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

import {
  errorFetchingSelector,
  loadingStatusSelector,
} from "../../redux/selectors";

export default function Catalog() {
  const isLoading = useSelector(loadingStatusSelector);
  const error = useSelector(errorFetchingSelector);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p style={{ color: "red" }}>{error.message}</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            flexGrow: 1,
          }}
        >
          <SideBar />
          <Outlet />
        </div>
      )}
    </>
  );
}
