import { Icons, Uzerz, three, more } from "@/components/list";

export function Sick() {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        height: "93vh",
        width: "16vw",
        border: "1px grey solid",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            marginRight: "10px",
            justifyContent: "center",
          }}
        >
          {three.map((Ice) => (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "5px",
                  fontFamily: "sans-serif",
                }}
              >
                <div>{Ice.svj}</div>
                <div>{Ice.tick}</div>
              </div>
            </>
          ))}
        </div>
        <div
          style={{
            width: "16vw",
            border: "1px grey solid",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            marginRight: "40px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px",
            marginRight: "10px",
          }}
        >
          {Icons.map((icon) => (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  padding: "5px",
                  fontFamily: "sans-serif",
                }}
              >
                <div style={{ paddingRight: "10px", paddingBottom: "10px" }}>
                  {icon.svg}
                </div>
                <div> {icon.title}</div>
              </div>
            </>
          ))}
        </div>
        <div
          style={{
            width: "16vw",
            border: "1px grey solid",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            marginRight: "40px",
          }}
        ></div>
        <div
          style={{
            padding: "10px",
            marginRight: "10px",
          }}
        >
          {Uzerz.map((lol) => (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  padding: "5px",
                  alignItems: "center",
                  fontFamily: "sans-serif",
                }}
              >
                <div>
                  <img
                    src={lol.pfp}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px black solid",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  />
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  {lol.Name}
                </div>
              </div>
            </>
          ))}
        </div>
        <div
          style={{
            width: "16vw",
            border: "1px grey solid",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            marginRight: "40px",
          }}
        ></div>
        <div
          style={{
            padding: "10px",
            marginRight: "10px",
          }}
        >
          <h1
            style={{
              color: "grey",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
              fontFamily: "sans-serif",
            }}
          >
            MORE FROM YOUTUBE
          </h1>
          {more.map((putin) => (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginLeft: "10px",
                  padding: "5px",
                  alignItems: "center",
                  fontFamily: "sans-serif",
                }}
              >
                <div style={{ padding: "10px" }}>{putin.pic}</div>
                <div style={{ paddingLeft: "5px" }}>{putin.p}</div>
              </div>
            </>
          ))}
        </div>
        <div
          style={{
            width: "16vw",
            border: "1px grey solid",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            marginRight: "40px",
          }}
        ></div>
        <div
          style={{
            padding: "20px",
            fontFamily: "sans-serif",
            fontSize: "11px",
            color: "grey",
          }}
        >
          <h3>
            About Press Copyright Contact us Creators Advertise Developers
          </h3>
          <h3>
            Terms Privacy Policy & Safety How YouTube works Test new features
          </h3>
          <h3 style={{ marginTop: "30px" }}>© 2023 Google LLC</h3>
        </div>
      </div>
    </div>
  );
}
