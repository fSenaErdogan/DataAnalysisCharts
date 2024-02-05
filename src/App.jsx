import Pattern from "./Component/Pattern.jsx";
import Container from "./Component/Container.jsx";
import Card from "./Component/Card.jsx";

function App() {

    return (
        <>
            <div className="w-full h-screen ">
                <Pattern/>
                <Container>
                    <Card className="w-1/3">
abc
                    </Card>
                </Container>

            </div>
        </>
    )
}

export default App
