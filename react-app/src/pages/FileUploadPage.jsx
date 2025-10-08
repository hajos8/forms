import React from "react";
export default class FileUploadPage extends React.Component {
    state = {
        selectedFile: [],
        responseMessage: ''
    }

    handleSubmit = e =>{
        e.preventDefault()

        console.log(this.state)
        
        if(!this.state.selectedFile || this.state.selectedFile.length === 0){
            console.warn('Please upload a file')
            return null
        }

        const formData = new FormData()
        this.state.selectedFile.forEach(file =>{
            formData.append("file", file)
        })

        fetch("http://localhost:3333/file-upload", {
            method: 'POST',
            body: formData, 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            console.log('Upload successful:', data)
            alert(`Successfully uploaded ${data.files.length} file(s): ${data.files.join(', ')}`)
            this.setState({ selectedFile: [], responseMessage: 'Upload successful!' }) // Clear selected files after successful upload
        })
        .catch(error => {
            console.error('Upload failed:', error)
            alert('File upload failed: ' + error.message)
        })
    }

    handleFileUpload = e =>{
        this.setState({selectedFile: [...this.state.selectedFile, ...Array.from(e.target.files)]})
    }

    render() {
        return (
            <div id="content-file" className="tab-content active">
                <h2>File Upload</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fileInput">Choose file to upload:</label>
                    <input type="file" id="fileInput" name="fileInput" multiple onChange={this.handleFileUpload}/>
                    
                    {this.state.selectedFile.length > 0 && (
                        <div style={{ margin: '10px 0' }}>
                            <strong>Selected files:</strong>
                            <ul>
                                {this.state.selectedFile.map((file, index) => (
                                    <li key={index}>{file.name} ({(file.size / 1024).toFixed(2)} KB)</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    <button type="submit" disabled={this.state.selectedFile.length === 0}>
                        Upload {this.state.selectedFile.length > 0 ? `(${this.state.selectedFile.length} files)` : ''}
                    </button>
                </form>
            </div>
        )
    }
}