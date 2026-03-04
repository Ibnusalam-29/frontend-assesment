import React from "react";

interface Props {
  province: string;
  regency: string;
  district: string;
}

const RegionDisplay: React.FC<Props> = ({
  province,
  regency,
  district,
}) => {
  return (
    <div className="space-y-16 text-center">
      <div>
        <p className="text-xs tracking-widest text-blue-400 mb-3">
          PROVINSI
        </p>
        <h1 className="text-6xl font-bold text-gray-800">
          {province || "-"}
        </h1>
      </div>

      <div>
        <p className="text-xs tracking-widest text-blue-400 mb-3">
          KOTA / KABUPATEN
        </p>
        <h1 className="text-5xl font-bold text-gray-700">
          {regency || "-"}
        </h1>
      </div>

      <div>
        <p className="text-xs tracking-widest text-blue-400 mb-3">
          KECAMATAN
        </p>
        <h1 className="text-4xl font-bold text-gray-800">
          {district || "-"}
        </h1>
      </div>
    </div>
  );
};

export default RegionDisplay;