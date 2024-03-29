import React, { Component } from 'react';

import Modal from '../../components/Burger/UI/Modal/Modal';


const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount () {//cwm(will be called befre child comp renders,but cdm will excute after child comp renders) used to run whenever this comp created , else can use constructor. but cdm will be execute only after BurgeBUilder compdidupdtae runs
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);//
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <React.Fragment>
                    <Modal 
                        show={this.state.error}
                        modalclosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
}

export default withErrorHandler;