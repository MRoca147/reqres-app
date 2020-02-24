import React, {Fragment} from 'react';
import Card from './CardResources';

const ListResources = ({resources}) =>(
    <Fragment>
        <div className="row">
            {resources.map((resources) =>(
                <div className="col-sm-4"
                key={resources.id}>
                <Card 
                    {...resources}
                />
                </div>
            ))}
        </div>
    </Fragment>
)

export default ListResources