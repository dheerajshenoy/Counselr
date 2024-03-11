import { Button, Card,  RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from "@material-ui/core";
import { PieChart } from '@mui/x-charts/PieChart';

import { Link, Route, Navigate, useLocation} from 'react-router-dom'
import React, { useState } from 'react';
import css from "./result.css"

const getResultsFromTest = () => {
    let location = useLocation();
    const score = location.state.score;
    const taglist = location.state.taglist;
    return [score, taglist];
}

const getTagScore = (arr) => {
    let counts = {};
    for (let item of arr) {
        counts[item] = (counts[item] || 0) + 1;
    }
    return counts;
}

const getTagPie = (tagScores) => {
    let piedata = [];
    for(let key in tagScores) {
        piedata.push({label: key, value: tagScores[key]})
    }
    return piedata
}

const getDomain = (tagScores) => {
    const sortedPairs = Object.entries(tagScores)
          .sort(([, valueA], [, valueB]) => valueA - valueB);
    return sortedPairs[sortedPairs.length - 1][0]
}

export default function Result() {
    const [score, taglist] = getResultsFromTest();
    const tagScores = getTagScore(taglist);
    const tagPie = getTagPie(tagScores);
    return (
        <div class="result-container">
            <div>
                <h1>Result</h1>
                <hr/>
                <h2>You have scored: {score} point(s)</h2>
                <PieChart class="pie-chart"
                          series={[
                              {
                                  data: tagPie,
                                  // arcLabel: (item) => `${item.label}`,
                                  highlightScope: { faded: 'global', highlighted: 'item' },
                                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                  innerRadius: 21,
                                  outerRadius: 200,
                                  paddingAngle: 2,
                                  cornerRadius: 3,
                                  startAngle: -180,
                                  endAngle: 180,
                              },
                          ]}
                          width={800}
                          height={500}
                />
                <h2>Domain could be: {getDomain(tagScores)}</h2>
            </div>
        </div>
    );
}
