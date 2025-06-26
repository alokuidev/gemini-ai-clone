import { PromptContext } from "./Context";
import main from "../config/gemini";


const PromptProvider = (props) => {

    const onSent = async(prompt) => {       
        const response = await main(prompt);
        console.log(response);
    }
    const  promptValue = {
        prompt: "Hello, how can I assist you today?",
        onSent,
    }
    return(
        <PromptContext.Provider value={promptValue}>
            {props.children}
        </PromptContext.Provider>
    )
}

export default PromptProvider;