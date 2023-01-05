// import { useState } from "react";
// import { Typography, Table, Button, Space } from 'antd';



// // CWB-BD75B7A0-F612-4DCA-99B8-37CFB34AD879
// // CWB-967127D1-C9EF-42A4-9A05-FD7B099CF5B2
// const Api = () => {
//     const { Title } = Typography;
//     const [currentWeather, setCurrentWeather] = useState({
//         locationName: '未獲取成功',
//         windSpeed: 0.0,
//         temperature: 0.0,
//         rainPossibility: 0,
//         observationTime: '0000-00-00 00:00:00',
//     });
//     const handleClick = () => {
//         const AUTHORIZATION_KEY = 'CWB-967127D1-C9EF-42A4-9A05-FD099CF5B2';
//         const LOCATION_NAME = '臺北';
//         const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`; 
//         fetch(api)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("TEST1");
//                 const locationData = data.records.location[0];
//                 const weatherElements = locationData.weatherElement.reduce(
//                     (neededElements, item) => {
//                         if (['WDSD', 'TEMP'].includes(item.elementName)) {
//                             neededElements[item.elementName] = item.elementValue;
//                         }
//                         return neededElements;
//                     },{}
//                 );
//                 console.log(data);
//             // .then((data) => console.log(data)); 
//                 setCurrentWeather({
//                     locationName: locationData.locationName,
//                     windSpeed: weatherElements.WDSD,
//                     temperature: weatherElements.TEMP,
//                     rainPossibility: 60,
//                     observationTime: locationData.time.obsTime,
//                   });
//             });
//         return console.log("TEST3");
//     };
//     const columns = [
//         {
//             title: 'LocationName',
//             dataIndex: 'locationName',
//             key: "locationName",
//             render: (text) => <a>{text}</a>
//         },
//         {
//             title: 'WindSpeed',
//             dataIndex: 'windSpeed',
//             key: "windSpeed"
//         },
//         {
//             title: 'Temperature',
//             dataIndex: 'temperature',
//             key: "temperature"
//         },
//         {
//             title: 'RainPossibility',
//             dataIndex: 'rainPossibility',
//             key: "rainPossibility"
//         },
//         {
//             title: 'ObservationTime',
//             dataIndex: 'observationTime',
//             key: "observationTime"
//         } 
//     ];
//     const data = [currentWeather];


//     return (
//         <div>
//             <Title>天氣預報 TEST</Title>
//             <Space wrap>
//                 <Button type="primary" onClick={console.log("ttttt")}>Primary Button</Button>
//             </Space>
//             <Table columns={columns} dataSource={data}/>
//         </div>
//     );
// }

// export default Api;