import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
);

const data = {
    datasets: [{
        data: [{
            x: 0,
            y: 0
        }, {
            x: 10,
            y: 10
        }, {
            x: 20,
            y: 5
        }, {
            x: 45,
            y: 55
        }, {
            x: 75,
            y: 25
        }, {
            x: 90,
            y: 55
        }],
        backgroundColor: 'rgb(255, 99, 132)',

    }]
}

const options = {
    
    plugins: {
        legend: {
            display: false
        },
    },

    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false
            },
            title: {
                display: true,
                text: "TDS VALUES"
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false
            },
            display: false
        }
    },
};


export default function LineGraphItem() {
    return (
        <Scatter
            options={options}
            data={data}
            plugins={[
                {
                    beforeDraw(chart) {
                        const { width } = chart;
                        const { height } = chart;
                        const { ctx } = chart;
                        ctx.save();
                        ctx.globalCompositeOperation = 'destination-over';
                        var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
                        my_gradient.addColorStop("0", "#82e6fa");
                        my_gradient.addColorStop(0.2, "#82dafa");
                        my_gradient.addColorStop(0.4, "#82bcfa");
                        my_gradient.addColorStop(0.8, "#a082fa");
                        my_gradient.addColorStop(0.9, "#e8a92c");
                        ctx.fillStyle = my_gradient;
                        ctx.fillRect(0, 0, width, height);
                        ctx.restore();
                    },
                },
            ]}
        />
    );
}