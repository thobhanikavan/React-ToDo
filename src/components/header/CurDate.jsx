import React from "react";

class CurDate extends React.Component {
    state = {
        date: ""
    };
  
    componentDidMount() {
      this.getCurDate();
    }
  
    getCurDate = () => {
        var date = new Date().toDateString();
      console.log(date);
      this.setState({ date });
    };
  
    render() {
      const { date } = this.state;
  
      return <div className=" text-center ">{date}</div>;
    }
  }
  
  export default CurDate;