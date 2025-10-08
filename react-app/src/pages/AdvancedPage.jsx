import React from "react";
import InputField from "../components/InputField/InputField";
import Checkbox from "../components/Checkbox/Checkbox";
import Radio from "../components/Radio/Radio";
import ColorPicker from "../components/ColoredNigger/ColorPicker";
import DatePicker from "../components/DatePicker/DatePicker";
import NumberInput from "../components/NumberInput/NumberInput";
import Select from "../components/Select/Select"
import Range from "../components/Range/Range";
import MultiLineInput from "../components/MultiLineInput/MultiLineInput";

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

        hidden: "sample_hidden",

        number: 42,

        slide: 50,

        select: "",

        multiLineInput: ""
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

    handleNumberChange = num =>{
        console.log(num)
        this.setState({number: num})
    }

    handleSelected = value =>{
        console.log(value)
        this.setState({select: value})
    }

    handleSlide = value =>{
        this.setState({slide: value})
    }

    handleMultiLineInputChange = value =>{
        this.setState({multiLineInput: value})
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
                        <NumberInput id="adv-number" label="Number:" min="0" max="100" defaultValue={this.state.num} onNumberChange={this.handleNumberChange}/>
                    </div>
                    <div className="form-row range-bar">
                        <Range id="adv-range" label="Range:" min={0} max={100} defaultValue={this.state.slide} onSlideChange={this.handleSlide}/>
                    </div>
                    <div className="form-row">
                        <Select id="adv-select" values={new Map([ ["foo", "Foo"],["baz", "Baz"],["bar", "Bar"] ])} onSelect={this.handleSelected}/>
                    </div>
                    <div className="form-row">
                        <MultiLineInput id="adv-textarea" label="Textarea:" placeholder="Comments..." onMultiLineInputChange={this.handleMultiLineInputChange}/>
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