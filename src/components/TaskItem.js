import React,{Component} from 'react';

class TaskItem extends Component {

    
    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    <span className='label label-success'
                    onClick={this.onUpdateStatus}
                    >
                    true
                    </span>
                </td>
                <td className="text-center">
                    <button 
                    type="button" 
                    className="btn btn-warning"
                    
                    >
                        Sửa
                    </button>
                    &nbsp;
                    <button 
                    type="button" 
                    className="btn btn-danger"
                    
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem