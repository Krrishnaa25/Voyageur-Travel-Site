import React, { useState } from "react";
import "./Locations.css";
import State from "./State";
import "./State.css";

function Search() {
  const [showStates, setShowStates] = useState("true");
  const [stateName, setStateName] = useState("");
  return (
    <>
      {showStates === "true" && (
        <>
          <section className="banner">
            <div className="search">
              <input
                type="text"
                id="myInput"
                onChange={myFunction}
                placeholder="Search for hotels..."
                title="Type in a state"
              />

              <ul id="myUL">
                <li>
                  <button
                    onClick={() => {
                      setStateName("Andhra Pradesh");
                      setShowStates("false");
                    }}
                  >
                    Andhra Pradesh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Arunachal Pradesh");
                      setShowStates("false");
                    }}
                  >
                    Arunachal Pradesh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Assam");
                      setShowStates("false");
                    }}
                  >
                    Assam
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Bihar");
                      setShowStates("false");
                    }}
                  >
                    Bihar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Chandigarh");
                      setShowStates("false");
                    }}
                  >
                    Chandigarh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Chhasttisgarh");
                      setShowStates("false");
                    }}
                  >
                    Chhasttisgarh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Delhi");
                      setShowStates("false");
                    }}
                  >
                    Delhi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Goa");
                      setShowStates("false");
                    }}
                  >
                    Goa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Gujarat");
                      setShowStates("false");
                    }}
                  >
                    Gujarat
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Haryana");
                      setShowStates("false");
                    }}
                  >
                    Haryana
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Himachal Pradesh");
                      setShowStates("false");
                    }}
                  >
                    Himachal Pradesh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Jammu and Kashmir");
                      setShowStates("false");
                    }}
                  >
                    Jammu and Kashmir
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Jharkhand");
                      setShowStates("false");
                    }}
                  >
                    Jharkhand
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setStateName("Karnataka");
                      setShowStates("false");
                    }}
                  >
                    Karnataka
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Madhya Pradesh");
                      setShowStates("false");
                    }}
                  >
                    Madhya Pradesh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Maharashtra");
                      setShowStates("false");
                    }}
                  >
                    Maharashtra
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Manipur");
                      setShowStates("false");
                    }}
                  >
                    Manipur
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Meghalaya");
                      setShowStates("false");
                    }}
                  >
                    Meghalaya
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Mizoram");
                      setShowStates("false");
                    }}
                  >
                    Mizoram
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Nagaland");
                      setShowStates("false");
                    }}
                  >
                    Nagaland
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Odisha");
                      setShowStates("false");
                    }}
                  >
                    Odisha
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Punjab");
                      setShowStates("false");
                    }}
                  >
                    Punjab
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Rajasthan");
                      setShowStates("false");
                    }}
                  >
                    Rajasthan
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Sikkim");
                      setShowStates("false");
                    }}
                  >
                    Sikkim
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Tamil Nadu");
                      setShowStates("false");
                    }}
                  >
                    Tamil Nadu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Telangana");
                      setShowStates("false");
                    }}
                  >
                    Telangana
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Tripura");
                      setShowStates("false");
                    }}
                  >
                    Tripura
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Uttar Pradesh");
                      setShowStates("false");
                    }}
                  >
                    Uttar Pradesh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("Uttarakhand");
                      setShowStates("false");
                    }}
                  >
                    Uttarakhand
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStateName("West Bengal");
                      setShowStates("false");
                    }}
                  >
                    West Bengal
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </>
      )}
      {showStates === "false" && (
        <>
          <section className="home" id="home">
            <div className="max-width">
              <div className="home-content">
                <div className="sub">
                  <div className="subhead">
                    <span> {stateName} </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h1 className="hotels_heading">Hotels</h1>
          <button
            className="btn first"
            onClick={() => {
              setShowStates("true");
            }}
          >
            Back
          </button>
          <State stateName={stateName} />
        </>
      )}
    </>
  );
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

export default Search;
