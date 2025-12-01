import { useRef, useState } from 'react'
import './Editor.css'

const Editor = ({onCreate}) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    //엔터 누르면 입력되는 이벤트 핸들러
    const onKeydown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("")
    }

    return <div className="editor">
        <input ref={contentRef} value={content} onKeyDown={onKeydown} onChange={onChangeContent} placeholder="새로운 Todo..." />
        <button onClick={onSubmit}>추가</button>
    </div>
}

export default Editor