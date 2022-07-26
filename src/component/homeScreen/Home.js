import React from "react"
import Header from "./Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import {TOP_DOWNLOADS} from './constats'
import NoteItem from "./noteComponent/NoteItem";
import './global.css'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <div className="mb-3 mt-3 p-3">
                        <h1 className="section-name">Top Downloads </h1> 
                        <div className="block">
                            {TOP_DOWNLOADS.map((eachBook) => (
                                <NoteItem bookDetails={eachBook } /> 
                            ))}
                        </div>
                    </div>
                    <div className="mb-3 mt-3 p-3">
                        <h1 className="section-name">Engineering and medical </h1> 
                        <div className="block">
                            {TOP_DOWNLOADS.map((eachBook) => (
                                <NoteItem bookDetails={eachBook } /> 
                            ))}
                        </div>
                    </div>
                    <div className="mb-3 mt-3 p-3">
                        <h1 className="section-name">Other Govt Exams </h1> 
                        <div className="block">
                            {TOP_DOWNLOADS.map((eachBook) => (
                                <NoteItem bookDetails={eachBook } /> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home