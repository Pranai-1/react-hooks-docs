import "./App.css"
import { FeedbackWidget } from "feedback.io-widget"
export default function Home(){
    return(
        <div>
           
            <div className=" w-screen mt-10">
            <FeedbackWidget pageName="slider" spaceName="Feedback.io"/>
            </div>
          
        </div>
    )
}