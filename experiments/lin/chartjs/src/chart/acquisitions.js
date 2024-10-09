import {
    Chart,
    Colors,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
} from 'chart.js'

Chart.register(
    Colors,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
);
import { getAquisitionsByYear } from '../api'

(async function () {
    const data = await getAquisitionsByYear();

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',

            //disable animations, legends, & tool-tip 'pop-ups'
            // options: {
            //     animation: false,
            //     plugins: {
            //         legend: {
            //             display: false
            //         },
            //         tooltip: {
            //             enabled: false
            //         }
            //     }
            // },
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();