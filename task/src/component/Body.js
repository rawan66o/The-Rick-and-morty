import './Body.css'
import axios from "axios";
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaSearchengin } from 'react-icons/fa';

import image1 from '../../src/418.jpeg';
import image2 from '../../src/143.jpeg';
import image3 from '../../src/424.jpeg';
import image4 from '../../src/727.jpeg';
import image6 from '../../src/727.jpeg';
import React, { useEffect, useState } from "react";


let index = 1
const generateArray =
    (aroundNumber) => [...Array(10).keys()].map(i => i + aroundNumber);
function Body() {
    const [count, setCount] = useState(1);
    const [posts, setPosts] = useState([]);
    const [index, setIndex] = useState(1);
    const [value, setValue] = useState('');
    const [selectedOptions, setSelectedOptons] = useState("");
    const callApi = (searchTerm) => {

        axios.get(`https://rickandmortyapi.com/api/character/?page=${count}&name=${value}&status=${selectedOptions}`).then((res) => {
            console.log(res, 'res');

            setPosts(res.data.results);

        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        callApi()
    }, [count, selectedOptions, value]);

    console.log('count', count)

    const onchange = (event) => {
        setValue(event.target.value);

    }

    const onSearch = (searchTerm) => {
        callApi()
    }



    const onSel = (event) => {
        console.log('event', event.target.value)
        setSelectedOptons(event.target.value)



    }
    const onSelect = (selec) => {
        console.log('Hellp', selec)
        callApi()
    }
    useEffect(() => {
        console.log("lklk");
    })
    const[typingTimout,setTypingTimout]=useState("")

    function handleInput(e) {
        const text =  e.target.value;
        clearTimeout(typingTimout);
     const Timeout =  setTimeout(() => {


                
        }, 1000);
    }
    return (


  
        < div className='body' >
            <div >
                <select className='select' onChange={(selectedOptions) => onSel(selectedOptions)} >

                    <option className='option1' selectedOptions='Dead'>Dead</option>
                    <option className='option2' selectedOptions='Alive'>Alive</option>
                    <option className='option3' selectedOptions='Unknown'>Unknown</option>
            
                </select>
            </div>
            <div className='input'>
                <FaSearchengin className='icon' />
                <input className='search' type="search" name=" " placeholder=' Search ' value={value} onChange={onchange} />
                <button className='buton' onClick={() => onSearch(value)}>Search</button>
            </div>
            <div className='container'>

 
            </div>
            <div className='container'>
                {posts.map((pos) => (
                    <div className='box'>
                        <img src={pos.image} />
                        <div className='content'>
                            <h2>{pos.name}</h2>
                            <span className='status'>
                                <span className='status-icon'>
                                </span>

                                {pos.status}
                            </span>
                            <h3>First seen in </h3>
                            <p className='p1'>Anatomy Park</p>
                            <p className='pp' >Big Trouble in Little Sanchez</p>



                        </div>

                    </div>

                ))}
            </div >



            <div className='wrapper'>
                <FaAngleLeft onClick={
                    function (event) {
                        setCount(index - 1 < 1 ? 1 : index - 1);
                        setIndex(index - 1 < 1 ? 1 : index - 1);
                    }
                } />

                {
                    generateArray(index + 8 >= 42 ? 42 - 10 : index).map((pos) => (
                        <ul>
                            <li className='btn' ><i className="fas fa-angle-left"></i></li>
                            <li onClick={

                                function (event) {
                                    setCount(pos);
                                    setIndex(pos);

                                }
                            } className="numb" ><span>{pos}</span></li>
                            <li className='btn'><i className="fas fa-angle-right"></i></li>

                        </ul>

                    ))}

                <FaAngleRight onClick={
                    function (event) {
                        setCount(index + 1 >= 42 ? 41 : index + 1);
                        setIndex(index + 1 >= 42 ? 41 : index + 1);
                    }
                }

                />
            </div>
            <div>

            </div>

        </div >


    )


}
export default Body;

