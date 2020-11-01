import React, {useEffect} from 'react';
import Chart from 'chart.js'
import PieChartForm from './PieChartForm'


const PieChart = ()=>  {
    
    useEffect(() => {
      
        return () => {
                        //Windows
                    // const processWindow = document.getElementById('process-window');
                    // const failureWindow = document.getElementById('failure-window');
                    // const backDrop = document.getElementById('backdrop');
    
                    // chart
                    const pieChart = document.getElementById('pieChart1').getContext('2d');
    
                    // Pass and fail Btn
                    // const buttonPass = document.getElementById('pass-btn');
                    // const buttonFail = document.getElementById('fail-btn');
                    // const passPorcentage = document.getElementById('pass-percentage');
                    // const failPorcentage = document.getElementById('fail-percentage');
    
    
    
                    // Slide buttons
                    // const buttonRight = document.getElementById('slideRight');
                    // const buttonLeft = document.getElementById('slideLeft');
    
                    //Failure Buttons
                    // const failureButtons = document.querySelectorAll('.button');
    
                    //Failure Item List
                    // let items = document.getElementById('items-list')
    
                    // buttonFail.addEventListener('click', () => {
                    //     processWindow.classList.add('d-none');
                    //     failureWindow.classList.remove('d-none');
                        
                    // });
                    // backDrop.addEventListener('click', ()=> {
                    //     processWindow.classList.remove('d-none');
                    //     failureWindow.classList.add('d-none');
                    // })
    
    
                    // buttonRight.addEventListener('click', () => {
                    //     let container = document.getElementById('option-window');
                    //     cWidth = container.offsetWidth;
                    //     sideScroll(container,'right',10,cWidth,10);
                    // });
                    // buttonLeft.addEventListener('click', () =>{
                    //     let container = document.getElementById('option-window');
                    //     cWidth = container.offsetWidth;
                    //     sideScroll(container,'left',10,cWidth,10);
                    // });
    
                    let passes =70;
                    let fails =15;
                    // passPorcentage.textContent = `${passes}`;
                    // failPorcentage.textContent = `${fails}`;
    
    
    
                    // for (const button of failureButtons) {
                    //     button.addEventListener('click', () => {
                            
                    //         const errorList = document.getElementById('error-tags');
                    //         errorList.value = `${errorList.value},${button.textContent.trim()}`
                    //         console.log(errorList.value);
                    //     })
                    // }
    
                    Chart.defaults.global.defaultFontFamily = 'Lato';
                    Chart.defaults.global.defaultFontSize = 18;
                    Chart.defaults.global.defaultFontColor = '#777';
    
    
                    let displayPieChart = new Chart(pieChart, {
                        type:'pie',
                        data:{
                            labels:['Pass', 'Fail', 'Process'],
                            datasets:[{
                                label:'Amount',
                                data:[
                                    passes,
                                    fails,
                                    15
                                ],
                                backgroundColor:[
                                    '#4cf08e',
                                    '#e63946',
                                    '#4cc9f0'
                                ] 
                            }],
                        },
                        options:{
                            title:{
    
                            },
                            legend:{
                                position:'bottom',
                                align:'center',
    
                                labels:{
                                    fontSize: 10,
                                    padding: 12,
                                    boxWidth: 20,
                                    fontColor: 'white'
    
                                }
    
                            }
                            
                        }
    
                    });
    
                    // function sideScroll(element,direction,speed,distance,step){
                    //     scrollAmount = 0;
                    //     var slideTimer = setInterval(function(){
                    //         if(direction == 'left'){
                    //             element.scrollLeft -= step;
                    //         } else {
                    //             element.scrollLeft += step;
                    //         }
                    //         scrollAmount += step;
                    //         if(scrollAmount >= distance){
                    //             window.clearInterval(slideTimer);
                    //         }
                    //     }, speed);
                    // }
    
        }
    }, [])
  
    

    return (
        <PieChartForm />
    )
}

export default PieChart;
