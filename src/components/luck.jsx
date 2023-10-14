export function Dawg({ name, text, img, pfp }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          width: "700px",
        }}
      >
        <div style={{}}>
          <img
            src={img}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "solid 5px gray",
            }}
          />

          <h1
            style={{
              font: "menu",
              width: "100px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {name}
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>{text}</h2>
          <img src={pfp} />
        </div>
      </div>
    </div>
  );
}
