import {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';

const DiagramSpecialCustomer = ({products, header}) => {

    const [option, setOption] = useState("");
    const [id, setId] = useState([]);
    const [ratio, setRatio] = useState([]);

    useEffect(() => {
        const id = products.map(specialCustomer => specialCustomer.urun_id);
        const ratio = products.map(specialCustomer => parseFloat(specialCustomer.indirim_orani));
        setId(id);
        setRatio(ratio);
    }, [products]);


    useEffect(() => {
            setOption(
                {
                    title: {
                        text: header +" %",
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
                        data: id
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: ratio,
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
        }, [id, ratio]
    )

    return option && (
        <>
            <ReactECharts option={option} notMerge={true}
                          lazyUpdate={true}/>
        </>
    )
}

export default DiagramSpecialCustomer