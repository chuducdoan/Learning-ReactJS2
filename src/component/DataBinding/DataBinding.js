import {Component} from 'react';

class DataBinding extends Component {
    
    // Tao mot thuoc tinh
    name = 'Chu Duc Doan';

    student = {
        name: 'Song le',
        age: 20
    }

    // Binding phuong thuc (ham cua lop doi tuong)
    // Tat ca ham render deu phai tra ve component (JSX)
    renderImage = () => {
        return <img src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='image' />
    }

    renderInfoCovid = () => {
        const virus = {
            id: 'Covid-19',
            name: 'corona',
            alias: 'SARs-CoV-2',
        }
        return (
            <div className="card" style={{"width": "18rem"}}>
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{virus.name}</h5>
                    <p className="card-text">{virus.alias}</p>
                    <a className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }

    render() { 

        const school = 'Uneti';

        return ( 
            <div className='container-fluid'>
                <h1>Hello {this.name} - {school}</h1>
                <br/>
                <h1>Hello {this.student.name} - {this.student.age}</h1>
                <h3>Binding function</h3>
                <div className='row'>
                    <div className='col-3'>
                        {this.renderInfoCovid()}
                    </div>
                </div>
            </div>

        );
    }
}
 
export default DataBinding;