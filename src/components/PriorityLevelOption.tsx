import React, { Component } from "react";
import "./PriorityLevelOption.css";
interface Props {
  proorityLevels: Array<PriorityLevelObj>;
  setPriorityLevel: (newLEvel: string) => void;
}

// class PriorityLevelOption extends Component<Props> {

//     onOptionChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
//          console.log(event.target.value);
//          this.props.setPriorityLevel(event.target.value)
//     }

//   getOptions = () => {
//     const options = this.props.proorityLevels.map((level) => {
//       return (
//         <option value={level.level} className={`level-${level.level}`} key={level.PriorityLevelName}>
//           {level.level}: {level.PriorityLevelName}
//         </option>
//       );
//     });
//     return options
//   };

//   render() {
//     return <select onChange={this.onOptionChange}>{this.getOptions()}</select>;
//   }
// }

function PriorityLevelOption(props: Props): React.ReactElement {
  const onOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    props.setPriorityLevel(event.target.value);
  };

  const getOptions = () => {
    const options = props.proorityLevels.map((level) => {
      return (
        <option
          value={level.level}
          className={`level-${level.level}`}
          key={level.PriorityLevelName}
        >
          {level.level}: {level.PriorityLevelName}
        </option>
      );
    });
    return options;
  };

    return <select onChange={onOptionChange}>{getOptions()}</select>;

}

export default PriorityLevelOption;
