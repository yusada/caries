import React, { useState } from "react";
import axios from "axios";
import tooth from "../assets/images/media/b-tooth.svg";

export function DetectionPage() {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const getTrueLabelFromFilename = (filename) => {
    // Extract the true label from the filename (adjust this logic based on your actual file naming convention)
    const match = filename.match(/(enamel|dentin|pulpa|normal)/i);
    const label = match ? match[1].toLowerCase() : "unknown";
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  const handleChange = (e) => {
    setFormData(e.target.files[0]);
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", formData);
    try {
      const res = await axios.post(
        "http://139.59.107.155:8000/prediction",
        data
      );
      setResult(res.data.prediction);
    } catch (err) {
      console.error("Error detecting caries:", err);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center space-y-10">
      <header className="w-full flex justify-center absolute top-0 w-full h-20 z-10 text-blue-500">
        <nav className="flex justify-center items-center w-11/12 gap-8 relative">
          <div className="absolute">
            <img src={tooth} alt="tooth" />
          </div>
          <div className="text-[24px] font-bold">Caries Detection</div>
          <div className="flex justify-end items-center grow gap-4">
            <a className="text-[16px]" href="/">
              Model
            </a>
            <a className="text-[16px]" href="/">
              About
            </a>
          </div>
          <button className="border rounded-full py-2 px-7 text-white bg-blue-500">
            <a href="/">Home</a>
          </button>
        </nav>
      </header>

      <div className="w-11/12 flex lg:flex-row flex-col space-x-8 mt-24">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-[24px] text-blue-500 font-bold text-center mb-4">
            Input Gambar
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center space-x-4"
          >
            <input type="file" onChange={handleChange} />
            <button
              type="submit"
              className="text-white bg-blue-500 border rounded-full py-2 px-7"
            >
              Upload
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <h1 className="text-[24px] text-blue-500 font-bold text-center mb-4">
            Classification Result
          </h1>
          {uploadedImage && ( // Conditionally render the image if uploaded
            <img src={uploadedImage} alt="Uploaded" className="mb-2" />
          )}

          <div className="flex gap-8 items-center mb-4">
            {" "}
            <div className="text-center">
              <p className="text-blue-500 font-bold">True Label</p>
              {formData && ( // Only show if formData is available
                <h1 className="text-blue-500">
                  {getTrueLabelFromFilename(formData.name)}
                </h1>
              )}
            </div>
            <div className="text-center">
              <p className="text-blue-500 font-bold">Result</p>
              {result && <h1 className="text-blue-500">{result}</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
