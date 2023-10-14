export function Pocus() {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        height: "7vh",
        border: "1px grey solid",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "15px",
          }}
        >
          <img src="hamburger.svg" style={{ paddingRight: "25px" }} />
          <img src="you.svg" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "250px",
            backgroundColor: "#403e3e",
            border: "1px solid white ",
            borderRadius: "20px",
            border: "none",
          }}
        >
          <input
            placeholder="Search"
            style={{
              display: "flex",
              paddingTop: "5px",
              justifyContent: "center",
              border: "none",
            }}
          />
          <img src="Group.svg" />
          <img src="mic.svg" />
        </div>
        <div
          style={{
            display: "flex",
            width: "150px",
            justifyContent: "space-between",
            marginRight: "50px",
          }}
        >
          <img src="create.svg" />
          <img src="apps.svg" />
          <img src="noti.svg" />
          <img src="User-Avatar.svg" style={{ width: "25px" }} />
        </div>
      </div>
    </div>
  );
}
