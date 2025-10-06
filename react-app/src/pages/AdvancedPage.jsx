import React from "react";
import InputField from "../components/InputField/InputField";
import Checkbox from "../components/Checkbox/Checkbox";
import Radio from "../components/Radio/Radio";
import ColorPicker from "../components/ColoredNigger/ColorPicker";
import DatePicker from "../components/DatePicker/DatePicker";

export default class AdvancedPage extends React.Component {
    state = {
        advText: '',
        advEmail: '',
        advTel: '',

        "adv-checkbox1": false,
        "adv-checkbox2": false,

        radioChecked: "",

        color: "",

        month: "",
        week: "",
        date: "",
        time: "",
        datetime: "",

        hidden: "sample_hidden"
    }

    handleAdvTextValueChange = e =>{
        this.setState({advText: e}) //TODO validation
    }

    handleAdvEmailValueChange = e =>{
        this.setState({advEmail: e}) //TODO validation
    }

    handleAdvTelValueChange = e =>{
        let result ='error in tel: ' +e
        let tel = e.replaceAll(" ", "").substr(1,e.length)
        console.log(tel)
        if(e[0]=='+' && !isNaN(Number(tel))) result = e
        this.setState({advTel: result}) //TODO validation
    }

    handleCheckToggle = e =>{
        const newState = {...this.state}
        newState[e] = !this.state.e
        this.setState(newState)
    }

    handleRadioChecked = radioId =>{
        console.log(radioId)
        this.setState({radioChecked: radioId})
    }

    handleOnColorPicked = color =>{
        console.log(color)
        this.setState({color: color})
    }

    handleMonthPicked = month =>{
        console.log(month)
        this.setState({month: month})
    }

    handleWeekPicked = week =>{
        console.log(week)
        this.setState({week: week})
    }

    handleDatePicked = date =>{
        console.log(date)
        this.setState({date: date})
    }

    handleTimePicked = time =>{
        console.log(time)
        this.setState({time: time})
    }

    handleDatetimePicked = datetime =>{
        console.log(datetime)
        this.setState({datetime: datetime})
    }

    render() {
        return (
            <div id="content-advanced" className="tab-content active">
                <h2>Advanced Form Elements</h2>
                <form autoComplete="on">
                    <div className="form-row">
                        <InputField
                            type="text"
                            name="adv-text"
                            label="Text:"
                            placeholder="Text input sample"
                            onValueChange={this.handleAdvTextValueChange}
                        />
                    </div>
                    <div className="form-row">
                        <label>Checkbox:</label>
                        <div className="checkbox-group">
                            <Checkbox
                                name="adv-checkbox1"
                                label="Item 1"
                                onCheckToggle={toggledCheckBox => this.handleCheckToggle(toggledCheckBox)}
                            />
                            <Checkbox
                                name="adv-checkbox2"
                                label="Item 2"
                                onCheckToggle={toggledCheckBox => this.handleCheckToggle(toggledCheckBox)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <Radio 
                            name="adv-radio" 
                            ids={["adv-radio1", "adv-radio2", "adv-radio3"]}
                            values={["A", "B", "C"]} 
                            labels={["A", "B", "C"]}
                            onRadioChecked = {this.handleRadioChecked}
                        />
                    </div>
                    <div className="form-row">
                        <ColorPicker onColorPick={this.handleOnColorPicked}/>
                    </div>
                    <div className="form-row">
                        <DatePicker type="month" id="adv-month" label="Month:" onDatePicked={this.handleMonthPicked}/>
                    </div>
                    <div className="form-row">
                        <DatePicker type="week" id="adv-week" label="Week:" onDatePicked={this.handleWeekPicked}/>
                    </div>
                    <div className="form-row">
                        <DatePicker type="date" id="adv-date" label="Date:" onDatePicked={this.handleDatePicked}/>
                    </div>
                    <div className="form-row">
                        <DatePicker type="time" id="adv-time" label="Time:" onDatePicked={this.handleTimePicked}/>
                    </div>
                    <div className="form-row">
                        <DatePicker type="datetime-local" id="adv-datetime" label="Local Datetime:" onDatePicked={this.handleDatetimePicked}/>
                    </div>
                    <div className="form-row">
                        <InputField
                            type="email"
                            name="adv-email"
                            label="Email:"
                            placeholder="example@gmail.com"
                            onValueChange={this.handleAdvEmailValueChange}
                        />
                    </div>
                    <div className="form-row">
                        <InputField
                            type="tel"
                            name="adv-tel"
                            label="Telephone:"
                            placeholder="+36 20 123 4567"
                            onValueChange={this.handleAdvTelValueChange}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-hidden">Hidden value:</label>
                        <input type="hidden" id="adv-hidden" name="adv-hidden" value={this.state["hidden"]} />
                        <span style={{color: "#999"}}>(hidden in UI)</span>
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-number">Number:</label>
                        <input type="number" id="adv-number" name="adv-number" min="0" max="100" step="1" value="42" onChange={()=>{}} />
                    </div>
                    <div className="form-row range-bar">
                        <label htmlFor="adv-range">Range:</label>
                        <input type="range" id="adv-range" name="adv-range" min="0" max="100" step="1" value="50" onInput={()=>{}} />
                        <span id="rangeValue" style={{minWidth:'32px'}}>50</span>
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-select">Select:</label>
                        <select id="adv-select" name="adv-select">
                            <option>--- Choose ---</option>
                            <option value="foo">Foo</option>
                            <option value="bar">Bar</option>
                            <option value="baz">Baz</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-textarea">Textarea:</label>
                        <textarea id="adv-textarea" name="adv-textarea" placeholder="Comments..."></textarea>
                    </div>
                    <div className="button-row">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        )
    }

    componentDidUpdate(prevState, prevProps){
        console.log('state prev next', prevState, this.state)
    }
}