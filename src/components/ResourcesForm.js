import React from 'react';
import './styles/UserForm.css'

const ResourcesForm = ({form, onChange, onSubmit, onUpdate}) =>(
    <div className="container-user">
        <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-10 formuser">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <h5>Name</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        name="email"
                        onChange={onChange}
                        value={form.email}
                        //required
                    />
                </div>
                <div className="form-group">
                    <h5>Year</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Full name" 
                        name="name"
                        onChange={onChange}
                        value={form.name}
                        //required
                    />
                </div>
                <div className="form-group">
                    <h5>Color</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Color" 
                        name="color"
                        onChange={onChange}
                        value={form.name}
                        //required
                    />
                </div>
                <div className="form-group">
                    <h5>Pantone</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Pantone" 
                        name="pantone"
                        onChange={onChange}
                        value={form.name}
                        //required
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

export default ResourcesForm