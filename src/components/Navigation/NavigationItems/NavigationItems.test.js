import React from 'react'
import {configure,shallow} from 'enzyme'

import Adapter from 'enzyme-adapter-react-16' 
import NavigationItems from './NavigationItems'
import NavigationItem from './NavgationItem/NavigationItem.js'

configure({adapter:new Adapter()}) 
describe('</NavigationItems/>',()=>{
    let wrapper
    beforeEach(()=>{
         wrapper=shallow(<NavigationItems/>);
    })
    it('should render two </NavigationItems/> if not authenticated',()=>{
      
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    }
        
    )

    it('should render three </NavigationItems/> if  authenticated',()=>{
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    }
        
    )
    it('should render a logout',()=>{
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    }
})