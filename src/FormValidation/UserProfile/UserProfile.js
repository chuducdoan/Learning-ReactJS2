import { Component } from 'react';
import './UserProfile.css';
import Swal from 'sweetalert2';

class UserProfile extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        values: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        errors: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleChangeValue = (event) => {
        let {name, value, type} = event.target;

        let newValue = {...this.state.values, [name]: value};
        let newErrors = {...this.state.errors};

        if (value.trim() === '') {
            newErrors[name] = name + ' is required';
        } else {
            newErrors[name] = '';
        }
        if (type === 'email') {
            const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!re.test(value)) {
                newErrors[name] = name + ' invalid!';
            } else {
                newErrors[name] = '';
            }
        }
        if (name === 'passwordConfirm') {
            if (value !== newValue['password']) {
                newErrors[name] = name + ' invalid!';
            } else {
                newErrors[name] = '';
            }
        }

        this.setState({
            values: newValue,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // xet dieu kien khi submit
        let {values, errors} = this.state;
        // Bien xac dinh form hop le
        let valid = true;
        let profileContent = '';
        for (let key in values) {
            if (values[key] === '') {
                valid = false;
            }
            profileContent += `
                <p class="text-start"> <b>${key}:</b>${values[key]}</p>
            `
        }
        for (let key in errors) {
            if (errors[key] !== '') {
                valid = false;
            }
        }
        if (!valid) {
            alert('Du lieu chua hop le!')
            return ;
        }
        Swal.fire({
            title: 'Your Profile',
            html: profileContent,
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    render() { 
        return ( 
            <div style={{backgroundColor: '#eee', padding: '20px', display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={this.handleSubmit} style={{backgroundColor: '#fff', width: '600px'}} className="text-start">
                    <h1 className='text-center'>User Profile</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <div class="group">      
                                    <input type="text" name='firstName' value={this.state.values.firstName} onChange={this.handleChangeValue} required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>firstName</label>
                                    <span className='text text-danger'>{this.state.errors.firstName}</span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="group">      
                                    <input type="text" name='lastName' value={this.state.values.lastName} onChange={this.handleChangeValue} required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>lastName</label>
                                    <span className='text text-danger'>{this.state.errors.lastName}</span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="group">      
                                    <input type="text" name='username' value={this.state.values.username} onChange={this.handleChangeValue} required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Username</label>
                                    <span className='text text-danger'>{this.state.errors.username}</span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="group">      
                                    <input type="email" name='email' value={this.state.values.email} onChange={this.handleChangeValue} required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Email</label>
                                    <span className='text text-danger'>{this.state.errors.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="group">      
                                    <input type="password" name='password' value={this.state.values.password} onChange={this.handleChangeValue} required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Password</label>
                                    <span className='text text-danger'>{this.state.errors.password}</span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="group">      
                                    <input type="password" name='passwordConfirm' value={this.state.values.passwordConfirm} onChange={this.handleChangeValue} required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>lastName</label>
                                    <span className='text text-danger'>{this.state.errors.passwordConfirm}</span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <button className='btn btn-success w-100'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default UserProfile;