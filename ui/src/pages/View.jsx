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
      <div className="max-w-4xl mx-auto mt-12 p-12 shadow-2xl rounded-2xl bg-white relative">
        <div className="border-[12px] border-gray-800 p-8 rounded-lg bg-white relative z-10">
          <div className="border-[8px] border-dashed border-gray-400 p-8 rounded-lg bg-yellow-100 relative">
            <div className="text-center">
              <h2 className="text-5xl font-bold uppercase text-blue-800 mb-6">
                Kerala Blockchain Academy
              </h2>
              <p className="text-2xl italic mb-8">This is to certify that</p>
              <p className="text-4xl font-semibold mb-4 text-blue-900">
                {certificateData.name}
              </p>
              <p className="text-xl italic mb-4">
                has successfully completed the course
              </p>
              <p className="text-3xl font-bold underline mb-6 text-gray-800">
                {certificateData.course}
              </p>
              <p className="text-lg mb-6">
                with a grade of{" "}
                <span className="font-bold text-2xl">
                  {certificateData.grade}
                </span>
              </p>
            </div>

            <div className="flex justify-between items-center mt-10">
              <div className="text-left">
                <p className="text-lg font-semibold">
                  Certificate ID: <span className="font-bold">{id}</span>
                </p>
                <p className="text-lg font-semibold">
                  Date of Completion:{" "}
                  <span className="font-bold">{certificateData.date}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  Place: <span className="font-bold">Trivandrum</span>
                </p>
              </div>
            </div>

            <div className="text-right mt-12">
              <p className="text-xl font-bold">(sd/-)</p>
              <p className="text-xl font-bold">Director</p>
            </div>
          </div>
        </div>

        {/* Ribbon element */}
        <div className="absolute top-0 right-0 left-0 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 z-0 transform -translate-y-6 rounded-t-lg"></div>
      </div>

      <div className="text-center mt-8">
        <a
          href="/"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 shadow-lg"
        >
          Search Another Certificate
        </a>
      </div>
    </>
  );
};

export default View;
