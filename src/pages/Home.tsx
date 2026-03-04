import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";
import RegionDisplay from "../components/RegionDisplay";

const Home = () => {
    const [provinceName, setProvinceName] = useState<string>("");
    const [regencyName, setRegencyName] = useState<string>("");
    const [districtName, setDistrictName] = useState<string>("");

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar
                setProvinceName={setProvinceName}
                setRegencyName={setRegencyName}
                setDistrictName={setDistrictName}
            />

            <main className="flex-1 flex flex-col items-center justify-center p-10">
                <Breadcrumb
                    province={provinceName}
                    regency={regencyName}
                    district={districtName}
                />
                <RegionDisplay
                    province={provinceName}
                    regency={regencyName}
                    district={districtName}
                />
            </main>
        </div>
    );
};

export default Home;