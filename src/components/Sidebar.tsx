import React, { useState } from "react";
import DataRegions from "../data/indonesia_regions.json";

interface Props {
    setProvinceName: (name: string) => void;
    setRegencyName: (name: string) => void;
    setDistrictName: (name: string) => void;
}

const Sidebar: React.FC<Props> = ({
    setProvinceName,
    setRegencyName,
    setDistrictName,
}) => {
    const provinces = DataRegions.provinces;
    const regencies = DataRegions.regencies;
    const districts = DataRegions.districts;

    const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
    const [selectedRegency, setSelectedRegency] = useState<number | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

    const filteredRegencies = regencies.filter(
        (regency) => regency.province_id === selectedProvince
    );

    const filteredDistricts = districts.filter(
        (district) => district.city_id === selectedRegency
    );

    const handleReset = () => {
        setSelectedProvince(null);
        setSelectedRegency(null);
        setSelectedDistrict(null);
        setProvinceName("");
        setRegencyName("");
        setDistrictName("");
    };

    return (
        <aside className="w-200 bg-white border-r border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                    🌐
                </div>
                <h1 className="font-semibold text-gray-800 text-lg">
                    Frontend Assessment
                </h1>
            </div>

            <p className="text-xs tracking-widest text-gray-400 mb-6">
                FILTER WILAYAH
            </p>

            {/* PROVINSI */}
            <div className="mb-5">
                <label className="text-xs text-gray-500 font-semibold">
                    PROVINSI
                </label>
                <select
                    value={selectedProvince ?? ""}
                    onChange={(e) => {
                        const id = Number(e.target.value);
                        const province = provinces.find((p) => p.id === id);

                        setSelectedProvince(id);
                        setSelectedRegency(null);
                        setSelectedDistrict(null);

                        setProvinceName(province?.name || "");
                        setRegencyName("");
                        setDistrictName("");
                    }}
                    className="w-full mt-2 border border-gray-300 text-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                    <option value="">Pilih Provinsi</option>
                    {provinces.map((province) => (
                        <option key={province.id} value={province.id}>
                            {province.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* REGENCY */}
            <div className="mb-5">
                <label className="text-xs text-gray-500 font-semibold">
                    KOTA/KABUPATEN
                </label>
                <select
                    value={selectedRegency ?? ""}
                    onChange={(e) => {
                        const id = Number(e.target.value);
                        const regency = regencies.find((r) => r.id === id);

                        setSelectedRegency(id);
                        setSelectedDistrict(null);

                        setRegencyName(regency?.name || "");
                        setDistrictName("");
                    }}
                    disabled={!selectedProvince}
                    className="w-full mt-2 border border-gray-300 text-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-100"
                >
                    <option value="">Pilih Kota/Kabupaten</option>
                    {filteredRegencies.map((regency) => (
                        <option key={regency.id} value={regency.id}>
                            {regency.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* DISTRICT */}
            <div className="mb-8">
                <label className="text-xs text-gray-500 font-semibold">
                    KECAMATAN
                </label>
                <select
                    value={selectedDistrict ?? ""}
                    onChange={(e) => {
                        const id = Number(e.target.value);
                        const district = districts.find((d) => d.id === id);

                        setSelectedDistrict(id);
                        setDistrictName(district?.name || "");
                    }}
                    disabled={!selectedRegency}
                    className="w-full mt-2 border border-gray-300 text-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-100"
                >
                    <option value="">Pilih Kecamatan</option>
                    {filteredDistricts.map((district) => (
                        <option key={district.id} value={district.id}>
                            {district.name}
                        </option>
                    ))}
                </select>
            </div>

            <button
                onClick={handleReset}
                className="w-full border border-blue-500 text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition"
            >
                RESET
            </button>
        </aside>
    );
};

export default Sidebar;