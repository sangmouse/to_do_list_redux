import React,{Component} from 'react';

class TaskForm extends Component {

    
    
    
    render() {
        

        return (
            <div className="panel panel-warning">
                    <div className="panel-heading">
                        <button >
                           Thêm công việc
                        </button>
                    </div>
                    <div className="panel-body">
                        <form >
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                
                                
                                />
                            </div>
                            <label>Trạng Thái :</label> 
                            <select 
                            className="form-control" 
                            required="required"
                            name="status"
                            
                            >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Lưu lại</button>&nbsp;
                                <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.onReset}
                                >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default TaskForm 