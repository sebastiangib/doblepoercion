import { History } from "../History/History"
import { Footer } from "../shared/Footer/Footer"
import './Home.css'

export function Home(){
    return(
        <>
        <section className="banner"></section>
        <section><History/></section>
        <section><Footer/></section>
        </>
    )
}