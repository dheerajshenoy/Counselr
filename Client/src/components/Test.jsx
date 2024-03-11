import css from "./test.css"
import { Button, Card,  RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from "@material-ui/core";
import { Link, Route, Navigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

let questions = [
    {
        "question": "What is the square root of 169?",
        "options": ["11", "12", "13", "14"],
        "answer": "13",
        "tag": "Mathematics"
    },
    {
        "question": "Who discovered the first antibiotic drug?",
        "options": ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Albert Einstein"],
        "answer": "Alexander Fleming",
        "tag": "Science"
    },
    {
        "question": "In which year did the French Revolution begin?",
        "options": ["1776", "1789", "1804", "1815"],
        "answer": "1789",
        "tag": "History"
    },
    {
        "question": "What is the chemical formula for table salt?",
        "options": ["NaOH", "HCl", "NaCl", "H2O"],
        "answer": "NaCl",
        "tag": "Science"
    },
    {
        "question": "Who painted the 'Mona Lisa'?",
        "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        "answer": "Leonardo da Vinci",
        "tag": "Art"
    },
    {
        "question": "What is the capital of Australia?",
        "options": ["Melbourne", "Sydney", "Canberra", "Perth"],
        "answer": "Canberra",
        "tag": "Geography"
    },
    {
        "question": "Who proposed the theory of relativity?",
        "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        "answer": "Albert Einstein",
        "tag": "Physics"
    },
    {
        "question": "Which gas is most abundant in the Earth's atmosphere?",
        "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        "answer": "Nitrogen",
        "tag": "Science"
    },
    {
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Fyodor Dostoevsky"],
        "answer": "William Shakespeare",
        "tag": "Literature"
    },
    {
        "question": "What is the largest organ in the human body?",
        "options": ["Liver", "Heart", "Brain", "Skin"],
        "answer": "Skin",
        "tag": "Biology"
    },
    {
        "question": "Which element has the chemical symbol 'Fe'?",
        "options": ["Iron", "Gold", "Silver", "Copper"],
        "answer": "Iron",
        "tag": "Chemistry"
    },
    {
        "question": "Who wrote the 'Communist Manifesto'?",
        "options": ["Karl Marx and Friedrich Engels", "Adam Smith", "John Locke", "Jean-Jacques Rousseau"],
        "answer": "Karl Marx and Friedrich Engels",
        "tag": "Philosophy"
    },
    {
        "question": "What is the formula for calculating the area of a circle?",
        "options": ["πr", "2πr", "πr^2", "2πr^2"],
        "answer": "πr^2",
        "tag": "Mathematics"
    },
    {
        "question": "Which planet is known as the 'Morning Star'?",
        "options": ["Venus", "Mars", "Jupiter", "Mercury"],
        "answer": "Venus",
        "tag": "Astronomy"
    },
    {
        "question": "Who is known as the 'Queen of Soul'?",
        "options": ["Aretha Franklin", "Whitney Houston", "Mariah Carey", "Beyoncé"],
        "answer": "Aretha Franklin",
        "tag": "Music"
    },
    {
        "question": "What is the capital of Argentina?",
        "options": ["Buenos Aires", "Rio de Janeiro", "Santiago", "Lima"],
        "answer": "Buenos Aires",
        "tag": "Geography"
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "G", "Go"],
        "answer": "Au",
        "tag": "Chemistry"
    },
    {
        "question": "Who wrote '1984'?",
        "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
        "answer": "George Orwell",
        "tag": "Literature"
    },
    {
        "question": "What is the formula for calculating the volume of a cylinder?",
        "options": ["πr^2h", "2πrh", "πr", "2πr"],
        "answer": "πr^2h",
        "tag": "Mathematics"
    },
    {
        "question": "Which scientist first proposed the heliocentric theory?",
        "options": ["Copernicus", "Galileo", "Newton", "Einstein"],
        "answer": "Copernicus",
        "tag": "Science"
    }
]


const renderQuestion = (qobj, index) => {
}

const submitTest = () => {
}

export default function Test() {
    let navigate = useNavigate()

    const [userAnswers, setUserAnswers] = useState({});

    const handleAnswerChange = (questionIndex, answer) => {
        setUserAnswers({ ...userAnswers, [questionIndex]: answer });
    };

    const handleSubmit = () => {

        // let score = 10
        // navigate("/Result", { state: { score: score } });

        if (!isAllQuestionsAnswered()) {
            alert("Please answer all the questions!!");
            return;
        }

        let taglist = []
        let score = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                score++;
                taglist.push(question.tag);
            }
        });

        navigate("/Result", { state: { score: score, taglist: taglist } });
    };

    const isAllQuestionsAnswered = () => {
        return Object.keys(userAnswers).length === questions.length;
    };

    return (
        <div class="test-container">
            {questions.map((question, index) => (
                <div class="question-card">
                    <FormControl component="fieldset">
                        <span class="question-title"><b>{index + 1}</b>. {question.question}</span>
                        <RadioGroup
                            aria-label={`question${index}`}
                            name={`question${index}`}
                            value={userAnswers[index] || ''}
                            onChange={(event) => handleAnswerChange(index, event.target.value)}>
                            {question.options.map((option, optionIndex) => (
                                <FormControlLabel
                                    key={optionIndex}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            ))}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}
