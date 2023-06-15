import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Register(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';

    const [formError, setFormError] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');

    const [successMsg, setSuccessMsg] = useState('');

    const [registerFormData, setRegisterFormData] = useState({
        "first_name": '',
        "last_name": '',
        "username": '',
        "email": '',
        "mobile": '',
        "password": ''
    });

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        })
    };

    const PATTERN = /\D/g;

    const getInputNumbersValue = (value) => {
        return value.replace(PATTERN, "");
    }

    const handlePhoneInput = (event) => {
        const input = event.target;
        let inputNumbersValue = getInputNumbersValue(input.value);
        let formattedInputValue = "";

        if (!inputNumbersValue) {
            return (input.value = "");
        }

        formattedInputValue = "8"; {/*inputNumbersValue[0]*/}

        if (inputNumbersValue.length > 1) {
            formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }

        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ")" + inputNumbersValue.substring(4, 7);
        }

        if (inputNumbersValue.length >= 8) {
            formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }

        if (inputNumbersValue.length >= 10) {
            formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
        input.value = formattedInputValue;
    
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: input.value
        })
      };

    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('first_name', registerFormData.first_name);
        formData.append('last_name', registerFormData.last_name);
        formData.append('username', registerFormData.username);
        formData.append('email', registerFormData.email);
        formData.append('mobile', registerFormData.mobile.replace(/\D/g,''));
        formData.append('password', registerFormData.password);

        axios.post(baseUrl + 'customer/register', formData)
        .then(function(response) {
            if (response.data.bool === false) {
                setFormError(true);
                setErrorMsg(response.data.msg);
            }
            else {
                setRegisterFormData({
                    "first_name": '',
                    "last_name": '',
                    "username": '',
                    "email": '',
                    "mobile": '',
                    "password": ''
                });
                setFormError(false);
                setSuccessMsg(response.data.msg);
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    };

    const buttonEnable = (registerFormData.first_name !== '') && (registerFormData.last_name !== '') && (registerFormData.username !== '') && (registerFormData.email !== '') && (registerFormData.mobile !== '') && (registerFormData.password !== '')

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card">
                        <h4 className="card-header">Регистрация</h4>
                        <div className="card-body">
                            {errorMsg &&
                                <p className="text-danger">{errorMsg}</p>
                            }
                            {successMsg &&
                                <p className="text-success">{successMsg}</p>
                            }
                            <form>
                            <div className="mb-3">
                                <label for="firstName" className="form-label">Имя</label>
                                <input type="text" name="first_name" value={registerFormData.first_name} onChange={inputHandler} className="form-control" id="firstName"/>
                            </div>
                            <div className="mb-3">
                                <label for="lastName" className="form-label">Фамилия</label>
                                <input type="text" name="last_name" value={registerFormData.last_name} onChange={inputHandler} className="form-control" id="lastName"/>
                            </div>
                            <div className="mb-3">
                                <label for="username" className="form-label">Имя пользователя</label>
                                <input type="text" name="username" value={registerFormData.username} onChange={inputHandler} className="form-control" id="username"/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" name="email" value={registerFormData.email} onChange={inputHandler} className="form-control" id="email"/>
                            </div>
                            <div className="mb-3">
                                <label for="mobile" className="form-label">Телефон</label>
                                <input type="tel" name="mobile" placeholder="0(000)000-00-00" autoComplete="cc-number" inputMode="numeric" value={registerFormData.mobile} onChange={handlePhoneInput} className="form-control" id="mobile"/>
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Пароль</label>
                                <input type="password" name="password" value={registerFormData.password} onChange={inputHandler} className="form-control" id="pwd"/>
                            </div>
                            <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
