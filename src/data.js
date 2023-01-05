import { useState, useEffect } from "react";
import { Table, Typography,  Select } from 'antd';



// CWB-BD75B7A0-F612-4DCA-99B8-37CFB34AD879
// CWB-967127D1-C9EF-42A4-9A05-FD7B099CF5B2
const Api = () => {

    const { Title } = Typography;
    const AUTHORIZATION_KEY = 'CWB-967127D1-C9EF-42A4-9A05-FD7B099CF5B2';
    let LOCATION_NAME = '臺北';
    let LOCATION_NAME2 = '臺北市';
    const [currentWeather, setCurrentWeather] = useState(
        {
            locationName: '未獲取成功',
            windSpeed: 0.0,
            temperature: 0.0,
            rainPossibility: 0,
            description: '未獲取成功',
            observationTime: '0000-00-00 00:00:00',
            comfortability: '未獲取成功',
            weatherCode: 0,
            isLoading: true
        }
    );

    useEffect(() => {
        console.log('execute function in useEffect');
        fetchOA003();
        fetchFC0032();
    },[]);
    
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        if ( value === 'taipei' ) {
            LOCATION_NAME = '臺北';
            LOCATION_NAME2 = '臺北市';
            useee();
        }
        else if ( value === 'newtaipei' ) {
            LOCATION_NAME = '新店';
            LOCATION_NAME2 = '新北市';
            useee();
        }
        else if ( value === 'kaoshung' ) {
            LOCATION_NAME = '高雄';
            LOCATION_NAME2 = '高雄市';
            useee();
        }
        else if ( value === 'keelung' ) {
            LOCATION_NAME = '基隆';
            LOCATION_NAME2 = '基隆市';
            useee();
        }
        else if ( value === 'Taoyuan' ) {
            LOCATION_NAME = '新屋';
            LOCATION_NAME2 = '桃園市';
            useee();
        }
        else if ( value === 'Hsinchucity' ) {
            LOCATION_NAME = '國三S103K';
            LOCATION_NAME2 = '新竹市';
            useee();
        }
        else if ( value === 'Taichung' ) {
            LOCATION_NAME = '臺中';
            LOCATION_NAME2 = '臺中市';
            useee();
        }
        else if ( value === 'Yilan' ) {
            LOCATION_NAME = '宜蘭';
            LOCATION_NAME2 = '宜蘭縣';
            useee();
        }
        else if ( value === 'Hualien' ) {
            LOCATION_NAME = '花蓮';
            LOCATION_NAME2 = '花蓮縣';
            useee();
        }
        else if ( value === 'Penghu' ) {
            LOCATION_NAME = '澎湖';
            LOCATION_NAME2 = '澎湖縣';
            useee();
        }
        else if ( value === 'Pingtung' ) {
            LOCATION_NAME = '恆春';
            LOCATION_NAME2 = '屏東縣';
            useee();
        }
        else if ( value === 'Tainan' ) {
            LOCATION_NAME = '臺南';
            LOCATION_NAME2 = '臺南市';
            useee();
        }
        else if ( value === 'Hsinchu' ) {
            LOCATION_NAME = '新竹';
            LOCATION_NAME2 = '新竹縣';
            useee();
        }
        else if ( value === 'Miaoli' ) {
            LOCATION_NAME = '國一S114K';
            LOCATION_NAME2 = '苗栗縣';
            useee();
        }
        else if ( value === 'Changhua' ) {
            LOCATION_NAME = '國一N198K';
            LOCATION_NAME2 = '彰化縣';
            useee();
        }
        else if ( value === 'Chiayi' ) {
            LOCATION_NAME = '西濱S257K';
            LOCATION_NAME2 = '嘉義縣';
            useee();
        }
        else if ( value === 'Chiayicity' ) {
            LOCATION_NAME = '嘉義';
            LOCATION_NAME2 = '嘉義市';
            useee();
        }
        else if ( value === 'Nantou' ) {
            LOCATION_NAME = '玉山';
            LOCATION_NAME2 = '南投縣';
            useee();
        }
        else if ( value === 'Yunlin' ) {
            LOCATION_NAME = '西濱N222K';
            LOCATION_NAME2 = '雲林縣';
            useee();
        }
        else if ( value === 'Taitung' ) {
            LOCATION_NAME = '臺東';
            LOCATION_NAME2 = '臺東縣';
            useee();
        }
    };

    const fetchOA003 = () => {
        const api003 = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`; 
        fetch(api003)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const locationData = data.records.location[0];
                const weatherElements = locationData.weatherElement.reduce(
                    (neededElements, item) => {
                        if (['WDSD', 'TEMP'].includes(item.elementName)) {
                            neededElements[item.elementName] = item.elementValue;
                        }
                        return neededElements;
                    },{}
                );
                setCurrentWeather((prevState) => ({
                    ...prevState,
                    windSpeed: weatherElements.WDSD,
                    temperature: weatherElements.TEMP + " °C",
                    observationTime: locationData.time.obsTime,
                  }));
            });
            console.log("執行 fetch003")
            
    };


    const fetchFC0032 = () => {
        const api0032 = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME2}`; 
        fetch (api0032)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                const locationData = data.records.location[0];
                const weatherElements = locationData.weatherElement.reduce(
                    (neededElements, item) => {
                        if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
                            neededElements[item.elementName] = item.time[0].parameter;
                        }
                        return neededElements;
                    },{}
                );
                setCurrentWeather((prevState) => ({
                    ...prevState,
                    locationName: locationData.locationName,
                    description: weatherElements.Wx.parameterName,
                    weatherCode: weatherElements.Wx.parameterValue,
                    rainPossibility: weatherElements.PoP.parameterName + " %",
                    comfortability: weatherElements.CI.parameterName,
                }));
                console.log("執行 fetch0032")
            });
    }


    const columns = [
        {
            title: '縣市',
            dataIndex: 'locationName',
            key: "locationName",
            render: (text) => <a>{text}</a>
        },
        {
            title: '風速',
            dataIndex: 'windSpeed',
            key: "windSpeed"
        },
        {
            title: '溫度',
            dataIndex: 'temperature',
            key: "temperature"
        },
        {
            title: '降雨機率',
            dataIndex: 'rainPossibility',
            key: "rainPossibility"
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: "description"
        },
        {
            title: '舒適性',
            dataIndex: 'comfortability',
            key: "comfortability"
        },
        {
            title: '觀察時間',
            dataIndex: 'observationTime',
            key: "observationTime"
        }
    ];
    
    const data = [
        currentWeather,
        // {
        //     locationName: '未獲取成功',
        //     windSpeed: 0.0,
        //     temperature: 0.0,
        //     rainPossibility: 0,
        //     description: '未獲取成功',
        //     observationTime: '0000-00-00 00:00:00',
        //     comfortability: '未獲取成功',
        //     weatherCode: 0,
        // }
    ];

    const useee = () => {
        console.log("useeeeeeee");
        fetchOA003();
        fetchFC0032();
    }

    return (
        <div>
            <Title>當前天氣</Title>
            <Select
                defaultValue="臺北市"
                style={{ float: "right", width: 120 }}
                onChange={handleChange}
                options={[
                    {
                        value: 'taipei',
                        label: '臺北市',
                    },
                    {
                        value: 'newtaipei',
                        label: '新北市',
                    },
                    {
                        value: 'kaoshung',
                        label: '高雄市',
                    },
                    {
                        value: 'keelung',
                        label: '基隆市',
                    },
                    {
                        value: 'Taoyuan',
                        label: '桃園市',
                    },
                    {
                        value: 'Hsinchucity',
                        label: '新竹市',
                    },
                    {
                        value: 'Hsinchu',
                        label: '新竹縣',
                    },
                    {
                        value: 'Taichung',
                        label: '臺中市',
                    },
                    {
                        value: 'Yilan',
                        label: '宜蘭縣',
                    },
                    {
                        value: 'Hualien',
                        label: '花蓮縣',
                    },
                    {
                        value: 'Penghu',
                        label: '澎湖縣',
                    },
                    {
                        value: 'Pingtung',
                        label: '屏東縣',
                    },
                    {
                        value: 'Tainan',
                        label: '臺南市',
                    },
                    {
                        value: 'Miaoli',
                        label: '苗栗縣',
                    },
                    {
                        value: 'Changhua',
                        label: '彰化縣',
                    },
                    {
                        value: 'Chiayi',
                        label: '嘉義縣',
                    },
                    {
                        value: 'Chiayicity',
                        label: '嘉義市',
                    },
                    {
                        value: 'Nantou',
                        label: '南投縣(玉山)',
                    },
                    {
                        value: 'Yunlin',
                        label: '雲林縣',
                    },
                    {
                        value: 'Taitung',
                        label: '臺東縣',
                    }
                ]}
            />
            {/* <Space wrap>
                <Button type="primary" onClick={useee}>重新整理</Button>
            </Space> */}
            <Table bordered={true} dataSource={data} columns={columns} />
        </div>
    );
}

export default Api;