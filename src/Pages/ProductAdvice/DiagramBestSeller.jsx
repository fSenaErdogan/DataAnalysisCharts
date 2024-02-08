import {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';

const DiagramBestSeller = ({products,header}) => {

    const [option, setOption] = useState("");
    const [ids, setIds] = useState([]);
    const [amounts, setAmounts] = useState([]);

    useEffect(() => {
        const ids = products.map(bestseller => bestseller.id);
        const amounts = products.map(bestseller => parseFloat(bestseller.amount));
        setIds(ids);
        setAmounts(amounts);
    }, [products]);


    useEffect(() => {
            setOption(
                {
                    title: {
                        text: header,
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#065f46'
                        },
                        top: 20,
                        left: 'center'
                    },
                    xAxis: {
                        type: 'category',
                        data: ids
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: amounts,
                            type: 'bar',
                            itemStyle: {
                                color: '#065f46'
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: 'rgba(180, 180, 180, 0.2)'
                            }
                        }
                    ]
                }
            )
        }, [ids, amounts]
    )

    return option && (
        <>
            <ReactECharts option={option} notMerge={true}
                          lazyUpdate={true}/>
        </>
    )
}

export default DiagramBestSeller