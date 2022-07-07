import {
    Chart as ChartJS,
    ArcElement, Tooltip, Legend
} from 'chart.js';
import { Flex, GridItem, useBreakpointValue } from "@chakra-ui/react"
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement, Tooltip, Legend
);

export default function BatteryIndicator(props) {

    const colSpan = useBreakpointValue({base: 5, lg: 2})
    let bgcolor;

    if (props.percentage >= 90 && props.percentage <= 100) {
        bgcolor = 'rgb(51, 204, 51)';
    }
    else if (props.percentage < 90 && props.percentage > 20) {
        bgcolor = 'rgb(204, 204, 0)';
    }
    else {
        bgcolor = 'rgb(255, 0, 0)';
    }

    const data = {
        labels: [],
        datasets: [
            {
                data: [props.percentage, 100 - props.percentage],
                backgroundColor: [
                    bgcolor,
                    'rgba(240, 240, 240)'
                ],
                borderColor: [
                    bgcolor,
                    'rgba(240, 240, 240, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        aspectRatio: 2,
        cutout: 100
    }

    return (
        <GridItem colSpan={colSpan}>
            <Flex
                flexDir="column"
                overflow="auto"
                p="5%"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            >
                <Doughnut data={data}
                options={options}
                    plugins={[
                        {
                            beforeDraw(chart) {
                                const { width } = chart;
                                const { height } = chart;
                                const { ctx } = chart;
                                ctx.restore();
                                const fontSize = (height / 100).toFixed(2);
                                ctx.font = `${fontSize}em kanit light`;
                                ctx.fillStyle = bgcolor;
                                ctx.textBaseline = 'middle';
                                let text = `${props.percentage}%`;
                                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                                const textY = height / 2;
                                ctx.fillText(text, textX, textY);
                                ctx.save();
                            },
                        },
                    ]} />
            </Flex>
        </GridItem>
    );
}