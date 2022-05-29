import { Component } from "react";
import './PriorityLevelOption.css'
interface Props {
  proorityLevels: Array<PriorityLevelObj>;
}

class PriorityLevelOption extends Component<Props> {
  getOptions = () => {
    const options = this.props.proorityLevels.map((level) => {
      return (
        <option className={`level-${level.level}`} key={level.PriorityLevelName}>
          {level.level}: {level.PriorityLevelName}
        </option>
      );
    });
    const firstOption = <option key={'first option'}>--Please Select a Priority--</option>
    return [firstOption].concat(options);
  };

  render() {
    return <select>{this.getOptions()}</select>;
  }
}

export default PriorityLevelOption;
