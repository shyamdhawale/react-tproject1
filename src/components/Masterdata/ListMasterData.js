import {useEffect, useState} from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './ListMasterData.module.css';

const ListMasterData = () => {
    const [masterData, setMasterData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);


    // get the data.
    useEffect(()=>{
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch('http://localhost:3001/api/master/checklist');
            const responseData = await response.json();
            setMasterData(responseData.template);
            setIsLoading(false);
        };
        fetchData();
    },[]);
    console.log(masterData)
    if (isLoading) {
        return <LoadingSpinner />
    }

  return (
    <div>
        <div>
            <button className={classes.uploadbtn} >Add New</button>
        </div>
        <table className={classes.report} >
            <caption> Master Checklist Data</caption>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Report Name</th>
                    <th>Model</th>

                </tr>
            </thead>
            <tbody>
                {masterData.map(item => (
                    <tr key={item._id}>

                        <td>{ item._id}</td>
                        <td> {item.reportname} </td>
                        <td> {item.classificationmain} </td>
                    </tr>
                ))}

            </tbody>

        </table>
    </div>
    
  )
};

export default ListMasterData;