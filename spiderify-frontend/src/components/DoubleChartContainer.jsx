import React from 'react';
import { Bar , Doughnut} from 'react-chartjs-2'
import styled from 'styled-components'



const DoughnutChartWrapper = () =>
{
  const data = {
    labels: ['bad comments', 'good comments'],
    datasets: [
      {
        label: '# of Votes',
        data: [28, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(50, 240, 120, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(50, 240, 120, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div style = {{height : '100%'}}>
        <Doughnut data={data} style = {{marginRight : '8px' , backgroundColor : 'rgba(150 , 150 , 150 , 0.2)'}} />
    </div>
  )
  
}


const BarChartWrapper = ()=>
{
  const options = {
    plugins : 
    {
      title : {
        display : true ,
        text : 'for Comparison'
      }
    },
    maxBarThickness : 40 ,
    scales: {
      yAxes: [
        { 
          ticks: {
            beginAtZero: true,
          },
        },
      ],
  
      
    },
  };
  const BarDataMock = {
    labels: ['bad comments', 'good comments'],
    datasets: [
      {
        label: 'for comparison',
        data: [4.5, 3.7 , 5.0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(50, 240, 120, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(50, 240, 120, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <Bar data = {BarDataMock} options = {options} style = {{backgroundColor : 'rgba(150 , 150 , 150 , 0.2)' , height : '100%' }} />
  )
}


const ChartsContainer = styled.div`
    display : flex ;
    flexDirection : row ;
    width : 60% ;
`;




const DoubleChartContainer = () => {
  return(
   
      <div>
        <ChartsContainer>
          <DoughnutChartWrapper/>
          <BarChartWrapper/>
        </ChartsContainer>
      </div>

  );
}



export default DoubleChartContainer ;