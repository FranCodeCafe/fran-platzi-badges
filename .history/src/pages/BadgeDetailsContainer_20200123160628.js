import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';

//CONTAINER COMPONENT
class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
              )
            this.setState({loading: false, data: data})

        }catch(error){
            this.setState({loading: false, error: error})
        }
    }


    render(){
        if (this.state.loading){
            return <PageLoading />
        }

        if (this.state.error){
            return <PageError error={this.state.error} />
        }

        const badge = this.state.data;

        return (
            <BadgeDetails onCloseModal={props.handleCloseModal} badge={this.state.data} />
        );
    }
}



export default BadgeDetailsContainer;