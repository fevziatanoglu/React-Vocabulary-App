import "./HomePage.css";

import { AiFillGithub } from "react-icons/ai"

function HomePage() {

    return (
        <main>

            <div className="left-div">

                <h1>Welcome To My Vocabulary App</h1>
                <p>
                    In this app , you can add your words , and them meanings (by add vocabulary).
                    Then you test yourself by this ap (in test vocabulary).
                    After test you can see which words you know or not.
                    Also you can see which words you need to study or you known well.
                </p>

                <div className="btns-div">
                    <a href="addVocabulary" className="vocabulary-btn">ADD YOUR VOCABULARY</a>
                    <a href="testPage" className="test-btn">TEST YOUR SELF </a>
                </div>

                <div className="git-div">
                    
                    <a href="" onClick={(e) => { window.location.href = "https://github.com/fevziatanoglu/React-VocabularyAPP"; }}>
                        <AiFillGithub />
                    </a>

                    <p>If you want to source codes go my github account !</p>
                </div>
            </div>



            <div className="right-div">
                <div className="card card1">

                    <a href="#">
                        CREATE
                        YOUR
                        VOCABULARY
                        LIST
                    </a>

                </div>

                <div className="card card2">
                    <a href="#">
                        STUDY YOUR VOCABULARY
                    </a>

                </div>

                <div className="card card3">
                    <a href="#">
                        TEST YOURSELF
                    </a>
                </div>

            </div>
        </main>
    )

}

export default HomePage;