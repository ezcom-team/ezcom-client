import axios from "axios";
import React, { PureComponent, useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const RealGraph = ({ pid, date }) => {
    const [matchedOrder, setMatchedOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const responeMatchedOrder = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/matched-order/${pid}`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                setMatchedOrder(responeMatchedOrder.data);
                setLoading(false);
                console.log(
                    "🚀 ~ fetchData ~ responeMatchedOrder:",
                    responeMatchedOrder.data
                );
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {loading === false && (
                <div className="max-w-[75vw] mx-auto mt-10 bg-b2 p-10 rounded-md">
                    <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart
                            width={500}
                            height={300}
                            data={matchedOrder}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey={"CreatedAt"}
                                tick={{ fill: "#fff" }}
                                tickFormatter={(unixTime) => {
                                    const isoTimestamp = date;
                                    const dateObject = new Date(isoTimestamp);
                                    const formattedTime =
                                        dateObject.toLocaleDateString();
                                    return formattedTime; // Adjust this based on your desired time format
                                }}
                            />
                            <YAxis tick={{ fill: "#fff" }} />
                            <Tooltip />
                            <Legend />
                            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} /> */}
                            <Line
                                type="monotone"
                                dataKey="Price"
                                stroke="#82ca9d"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default RealGraph;
