import React, { useEffect, useState } from "react";

function PointTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR).reverse();
        setTeams(sortedData);
      });
  }, []);
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className="points-table-container ">
          <h1 className="title">IPL Points Table 2022</h1>
          <table className="border-collapse border border-slate-500 ">
            <thead>
              <tr>
                <th className="bg-zinc-800 text-white px-2 py-2 border border-slate-600">
                  No
                </th>
                <th className="bg-zinc-800 text-white px-2 py-2 border border-slate-600">
                  Team
                </th>
                <th className="bg-zinc-800 text-white px-2 py-2 border border-slate-600">
                  Matches
                </th>
                <th className="bg-zinc-800 text-white px-2 py-2 border border-slate-600">
                  Wins
                </th>
                <th className="bg-zinc-800 text-white px-2 py-2 border border-slate-600">
                  Losses
                </th>
                <th className="bg-zinc-800 text-white px-2 py-2 border border-slate-600">
                  NRR
                </th>
                <th className="bg-zinc-800 text-white px-2 py-2 border border-slate-600">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.Team} className="text-center">
                  <td class="border border-slate-700">{team.No}</td>
                  <td class="border border-slate-700">{team.Team}</td>
                  <td class="border border-slate-700">{team.Matches}</td>
                  <td class="border border-slate-700">{team.Won}</td>
                  <td class="border border-slate-700">{team.Lost}</td>
                  <td class="border border-slate-700">{team.NRR}</td>
                  <td class="border border-slate-700">{team.Points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PointTable;
