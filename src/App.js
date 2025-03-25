import React from 'react';
import { Bar, Scatter } from 'react-chartjs-2';

const App = () => {
    // Dummy data
    const scorecards = [
        { title: 'Impressions', value: 12000 },
        { title: 'Clicks', value: 300 },
        { title: 'Cost', value: '€150' },
        { title: 'Revenue', value: '€450' },
    ];

    const campaignData = [
        { name: 'Campaign 1', impressions: 5000, clicks: 150, cost: '€50', revenue: '€150', transactions: 10 },
        { name: 'Campaign 2', impressions: 7000, clicks: 200, cost: '€100', revenue: '€300', transactions: 20 },
    ];

    const barData = {
        labels: ['Cost', 'Revenue'],
        datasets: [
            {
                label: 'Financial Overview',
                data: [150, 450],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const scatterData = {
        datasets: [
            {
                label: 'Cost vs Revenue',
                data: [
                    { x: 50, y: 150 },
                    { x: 100, y: 300 },
                ],
                backgroundColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {scorecards.map((card, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                        <h2>{card.title}</h2>
                        <p>{card.value}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Financial Overview</h2>
                <Bar data={barData} />
            </div>
            <div>
                <h2>Cost vs Revenue Scatter</h2>
                <Scatter data={scatterData} />
            </div>
            <div>
                <h2>Campaign Performance</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Campaign Name</th>
                            <th>Impressions</th>
                            <th>Clicks</th>
                            <th>Cost</th>
                            <th>Revenue</th>
                            <th>Transactions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaignData.map((campaign, index) => (
                            <tr key={index}>
                                <td>{campaign.name}</td>
                                <td>{campaign.impressions}</td>
                                <td>{campaign.clicks}</td>
                                <td>{campaign.cost}</td>
                                <td>{campaign.revenue}</td>
                                <td>{campaign.transactions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;