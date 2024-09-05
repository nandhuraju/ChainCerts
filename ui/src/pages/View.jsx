import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserProvider, Contract } from "ethers";
import { abi } from "../scdata/Cert.json";
import { CertModuleCert } from "../scdata/deployed_addresses.json";

const View = () => {
  const { id } = useParams();
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (!window.ethereum) {
          throw new Error("MetaMask is not installed");
        }

        const provider = new BrowserProvider(window.ethereum);
        const instance = new Contract(CertModuleCert, abi, provider);

        const result = await instance.Certificates(id);

        setCertificateData({
          name: result.name,
          course: result.course,
          grade: result.grade,
          date: result.date,
        });

        console.log("result", result);
      } catch (error) {
        console.error(error);
        setError(error.message || "An error occurred");
      }
    };

    handleSearch();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!certificateData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-3xl mx-auto mt-12 p-8 shadow-xl rounded-lg bg-blue-600">
        <div className="border-8 border-double border-gray-300 p-8 bg-yellow-200 rounded-lg relative">
          <div className="absolute inset-0 border-4 border-dashed border-gray-500 m-6"></div>
          <div className="relative text-center p-6">
            <h2 className="text-4xl font-extrabold uppercase text-blue-700 mb-6">
              Kerala Blockchain Academy
            </h2>
            <div className="text-xl mb-6">
              <p className="text-2xl">
                This is to certify that <br />
                <span className="font-bold text-3xl mt-4 block">
                  {certificateData.name}
                </span>
              </p>
              <p className="italic mt-4 text-lg">
                has successfully completed the course
              </p>
              <span className="font-semibold text-2xl underline block mt-2">
                {certificateData.course}
              </span>
              <p className="text-lg mt-6">
                with the grade of{" "}
                <span className="font-bold text-2xl">
                  {certificateData.grade}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div className="text-left">
                <p className="text-lg">
                  Certificate ID: <span className="font-bold">{id}</span>
                </p>
                <p className="text-lg">
                  Date of Completion:{" "}
                  <span className="font-bold">{certificateData.date}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg">
                  Place: <span className="font-bold">Trivandrum</span>
                </p>
              </div>
            </div>
            <div className="mt-12 text-right">
              <p className="text-lg font-bold">(sd/-)</p>
              <p className="text-lg font-bold">Director</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <a
          href="/"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500 shadow-xl shadow-gray-600"
        >
          Search Another Certificate
        </a>
      </div>
    </>
  );
};

export default View;
