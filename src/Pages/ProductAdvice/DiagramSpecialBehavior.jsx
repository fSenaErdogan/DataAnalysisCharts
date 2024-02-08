import {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';

const DiagramSpecialBehavior = ({products, header}) => {

    const [option, setOption] = useState("");
    const [id, setId] = useState([]);
    const [discounts, setDiscount] = useState([]);

    useEffect(() => {
        const id = products.map(specialBehavior => specialBehavior.id);
        const discounts = products.map(specialBehavior => parseFloat(specialBehavior.discount));
        setId(id);
        setDiscount(discounts);
    }, [products]);


    useEffect(() => {
            setOption(
                {
                    title: {
                        text: header +" %",
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
                        data: id
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: discounts,
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
        }, [id, discounts]
    )

    return option && (
        <>
            <ReactECharts option={option} notMerge={true}
                          lazyUpdate={true}/>
        </>
    )
}

export default DiagramSpecialBehavior