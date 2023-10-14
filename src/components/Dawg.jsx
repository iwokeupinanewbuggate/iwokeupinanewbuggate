import { blud } from "@/components/list";
export function Texas() {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        height: "5vh",
        border: "1px grey solid",
        width: "84vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {blud.map((ding) => (
        <>
          <div style={ding.box}>
            {" "}
            <h4>{ding.item}</h4>
          </div>
        </>
      ))}
    </div>
  );
}
