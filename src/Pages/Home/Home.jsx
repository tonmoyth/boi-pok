import React from 'react';
import Bannar from '../../components/Bannar/Bannar';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Bannar></Bannar>
            <Cards data={data}></Cards>
        </div>
    );
};

export default Home;