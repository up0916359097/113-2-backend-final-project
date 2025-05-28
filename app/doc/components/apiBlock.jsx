import JsonBlock from "./jsonBlock";
import RestfulBadge from "./restfulBadge";
import UrlBadge from "./urlBadge";

export default function ApiBlock({
    apiName,
    apiDescription,
    apiType,
    apiUrl,
    authorizationList,
    bodyObj,
    responseObj,
}) {
    return (
        <div className="mb-20">
            <div className="text-2xl mb-4">{apiName}</div>
            <div className="mb-4">{apiDescription}</div>
            <RestfulBadge type={apiType} />
            <span className="mr-1" />
            <UrlBadge text={apiUrl} />
            <div className="mb-4" />
            <div className="mb-4">
                權限：
                {authorizationList.map((ele, idx) => {
                    return (
                        <span
                            key={idx}
                            className="px-2 py-1 rounded-md me-1"
                            style={{ background: "#e0e0e0" }}
                        >
                            {ele}
                        </span>
                    );
                })}
            </div>
            {bodyObj && (
                <>
                    <div className="my-4">Body:</div>
                    <JsonBlock jsonObj={bodyObj} />
                </>
            )}
            {responseObj && (
                <>
                    <div className="my-4">Response:</div>
                    <JsonBlock jsonObj={responseObj} />
                </>
            )}
        </div>
    );
}
