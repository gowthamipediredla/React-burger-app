import React from 'react'
import Auxilary from '../../hoc/Auxilary'
import class1 from './Layout.css'
const layout =(props)=>(
    <Auxilary>
    <div>Toolbar, sidedrawer,backdrop</div>
    <main className={class1.Content}>
    {props.children}
    </main>
    </Auxilary>
)

export default layout