import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "web3modal";

export default function TabsLink() {
  const [getAddress, setGetAddress] = useState();
  const [getImage, setGetImage] = useState();
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [data, setData] = useState();
  const [referral, setReferral] = useState();
  const [getReferral, setGetReferral] = useState();
  const [getContentKey, setGetContentKey] = useState();
  useEffect(() => {
    localStorage.getItem("address");
    setGetAddress(localStorage.getItem("address"));
    setGetImage(localStorage.getItem("imageSrc"));
    setGetReferral(localStorage.getItem("Referral"));
    setGetContentKey(localStorage.getItem("contentKey"));

    const tabs = localStorage.getItem("tabs");
    console.log(tabs, "tabs");
    if (tabs == "true") {
      setTab1(true);
    }
    if (tabs == "false") {
      setTab2(true);
    }
    getData();
  }, []);

  function nextFn1(e) {
    e.preventDefault();
    setTab1(false);
    setTab2(true);
    // setTab3(true);
  }

  function nextFn2(e) {
    e.preventDefault();
    localStorage.setItem("Referral", referral);

    setTab1(false);
    setTab2(false);
    setTab3(true);
  }

  async function getData() {
    try {
      const key = localStorage.getItem("contentKey");
      let res = await axios.post("/api/faceImpression", {
        faceImpression: key,
      });
      const response = res.data;
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function register(data) {
    try {
      let res = await axios.post("/api/register", data);
      const response = res.data;
      console.log(response, "to get response from api for registration");
    } catch (err) {
      console.log(err);
    }
  }

  async function formSubmitHandler(event) {
    event.preventDefault();
    // console.log(localStorage.getItem("Referral"))
    console.log(getReferral,'refffffffffffff')

    const data = {
      faceImpression: getContentKey,
      address: getAddress,
      referral: getReferral,
    };
    console.log(data, "data to send to api");
    register(data);
  }

  console.log(tab1, tab2, tab3);

  return (
    <section class="linkstarted-tabs">
      <div class="container">
        <div class="tabs-main">
          <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class={tab1 ? "nav-link active imp-btn" : "nav-link imp-btn"}
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                1
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class={tab2 ? "nav-link active imp-btn" : "nav-link imp-btn"}
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                2
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class={tab3 ? "nav-link active imp-btn" : "nav-link imp-btn"}
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                3
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class={tab1 ? "tab-pane fade show active" : "tab-pane fade"}
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <div class="Recognized-box">
                <div class="Recognized-head">
                  <h2>
                    Recognized <span> Successfully</span>
                  </h2>
                  <p>The wallet is now linked to the following person.</p>
                </div>
                <div id="face-identify">
                  {/* <img src="img/camera1.jpg" alt="" /> */}
                  {/* <p>nzvkn***********kbgfdw</p> */}
                  <img src={getImage} alt="" />
                  <p>{getAddress}</p>
                </div>
                <div id="face-table">
                  <p>Your Other Accounts</p>
                  <table
                    class="table table-dark table-striped"
                    id="facemain-table"
                  >
                    <thead>
                      <tr>
                        <th class="face-head">Wallet Addresses</th>
                        <th class="face-head">Reference wallet</th>
                        <th class="face-head">Activated On</th>
                      </tr>
                    </thead>
                    {data?.map((item, id) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item?.address}</td>
                            <td>{item?.referral}</td>
                            <td>
                              {new Date(item?.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
                <div class="human-button">
                  <button onClick={nextFn1} class="open-camera">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div
              class={tab2 ? "tab-pane fade show active" : "tab-pane fade"}
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <div class="refrence-box">
                <div class="refrence-head">
                  <h2>
                    Reference <span>Details</span>
                  </h2>
                  <p>
                    Here, you need to provide the details of the person who
                    invited you to this community.
                  </p>
                </div>
                <div class="refrence-image">
                  <img src="/handshake.png" alt="" />
                </div>
                <div class="refrence-text">
                  <form>
                    <div class="mb-3" id="refrence-input">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter wallet address / reference code"
                        onChange={(e) => setReferral(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div class="refrence-button">
                  <button
                    type="button"
                    onClick={nextFn2}
                    class="next"
                    style={{ cursor: "pointer" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div
              class={tab3 ? "tab-pane fade show active" : "tab-pane fade"}
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabindex="0"
            >
              <div class="make-box">
                <div class="make-head">
                  <h2>
                    Make <span>Transaction</span>
                  </h2>
                  <p>
                    To join this community you need to make a transaction of{" "}
                    <span>X.XXXX</span>
                    P2PBIT.
                  </p>
                </div>
                <div class="make-image">
                  <img src="img/hand_carryimg_p2p_big.png" alt="" />
                </div>
                <div class="make-text">
                  <p>
                    Let it be a cause of happiness and see how it becomes
                    beneficial for you.
                  </p>
                </div>
                <div class="make-button">
                  <button
                    type="button"
                    class="btn btn-primary make-proceed"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={formSubmitHandler}
                  >
                    Proceed
                  </button>

                  <div
                    class="modal fade tabs-modals"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog transaction-dialog"
                      id="connect-dialog"
                    >
                      <div
                        class="modal-content spinner-content"
                        id="connect-content"
                      >
                        <div class="modal-body " id="connect-body">
                          <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                          <h5>Transaction processing...</h5>
                          <p>
                            This may take some time. Please don't refresh, close
                            or change the screen. And don't press the back
                            button.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
