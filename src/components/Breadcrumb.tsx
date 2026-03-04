import React from "react";

interface Props {
    province: string;
    regency: string;
    district: string;
}

const Breadcrumb: React.FC<Props> = ({
    province,
    regency,
    district,
}) => {
    return (
        <div className="w-300 max-w-4xl mb-10 text-sm text-gray-500">
            <span className="font-medium text-gray-700">Home</span>

            {province && (
                <>
                    <span className="mx-2">/</span>
                    <span>{province}</span>
                </>
            )}

            {regency && (
                <>
                    <span className="mx-2">/</span>
                    <span>{regency}</span>
                </>
            )}

            {district && (
                <>
                    <span className="mx-2">/</span>
                    <span className="text-blue-600 font-medium">
                        {district}
                    </span>
                </>
            )}
        </div>
    );
};

export default Breadcrumb;