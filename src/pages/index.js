// import { useEffect, useState } from "react";
// import { Dawg } from "@/pages/components/luck";

// export default function Home() {
//   const [data, setdata] = useState([]);
//   const baseUrl = "https://dummyapi.io/data/v1";

//   const getuserlist = (url, method, body) => {
//     fetch(baseUrl + url, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         "app-id": "650c1ba1920222678fc7712d",
//       },
//       body: body ? JSON.stringify(body) : null,
//     })
//       .then((res) => res.json())
//       .then((res) => setdata(res.data));
//   };
//   console.log(data);
//   useEffect(() => {
//     getuserlist("/user", "GET");
//     getuserlist("/post", "GET");
//     getuserlist("/post/create", "POST", {
//       text: "Cat",
//       image: "https://picsum.photos/200/300",
//       likes: 0,
//       tags: ["Cats"],
//       owner: "60d0fe4f5311236168a109ca",
//     });
//   }, []);

//   getuserlist("/user/60d0fe4f5311236168a109ca", "GET");

//   getuserlist("/comment/create", "POST", {
//     message: "like",
//     owner: "60d0fe4f5311236168a109ca",
//     post: "650c22ebbd4abbcbaf5dfec8",
//   });

//   return (
//     <div>
//       {" "}
//       {data?.map((cult) => (
//         <Dawg
//           name={cult.owner.firstName}
//           text={cult.text}
//           img={cult.owner.picture}
//           pfp={cult.image}
//         />
//       ))}
//     </div>
//   );
// }
import { Pocus } from "@/components/Nav";
import { Sick } from "@/components/sideman";
import { SubZero } from "../components/main";
import { Texas } from "../components/Dawg";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Pocus />

        <div style={{ display: "flex" }}>
          <Sick />
          <div>
            <Texas />
            <SubZero />
          </div>
        </div>
      </div>
    </div>
  );
}
