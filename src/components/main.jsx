"use client";

import Airtable from "airtable";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import React from "react";

const ENDPOINT_URL = "https://api.airtable.com";

const airtableConfig = async () => {
  const API_KEY =
    "pat0GW0CZGiWQDJqa.0edca71aff7cc20a81ea351f3dc7fa4d066de5caa6f95f73fa9b604e33fd3fad";
  const BASE_ID = "appthki3Q1hEOhn7j";

  Airtable.configure({
    endpointUrl: ENDPOINT_URL,
    apiKey: API_KEY,
  });
  return Airtable.base(BASE_ID);
};
const FetchData = async (setPostData) => {
  const base = await airtableConfig();
  try {
    const res = await base.table("my-table").select({}).all();

    setPostData(res.map((cur) => cur.fields));
  } catch (err) {
    console.log(err);
  }
};

export function SubZero() {
  const [postData, setPostData] = useState([]);

  console.log(postData[0]);
  useEffect(() => {
    FetchData(setPostData);
  }, []);
  // const [domLoaded, setDomLoaded] = useState(false);

  // useEffect(() => {
  //   setDomLoaded(true);
  //   // Hydration failed bolood bga uchir eniig ashiglasan bolno. Project deer id orj ireh deer orluulaad ashiglaarai
  // }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "88vh",
        width: "84vw",
        border: "1px grey solid",
        overflow: "scroll",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          margin: "15px",
        }}
      >
        {postData.map((duck) => (
          <YoutubeCard duck={duck} />
        ))}
      </div>
    </div>
  );
}

const YoutubeCard = ({ duck }) => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div style={{ fontFamily: "sans-serif", borderRadius: "20px" }}>
        <img
          src={duck.VidImg}
          style={{ width: "340px", height: "200px", borderRadius: "10px" }}
          onClick={() => setshow(true)}
        />
        <div style={{ display: show ? "flex" : "none" }} className="modal">
          <button
            onClick={() => setshow(false)}
            style={{
              height: "450px",
              backgroundColor: "black",
              border: "none",
              width: "100px",
            }}
          >
            Exit
          </button>
          <ReactPlayer
            style={{
              borderRadius: "20px",
              display: "flex",
              borderRadius: "10px",
            }}
            width={700}
            controls
            height={450}
            url={duck.Link}
          />
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img
            src={duck.Img}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "20px",
            }}
          />

          <div>
            <div style={{ marginBottom: "10px" }}>
              <h4>{duck.Description}</h4>
            </div>
            <div
              style={{
                color: "grey",
                fontFamily: "sans-serif",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div>{duck.Name}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>{duck.Date}</div>|<div>{duck.View}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
