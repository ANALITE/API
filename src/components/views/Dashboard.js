import React, { Component } from 'react';
import '../../css/Dashboard.css';

import ScatterplotChart from '../statistics/plots/Scatterplot'
import CustomChart1 from '../statistics/plots/CustomChart1'
import BarChart from '../statistics/plots/BarChart'

import readCsvFile from '../statistics/builds/readCsvFile'
import TechCrunchData from '../../rawData/TechCrunchcontinentalUSA.csv'
import { nodes, links } from '../../rawData/NodeData'
import NavigationBar from "../dashes/NavigationBar";

class Dashboard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            barChartData: [],
        }
    }

    componentDidMount() {
        readCsvFile(TechCrunchData, (data) => {
            this.setState({
                barChartData: data
            })
        })
    }

    render() {
        const { barChartData } = this.state
        const CustomChartExample1Data = { nodes, links }

        return (
            <div>
                <NavigationBar />
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col border border-default mr-3 widget-box'>
                            <h4 className='pt-3'>Tweets per month</h4>
                            <BarChart data={barChartData} width={500} height={250} />
                        </div>
                        <div className='col border border-default widget-box'>
                            <h4 className='pt-3'>Events on Tweeter</h4>
                            <ScatterplotChart data={nodes}/>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col border border-default widget-box'>
                            <CustomChart1 data={CustomChartExample1Data} width={1000} height={500} />
                        </div>
                    </div>
                    <div className='row py-3'>
                        <div className='col border border-default widget-box pt-3'>
                            <h4>Recent Tweets</h4>
                            <h5>Soon...</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard