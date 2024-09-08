import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserProvider, Contract } from "ethers";
import { abi } from "../scdata/Cert.json";
import { CertModuleCert } from "../scdata/deployed_addresses.json";

const IssueCertificate = () => {
 
 const provider = new BrowserProvider(window.ethereum);


  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Certified Blockchain Associate");
  const [grade, setGrade] = useState("S");
  const [date, setDate] = useState("");

  const navigate = useNavigate();


  async function submitCertificate(e) {
    e.preventDefault();
    console.log(
      `id: ${id}, name: ${name}, course: ${course}, grade: ${grade}, date: ${date}`
    );
    const signer = await provider.getSigner();
    const instance = new Contract(CertModuleCert, abi, signer);
    const txl = await instance.issue(id, name, course, grade, date);
    console.log(txl);
    navigate("/");
  }






  return (
    <>
      <div className="bg-white h-[600px] w-[1000px] mt-[70px] ml-[400px] rounded-[30px] shadow-xl shadow-gray-600">
        <div className="ml-[350px] text-[30px]">
          <p className="pt-[30px]">ISSUE NEW CERTIFICATE</p>
        </div>

        <form action="" onSubmit={submitCertificate}>
          <p className="ml-[25%] mt-[5%] text-[20px]">
            {" "}
            Select Course* :
            <select
              name="selco"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="Certified Blockchain Associate" selected>
                Certified Blockchain Associate
              </option>
              <option value="Certified Ethereum Developer">
                Certified Ethereum Developer
              </option>
              <option value="Certified Hyperledger Fabric Developer">
                Certified Hyperledger Fabric Developer
              </option>
            </select>
          </p>

          <p className="ml-[25%] mt-[5%] text-[20px]">
            Certificate ID* :
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              name="id"
              required
              className="w-[350px] h-[40px] outline outline-slate-300 rounded-[10px]"
            />
          </p>

          <p className="ml-[25%] mt-[5%] text-[20px]">
            Candidate Name* :
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="w-[350px] h-[40px] outline outline-slate-300 rounded-[10px]"
            />
          </p>

          <p className="ml-[25%] mt-[5%] text-[20px]">
            Select Grade* :
            <select
              name="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </p>
          <p className="ml-[25%] mt-[5%] text-[20px]">
            Issue Date* :
            <input
              type="date"
              name="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </p>

          <div className="ml-[450px] mt-[30px]">
            <button
              className="bg-green-600 p-[15px] pl-[20px] pr-[20px] rounded-[10px] text-white"
              type="submit"
            >
              ISSUE CERTIFICATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default IssueCertificate;
