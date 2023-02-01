import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { loadingStatusSelector } from "../../redux/selectors";

export default function Catalog() {
  const isLoading = useSelector(loadingStatusSelector);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
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
