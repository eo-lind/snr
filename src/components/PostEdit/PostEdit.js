import { PureComponent } from "react"
import { Editor, OriginalTools } from "react-bootstrap-editor"

export class PostEdit extends PureComponent {
    render() {
        return (
            <Editor
                tools={OriginalTools}
                value="<p>test</p>"
                onChange={console.log}
            />
        )
    }
}
