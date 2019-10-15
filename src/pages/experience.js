import React from "react";
import Collapsible from "react-collapsible";

export default function experience() {
  return (
    <div id="three" className="row example-centered">
      <div className="col-md-12 example-title">
        <a href="#" className="icon alt fa-angle-double-up">
          <span className="label">Home</span>
        </a>
        <h2>Experience</h2>
        <h5>Click each role to expand</h5>
      </div>
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul className="timeline timeline-centered">
          <li className="timeline-item">
            <div className="timeline-info">
              <span>June 2019 - September 2019</span>
            </div>

            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <Collapsible
                trigger={
                  <div>
                    <h3>FullStack Academy</h3>
                    <h5>Software Engineer Immersive</h5>
                  </div>
                }
              >
                <ul>
                  <li>
                    A full-time four month long software engineering immersive
                    program with a {"<"} 10% acceptance rate
                  </li>
                  <br />
                  <li>
                    Lectures, workshops, assessments, and projects covered:
                    computer science fundamentals, back-end development,
                    front-end development, databases, pair programming, and
                    programming best practices with a focus on the NERD (Node,
                    Express, React, PostgreSQL as Database) technology stack
                  </li>
                </ul>
              </Collapsible>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-info">
              <span>May 2017 - May 2019</span>
            </div>

            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <Collapsible
                trigger={
                  <div>
                    <h3>Brown Brothers Harriman</h3>
                    <h5>Foreign Exchange Trade Support</h5>
                  </div>
                }
              >
                <ul>
                  <li>
                    Manage Standing Instructions database for all freely traded
                    and emerging market currencies
                  </li>
                  <br />
                  <li>
                    Analyze client trading activity certifying FX trades
                    coincide with matching security trades
                  </li>
                  <br />
                  <li>
                    Generate trade files for trading desk summarizing each
                    currencies’ net position to deal
                  </li>
                  <br />
                  <li>
                    Execute trades and pricing with traders at specific time
                    targets throughout the day to ensure trades are dealt at
                    optimal market highs
                  </li>
                  <br />
                  <li>
                    Coordinate with confirmations teams, investigations teams,
                    and client service groups from pre to post settlement of
                    trade lifecycle to ensure accurate cash and position
                    reporting
                  </li>
                  <br />
                  <li>
                    Address inquiries from client and internal teams regarding
                    emerging market currencies and the Standing Instruction
                    platform
                  </li>
                  <br />
                </ul>
              </Collapsible>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-info">
              <span>May 2014 - April 2017</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <Collapsible
                trigger={
                  <div>
                    <h3>State Street</h3>
                    <h5>NAV Associate</h5>
                  </div>
                }
              >
                <ul>
                  <li>
                    Sole Accountant responsible for daily reconciliation of cash
                    and positions for equities, swaps, options, futures, mutual
                    funds, bank loans, treasury bills, FX, currency options,
                    credit default swaps, collateral, corporate & sovereign
                    bonds and fund of funds for a multi billion dollar client
                    portfolio
                  </li>
                  <br />
                  <li>
                    Utilize Bloomberg terminal to research bond interest and
                    Corporate Actions; mergers, tender offers, new issue IPO’s
                    and stock dividends
                  </li>
                  <br />
                  <li>
                    Prepare estimate and final correspondence workbooks for
                    client
                  </li>
                  <br />
                  <li>
                    Roll funds for upcoming month end by booking and verifying
                    any payments and/or accruals from the month
                  </li>
                  <br />
                  <li>
                    Develop S.O.P. manual and train overseas teams on daily and
                    monthly procedures for selected funds
                  </li>
                  <br />
                  <li>
                    Proactive in finding ways to increase efficiencies in daily
                    and monthly processes
                  </li>
                  <br />
                </ul>
              </Collapsible>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-info">
              <span>September 2010 - May 2014</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <Collapsible
                trigger={
                  <div>
                    <h3>Tourneau</h3>
                    <h5>Store Accounting</h5>
                  </div>
                }
              >
                <ul>
                  <li>
                    Assist with managing the company general ledger by entering
                    expense invoices into Microsoft Dynamics GP
                  </li>
                  <br />
                  <li>
                    Manage repair and receipt invoices for all 37 retail
                    locations
                  </li>
                  <br />
                  <li>
                    Coordinate store supply purchases and monitor expenditures
                    of all 37 retail locations
                  </li>
                  <br />
                  <li>
                    Manage chargebacks for the entire company (net savings of
                    approximately $3 million to date)
                  </li>
                  <br />
                  <li>
                    Update MS Access and Craftsman databases for Operations
                    Department
                  </li>
                </ul>
              </Collapsible>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-info">
              <span>September 2011 - Present</span>
            </div>

            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <Collapsible
                trigger={
                  <div>
                    <h3>Boy Scouts of America (Troop 150)</h3>
                    <h5>Assistant Scoutmaster</h5>
                  </div>
                }
              >
                <ul>
                  <li>
                    Assist patrols of 10 scouts to complete requirements to
                    fulfill scout ranks’ advancement requirements
                  </li>
                  <br />
                  <li>
                    Advise Eagle Scout candidates to attain the rank of Eagle
                    Scout
                  </li>
                </ul>
              </Collapsible>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
