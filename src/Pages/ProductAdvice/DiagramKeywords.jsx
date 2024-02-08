import {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';

const DiagramKeywords = ({keywords, header}) => {

    const [option, setOption] = useState("");
    const [texts, setTexts] = useState([]);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const texts = keywords.map(keyword => keyword.text);
        const stars = keywords.map(keyword => parseFloat(keyword.star));
        setTexts(texts);
        setStars(stars);
    }, [keywords]);


    useEffect(() => {
            setOption(
                {
                    title: {
                        text: header,
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#047857'
                        },
                        top: 20,
                        left: 'center'
                    },

                    xAxis: {
                        type: 'category',
                        data: texts
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: stars,
                            type: 'bar',
                            itemStyle: {
                                color: '#047857'
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: 'rgba(180, 180, 180, 0.2)'
                            }
                        }
                    ]
                }
            )
        }, [texts, stars]
    )

    return option && (
        <>
            <ReactECharts option={option} notMerge={true}
                          lazyUpdate={true}/>
        </>
    )
}

export default DiagramKeywords