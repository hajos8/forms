import React from "react";
export default class FileUploadPage extends React.Component {
    state = {
        selectedFile: null
    }

    handleSubmit = e =>{
        e.preventDefault()

        console.log(this.state)
        
        if(!this.state.selectedFile){
            console.warn('Please upload a file')
            return null
        }

        const formData = new formData()
        this.state.selectedFile.forEach(file =>{
            formData.append("file", file)
        })

        fetch("/fileUpload", {
            method: 'POST',
            body: formData, 
        })
        .then(console.log)
        .catch(console.warn)
        .finally( ()=>{} )
    }

    handleFileUpload = e =>{
        this.setState({selectedFile: e.target.files})
    }

    render() {
        return (
            <div id="content-file" className="tab-content active">
                <h2>File Upload</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fileInput">Choose file to upload:</label>
                    <input type="file" id="fileInput" name="fileInput" multiple onChange={this.handleFileUpload}/>
                    <button type="submit">Upload</button>
                </form>
            </div>
        )
    }
}