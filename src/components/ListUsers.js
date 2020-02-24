import React, {Fragment} from 'react';
import Card from './CardUser';

const ListUsers = ({users}) =>(
    <Fragment>
        {users.map((users) =>(
            <Card 
                key={users.id}
                {...users}
            />
        ))}
    </Fragment>
)

export default ListUsers