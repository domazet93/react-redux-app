import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptors =  axios.interceptors.response.use(null, error => {
        this.setState({ error });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount() {
      console.log("will unmount", this.reqInterceptors, this.resInterceptors)
      axios.interceptors.request.eject(this.reqInterceptors)
      axios.interceptors.response.eject(this.resInterceptors)
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
