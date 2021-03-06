import React from "react";
import profile from "./images/IIT-logo.jpg";
import "./App.css";
function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm: px-5 bg-black">
      <div className="w-full ">
        <div className="">
          <img
            className="w-60 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile photo"
          />
          <div>
            <div className="text-center mt-10">
              <p className="text-xl sm:text-2xl text-white pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                TIMETABLE/CSE-SEM4
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-half app-container">
        <table>
          <tr>
            <th>Day</th>
            <th>8-8:50</th>
            <th>9-9:50</th>
            <th>10-10:50</th>
            <th>11-11:50</th>
            <th>12-12:50</th>
            <th>12:50-14</th>
            <th>14-14:50</th>
            <th>15-17:50</th>
          </tr>
          <tr>
            <td>Monday</td>
            <td></td>
            <td>
              <a
                href="https://zoom.us/j/93902437746?pwd=aTRSSUxxQkM0eE41dVo4RHBYUlRsUT09"
                target="blank"
              >
                TOC
              </a>
            </td>
            <td>
              <a
                href="https://zoom.us/j/99368835571?pwd=UGJ0SGRycWRnd0dlajZlRnJhbGR5UT09"
                target="blank"
              >
                DSA
              </a>
            </td>
            <td>
              <details
                summaryContent={<span>HSS</span>}
                onToggle={console.log}
                close
              >
                <summary>HSS</summary>
                <p>
                  <ul>
                    <li>
                      <a
                        href="https://zoom.us/j/98731721374?pwd=SlllTXpHL3NIaTJvRW8wZFg4SzM3Zz09"
                        target="blank"
                      >
                        LTM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/97118749758?pwd=VHQ3UGpvaDg1bVQyQ2ljQUpxbGZ6QT09"
                        target="blank"
                      >
                        IFM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/92577632348?pwd=bndsT0xZNHFOZ1ZjeGNqV3JzWW1qdz09"
                        target="blank"
                      >
                        ENG
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/91896081041?pwd=ZHNCNTdRZm9mME82SGkxN1YzcDRadz09"
                        target="blank"
                      >
                        POE
                      </a>
                    </li>
                  </ul>
                </p>
              </details>
            </td>
            <td>
              <a
                href="https://zoom.us/j/99550094221?pwd=cGlUU09PYUhmcit4Wisxb3poS3ppdz09"
                target="blank"
              >
                Prob&Stat
              </a>
            </td>
            <td></td>
            <td></td>
            <td>
              <a
                href="https://zoom.us/j/99368835571?pwd=UGJ0SGRycWRnd0dlajZlRnJhbGR5UT09"
                target="blank"
              >
                DSA-Lab
              </a>
            </td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>
              <a href="#"></a>
            </td>
            <td>
              <a
                href="https://zoom.us/j/93777660225?pwd=WGNpTnhWenU2NFlmeFVWQlQyeVlaZz09"
                target="blank"
              >
                CO(8:30-9:45)
              </a>
            </td>
            <td></td>
            <td>
              <a
                href="https://zoom.us/j/93902437746?pwd=aTRSSUxxQkM0eE41dVo4RHBYUlRsUT09"
                target="blank"
              >
                TOC
              </a>
            </td>
            <td></td>
            <td></td>
            <td>
              <a
                href="https://zoom.us/j/99368835571?pwd=UGJ0SGRycWRnd0dlajZlRnJhbGR5UT09"
                target="blank"
              >
                DSA(T)
              </a>
            </td>
            <td>
              <a
                href="https://zoom.us/j/92592571609?pwd=a3pMd1NBclJ3Z0lOaUxkS0ZEaEpHdz09"
                target="blank"
              >
                Com-Lab
              </a>
            </td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>
              <a href="#"></a>
            </td>
            <td>
              <a
                href="https://zoom.us/j/93777660225?pwd=WGNpTnhWenU2NFlmeFVWQlQyeVlaZz09"
                target="blank"
              >
                CO(8:30-9:45)
              </a>
            </td>
            <td class="working details-example">
              <details
                summaryContent={<span>HSS</span>}
                onToggle={console.log}
                close
              >
                <summary>HSS</summary>
                <p>
                  <ul>
                    <li>
                      <a
                        href="https://zoom.us/j/98731721374?pwd=SlllTXpHL3NIaTJvRW8wZFg4SzM3Zz09"
                        target="blank"
                      >
                        LTM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/97118749758?pwd=VHQ3UGpvaDg1bVQyQ2ljQUpxbGZ6QT09"
                        target="blank"
                      >
                        IFM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/92577632348?pwd=bndsT0xZNHFOZ1ZjeGNqV3JzWW1qdz09"
                        target="blank"
                      >
                        ENG
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/91896081041?pwd=ZHNCNTdRZm9mME82SGkxN1YzcDRadz09"
                        target="blank"
                      >
                        POE
                      </a>
                    </li>
                  </ul>
                </p>
              </details>
            </td>
            <td>
              <a
                href="https://zoom.us/j/99368835571?pwd=UGJ0SGRycWRnd0dlajZlRnJhbGR5UT09"
                target="blank"
              >
                DSA
              </a>
            </td>
            <td>
              <a
                href="https://zoom.us/j/99550094221?pwd=cGlUU09PYUhmcit4Wisxb3poS3ppdz09"
                target="blank"
              >
                Prob&Stat
              </a>
            </td>
            <td>
              <b>Lunch</b>
            </td>
            <td></td>
            <td>
              <b>Institute-Seminar</b>
            </td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>
              <a href="#"></a>
            </td>
            <td></td>
            <td>
              <a
                href="https://zoom.us/j/93902437746?pwd=aTRSSUxxQkM0eE41dVo4RHBYUlRsUT09"
                target="blank"
              >
                TOC
              </a>
            </td>
            <td>
              <a
                href="https://zoom.us/j/99368835571?pwd=UGJ0SGRycWRnd0dlajZlRnJhbGR5UT09"
                target="blank"
              >
                DSA
              </a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
        <td >Friday</td>
        <td ><a href="#"></a></td>
          <td > <details
                summaryContent={<span>HSS</span>}
                onToggle={console.log}
                close
              >
                <summary>HSS</summary>
                <p>
                  <ul>
                    <li>
                      <a
                        href="https://zoom.us/j/98731721374?pwd=SlllTXpHL3NIaTJvRW8wZFg4SzM3Zz09"
                        target="blank"
                      >
                        LTM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/97118749758?pwd=VHQ3UGpvaDg1bVQyQ2ljQUpxbGZ6QT09"
                        target="blank"
                      >
                        IFM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/92577632348?pwd=bndsT0xZNHFOZ1ZjeGNqV3JzWW1qdz09"
                        target="blank"
                      >
                        ENG
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zoom.us/j/91896081041?pwd=ZHNCNTdRZm9mME82SGkxN1YzcDRadz09"
                        target="blank"
                      >
                        POE
                      </a>
                    </li>
                  </ul>
                </p>
              </details></td>
          <td ></td>
          <td ></td>
          <td ><a href="https://zoom.us/j/99550094221?pwd=cGlUU09PYUhmcit4Wisxb3poS3ppdz09" target="blank">Prob&Stat</a></td>
          <td  ></td>
          <td ></td>
          <td ><a href="https://zoom.us/j/99828286525?pwd=T3k0OHpPemV3c09rTnBzVSt2bTIvdz09">Life Sciences</a></td>
    </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
