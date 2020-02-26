import React from 'react';
import './styles/UserForm.css'

const UserForm = ({form, onChange, onSubmit, onUpdate}) =>(
    <div className="container-user">
        <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-10 formuser">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <h5>Email</h5>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        name="email"
                        onChange={onChange}
                        value={form.email}
                        //required
                    />
                </div>
                <div className="form-group">
                    <h5>Full Name</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Full name" 
                        name="name"
                        onChange={onChange}
                        value={form.name}
                        //required
                    />
                    <p className="p">*Write First name and Last name</p>
                </div>
                <div className="form-group">
                    <h5>Upload avatar</h5>
                    <input 
                    type="file"
                    name="avatar"
                    onChange={onChange}
                    value={form.avatar}
                    />
                </div>
                <div className="form-group btna">
                    <button 
                    className="btn btn-success buttonb"
                    name="create"
                    type="submit">
                        Create
                    </button>
                    <button 
                    className="btn btn-info buttonb"
                    name="update"
                    type="submit"
                    onClick={onUpdate}>
                        Update
                    </button>
                </div>
            </form>
        </div>
        <div className="col-md-1"/>
        </div>
    </div>
)

export default UserForm